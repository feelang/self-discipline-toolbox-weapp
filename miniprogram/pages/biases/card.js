// pages/biases/card.ts
import biases from '../../data/biases.js';

Page({
  currentIndex: 0,
  /**
   * 页面的初始数据
   */
  data: {
    list: biases,
    index: -1,
    label2color: {
      "Memory": "#DE564F",
      "Social": "#135671",
      "Learning": "#A6B949",
      "Belief": "#1C8B95",
      "Money": "#28AD8D",
      "Politics": "#F9B62A",
    }
  },

  swiperChange(e) {
    this.currentIndex = e.detail.current
    console.log('current:' + this.currentIndex)
    wx.setNavigationBarTitle({
      title: `No.${this.currentIndex + 1}`,
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
    console.log(options)
    if (options.index) {
      this.currentIndex = parseInt(options.index)
    } else {
      const currentIndexStr = wx.getStorageSync('currentIndex')
      if (currentIndexStr) {
        this.currentIndex = parseInt(currentIndexStr)
      } else {
        this.currentIndex = 0
      }
    }

    this.setData({
      index: this.currentIndex
    })
    wx.setNavigationBarTitle({
      title: `No.${this.currentIndex + 1}`,
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
    wx.setStorageSync('currentIndex', this.currentIndex)
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
    console.log(`index = ${this.data.index}`)
    const {list, index} = this.data
    return {
      title: list[index].title,
      path: `/pages/biases/card?index=${index}`
    }
  }
})