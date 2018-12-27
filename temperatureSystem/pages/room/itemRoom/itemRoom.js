// pages/room/itemRoom/itemRoom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    style: 0, //中风
    index: 0 //供热
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const room=options.room
    wx.setNavigationBarTitle({
      title: `${room}温控`
    })

  },

  //选择风速
  chooseStyle(e) {
    this.setData({
      style: e.currentTarget.dataset.style
    })
  },

  // 选择模式
  shooseMode(e) {
    this.setData({
      index: e.currentTarget.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})