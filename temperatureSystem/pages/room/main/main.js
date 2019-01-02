Page({

  /**
   * 页面的初始数据
   */
  data: {
    currIndex: 0, //初始选中日
    mastetSwith: true, //总开关
    roomList: [{
        status: 1,
        room: '房间1',
        indicator: ['30c', '制冷', '风速高']
      },
      {
        status: 1,
        room: '房间2',
        indicator: ['32c', '制冷', '风速高']
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  //单个电源开关
  itemSwitch(e) {
    const roomList = this.data.roomList
    const item = roomList[e.currentTarget.dataset.index]
    roomList[e.currentTarget.dataset.index].status ? item.status = 0 : item.status = 1
    this.setData({
      roomList
    })
    //单个开关状态控制总开关状态
    roomList.forEach(room => {
      if (room.status == 0) {
        this.setData({
          mastetSwith: false
        })
      }
      if (room.status == 1) {
        this.setData({
          mastetSwith: true
        })
      }
    })
  },

  //总开关
  mastetSwith() {
    let mastetSwith = this.data.mastetSwith
    let roomList = this.data.roomList
    mastetSwith ? mastetSwith = false : mastetSwith = true
    if (mastetSwith) {
      roomList.forEach(room => {
        room.status = 1
      })
    } else {
      roomList.forEach(room => {
        room.status = 0
      })
    }
    this.setData({
      roomList,
      mastetSwith
    })
  },

  //舒适
  comfort() {
    wx.showModal({
      title: '舒适模式',
      content: '温度：20c\r\n风速：低风\r\n模式：制冷',
    })
  },

  //节能
  energy() {
    wx.showModal({
      title: '节能模式',
      content: '温度：25c\r\n风速：低风\r\n模式：制冷',
    })
  },

  // 时间切换
  tap(e) {
    this.setData({
      currIndex: e.currentTarget.dataset.index
    })
  },

  //调到单个房间
  toRoom(e) {
    const room = e.currentTarget.dataset.room
    wx.navigateTo({
      url: `../itemRoom/itemRoom?room=${room}`
    })
  },
  setTime(e) {
    wx.navigateTo({
      url: `../time/time`
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