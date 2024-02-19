// pages/logs/logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    project: [
      {
        projectNum: "项目一",
        projectName: "外卖前台系统",
        projectType: "前台项目",
        projectDesc: "该项目包括登录注册、首页、搜索、商家列表、购物车、下单、订单列表、个人中心等多个子模块。",
        skillDesc: "vue2 + vuex + vue-router + webpack + ES6/7 + fetch + sass + flex + svg",
        responsibilityDesc: [
          "1. 通过element-ui组件完成数据分页显示，调用接口实现数据的渲染；",
          "2. 使用vuex共享登录时获取的信息，通过全局路由控制页面跳转。"        ]
      },
      {
        projectNum: "项目二",
        projectName: "外卖后台系统",
        projectType: "后台项目",
        projectDesc: "该项目包括登录注册、首页、数据展示、管理用户/商铺/食品、添加商铺/食品、图表、管理员中心等多个子模块。",
        skillDesc: " vue2 + vuex + vue-router + webpack + ES6/7 + less + element-ui",
        responsibilityDesc: [
          "1. 通过vuex进行用户信息管理,使用localstorage本地存储记录用户登录状态；",
          "2.通过element-ui组件完成数据分页显示,调用接口进行数据的增删改查；",
          "3.使用路由全局前置守卫与动态添加路由，实现管理员权限的控制。"
        ],
      },{
        projectNum: "项目三",
        projectName: "小程序个人简历系统",
        projectType: "小程序项目",
        projectDesc: "该项目为个人开发的在线简历系统，包括首页、个人信息、项目展示等模块。",
        responsibilityDesc: [
          "1. 调用接口实现个人联系方式以及博客网页的复制；",
          "2.通过组件来实现项目经历，完成项目数据的渲染。"
        ],
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})