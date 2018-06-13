webpackJsonp([64],{eyj2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("NYxO"),o={computed:Object(i.b)(["trafficInformationList","updateTrafficInformationObj","ticketAttractionsList"]),data:function(){return{addOptions:{tm_tm_TourSiteID:"",tm_tm_Drive:"",tm_tm_Bus:"",tm_tm_Address:""},addDialog:!1,formLabelWidth:"120px",isLoading:!1,updateDialog:!1,adminUserInfo:"",ticketAttractionsValue:""}},methods:{initTicketAttraction:function(){var t={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",tm_ts_Code:"",tm_ts_Name:"",tm_ts_TradeInfoID:this.adminUserInfo.sm_ai_ID,tm_ts_IsDelete:0,tm_ts_IsPass:"",tm_ts_ShowTop:"",tm_ts_IsHot:"",tm_ts_ThemeTypeID:"",page:1,rows:5};this.$store.dispatch("initTicketAttractions",t)},initData:function(t){var e=this;if(t){this.isLoading=!0;var a={loginUserID:"huileyou",loginUserPass:"123",tm_tm_TourSiteID:t};this.$store.dispatch("initTrafficInformation",a).then(function(){e.isLoading=!1},function(t){e.$notify({message:t,type:"error"})})}else this.$notify({message:"请选择景点!!",type:"error"})},search:function(){this.initData(this.ticketAttractionsValue)},Add:function(){this.$store.commit("setTranstionFalse"),this.addDialog=!0,this.addOptions.tm_tm_TourSiteID=this.ticketAttractionsValue},addSubmit:function(){var t=this,e={loginUserID:"huileyou",loginUserPass:"123",data:this.addOptions};this.$store.dispatch("addTrafficInformationSubmit",e).then(function(e){t.$notify({message:e,type:"success"}),t.initData(t.ticketAttractionsValue)},function(e){t.$notify({message:e,type:"error"})}),this.addDialog=!1},update:function(t){this.$store.commit("setTranstionFalse"),this.updateDialog=!0,this.$store.commit("updateTrafficInformation",t)},updateSubmit:function(){var t=this,e={loginUserID:"huileyou",loginUserPass:"123",data:this.updateTrafficInformationObj};this.$store.dispatch("updateTrafficInformationSubmit",e).then(function(e){t.$notify({message:e,type:"success"}),t.initData(t.ticketAttractionsValue)},function(e){t.$notify({message:e,type:"error"})}),this.updateDialog=!1},deleteTrafficInformation:function(t){var e=this,a={loginUserID:"huileyou",loginUserPass:"123",data:{tm_tm_ID:t}};this.$store.dispatch("deleteTrafficInformation",a).then(function(t){e.$notify({message:t,type:"success"}),e.initData(e.ticketAttractionsValue)},function(t){e.$notify({message:t,type:"error"})})}},created:function(){this.adminUserInfo=JSON.parse(sessionStorage.getItem("admin")),this.initTicketAttraction()}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"clearfix",attrs:{id:"wrap"}},[a("h1",{staticClass:"userClass"},[t._v("交通信息")]),t._v(" "),a("div",{staticClass:"add"},[a("el-select",{attrs:{placeholder:"请选择查询的景点"},model:{value:t.ticketAttractionsValue,callback:function(e){t.ticketAttractionsValue=e},expression:"ticketAttractionsValue"}},t._l(t.ticketAttractionsList,function(t){return a("el-option",{key:t.tm_ts_Code,attrs:{label:t.tm_ts_Name,value:t.tm_ts_Code}})})),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.Add}},[t._v("新增")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:t.trafficInformationList}},[a("el-table-column",{attrs:{prop:"tm_tm_ID",label:"交通信息编号"}}),t._v(" "),a("el-table-column",{attrs:{label:"自驾线路"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",{ref:"popover1",attrs:{placement:"top-start",title:"自驾线路",width:"300",align:"center",trigger:"hover",content:e.row.tm_tm_Drive}}),t._v(" "),a("el-button",{directives:[{name:"popover",rawName:"v-popover:popover1",arg:"popover1"}],attrs:{size:"mini"}},[t._v("移入查看")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"公交线路"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",{ref:"popover2",attrs:{placement:"top-start",title:"公交线路",width:"300",align:"center",trigger:"hover",content:e.row.tm_tm_Bus}}),t._v(" "),a("el-button",{directives:[{name:"popover",rawName:"v-popover:popover2",arg:"popover2"}],attrs:{size:"mini"}},[t._v("移入查看")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"景点地址"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",{ref:"popover3",attrs:{placement:"top-start",title:"景点地址",width:"300",align:"center",trigger:"hover",content:e.row.tm_tm_Address}}),t._v(" "),a("el-button",{directives:[{name:"popover",rawName:"v-popover:popover3",arg:"popover3"}],attrs:{size:"mini"}},[t._v("移入查看")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.update(e.row.tm_tm_ID)}}},[t._v("修改\n          ")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.deleteTrafficInformation(e.row.tm_tm_ID)}}},[t._v("删除\n          ")])]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:"添加预定须知",visible:t.addDialog},on:{"update:visible":function(e){t.addDialog=e}}},[a("el-form",{attrs:{model:t.addOptions}},[a("el-form-item",{attrs:{label:"自驾线路:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.addOptions.tm_tm_Drive,callback:function(e){t.$set(t.addOptions,"tm_tm_Drive",e)},expression:"addOptions.tm_tm_Drive"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"公交线路:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.addOptions.tm_tm_Bus,callback:function(e){t.$set(t.addOptions,"tm_tm_Bus",e)},expression:"addOptions.tm_tm_Bus"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"景点地址:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.addOptions.tm_tm_Address,callback:function(e){t.$set(t.addOptions,"tm_tm_Address",e)},expression:"addOptions.tm_tm_Address"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addDialog=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.addSubmit}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"修改预定须知",visible:t.updateDialog},on:{"update:visible":function(e){t.updateDialog=e}}},[a("el-form",{attrs:{model:t.updateTrafficInformationObj}},[a("el-form-item",{attrs:{label:"自驾线路:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.updateTrafficInformationObj.tm_tm_Drive,callback:function(e){t.$set(t.updateTrafficInformationObj,"tm_tm_Drive",e)},expression:"updateTrafficInformationObj.tm_tm_Drive"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"公交线路:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.updateTrafficInformationObj.tm_tm_Bus,callback:function(e){t.$set(t.updateTrafficInformationObj,"tm_tm_Bus",e)},expression:"updateTrafficInformationObj.tm_tm_Bus"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"景点地址:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.updateTrafficInformationObj.tm_tm_Address,callback:function(e){t.$set(t.updateTrafficInformationObj,"tm_tm_Address",e)},expression:"updateTrafficInformationObj.tm_tm_Address"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.updateDialog=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.updateSubmit}},[t._v("确 定")])],1)],1)],1)])},staticRenderFns:[]},r=a("VU/8")(o,s,!1,function(t){a("s5Q+")},"data-v-0913dd7e",null);e.default=r.exports},"s5Q+":function(t,e){}});