webpackJsonp([30],{cB9r:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("NYxO"),s={name:"",data:function(){return{orderID:"",confirmState1:"primary",confirmState2:"primary",confirmOderOrOreadyOrder:"确认订单",total:0,num:0,isLoading:!1}},computed:Object(r.b)(["TravelAgencyOrderList"]),created:function(){this.initData()},methods:{getSummaries:function(t){var e=t.columns,a=t.data,r=[];return e.forEach(function(t,e){if(0!==e){var s=a.map(function(e){return Number(e[t.property])});s.every(function(t){return isNaN(t)})?r[e]="N/A":(r[e]=s.reduce(function(t,e){var a=Number(e);return isNaN(a)?parseInt(t):parseInt(t+e)},0),r[e]+=" 元")}else r[e]="总价"}),r},handleCurrentChange:function(t){this.num=t,this.initData("",t)},initData:function(t,e){var a=this,r={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",ts_to_OrderID:t||"",page:e||1,rows:10};this.num&&(r.page=this.num),this.isLoading=!0,this.$store.dispatch("initTravelAgencyOrder",r).then(function(t){a.total=t,a.isLoading=!1},function(t){a.$notify({message:t,type:"error"})})},search:function(){this.initData(this.orderID.trim())},ConfirmOrder:function(t){var e=this,a={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",orderID:t.ts_to_OrderID};this.isLoading=!0,this.$store.dispatch("confirmTravelAgencyOrder",a).then(function(t){e.isLoading=!1,e.$notify({message:t,type:"success"}),e.initData("",1)},function(t){e.$notify({message:t,type:"error"})})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clearfix",attrs:{id:"wrap"}},[a("h1",{staticClass:"userClass not-print"},[t._v("旅行社订单")]),t._v(" "),a("el-col",{staticClass:"formSearch not-print",attrs:{span:24}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",[a("span",[t._v("订单筛选:")])]),t._v(" "),a("el-form-item",[a("el-input",{staticStyle:{width:"250px"},attrs:{type:"text","auto-complete":"off",placeholder:"订单筛选",size:"small"},model:{value:t.orderID,callback:function(e){t.orderID=e},expression:"orderID"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.search}},[t._v("订单查询")])],1)],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:t.TravelAgencyOrderList,"summary-method":t.getSummaries,"show-summary":""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"订单ID:"}},[a("span",[t._v(t._s(e.row.ts_to_OrderID))])]),t._v(" "),a("el-form-item",{attrs:{label:"订单支付时间:"}},[a("span",[t._v(t._s(e.row.ts_to_PayTime))])]),t._v(" "),a("el-form-item",{attrs:{label:"是否结算:"}},[a("span",[t._v(t._s(e.row.ts_to_IsBalance))])]),t._v(" "),a("el-form-item",{attrs:{label:"电子邮件:"}},[a("span",[t._v(t._s(e.row.ts_to_Email))])]),t._v(" "),a("el-form-item",{attrs:{label:"全票数:"}},[a("span",[t._v(t._s(e.row.ts_to_FullCount)+"张")])]),t._v(" "),a("el-form-item",{attrs:{label:"儿童票数:"}},[a("span",[t._v(t._s(e.row.ts_to_ChildCount)+"张")])]),t._v(" "),a("el-form-item",{attrs:{label:"产品编码:"}},[a("span",[t._v(t._s(e.row.ts_to_GoodsListID))])]),t._v(" "),a("el-form-item",{attrs:{label:"产品名称:"}},[a("span",[t._v(t._s(e.row.ts_to_GoodsListName))])]),t._v(" "),a("el-form-item",{attrs:{label:"联系人姓名:"}},[a("span",[t._v(t._s(e.row.ts_to_ConnectName))])]),t._v(" "),a("el-form-item",{attrs:{label:"出发地点:"}},[a("span",[t._v(t._s(e.row.ts_to_FromPlace))])]),t._v(" "),a("el-form-item",{attrs:{label:"发起订单时间:"}},[a("span",[t._v(t._s(e.row.ts_to_CreateTime))])]),t._v(" "),a("el-form-item",{attrs:{label:"全票价:"}},[a("span",[t._v(t._s(e.row.ts_to_FullPrice)+"元")])]),t._v(" "),a("el-form-item",{attrs:{label:"儿童价:"}},[a("span",[t._v(t._s(e.row.ts_to_ChildPrice)+"元")])]),t._v(" "),a("el-form-item",{attrs:{label:"用户编码:"}},[a("span",[t._v(t._s(e.row.ts_to_UserID))])]),t._v(" "),a("el-form-item",{attrs:{label:"出票状态:"}},[a("span",[t._v(t._s(t._f("getOutStatus")(e.row.ts_to_OutStatus)))])]),t._v(" "),a("el-form-item",{attrs:{label:"用户名称:"}},[a("span",[t._v(t._s(e.row.ts_to_UserName))])]),t._v(" "),a("el-form-item",{attrs:{label:"支付方式:"}},[a("span",[t._v(t._s(e.row.ts_to_PayWay))])]),t._v(" "),a("el-form-item",{attrs:{label:"凭证码:"}},[a("span",[t._v(t._s(e.row.ts_to_Password))])]),t._v(" "),a("el-form-item",{attrs:{label:"订单支付码:"}},[a("span",[t._v(t._s(e.row.ts_to_PayParam))])]),t._v(" "),a("el-form-item",{attrs:{label:"订单状态:"}},[a("span",[t._v(t._s(t._f("getPayState")(e.row.ts_to_PayState)))])]),t._v(" "),a("el-form-item",{attrs:{label:"总张数:"}},[a("span",[t._v(t._s(e.row.ts_to_TicketCount)+"张")])]),t._v(" "),a("el-form-item",{attrs:{label:"备注:"}},[a("span",[t._v(t._s(e.row.ts_to_Remark))])]),t._v(" "),a("el-form-item",{attrs:{label:"产品价格编码:"}},[a("span",[t._v(t._s(e.row.ts_to_ProductPriceID))])]),t._v(" "),a("el-form-item",{attrs:{label:"供票方编码:"}},[a("span",[t._v(t._s(e.row.ts_to_SellID))])]),t._v(" "),a("el-form-item",{attrs:{label:"供票方名称:"}},[a("span",[t._v(t._s(e.row.ts_to_SellName))])]),t._v(" "),a("el-form-item",{attrs:{label:"总金额:"}},[a("span",[t._v(t._s(e.row.ts_to_SumPrice)+"元")])]),t._v(" "),a("el-form-item",{attrs:{label:"总的网售手续费:"}},[a("span",[t._v(t._s(e.row.ts_to_SumService))])]),t._v(" "),a("el-form-item",{attrs:{label:"电话号码:"}},[a("span",[t._v(t._s(e.row.ts_to_TelePhone))])]),t._v(" "),a("el-form-item",{attrs:{label:"旅行社编码:"}},[a("span",[t._v(t._s(e.row.ts_to_TouristTraderID))])]),t._v(" "),a("el-form-item",{attrs:{label:"旅行社名称:"}},[a("span",[t._v(t._s(e.row.ts_to_TouristTraderName))])]),t._v(" "),a("el-form-item",{attrs:{label:"出发日期:"}},[a("span",[t._v(t._s(e.row.ts_to_TravelDate))])])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"订单ID",prop:"ts_to_OrderID"}}),t._v(" "),a("el-table-column",{attrs:{label:"出票状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(t._f("getOutStatus")(e.row.ts_to_OutStatus))+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"总金额",prop:"ts_to_SumPrice"}}),t._v(" "),a("el-table-column",{attrs:{label:"全票价(元)",prop:"ts_to_FullPrice"}}),t._v(" "),a("el-table-column",{attrs:{label:"儿童价(元)",prop:"ts_to_ChildPrice"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.ts_to_OutStatus?a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){t.ConfirmOrder(e.row)}}},[t._v("确认订单\n          ")]):a("span",{staticStyle:{"font-size":"12px","font-weight":"bold"}},[t._v(" 已出单")])]}}])})],1),t._v(" "),a("div",{staticClass:"block",staticStyle:{float:"right"}},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],attrs:{"page-size":10,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]},l=a("VU/8")(s,o,!1,function(t){a("vHq4")},"data-v-680ae463",null);e.default=l.exports},vHq4:function(t,e){}});