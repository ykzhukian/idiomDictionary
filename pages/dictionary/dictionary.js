var util = require("../../utils/util.js");
var app = getApp();
// dictionary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showResult: false,
    keyword: null,
    showSearchCancel: false,
    noResult: false,
    idiom: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  onBindInput: function(event){
    var text = event.detail.value;
    console.log(text);
    this.setData({
      showSearchCancel: !(text.length == 0),
      noResult: false,
      keyword: text
    })
  },

  onCancelSearchTap: function(event) {
    this.setData({
      keyword: null,
      noResult: false,
      showSearchCancel: false,
      showResult: false,
      idiom: {}
    })
  },

  onBindConfirm: function(event){
    wx.showLoading({
      title: '正在搜索'
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 300)
    var text = event.detail.value;
    if (this.data.keyword.length == 0) {
      this.setData({
        showResult: false
      });
      return;
    }

    var url = app.globalData.api_base_url + 
      "query?key=" + 
      app.globalData.api_key + 
      "&word=" + this.data.keyword;
    util.http(encodeURI(url), this.processData);
  },

  processData: function(data){
    console.log(data);
    if (data.error_code != 0) {
      this.setData({
        noResult: true
      });
      return;
    }
    var idiom = data.result;
    this.setData({
      idiom: idiom,
      showResult: true,
      noResult: false
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})