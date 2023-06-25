// pages/biases/card.ts
import biases from '../../data/biases.js';

const app = getApp()
Page({
  data: {
    list: biases,
    index: -1,
    label2color: app.globalData.label2color,
  },

  swiperChange(e) {
    const index = e.detail.current
    this.setData({
      index,
    })
    wx.setNavigationBarTitle({
      title: `No.${index + 1}`,
    })
  },

  onShowAll() {
    wx.navigateTo({
      url: '/pages/biases/list',
    })
  },

  onShare() {
    this.selectComponent('#bottomFrame').showFrame();
  },

  onShareToMoments() {
    const theBiase = this.data.list[this.data.index]

    wx.navigateTo({
      url: '/pages/biases/share?biase=' + JSON.stringify(theBiase),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let index = -1
    if (options.index) {
      index = parseInt(options.index)
    } else {
      const currentIndexStr = wx.getStorageSync('currentIndex')
      if (currentIndexStr) {
        index = parseInt(currentIndexStr)
      } else {
        index = 0
      }
    }

    this.setData({
      index,
    })

    wx.setNavigationBarTitle({
      title: `No.${index + 1}`,
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
    wx.setStorageSync('currentIndex', this.data.index)
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
    const { list, index } = this.data
    return {
      title: list[index].title,
      path: `/pages/biases/card?index=${index}`
    }
  }
})