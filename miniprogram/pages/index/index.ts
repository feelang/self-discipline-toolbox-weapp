// index.ts

// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    
  },
  // 事件处理函数
  onViewEffective() {
    wx.navigateTo({
      url: '../effective/effective',
    });
  },

  onViewBiases() {
    wx.navigateTo({
      url: '../biases/list',
    });
  },

  onViewPrinciples() {
    wx.navigateTo({
      url: '../principle/principle',
    });
  }
})
