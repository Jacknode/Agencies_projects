webpackJsonp([11],{El4N:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("//Fk"),s=i.n(a),l=i("NYxO"),n={name:"",data:function(){return{num:10,userID:"",userName:"",value:"",userSearchID:"",typeOptions:[{value:"0",label:"用餐"},{value:"1",label:"景点"},{value:"2",label:"酒店"},{value:"3",label:"交通"}],formLabelWidth:"120px",addAdminTimeActivitiesDialog:!1,updateAdminTimeActivitiesDialog:!1,GoodId:"",LineID:"",isLoading:!1,userSearch:{id:""},TimeID:"",addOptions:{loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:{ts_ta_TravelTimeID:"",ts_ta_ParkType:"",ts_ta_DoWork:"",ts_ta_Turn:"",ts_ta_Remark:""}}}},computed:Object(l.b)(["adminProductLine","adminTradeGoodList","adminLinePrepare","adminScheduleTimeList","adminTimeActivitiesList","updateAdminTimeActivitiesObj","adminTimeActivityManagementId"]),methods:{handleSelect:function(t){this.userName=t.value;var e={loginUserID:"huileyou",loginUserPass:123,goodID:t.id?t.id:""};this.$store.dispatch("initAdminProductLine",e)},loadAll:function(t,e){var i=this;return new s.a(function(t,a){var s=JSON.parse(sessionStorage.getItem("admin")),l={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",tradeID:s.sm_ai_ID?s.sm_ai_ID:"",goodTitle:e||"",userID:"",pcName:"",ID:"",isDelete:0,page:1,rows:100};i.$store.dispatch("initAdminTradeGoodList",l).then(function(e){t(e)},function(t){i.$notify({message:t,type:"error"})})})},querySearchAsync:function(t,e){var i=this;this.loadAll(1,t).then(function(t){t=(t=t.data).map(function(t){return{id:t.ta_tg_ID,value:t.ta_tg_Title}}),i.restaurants=t,clearTimeout(i.timeout),i.timeout=setTimeout(function(){e(i.restaurants)},10)})},changeLineID:function(){var t=this;this.LineID="";var e={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",goodID:this.userSearchID?this.userSearchID:""};this.$store.dispatch("initAdminLinePrepare",e).then(function(){},function(e){t.$notify({message:e,type:"error"})})},changeLineTime:function(){this.TimeID="";var t={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",isDelete:"0",goodID:this.LineID?this.LineID:""};this.$store.dispatch("initAdminScheduleTime",t)},initData:function(t){var e=this,i={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",goodID:t||""};this.isLoading=!0,this.$store.dispatch("initAdminTimeActivities",i).then(function(){e.isLoading=!1},function(t){e.$notify({message:t,type:"error"})})},search:function(){this.initData(this.TimeID)},searchInitData:function(){this.initData(this.adminTimeActivityManagementId)},addAdminTimeActivities:function(){this.$store.commit("setTranstionFalse"),this.addAdminTimeActivitiesDialog=!0},addAdminTimeActivitiesSubmit:function(){var t=this;this.$store.dispatch("AddAdminTimeActivities",this.addOptions).then(function(){t.$notify({message:"添加成功!",type:"success"}),t.initData(t.addOptions.data.ts_ta_TravelTimeID)},function(e){t.$notify({message:e,type:"error"})}),this.addAdminTimeActivitiesDialog=!1},updateAdminTimeActivities:function(t){this.updateAdminTimeActivitiesDialog=!0,this.$store.commit("setTranstionFalse"),this.$store.commit("initUpdateAdminTimeActivitiesObj",t)},updateAdminTimeActivitiesSubmit:function(){var t=this,e={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:{ts_ta_ID:this.updateAdminTimeActivitiesObj.ts_ta_ID,ts_ta_TravelTimeID:this.updateAdminTimeActivitiesObj.ts_ta_TravelTimeID,ts_ta_ParkType:this.updateAdminTimeActivitiesObj.ts_ta_ParkType,ts_ta_DoWork:this.updateAdminTimeActivitiesObj.ts_ta_DoWork,ts_ta_Turn:this.updateAdminTimeActivitiesObj.ts_ta_Turn,ts_ta_Remark:this.updateAdminTimeActivitiesObj.ts_ta_Remark}};this.$store.dispatch("UpdateAdminTimeActivities",e).then(function(){t.$notify({message:"修改成功!",type:"success"}),t.initData(t.updateAdminTimeActivitiesObj.ts_ta_TravelTimeID)},function(e){t.$notify({message:e,type:"error"})}),this.updateAdminTimeActivitiesDialog=!1},deleteAdminTimeActivities:function(t){var e=this,i={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",taID:t};this.$store.dispatch("DeleteAdminTimeActivities",i).then(function(){e.$notify({message:"删除成功!",type:"success"}),e.initData()},function(t){e.$notify({message:t,type:"error"})})},activityMealManagement:function(t){this.$store.commit("adminActivityMealManagementId",t),this.$router.push({name:"AdminTimeActivitiesList"}),sessionStorage.setItem("index","5")}},mounted:function(){this.searchInitData()}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("section",{attrs:{id:"wrap"}},[i("div",{staticStyle:{margin:"30px 0 30px 0px"}},[i("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[i("el-breadcrumb-item",{attrs:{to:"AdminMerchantProducts"}},[t._v("商家产品")]),t._v(" "),i("el-breadcrumb-item",{nativeOn:{click:function(e){t.toLine(e)}}},[t._v("产品线路")]),t._v(" "),i("el-breadcrumb-item",{nativeOn:{click:function(e){t.toDayLine(e)}}},[t._v("日程线路")]),t._v(" "),i("el-breadcrumb-item",{attrs:{to:"AdminScheduleTime"}},[t._v("日程时间")]),t._v(" "),i("el-breadcrumb-item",[t._v("时间活动")])],1)],1),t._v(" "),i("h1",{staticClass:"userClass"},[t._v("时间活动信息")]),t._v(" "),i("el-col",{staticClass:"formSearch",attrs:{span:24}},[i("el-form",{attrs:{inline:!0,model:t.userSearch}},[i("el-form-item",[i("span",[t._v("时间活动筛选:")])]),t._v(" "),i("el-form-item",[i("el-autocomplete",{staticStyle:{width:"250px"},attrs:{"fetch-suggestions":t.querySearchAsync,placeholder:"请选择产品"},on:{select:t.handleSelect},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),t._v(" "),i("el-form-item",[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择产品线路"},on:{change:t.changeLineID},model:{value:t.userSearchID,callback:function(e){t.userSearchID=e},expression:"userSearchID"}},t._l(t.adminProductLine,function(t){return i("el-option",{key:t.ts_pt_ID,attrs:{label:t.ts_pt_Name,value:t.ts_pt_ID}})}))],1),t._v(" "),i("el-form-item",[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择线路日程"},on:{change:t.changeLineTime},model:{value:t.LineID,callback:function(e){t.LineID=e},expression:"LineID"}},t._l(t.adminLinePrepare,function(t){return i("el-option",{key:t.ts_pt_ID,attrs:{label:"第"+t.ts_pt_Day+"天",value:t.ts_pt_ID}})}))],1),t._v(" "),i("el-form-item",[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择日程时间"},model:{value:t.TimeID,callback:function(e){t.TimeID=e},expression:"TimeID"}},t._l(t.adminScheduleTimeList,function(t){return i("el-option",{key:t.ts_tt_ID,attrs:{label:t.ts_tt_DoTime,value:t.ts_tt_ID}})}))],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.addAdminTimeActivities}},[t._v("新增")])],1)],1)],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:t.adminTimeActivitiesList,"highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"主键编号",prop:"ts_ta_ID"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"时间编号",prop:"ts_ta_TravelTimeID"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"顺序",prop:"ts_ta_Turn"}}),t._v(" "),i("el-table-column",{attrs:{label:"所做内容",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-popover",{ref:"popover1",attrs:{placement:"top-start",width:"200",trigger:"hover",content:e.row.ts_ta_DoWork}}),t._v(" "),i("el-button",{directives:[{name:"popover",rawName:"v-popover:popover1",arg:"popover1"}]},[t._v("移入查看")])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(t._f("getParkType")(e.row.ts_ta_ParkType)))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作",align:"center",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini"},on:{click:function(i){t.updateAdminTimeActivities(e.row.ts_ta_ID)}}},[t._v("修改\n          ")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){t.deleteAdminTimeActivities(e.row.ts_ta_ID)}}},[t._v("删除\n          ")]),t._v(" "),i("el-button",{attrs:{size:"mini"},on:{click:function(i){t.activityMealManagement(e.row.ts_ta_ID)}}},[t._v("时间活动详情管理\n          ")])]}}])})],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"添加时间活动",visible:t.addAdminTimeActivitiesDialog},on:{"update:visible":function(e){t.addAdminTimeActivitiesDialog=e}}},[i("el-form",{attrs:{model:t.addOptions}},[i("el-form-item",{attrs:{label:"请选择日程时间:","label-width":t.formLabelWidth}},[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择日程时间"},model:{value:t.addOptions.data.ts_ta_TravelTimeID,callback:function(e){t.$set(t.addOptions.data,"ts_ta_TravelTimeID",e)},expression:"addOptions.data.ts_ta_TravelTimeID"}},t._l(t.adminScheduleTimeList,function(t){return i("el-option",{key:t.ts_tt_ID,attrs:{label:t.ts_tt_DoTime,value:t.ts_tt_ID}})}))],1),t._v(" "),i("el-form-item",{attrs:{label:"类型:","label-width":t.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择类型"},model:{value:t.addOptions.data.ts_ta_ParkType,callback:function(e){t.$set(t.addOptions.data,"ts_ta_ParkType",e)},expression:"addOptions.data.ts_ta_ParkType"}},t._l(t.typeOptions,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),i("el-form-item",{attrs:{label:"顺序:","label-width":t.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择顺序"},model:{value:t.addOptions.data.ts_ta_Turn,callback:function(e){t.$set(t.addOptions.data,"ts_ta_Turn",e)},expression:"addOptions.data.ts_ta_Turn"}},[i("el-option",{attrs:{label:"1",value:"1"}}),t._v(" "),i("el-option",{attrs:{label:"2",value:"2"}}),t._v(" "),i("el-option",{attrs:{label:"3",value:"3"}}),t._v(" "),i("el-option",{attrs:{label:"4",value:"4"}}),t._v(" "),i("el-option",{attrs:{label:"5",value:"5"}}),t._v(" "),i("el-option",{attrs:{label:"6",value:"6"}}),t._v(" "),i("el-option",{attrs:{label:"7",value:"7"}}),t._v(" "),i("el-option",{attrs:{label:"8",value:"8"}}),t._v(" "),i("el-option",{attrs:{label:"9",value:"9"}}),t._v(" "),i("el-option",{attrs:{label:"10",value:"10"}})],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"所做内容:","label-width":t.formLabelWidth}},[i("el-input",{attrs:{placeholder:"请输入内容",type:"textarea",autosize:{minRows:6,maxRows:10}},model:{value:t.addOptions.data.ts_ta_DoWork,callback:function(e){t.$set(t.addOptions.data,"ts_ta_DoWork",e)},expression:"addOptions.data.ts_ta_DoWork"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"备注:","label-width":t.formLabelWidth}},[i("el-input",{attrs:{placeholder:"请输入内容",type:"textarea",autosize:{minRows:6,maxRows:10}},model:{value:t.addOptions.data.ts_ta_Remark,callback:function(e){t.$set(t.addOptions.data,"ts_ta_Remark",e)},expression:"addOptions.data.ts_ta_Remark"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.addAdminTimeActivitiesDialog=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.addAdminTimeActivitiesSubmit}},[t._v("确 定")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"修改时间活动",visible:t.updateAdminTimeActivitiesDialog},on:{"update:visible":function(e){t.updateAdminTimeActivitiesDialog=e}}},[i("el-form",{attrs:{model:t.updateAdminTimeActivitiesObj}},[i("el-form-item",{attrs:{label:"请选择日程时间:","label-width":t.formLabelWidth}},[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择日程时间"},model:{value:t.updateAdminTimeActivitiesObj.ts_ta_TravelTimeID,callback:function(e){t.$set(t.updateAdminTimeActivitiesObj,"ts_ta_TravelTimeID",e)},expression:"updateAdminTimeActivitiesObj.ts_ta_TravelTimeID"}},t._l(t.adminScheduleTimeList,function(t){return i("el-option",{key:t.ts_tt_ID,attrs:{label:t.ts_tt_DoTime,value:t.ts_tt_ID}})}))],1),t._v(" "),i("el-form-item",{attrs:{label:"类型:","label-width":t.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择类型"},model:{value:t.updateAdminTimeActivitiesObj.ts_ta_ParkType,callback:function(e){t.$set(t.updateAdminTimeActivitiesObj,"ts_ta_ParkType",e)},expression:"updateAdminTimeActivitiesObj.ts_ta_ParkType"}},t._l(t.typeOptions,function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),i("el-form-item",{attrs:{label:"顺序:","label-width":t.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择顺序"},model:{value:t.updateAdminTimeActivitiesObj.ts_ta_Turn,callback:function(e){t.$set(t.updateAdminTimeActivitiesObj,"ts_ta_Turn",e)},expression:"updateAdminTimeActivitiesObj.ts_ta_Turn"}},[i("el-option",{attrs:{label:"1",value:"1"}}),t._v(" "),i("el-option",{attrs:{label:"2",value:"2"}}),t._v(" "),i("el-option",{attrs:{label:"3",value:"3"}}),t._v(" "),i("el-option",{attrs:{label:"4",value:"4"}}),t._v(" "),i("el-option",{attrs:{label:"5",value:"5"}}),t._v(" "),i("el-option",{attrs:{label:"6",value:"6"}}),t._v(" "),i("el-option",{attrs:{label:"7",value:"7"}}),t._v(" "),i("el-option",{attrs:{label:"8",value:"8"}}),t._v(" "),i("el-option",{attrs:{label:"9",value:"9"}}),t._v(" "),i("el-option",{attrs:{label:"10",value:"10"}})],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"所做内容:","label-width":t.formLabelWidth}},[i("el-input",{attrs:{placeholder:"请输入内容",type:"textarea",autosize:{minRows:6,maxRows:10}},model:{value:t.updateAdminTimeActivitiesObj.ts_ta_DoWork,callback:function(e){t.$set(t.updateAdminTimeActivitiesObj,"ts_ta_DoWork",e)},expression:"updateAdminTimeActivitiesObj.ts_ta_DoWork"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"备注:","label-width":t.formLabelWidth}},[i("el-input",{attrs:{placeholder:"请输入内容",type:"textarea",autosize:{minRows:6,maxRows:10}},model:{value:t.updateAdminTimeActivitiesObj.ts_ta_Remark,callback:function(e){t.$set(t.updateAdminTimeActivitiesObj,"ts_ta_Remark",e)},expression:"updateAdminTimeActivitiesObj.ts_ta_Remark"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.updateAdminTimeActivitiesDialog=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.updateAdminTimeActivitiesSubmit}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]},r=i("VU/8")(n,o,!1,function(t){i("VYZr")},"data-v-ccc84c16",null);e.default=r.exports},VYZr:function(t,e){}});