// pages/register/community/community.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     list:[
       {
         lable:'A',
         comm: ['A1', 'A2', 'A3', 'A4', 'A5']
       },
       {
         lable:'B',
         comm: ['B1', 'B2', 'B3', 'B4', 'B5']
       },
       {
         lable:'C',
         comm: ['C1', 'C2', 'C3', 'C4', 'C5']
       }
     ],
    community: ''//社区名
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  chooseItem(e){
    this.setData({
      community: e.currentTarget.dataset.txt
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
    const pages = getCurrentPages();
    const currPage = pages[pages.length - 1];   //当前页面
    const prevPage = pages[pages.length - 2];  //上一个页面
    prevPage.setData({
      community: this.data.community
    });
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