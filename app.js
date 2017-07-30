//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  globalData: {
    api_key: "9eecd167f0a3a6bd8b2a0ec60f004e01",
    api_base_url: "https://v.juhe.cn/chengyu/"
  }
})
