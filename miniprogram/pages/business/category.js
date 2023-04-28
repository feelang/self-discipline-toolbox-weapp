// pages/business/category.ts
import quotes from '../../data/business.js';

const utils = require('./common/utils.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  onSelect(event) {
    const index = event.currentTarget.dataset.index
    console.log('index = ' + index)
    this.setCategory(index)
    wx.navigateBack({ delta: 1 })
  },


  setCategory(index) {
    let list = []
    let category = 'ALL'

    if (index < 0) {
      quotes.forEach(quote => {
        list.concat(utils.buildList(quote))
      })
    } else {
      let theQuote = quotes[index]
      category = theQuote.category
      list = utils.buildList(theQuote)
    }

    let pages = getCurrentPages()
    let prevPage = pages[pages.length - 2]
    prevPage.setData({
      list,
      category,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const list = quotes.map(quote => ({ category: quote.category, desc: quote.desc }))
    this.setData({
      list
    })
    console.log(list)
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