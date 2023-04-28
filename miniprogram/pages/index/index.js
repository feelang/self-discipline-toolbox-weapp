// index.ts

Page({
  data: {
    list: [
      {
        icon: 'brain',
        title: '',
      },
      {
        icon: 'goal',
        title: '',
      },
      {
        icon: 'bubble',
        title: '',
      },
    ]
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  // 事件处理函数
  onViewEffective() {
    wx.navigateTo({
      url: '../effective/effective',
    });
  },

  onViewBiases() {
    wx.navigateTo({
      url: '../biases/card',
    });
  },

  onViewPrinciples() {
    wx.navigateTo({
      url: '../principle/list',
    });
  },

  onViewBusiness() {
    wx.navigateTo({
      url: '../business/card',
    })
  },

  onView(event) {
  }
})
