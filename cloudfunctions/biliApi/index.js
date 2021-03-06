// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  //每个人的环境Id
  env: "gin-6gs1iek44854c8ab"
})

//引入axios请求库
const axios = require('axios')

//接口地址
const URL = 'https://api.bilibili.com/x/web-interface/popular?ps=20&pn=1'
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const {
    data
  } = await axios.get(URL) 
  console.log('xxxxxxxx'+data.data.list.length)
  return data.data.list

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}