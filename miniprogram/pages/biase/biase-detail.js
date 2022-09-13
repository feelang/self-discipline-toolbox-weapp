// pages/biase/biase-detail.ts

import { recognitiveBiases } from "../../data/quotes";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    bias: {},
    label2color: {
      "Memory": "#DE564F",
      "Social": "#135671",
      "Learning": "#A6B949",
      "Belief": "#1C8B95",
      "Money": "#28AD8D",
      "Politics": "#F9B62A",
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let index = options.index;
    this._loadDetail(index);
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
    return {
      title: this.data.bias.title,
      paht: `pages/biase/biase-detail?index=${this.data.index}`,
    };
  },

  _loadDetail(index) {
    let bias = recognitiveBiases[index];

    this.setData({
      index: index,
      bias: bias,
    });
  },

  onShowNext() {
    let theIndex = Number(this.data.index) + 1;
    if (theIndex >= recognitiveBiases.length) {
      theIndex = 0;
    }
    this._loadDetail(theIndex);
  },

  onShowPrevious() {
    let theIndex = this.data.index - 1;
    if (theIndex < 0) {
      theIndex = recognitiveBiases.length - 1;
    }
    this._loadDetail(theIndex);
  },
})