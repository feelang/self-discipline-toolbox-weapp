// app.ts
App({
  globalData: {
    label2color: {
      "Memory": "#DE564F",
      "Social": "#135671",
      "Learning": "#A6B949",
      "Belief": "#1C8B95",
      "Money": "#28AD8D",
      "Politics": "#F9B62A",
    }
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})