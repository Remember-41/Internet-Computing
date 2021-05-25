// index.js
// 获取应用实例
const app = getApp()

Page({
  onLoad(){

  },
  onTapCreateRadioVote(){
    wx.navigateTo({
      url: '/pages/creatVote/createRadioVote'
    })
  }
})
