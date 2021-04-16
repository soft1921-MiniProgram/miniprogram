// components/homeTabs/homeTabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    _currentTab: 0,
    _video: [],
  },
  lifetimes: {
    created:function(){
      wx.cloud.callFunction({
        name: 'biliApi'
      }).then((res) =>{
        this.setData({
          _video: res.result,        
        })
        console.log(res.result)
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 监听点击事件触发元素
     * @param {*} event 
     */
    _switchNav(event) {
      // console.log(event.target.dataset)
      if(this.data._currentTab ===event.target.dataset.current){
        return false
      }else {
        this.setData({
          _currentTab : event.target.dataset.current
        })
      }
      // console.log(this.data._currentTab)
    },

    _swiperChange(event) {
      // console.log(event)
      this.setData({
        _currentTab: event.detail.current
      })
    }
  }
})
