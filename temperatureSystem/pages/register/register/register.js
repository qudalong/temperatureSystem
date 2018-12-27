// pages/register/register1/register1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    community: '',//社区名
    building: ''//楼栋编号
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     
  },
  // 跳转到社区
  toCommunity(){
    wx.navigateTo({
      url: `../community/community`,
    })
  },

  // 跳转到房屋
  toBuilding(){
    wx.navigateTo({
      url: `../building/building`,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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