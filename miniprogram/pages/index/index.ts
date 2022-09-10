// index.ts

import { recognitiveBiases } from "../../data/quotes";

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
      url: '../biase/biase-list',
    });
  },

  onViewPrinciples() {
    wx.navigateTo({
      url: '../principle/principle',
    });
  }
})
