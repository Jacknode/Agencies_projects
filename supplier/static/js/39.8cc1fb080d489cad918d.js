webpackJsonp([39],{"2/62":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("NYxO"),o={name:"",data:function(){return{orderID:"",touristTraderID:"",total:0,hotelID:"",isLoading:!1}},computed:Object(a.b)(["hotelConfirmOrderList"]),created:function(){if(this.hotelID=sessionStorage.getItem("hotelID"),!this.hotelID)return this.$router.push({name:"HotelDetil"}),void this.$notify({message:"请先添加酒店信息!",position:"top-left",type:"error"});this.touristTraderID=JSON.parse(sessionStorage.getItem("admin")).sm_ai_AgentID,this.initData("",1)},methods:{getSummaries:function(t){var e=t.columns,r=t.data,a=[];return e.forEach(function(t,e){if(0!==e){var o=r.map(function(e){return Number(e[t.property])});o.every(function(t){return isNaN(t)})?a[e]="N/A":(a[e]=o.reduce(function(t,e){var r=Number(e);return isNaN(r)?parseInt(t):parseInt(t+e)},0),a[e]+=" 元")}else a[e]="总价"}),a},confirmOrder:function(t){var e=this,r={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"操作员编码",operateUserName:"操作员名称",pcName:"",ht_or_OrderID:t};this.$store.dispatch("ConfirmOrder",r).then(function(t){e.$notify({message:t,type:"success"}),e.initData("",1)},function(t){e.$notify({message:t,type:"error"})})},handleCurrentChange:function(t){this.initData(this.orderID,t)},initData:function(t,e){var r=this,a={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"操作员编码",operateUserName:"操作员名称",pcName:"",ht_or_OrderID:t||"",ht_or_UserID:"",ht_or_TouristTraderID:this.touristTraderID,ht_or_Password:"",page:e||1,rows:"5"};this.isLoading=!0,this.$store.dispatch("initHotelConfirmOrder",a).then(function(t){r.total=t,r.isLoading=!1},function(t){r.$notify({message:t,type:"error"})})},search:function(){this.initData(this.orderID,1)}}},s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"clearfix",attrs:{id:"wrap"}},[r("h1",{staticClass:"userClass"},[t._v("酒店确认订单")]),t._v(" "),r("el-col",{staticClass:"formSearch",attrs:{span:24}},[r("el-form",{attrs:{inline:!0}},[r("el-form-item",[r("span",[t._v("订单号筛选:")])]),t._v(" "),r("el-form-item",[r("el-input",{staticStyle:{width:"250px"},attrs:{type:"text","auto-complete":"off",placeholder:"订单号",size:"small"},model:{value:t.orderID,callback:function(e){t.orderID=e},expression:"orderID"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.search}},[t._v("查询")])],1)],1)],1),t._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.hotelConfirmOrderList,"summary-method":t.getSummaries,"show-summary":"",size:"small"}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[r("el-form-item",{attrs:{label:"房间产品ID:"}},[r("span",[t._v(t._s(e.row.ht_or_RoomProductID))])]),t._v(" "),r("el-form-item",{attrs:{label:"用户编码:"}},[r("span",[t._v(t._s(e.row.ht_or_UserID))])]),t._v(" "),r("el-form-item",{attrs:{label:"用户名称:"}},[r("span",[t._v(t._s(e.row.ht_or_UserName))])]),t._v(" "),r("el-form-item",{attrs:{label:"商户编码:"}},[r("span",[t._v(t._s(e.row.ht_or_TouristTraderID))])]),t._v(" "),r("el-form-item",{attrs:{label:"商户名称:"}},[r("span",[t._v(t._s(e.row.ht_or_TouristTraderName))])]),t._v(" "),r("el-form-item",{attrs:{label:"凭证码:"}},[r("span",[t._v(t._s(e.row.ht_or_Password))])]),t._v(" "),r("el-form-item",{attrs:{label:"总间数:"}},[r("span",[t._v(t._s(e.row.ht_or_TicketCount))])]),t._v(" "),r("el-form-item",{attrs:{label:"入住日期:"}},[r("span",[t._v(t._s(e.row.ht_or_InDate))])]),t._v(" "),r("el-form-item",{attrs:{label:"离店日期:"}},[r("span",[t._v(t._s(e.row.ht_or_OutDate))])]),t._v(" "),r("el-form-item",{attrs:{label:"订单创建时间:"}},[r("span",[t._v(t._s(t._f("getUseTime")(e.row.ht_or_CreateTime)))])]),t._v(" "),r("el-form-item",{attrs:{label:"订单支付时间:"}},[r("span",[t._v(t._s(t._f("getUseTime")(e.row.ht_or_PayTime)))])]),t._v(" "),r("el-form-item",{attrs:{label:"支付方式:"}},[r("span",[t._v(t._s(e.row.ht_or_PayWay))])]),t._v(" "),r("el-form-item",{attrs:{label:"支付参数:"}},[r("span",[t._v(t._s(e.row.ht_or_PayParam))])]),t._v(" "),r("el-form-item",{attrs:{label:"支付状态:"}},[r("span",[t._v(t._s(e.row.ht_or_PayState))])]),t._v(" "),r("el-form-item",{attrs:{label:"使用状态:"}},[r("span",[t._v(t._s(e.row.ht_or_UseState))])]),t._v(" "),r("el-form-item",{attrs:{label:"结算状态:"}},[r("span",[t._v(t._s(e.row.ts_to_IsBalance))])]),t._v(" "),r("el-form-item",{attrs:{label:"备注:"}},[r("span",[t._v(t._s(e.row.ts_to_Remark))])]),t._v(" "),r("el-form-item",{attrs:{label:"手机号:"}},[r("span",[t._v(t._s(e.row.ht_od_Phone))])]),t._v(" "),r("el-form-item",{attrs:{label:"邮箱:"}},[r("span",[t._v(t._s(e.row.ht_od_Email))])]),t._v(" "),r("el-form-item",{attrs:{label:"订单名称:"}},[r("span",[t._v(t._s(e.row.ht_or_GoodsListName))])])],1)]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"ht_or_OrderID",label:"订单号",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"ht_or_SumPrice",label:"总金额(元)",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"ht_or_SumService",label:"总的网售手续费(元)",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"ht_or_OutStatus",label:"出单状态",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"ht_or_FullPrice",label:"价格(元)",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{prop:"ht_or_SumService",label:"总的网售手续费(元)",align:"center"}}),t._v(" "),r("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[1!=e.row.ht_or_OutStatus?r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(r){t.confirmOrder(e.row.ht_or_OrderID)}}},[t._v("确认订单\n        ")]):r("span",{staticStyle:{"font-weight":"bold"}},[t._v("已出单")])]}}])})],1),t._v(" "),r("div",{staticClass:"block",staticStyle:{float:"right"}},[r("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],attrs:{"page-size":20,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]},l=r("VU/8")(o,s,!1,function(t){r("G5LC")},"data-v-53631719",null);e.default=l.exports},G5LC:function(t,e){}});