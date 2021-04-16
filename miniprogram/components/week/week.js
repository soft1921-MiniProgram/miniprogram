// components/week/week.js
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
    _current: 2,
    _week: 1,
    _video: [],
    _week1: [],
    _week2: [],
    _week3: [],
    _week4: [],
    _week5: [],
    _week6: [],
    _week7: [],
  },
  lifetimes: {
    attached() {
      this._setweek()
    },
    created: function () {
      wx.cloud.callFunction({
        name: 'zhuifanAPi'
      }).then((res) => {
        this.setData({
          _video: res.result,
        })
        console.log(this.data._video)
        this._filter()
      })


    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 设置星期几
     */
    _setweek() {
      let date = new Date()
      this.setData({
        _week: date.getDay(),
        _current: date.getDay()
      })
      // console.log(this.data._week)
    },
    _switchNav(event) {
      // console.log(event.target.dataset)
      if (this.data._current === event.target.dataset.current) {
        return false
      } else {
        this.setData({
          _current: event.target.dataset.current
        })
      }
      // console.log(this.data._current)
    },
    /**
     * 根据星期进行筛选
     */
    _filter() {
      let week1 = []
      let week2 = []
      let week3 = []
      let week4 = []
      let week5 = []
      let week6 = []
      let week7 = []

      for (let i = 0; i < this.data._video.length; i++) {
        // console.log(this.data._video[i].publish)
        let timeStr = this.data._video[i].publish.pub_time
        // console.log(timeStr)
        let week = this._getWeek(timeStr)
        console.log(this.data._video[i])
        switch (week) {
          case 0:
            return week7.push(this.data._video[i])
          case 1:
            return week1.push(this.data._video[i])
          case 2:
            return week2.push(this.data._video[i])
          case 3:
            return week3.push(this.data._video[i])
          case 4:
            return week4.push(this.data._video[i])
          case 5:
            return week5.push(this.data._video[i])
          case 6:
            return week6.push(this.data._video[i])
        }
      }
      console.log(week1)
      this.setData({
        _week1: week1,
        _week2: week2,
        _week3: week3,
        _week4: week4,
        _week5: week5,
        _week6: week6,
        _week7: week7
      })
      console.log(this.data._week7)
    },

    _getWeek(time) {
      let date = new Date(time)
      // console.log(date.getDay())
      return date.getDay()
    },

  }
})