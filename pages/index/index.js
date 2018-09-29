//index.js
//获取应用实例
const app = getApp()

var postData = require('../datas/colorData.js');

Page({
  data: {
    motto: '色彩查询',
    postList: postData.postList,
    one: postData.postList[0],
    listFleg:false,
    index:0,
    rollPercentage:50
  },
  showPicker:function(){
    this.setData({ listFleg: true })
  },
  closePicker:function(){
    this.setData({ listFleg: false })
  },
  clinkOne: function (event){
    // console.log(event.currentTarget.dataset.index)
    this.setData({
      index: event.currentTarget.dataset.index })
  },
  clinkNo: function (){
    this.closePicker()
  },
  clinkYes: function () {
    let roll = Math.round(Math.random()*49+1)
    this.setData({
      one: this.data.postList[this.data.index],
      rollPercentage: roll
    })
    this.closePicker()
  },
})