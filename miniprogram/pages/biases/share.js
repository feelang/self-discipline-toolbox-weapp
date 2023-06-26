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
    const biase = JSON.parse(decodeURIComponent(options.biase))
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

        const { title, alias, desc, illustration, ext, labels } = this.data.biase

        let y = 80
        // Draw the title
        ctx.fillStyle = 'black'
        ctx.font = 'bold 30px sans-serif'
        let text = ctx.measureText(title)
        const lines = this._drawMultipleLines(ctx, title, y, 100, width, 35)

        y += lines.length > 1 ? 80 : 35

        // Draw the alias
        if (!!alias) {
          ctx.fillStyle = 'gray'
          ctx.font = '20px sans-serif'
          const theAlias = `(${alias})`
          const metrics = ctx.measureText(theAlias)
          ctx.fillText(theAlias, parseInt((width - metrics.width)) / 2, y)
        }

        // Draw the description
        ctx.fillStyle = 'black'
        ctx.font = 'italic 16px sans-serif'
        const descLines = this._splitTextToLines(ctx, width - 120, desc)
        y += !!alias ? 35 : 25
        this._drawLines(ctx, descLines, y, width, 25)
        y += 25 * descLines.length

        // Adjust the size of illustration accroding to the line count of ext
        const extLines = this._splitTextToLines(ctx, width - 130, ext)
        const totalLineCount = descLines.length + extLines.length

        // Draw the illustration
        let image = canvas.createImage()
        const imageSrc = `../../images/${illustration}`
        const imageWidth = totalLineCount >= 10 ? 50 : totalLineCount >= 8 ? 60 : 100
        const imageHeight = imageWidth
        const dy = y
        image.src = imageSrc
        image.onload = () => {
          ctx.drawImage(image, (width - imageWidth) / 2, dy, imageWidth, imageHeight)
        }

        // Draw the ext
        ctx.font = 'italic 16px sans-serif'
        ctx.fillStyle = 'gray'
        y += imageHeight + 25
        this._drawLines(ctx, extLines, y, width, totalLineCount > 8 ? 20 : 25)

        // Draw the qrcode image
        const qrCodeImgSize = 80
        const verticalMargin = 10;
        const horizontalMargin = 30

        y = height - qrCodeImgSize - verticalMargin * 2
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
          ctx.drawImage(qrImg, horizontalMargin,
            height - qrCodeImgSize - verticalMargin, qrImgWidth, qrImgWidth)
        }

        const appName = 'SELF DISCIPLINE'
        ctx.font = 'bold 14px sans-serif'
        ctx.fillStyle = '#374550'
        let metrics = ctx.measureText(appName)
        let textWidth = metrics.width
        ctx.fillText(appName, width - horizontalMargin - textWidth,
          height - verticalMargin - qrCodeImgSize / 2 - 5)


        const tagline = '50 COGNITIVE BIASES'
        ctx.font = '12px sans-serif'
        ctx.fillStyle = '#374550'
        metrics = ctx.measureText(tagline)
        textWidth = metrics.width
        ctx.fillText(tagline, width - horizontalMargin - textWidth,
          height - verticalMargin - qrCodeImgSize / 2 + 12)
      })
  },

  _drawMultipleLines(ctx, text, yOffset, xOffset, canvasWidth, lineHeight = 25) {
    const lines = this._splitTextToLines(ctx, canvasWidth - xOffset, text)
    return this._drawLines(ctx, lines, yOffset, canvasWidth, lineHeight)
  },

  _drawLines(ctx, lines, yOffset, canvasWidth, lineHeight) {
    let height = 0
    lines.forEach((line, idx) => {
      let text = line.join(' ')
      let textWidth = ctx.measureText(text).width
      height = yOffset + lineHeight * idx
      ctx.fillText(text, parseInt((canvasWidth - textWidth) / 2), height)
    })
    return lines
  },

  _splitTextToLines(ctx, maxWidth, text) {
    let words = text.split(' ')
    let totalWidth = 0
    let lineIndex = 0
    let lineWords = []
    const lines = []
    words.forEach(word => {
      const wordWidth = ctx.measureText(word).width
      totalWidth = totalWidth + wordWidth
      if (totalWidth >= maxWidth) {
        totalWidth = 0
        lines[lineIndex] = lineWords
        lineIndex++
        lineWords = [word]
      } else {
        lineWords.push(word)
      }
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
    wx.showLoading({ title: 'Saving...' })
    wx.saveImageToPhotosAlbum({
      filePath: url,
      success: (res) => {
        wx.hideLoading()
        wx.showToast({ icon: 'success', title: 'Saved' })
      },
      fail: (res) => {
        wx.hideLoading()
        // wx.showToast({ icon: 'error', title: 'Failed' })
        wx.showModal({ content: `Failed: ${JSON.stringify(res)}` })
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