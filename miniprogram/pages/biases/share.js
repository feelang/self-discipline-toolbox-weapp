// pages/biases/share.ts
const app = getApp()

Page({
  canvas: null,

  /**
   * 页面的初始数据
   */
  data: {
    biase: null,
    labelColors: app.globalData.label2color,
  },

  onSave() {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const biase = JSON.parse(options.biase)
    this.setData({
      biase
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  },

  _generatePicture() {
    const query = wx.createSelectorQuery()
    query.select('#myCanvas')
      .fields({ node: true, size: true })
      .exec(res => {
        const canvas = res[0].node
        const width = res[0].width
        const height = res[0].height
        this.canvas = canvas
        const ctx = canvas.getContext('2d')

        const dpr = wx.getSystemInfoSync().pixelRatio
        canvas.width = width * dpr
        canvas.height = height * dpr
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.scale(dpr, dpr)

        const { title, desc, illustration, ext, labels } = this.data.biase

        // Draw the title
        ctx.fillStyle = 'black'
        ctx.font = 'bold 25px Arial'
        let text = ctx.measureText(title)
        if (text.width > width - 40) {
          ctx.font = 'bold 20px Arial'
          text = ctx.measureText(title)
        }
        ctx.fillText(title, parseInt((width - text.width) / 2), 50)

        // Draw the description
        ctx.font = '18px Arial'
        const descLines = this._splitTextToLines(ctx, width - 80, desc)
        let descHeight = 0
        descLines.forEach((line, idx) => {
          let text = line.join(' ')
          let textWidth = ctx.measureText(text).width
          descHeight = 100 + 25 * idx
          ctx.fillText(text, parseInt((width - textWidth) / 2), descHeight)
        })

        // Draw the illustration
        let image = canvas.createImage()
        const imageSrc = `../../images/${illustration}`
        const imageWidth = width / 2
        const imageHeight = imageWidth
        image.src = imageSrc
        image.onload = () => {
          ctx.drawImage(image, (width - imageWidth) / 2, descHeight + 10,
            imageWidth, imageHeight)
        }

        // Draw the ext
        ctx.font = 'italic 16px Arial'
        ctx.fillStyle = 'gray'
        this._drawMultipleLines(ctx, ext, 190 + imageWidth, width)

        // Draw the qrcode image
        const qrCodeImgSize = 80
        const verticalMargin = 10;
        const horizontalMargin = 30

        let y = height - qrCodeImgSize - verticalMargin * 2
        ctx.strokeStyle = '#eee'
        ctx.beginPath()
        ctx.moveTo(horizontalMargin, y)
        ctx.lineTo(width - horizontalMargin, y)
        ctx.stroke()

        let qrImg = canvas.createImage()
        const qrImgSrc = `../../images/qrcode.jpg`
        const qrImgWidth = qrCodeImgSize;
        const qrImgHeight = qrCodeImgSize;
        qrImg.src = qrImgSrc
        qrImg.onload = () => {
          ctx.drawImage(qrImg, horizontalMargin, height - qrCodeImgSize - verticalMargin, qrImgWidth, qrImgWidth)
        }

        const appName = '50 COGNITIVE BIASES'
        ctx.font = 'bold 14px Arial'
        ctx.fillStyle = '#374550'
        const metrics = ctx.measureText(appName)
        const textWidth = metrics.width
        ctx.fillText(appName, width - horizontalMargin - textWidth, height - verticalMargin - qrCodeImgSize / 2 + 5)
      })
  },

  _drawMultipleLines(ctx, text, yOffset, canvasWidth) {
    const lines = this._splitTextToLines(ctx, canvasWidth - 80, text)
    let height = 0
    lines.forEach((line, idx) => {
      let text = line.join(' ')
      let textWidth = ctx.measureText(text).width
      height = yOffset + 25 * idx
      ctx.fillText(text, parseInt((canvasWidth - textWidth) / 2), height)
    })
  },

  _splitTextToLines(ctx, maxWidth, text) {
    let words = text.split(' ')
    let totalWidth = 0
    let lineIndex = 0
    let lineWords = []
    const lines = []
    words.forEach(word => {
      const wordWidth = ctx.measureText(word).width
      totalWidth = totalWidth + wordWidth + 10
      if (totalWidth > maxWidth) {
        totalWidth = 0
        lines[lineIndex] = lineWords
        lineIndex++
        lineWords = []
      }
      lineWords.push(word)
    })
    if (lineWords.length > 0) {
      lines[lineIndex] = lineWords
    }
    return lines
  },

  onSavePicture() {
    let that = this
    setTimeout(() => {
      wx.canvasToTempFilePath({
        canvas: this.canvas,
        success: res => {
          const tempFilePath = res.tempFilePath
          that.shareImage(tempFilePath)
        },
        fail: res => {
          console.log(res)
        }
      })
    }, 100)
  },

  async shareImage(url) {
    let that = this
    // 验证用户是否拥有保存到相册的权限
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.writePhotosAlbum']) {
          // 用户已授权
          that.saveImage(url);
        } else if (res.authSetting['scope.writePhotosAlbum'] !== undefined) {
          // 用户首次进入还未调起权限相关接口
          that.openSetting();
        } else {
          // 用户首次进入
          that.saveImage(url);
        }
      },
      fail: () => {
        wx.showModal({ content: '获取授权信息失败' })
      }
    })
  },

  // 需要授权
  openSetting() {
    wx.showModal({
      title: '提示',
      content: '请先授权同意保存图片到相册',
      confirmText: '确定授权',
      success: res => {
        if (res.confirm) {
          wx.openSetting({
            fail: () => {
              wx.showModal({ content: '打开授权设置页面失败' })
            }
          });
        }
      }
    })
  },

  // 保存图片
  saveImage(url) {
    let that = this
    wx.saveImageToPhotosAlbum({
      filePath: url,
      success: (res) => {
        wx.showModal({ content: '保存成功' })
      },
      fail: (res) => {
        wx.showModal({ content: `保存失败：${JSON.stringify(res)}` })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this._generatePicture()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})