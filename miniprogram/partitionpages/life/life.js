<<<<<<< HEAD
// pages/bangumi/bangumi.js
=======
// pages/life/life.js
>>>>>>> 1d1a34f (视频详情略作修改)
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    tabs: [],
    activeTab: 0,
=======
>>>>>>> 1d1a34f (视频详情略作修改)

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD
    const titles = ['推荐', '搞笑', '日常', '手工', '绘画', '运动', '汽车', '其他']
    const tabs = titles.map(item => ({title: item}))
    this.setData({tabs})
    
  },
  onTabCLick(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  },

  onChange(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
=======

>>>>>>> 1d1a34f (视频详情略作修改)
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