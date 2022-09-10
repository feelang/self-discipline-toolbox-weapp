// pages/biase/biase-detail.ts

import { recognitiveBiases } from "../../data/quotes";

Page({

  /**
   * 页面的初始数据
   */
  data: {
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
  onLoad(options: any) {
    let index = options.index;
    let bias = recognitiveBiases[index];

    this.setData({
      bias: bias,
    });
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

  },
})