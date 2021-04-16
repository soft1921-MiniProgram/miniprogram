// pages/homePage/homePage.js
let keyword = ''
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
<<<<<<< HEAD
    tabs: [],
    activeTab: 0,

=======
    video: [],
>>>>>>> 223994a (热门组件)
=======

    video: [],
    tabs: [],
    activeTab: 0,
>>>>>>> 1d1a34f (视频详情略作修改)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'biliApi'
    }).then((res) =>{
      
      this.setData({
        video: res.result,        
      })
      console.log(res.result)
    })
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 1d1a34f (视频详情略作修改)

    const titles = ['热门', '追番']
    const tabs = titles.map(item => ({title: item}))
    this.setData({tabs})
    
<<<<<<< HEAD
=======
>>>>>>> 223994a (热门组件)
=======
>>>>>>> 1d1a34f (视频详情略作修改)
  },
  onTabCLick(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  },

  onChange(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
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