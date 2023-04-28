import principles from "../../data/principles"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    subMaxLength: 6,
  },

  onShowAll() {
    wx.navigateTo({
      url: '/pages/principle/list',
    })
  },

  swiperChange(e) {
    const idx = e.detail.current
    const item = this.data.list[idx]
    wx.setNavigationBarTitle({
      title: item.topic,
    })
  },

  onViewMore(e) {
    const maxLength = this.data.subMaxLength
    const items = e.currentTarget.dataset.items.slice(maxLength).map((item, index) => `${index + maxLength + 1}. ${item}`)
    wx.showActionSheet({
      itemList: items,
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const list = []

    const life = principles.life
    const contents = life.map(content => ({
      title: content.title,
      subtitles: content.subtitles,
      topic: 'LIFE PRINCIPLE',
    }))
    list.push(...contents)

    const work = principles.work
    work.forEach(item => {
      const contents = item.content.map(content => ({
        title: content.title,
        subtitles: content.subtitles,
        topic: 'WORK PRINCIPLE',
        category: item.category,
      }))
      list.push(...contents)
    })

    this.setData({
      list
    })

    wx.setNavigationBarTitle({
      title: list[0].topic,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

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