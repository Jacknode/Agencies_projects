webpackJsonp([62],{"1XF8":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("NYxO"),a={name:"",data:function(){return{roomID:"",total:0,isLoading:!1,addDialog:!1,updateDialog:!1,formLabelWidth:"120px",RoomFacilitiesTypeID:"",addOptions:{loginUserID:"huileyou",loginUserPass:"123",operateUserID:"操作员编码",operateUserName:"操作员名称",pcName:"",data:{ht_rth_RoomHardID:"",ht_rth_RoomID:"",ht_ht_hotelID:""}}}},computed:Object(i.b)(["hotelRoomRoomFacilitiesList","hotelRoomFacilitiesTypeList","roomFacilitiesList","hotelID","updateHotelRoomRoomFacilitiesObj"]),created:function(){var t=this.$route.params.id;if(!t)return this.$notify({message:"请先选择房间!",position:"top-left",type:"error"}),void this.$router.push({name:"HotelRoom"});this.roomID=t,this.initData(1)},methods:{changeRoomFacilities:function(){var t={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"操作员编码",operateUserName:"lb",pcName:"",ht_rh_ID:"",ht_rh_Name:"",ht_rh_RoomHardTypeID:this.RoomFacilitiesTypeID,ht_rh_IsHot:""};this.$store.dispatch("initRoomFacilities",t)},handleCurrentChange:function(t){this.initData(t)},initData:function(t){var e=this,o={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"操作员编码",operateUserName:"操作员名称",pcName:"",ht_rth_ID:"",ht_rth_RoomHardID:"",ht_rth_RoomID:this.roomID,ht_ht_hotelID:"",page:t||1,rows:"5"};this.isLoading=!0,this.$store.dispatch("initHotelRoomRoomFacilities",o).then(function(t){e.total=t,e.isLoading=!1},function(t){e.$notify({message:t,type:"error"})})},search:function(){},Add:function(){this.$store.commit("setTranstionFalse"),this.addDialog=!0},addSubmit:function(){var t=this;this.addOptions.data.ht_ht_hotelID=this.hotelID,this.addOptions.data.ht_rth_RoomID=this.roomID,this.$store.dispatch("AddHotelRoomRoomFacilities",this.addOptions).then(function(e){t.$notify({message:e,type:"success"}),t.initData(1)},function(e){t.$notify({message:e,type:"error"})}),this.addDialog=!1},Update:function(t){this.$store.commit("setTranstionFalse"),this.updateDialog=!0,this.$store.commit("UpdateHotelRoomRoomFacilities",t)},updateSubmit:function(){var t=this,e={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"操作员编码",operateUserName:"操作员名称",pcName:"",data:this.updateHotelRoomRoomFacilitiesObj};this.$store.dispatch("UpdateHotelRoomRoomFacilities",e).then(function(e){t.$notify({message:e,type:"success"}),t.initData(1)},function(e){t.$notify({message:e,type:"error"})}),this.updateDialog=!1},Delete:function(t){var e=this,o={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"操作员编码",operateUserName:"lb",pcName:"",data:{ht_rth_ID:t}};this.$store.dispatch("DeleteHotelRoomRoomFacilities",o).then(function(t){e.$notify({message:t,type:"success"}),e.initData(1)},function(t){e.$notify({message:t,type:"error"})})}}},l={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"clearfix",attrs:{id:"wrap"}},[o("el-breadcrumb",{staticStyle:{margin:"20px 0px 0px 20px"},attrs:{"separator-class":"el-icon-arrow-right"}},[o("el-breadcrumb-item",{attrs:{to:{path:"/home/hotelRoom/"}}},[t._v("房间")]),t._v(" "),o("el-breadcrumb-item",[t._v("酒店房间房间设施")])],1),t._v(" "),o("h1",{staticClass:"userClass"},[t._v("酒店房间房间设施管理")]),t._v(" "),o("el-col",{staticClass:"formSearch",attrs:{span:24}},[o("el-form",{attrs:{inline:!0}},[o("el-form-item"),t._v(" "),o("el-form-item"),t._v(" "),o("el-form-item",{staticStyle:{float:"right"}},[o("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.Add}},[t._v("新增")])],1)],1)],1),t._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:t.hotelRoomRoomFacilitiesList}},[o("el-table-column",{attrs:{prop:"ht_rth_ID",label:"房间房间设施ID",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"ht_rth_RoomHardName",label:"房间设施名称",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"ht_rth_RoomHardTypeName",label:"房间设施类型名称",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(o){t.Update(e.row.ht_rth_ID)}}},[t._v("修改\n        ")]),t._v(" "),o("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(o){t.Delete(e.row.ht_rth_ID)}}},[t._v("删除\n        ")])]}}])})],1),t._v(" "),o("div",{staticClass:"block",staticStyle:{float:"right"}},[o("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],attrs:{"page-size":5,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),o("el-dialog",{attrs:{title:"添加房间房间设施",visible:t.addDialog},on:{"update:visible":function(e){t.addDialog=e}}},[o("el-form",{attrs:{model:t.addOptions}},[o("el-form-item",{attrs:{label:"房间设施类型:","label-width":t.formLabelWidth}},[o("el-select",{attrs:{placeholder:"请选择类型"},on:{change:t.changeRoomFacilities},model:{value:t.RoomFacilitiesTypeID,callback:function(e){t.RoomFacilitiesTypeID=e},expression:"RoomFacilitiesTypeID"}},t._l(t.hotelRoomFacilitiesTypeList,function(t){return o("el-option",{key:t.ht_rht_ID,attrs:{label:t.ht_rht_Name,value:t.ht_rht_ID}})}))],1),t._v(" "),o("el-form-item",{attrs:{label:"房间设施:","label-width":t.formLabelWidth}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:t.addOptions.data.ht_rth_RoomHardID,callback:function(e){t.$set(t.addOptions.data,"ht_rth_RoomHardID",e)},expression:"addOptions.data.ht_rth_RoomHardID"}},t._l(t.roomFacilitiesList,function(t){return o("el-option",{key:t.ht_rh_ID,attrs:{label:t.ht_rh_Name,value:t.ht_rh_ID}})}))],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.addDialog=!1}}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.addSubmit}},[t._v("确 定")])],1)],1),t._v(" "),o("el-dialog",{attrs:{title:"修改房间房间设施",visible:t.updateDialog},on:{"update:visible":function(e){t.updateDialog=e}}},[o("el-form",{attrs:{model:t.updateHotelRoomRoomFacilitiesObj}},[o("el-form-item",{attrs:{label:"房间设施类型:","label-width":t.formLabelWidth}},[o("el-select",{attrs:{placeholder:"请选择类型"},on:{change:t.changeRoomFacilities},model:{value:t.RoomFacilitiesTypeID,callback:function(e){t.RoomFacilitiesTypeID=e},expression:"RoomFacilitiesTypeID"}},t._l(t.hotelRoomFacilitiesTypeList,function(t){return o("el-option",{key:t.ht_rht_ID,attrs:{label:t.ht_rht_Name,value:t.ht_rht_ID}})}))],1),t._v(" "),o("el-form-item",{attrs:{label:"房间设施:","label-width":t.formLabelWidth}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:t.updateHotelRoomRoomFacilitiesObj.ht_rth_RoomHardID,callback:function(e){t.$set(t.updateHotelRoomRoomFacilitiesObj,"ht_rth_RoomHardID",e)},expression:"updateHotelRoomRoomFacilitiesObj.ht_rth_RoomHardID"}},t._l(t.roomFacilitiesList,function(t){return o("el-option",{key:t.ht_rh_ID,attrs:{label:t.ht_rh_Name,value:t.ht_rh_ID}})}))],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.updateDialog=!1}}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.updateSubmit}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]},s=o("VU/8")(a,l,!1,function(t){o("NUM/")},"data-v-0d192b54",null);e.default=s.exports},"NUM/":function(t,e){}});