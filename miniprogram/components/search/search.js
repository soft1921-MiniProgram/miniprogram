// components/search/search.js
let keyword=''
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder:{
      type:String,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue:'',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onInput(event){
      keyword =event.detail.value
    },
    onFocus(event){
      this.setData({
        inputValue:'',
      })
      keyword=''
    },
    onSearch(){
      console.log(keyword)
      this.triggerEvent('search',{
        keyword,
      })
    },
  },
})
