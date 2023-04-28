// pages/business/card.ts
import quotes from '../../data/business.js'
const utils = require('./common/utils.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: 'ALL',
    list: []
  },

  onShowCategory() {
    wx.navigateTo({
      url: '/pages/business/category',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // const list = quotes.reduce((acc, cur) => {
    //   return acc.concat(cur.contents);
    // }, [])

    const list = []
    quotes.forEach(quote => {
      const theList = utils.buildList(quote)
      list.push(...theList)
    })

    console.log(list)

    this.setData({
      list,
      category: 'ALL'
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