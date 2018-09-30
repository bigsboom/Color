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
    rollPercentage:50,
  },
  onReady: function () {
    this.zoom = wx.createAnimation({
      transformOrigin: '50% 100%',
    });
    this.zoom.scaleY(0).step({ duration: 1 });
    this.setData({ zoom: this.zoom.export() });
    this.blockChange = wx.createAnimation();
    //动画初始化
  },
  //按钮触摸开始触发的事件
  touchStart: function (e) {
    this.touchStartTime = e.timeStamp
  },

  //按钮触摸结束触发的事件
  touchEnd: function (e) {
    this.touchEndTime = e.timeStamp
  },
  showPicker:function(){//显示picker
    this.setData({ listFleg: true })
    this.zoom.scaleY(1).step({duration:300})
    this.setData({ zoom: this.zoom.export() })
  },
  closePicker:function(){//隐藏picker
    this.setData({ listFleg: false })
    this.zoom.scaleY(0).step({ duration: 1})
    this.setData({ zoom: this.zoom.export() })
  },
  clinkOne: function (e){//选定一个
    this.setData({
      index: e.currentTarget.dataset.index 
    });
    var that = this
    //防止长按时会触发点击事件
    if (that.touchEndTime - that.touchStartTime < 350) {
      //当前点击的时间
      var currentTime = e.timeStamp
      var lastTapTime = that.lastTapTime
      //更新最后一次点击时间
      that.lastTapTime = currentTime
      if (currentTime - lastTapTime < 300) {
        // 成功触发双击事件时，取消单击事件的执行
        clearTimeout(that.lastTapTimeoutFunc);
        that.clinkYes()
      }
    }
    
  },
  clinkNo: function (){
    this.closePicker()
  },
  clinkYes: function () {
    let roll = Math.round(Math.random()*49+1)
    this.setData({
      one: this.data.postList[this.data.index],
      // rollPercentage: roll
    })
    //borderRadius变化动画
    let num=0;
    let rollOne=0
    if (roll > this.data.rollPercentage){
      rollOne = ((roll - this.data.rollPercentage)/16).toFixed(2);
    }else{
      rollOne = ((this.data.rollPercentage - roll)/16).toFixed(2);
      
    }
    let timer = setInterval(function () {
      num+=50;
      if (num>800){
        clearInterval(timer);
      }else{
        if (roll > this.data.rollPercentage) {
          let rollPercentageOne = this.data.rollPercentage * 1 + rollOne*1
          this.setData({
            rollPercentage: rollPercentageOne
          })
        } else {
          let rollPercentageOne = this.data.rollPercentage * 1 - rollOne * 1
          this.setData({
            rollPercentage: rollPercentageOne
          })
        }
      }
    }.bind(this),50)

    this.closePicker()
    this.blockChange.backgroundColor(this.data.postList[this.data.index].hex).step({ duration: 800 })
    this.setData({ blockChange: this.blockChange.export() })
  },
})