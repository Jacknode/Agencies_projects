webpackJsonp([68],{KQaw:function(t,e){},Pk1A:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("NYxO"),s={computed:Object(a.b)(["ticketQueryOrderList"]),data:function(){return{total:0,searchId:"",searchArr:[{value:0,label:"未支付"},{value:1,label:"已支付"}],userInfo:""}},methods:{handleCurrentChange:function(t){this.initData("",t)},initData:function(t,e){var r=this;if(""!=t){var a={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",tm_or_UserID:"",tm_or_TradeInfoID:this.userInfo.sm_ai_ID,tm_or_OrderID:"",tm_or_PayState:"",tm_or_IsBalance:"",tm_or_OutStatus:"",tm_or_UseState:"",page:e||1,rows:10};0==t&&(a.tm_or_PayState=0),1==t&&(a.tm_or_PayState=1),this.$store.dispatch("initTicketQueryOrder",a).then(function(t){r.total=t},function(t){r.$notify({message:t,type:"error"})})}else this.$notify({message:"请先选择支付状态！",type:"error"})},search:function(){this.initData(this.searchId,1)},confirmOrder:function(t){var e=this,r={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",orderID:t||""};this.$store.dispatch("ticketConfirmOrder",r).then(function(t){e.$notify({message:t,type:"success"}),e.initData(e.searchId,1)},function(t){e.$notify({message:t,type:"error"})})}},created:function(){this.userInfo=JSON.parse(sessionStorage.getItem("admin")),this.initData("",1)}},o={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"clearfix",attrs:{id:"wrap"}},[r("h1",{staticClass:"userClass"},[t._v("订单信息")]),t._v(" "),r("el-col",{staticClass:"formSearch",attrs:{span:24}},[r("el-form",{attrs:{inline:!0}},[r("el-form-item",[r("span",[t._v("支付状态筛选:")])]),t._v(" "),r("el-form-item",[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.searchId,callback:function(e){t.searchId=e},expression:"searchId"}},t._l(t.searchArr,function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)],1)],1),t._v(" "),r("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.ticketQueryOrderList}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[r("el-form-item",{attrs:{label:"订单 ID"}},[r("span",[t._v(t._s(e.row.tm_or_OrderID))])]),t._v(" "),r("el-form-item",{attrs:{label:"景点编号"}},[r("span",[t._v(t._s(e.row.tm_or_TourSiteCode))])]),t._v(" "),r("el-form-item",{attrs:{label:"商户票种编号"}},[r("span",[t._v(t._s(e.row.tm_or_TicketTypeID))])]),t._v(" "),r("el-form-item",{attrs:{label:"景点商户编号"}},[r("span",[t._v(t._s(e.row.tm_or_TradeInfoID))])]),t._v(" "),r("el-form-item",{attrs:{label:"景点商户名称"}},[r("span",[t._v(t._s(e.row.tm_or_TradeInfoName))])]),t._v(" "),r("el-form-item",{attrs:{label:"凭证码"}},[r("span",[t._v(t._s(e.row.tm_or_Password))])]),t._v(" "),r("el-form-item",{attrs:{label:"总张数"}},[r("span",[t._v(t._s(e.row.tm_or_TicketCount)+"张")])]),t._v(" "),r("el-form-item",{attrs:{label:"总金额"}},[r("span",[t._v(t._s(e.row.tm_or_SumPrice)+"元")])]),t._v(" "),r("el-form-item",{attrs:{label:"总的网售手续费"}},[r("span",[t._v(t._s(e.row.tm_or_SumService)+"元")])]),t._v(" "),r("el-form-item",{attrs:{label:"出票状态"}},[r("span",[t._v(t._s(e.row.tm_or_OutStatus))])]),t._v(" "),r("el-form-item",{attrs:{label:"使用状态"}},[r("span",[t._v(t._s(e.row.tm_or_UseState))])]),t._v(" "),r("el-form-item",{attrs:{label:"失败编号"}},[r("span",[t._v(t._s(e.row.tm_or_FailID))])]),t._v(" "),r("el-form-item",{attrs:{label:"失败原因"}},[r("span",[t._v(t._s(e.row.tm_or_FailContent))])]),t._v(" "),r("el-form-item",{attrs:{label:"分销商编码"}},[r("span",[t._v(t._s(e.row.tm_or_SellID))])]),t._v(" "),r("el-form-item",{attrs:{label:"分销商名称"}},[r("span",[t._v(t._s(e.row.tm_or_SellName))])]),t._v(" "),r("el-form-item",{attrs:{label:"全票价"}},[r("span",[t._v(t._s(e.row.tm_or_FullPrice)+"元")])]),t._v(" "),r("el-form-item",{attrs:{label:"儿童价"}},[r("span",[t._v(t._s(e.row.tm_or_ChildPrice)+"元")])]),t._v(" "),r("el-form-item",{attrs:{label:"发起订单时间"}},[r("span",[t._v(t._s(e.row.tm_or_CreateTime))])]),t._v(" "),r("el-form-item",{attrs:{label:"订单支付时间"}},[r("span",[t._v(t._s(e.row.tm_or_PayTime))])]),t._v(" "),r("el-form-item",{attrs:{label:"支付方式"}},[r("span",[t._v(t._s(e.row.tm_or_PayWay))])]),t._v(" "),r("el-form-item",{attrs:{label:"订单支付码"}},[r("span",[t._v(t._s(e.row.tm_or_PayParam))])]),t._v(" "),r("el-form-item",{attrs:{label:"支付状态"}},[r("span",[t._v(t._s(e.row.tm_or_PayState))])]),t._v(" "),r("el-form-item",{attrs:{label:"是否结算"}},[r("span",[t._v(t._s(e.row.tm_or_IsBalance))])]),t._v(" "),r("el-form-item",{attrs:{label:"使用时间"}},[r("span",[t._v(t._s(e.row.tm_or_UseTime))])]),t._v(" "),r("el-form-item",{attrs:{label:"用户编码"}},[r("span",[t._v(t._s(e.row.tm_or_UserID))])]),t._v(" "),r("el-form-item",{attrs:{label:"备注"}},[r("span",[t._v(t._s(e.row.tm_or_Remark))])]),t._v(" "),r("el-form-item",{attrs:{label:"邮箱"}},[r("span",[t._v(t._s(e.row.tm_or_Email))])]),t._v(" "),r("el-form-item",{attrs:{label:"手机号"}},[r("span",[t._v(t._s(e.row.tm_or_TelePhone))])]),t._v(" "),r("el-form-item",{attrs:{label:"订单名称"}},[r("span",[t._v(t._s(e.row.tm_or_GoodsListName))])]),t._v(" "),r("el-form-item",{attrs:{label:"联系人"}},[r("span",[t._v(t._s(e.row.tm_or_ConnectName))])]),t._v(" "),r("el-form-item",{attrs:{label:"出游日期"}},[r("span",[t._v(t._s(e.row.tm_or_TravelDate))])])],1)]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"联系人",prop:"tm_or_ConnectName"}}),t._v(" "),r("el-table-column",{attrs:{label:"手机号",prop:"tm_or_TelePhone"}}),t._v(" "),r("el-table-column",{attrs:{label:"出游日期",prop:"tm_or_TravelDate"}}),t._v(" "),r("el-table-column",{attrs:{label:"出票状态",prop:"tm_or_OutStatus"}}),t._v(" "),r("el-table-column",{attrs:{label:"支付状态",prop:"tm_or_PayState"}}),t._v(" "),r("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(r){t.confirmOrder(e.row.tm_or_OrderID)}}},[t._v("确认订单并出单")])]}}])})],1),t._v(" "),r("div",{staticClass:"block",staticStyle:{"text-align":"right"}},[r("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],attrs:{"page-size":10,layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)])},staticRenderFns:[]},l=r("VU/8")(s,o,!1,function(t){r("KQaw")},"data-v-006b26a1",null);e.default=l.exports}});