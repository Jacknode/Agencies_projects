webpackJsonp([45],{XPBj:function(e,t){},dBqn:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("NYxO"),r={name:"",data:function(){return{total:0,isLoading:!1,id:""}},computed:Object(n.b)(["adminPersonalBenefitsList"]),created:function(){var e=JSON.parse(sessionStorage.getItem("admin"));e?(this.id=e.sm_ai_AgentID,this.initData(e.sm_ai_AgentID)):this.$router.push({name:"Login"})},methods:{getSummaries:function(e){var t=e.columns,a=e.data,n=[];return t.forEach(function(e,t){if(0!==t){var r=a.map(function(t){return Number(t[e.property])});r.every(function(e){return isNaN(e)})?n[t]="N/A":(n[t]=r.reduce(function(e,t){var a=Number(t);return isNaN(a)?e:e+t},0),n[t]+=" 元")}else n[t]="合计"}),n},initData:function(e,t){var a=this,n={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",agentID:e,balanceState:"",page:t||1,rows:5};this.isLoading=!0,this.$store.dispatch("initAdminPersonalBenefits",n).then(function(e){a.total=e,a.isLoading=!1},function(e){a.$notify({message:e,type:"error"})})},handleCurrentChange:function(e){this.initData(this.id,e)}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"clearfix",attrs:{id:"wrap"}},[a("h1",{staticClass:"userClass"},[e._v("供应商个人收益")]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticStyle:{width:"100%","padding-top":"50px"},attrs:{data:e.adminPersonalBenefitsList,"highlight-current-row":"","show-summary":"","summary-method":e.getSummaries}},[a("el-table-column",{attrs:{label:"供应商编号",align:"center",prop:"agentInfoID"}}),e._v(" "),a("el-table-column",{attrs:{label:"订单号",align:"center",prop:"ts_to_OrderID"}}),e._v(" "),a("el-table-column",{attrs:{label:"订单利润",align:"center",prop:"orderIncome"}}),e._v(" "),a("el-table-column",{attrs:{label:"订单价格",align:"center",prop:"ts_to_SumPrice"}}),e._v(" "),a("el-table-column",{attrs:{label:"供应商获利",align:"center",prop:"orderfeePrice"}}),e._v(" "),a("el-table-column",{attrs:{label:"供应商提成比例",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.agentFee))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"下单时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("getUseTime")(t.row.ts_to_PayTime)))])]}}])})],1),e._v(" "),a("div",{staticClass:"block",staticStyle:{float:"right"}},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.total,expression:"total"}],attrs:{"page-size":5,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]},s=a("VU/8")(r,i,!1,function(e){a("XPBj")},"data-v-3f56d1ac",null);t.default=s.exports}});