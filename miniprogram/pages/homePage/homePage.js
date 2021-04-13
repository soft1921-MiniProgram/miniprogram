// pages/homePage/homePage.js
let keyword = ''
Page({

  /**
   * 页面的初始数据
   */
  data: {
    video: [{
      "aid": 205012451,
      "videos": 1,
      "tid": 138,
      "tname": "搞笑",
      "copyright": 1,
      "pic": "http://i1.hdslb.com/bfs/archive/5ecc17f38b5d715287206e0f129957869720cb9b.jpg",
      "title": "当我用女声把鬼屋难度提升至地狱难度",
      "pubdate": 1618026782,
      "ctime": 1618026782,
      "desc": "给新鬼屋的npc上一课！",
      "state": 0,
      "duration": 173,
      "mission_id": 16958,
      "rights": {
        "bp": 0,
        "elec": 0,
        "download": 0,
        "movie": 0,
        "pay": 0,
        "hd5": 1,
        "no_reprint": 1,
        "autoplay": 1,
        "ugc_pay": 0,
        "is_cooperation": 0,
        "ugc_pay_preview": 0,
        "no_background": 0
      },
      "owner": {
        "mid": 353019540,
        "name": "一只王霸天",
        "face": "http://i0.hdslb.com/bfs/face/67ef92cdde2e7ca8cfca4bc1f523e8c6cdfe5c06.jpg"
      },
      "stat": {
        "aid": 205012451,
        "view": 260189,
        "danmaku": 765,
        "reply": 933,
        "favorite": 4498,
        "coin": 9377,
        "share": 8824,
        "now_rank": 0,
        "his_rank": 0,
        "like": 23181,
        "dislike": 0
      },
      "dynamic": "",
      "cid": 322164374,
      "dimension": {
        "width": 1080,
        "height": 1920,
        "rotate": 0
      },
      "short_link": "https://b23.tv/BV1ph411U7Ms",
      "bvid": "BV1ph411U7Ms",
      "season_type": 0,
      "rcmd_reason": {
        "content": "很多人分享",
        "corner_mark": 0
      }
    }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getReouse()
    
  },
  getReouse: function () {
    wx.request({
      url: 'http://www.flobby.top:8080/api/rank/all',
      data: {
        // ps: 20,
        // pn: 1
        pageNum:1,
        pageSize:10
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      dataType: 'json',
      success(res) {
        console.log(res.data)
        console.log(res.statusCode)
        // console.log(res.profile)
      },
      fail(res) {
        // console.log(res.statusCode)
      }
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