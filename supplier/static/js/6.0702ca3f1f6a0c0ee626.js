webpackJsonp([6],{"8a4n":function(t,e){},tBKc:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("NYxO"),n={name:"",data:function(){return{orderID:"",total:0,isLoading:!1}},computed:Object(r.b)([]),created:function(){this.initData("")},methods:{handleCurrentChange:function(t){this.initData("",t)},initData:function(t,e){var a={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",tradeID:JSON.parse(sessionStorage.getItem("admin")).sm_ai_ID,page:e||1,rows:20};console.log(a)},search:function(){this.initData(this.orderID)}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clearfix",attrs:{id:"wrap"}},[a("h1",{staticClass:"userClass not-print"},[t._v("旅行社订单明细")]),t._v(" "),a("el-col",{staticClass:"formSearch not-print",attrs:{span:24}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",[a("span",[t._v("订单号筛选:")])]),t._v(" "),a("el-form-item",[a("el-input",{staticStyle:{width:"250px"},attrs:{type:"text","auto-complete":"off",placeholder:"订单号",size:"small"},model:{value:t.orderID,callback:function(e){t.orderID=e},expression:"orderID"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.search}},[t._v("查询")])],1)],1)],1),t._v(" "),a("div",{staticClass:"block",staticStyle:{float:"right"}},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],attrs:{"page-size":20,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]},i=a("VU/8")(n,s,!1,function(t){a("8a4n")},"data-v-eb8965a0",null);e.default=i.exports}});