webpackJsonp([57],{b5yZ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("NYxO"),o={name:"",data:function(){return{hotelID:"",total:0,addDialog:!1,updateDialog:!1,formLabelWidth:"120px",isLoading:!1,addOptions:{loginUserID:"huileyou",loginUserPass:"123",operateUserID:"操作员编码",operateUserName:"操作员名称",pcName:"",data:{ht_tt_ThemeID:"",ht_ht_hotelID:""}}}},computed:Object(i.b)(["hotelThemeList","hotelThemeTypeList"]),created:function(){if(this.hotelID=sessionStorage.getItem("hotelID"),!this.hotelID)return this.$router.push({name:"HotelDetil"}),void this.$notify({message:"请先添加酒店信息!",position:"top-left",type:"error"});this.initData(1)},methods:{handleCurrentChange:function(t){this.initData(t)},initData:function(t){var e=this,a={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"操作员编码",operateUserName:"操作员名称",pcName:"",ht_ht_Id:"",ht_tt_ThemeID:"",ht_ht_hotelID:this.hotelID,page:t||1,rows:"5"};this.isLoading=!0,this.$store.dispatch("initHotelTheme",a).then(function(t){e.total=t,e.isLoading=!1},function(t){e.$notify({message:t,type:"error"})})},Add:function(){this.$store.commit("setTranstionFalse"),this.addDialog=!0},addSubmit:function(){var t=this;this.addOptions.data.ht_ht_hotelID=this.hotelID,this.$store.dispatch("AddHotelTheme",this.addOptions).then(function(e){t.$notify({message:e,type:"success"}),t.initData(1)},function(e){t.$notify({message:e,type:"error"})}),this.addDialog=!1},Delete:function(t){var e=this,a={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"操作员编码",operateUserName:"lb",pcName:"",data:{ht_ht_Id:t}};this.$store.dispatch("DeleteHotelTheme",a).then(function(t){e.$notify({message:t,type:"success"}),e.initData(1)},function(t){e.$notify({message:t,type:"error"})})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clearfix",attrs:{id:"wrap"}},[a("div",{staticClass:"title clearfix",staticStyle:{padding:"20px"}},[a("h1",{staticStyle:{"font-size":"20px"}},[t._v("酒店主题信息")]),a("br"),a("br"),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:t.Add}},[t._v("新增")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:t.hotelThemeList}},[a("el-table-column",{attrs:{prop:"ht_ht_Id",label:"酒店主题编码",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ht_tt_ThemeName",label:"主题类别",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.Delete(e.row.ht_ht_Id)}}},[t._v("删除\n        ")])]}}])})],1),t._v(" "),a("div",{staticClass:"block",staticStyle:{float:"right"}},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],attrs:{"page-size":5,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:"添加酒店主题",visible:t.addDialog},on:{"update:visible":function(e){t.addDialog=e}}},[a("el-form",{attrs:{model:t.addOptions}},[a("el-form-item",{attrs:{label:"主题类别:","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择主题类别"},model:{value:t.addOptions.data.ht_tt_ThemeID,callback:function(e){t.$set(t.addOptions.data,"ht_tt_ThemeID",e)},expression:"addOptions.data.ht_tt_ThemeID"}},t._l(t.hotelThemeTypeList,function(t){return a("el-option",{key:t.ht_tt_ThemeID,attrs:{label:t.ht_tt_Name,value:t.ht_tt_ThemeID}})}))],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addDialog=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.addSubmit}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]},n=a("VU/8")(o,s,!1,function(t){a("znR2")},"data-v-226082d0",null);e.default=n.exports},znR2:function(t,e){}});