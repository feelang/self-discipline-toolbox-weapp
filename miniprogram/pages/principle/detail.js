// pages/principle/detail.ts
import principle from "../../data/principles";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    part: "",
    index: 0,
    item: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { part, index } = options;
    const items = principle[part];
    const item = items[Number(index) - 1];
    this.setData({
      part,
      index,
      item,
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
    return {
      title: this.data.item.title,
      paht: `pages/biase/biase-detail?part=${this.data.part}&index=${this.data.index}`,
    }
  }
})