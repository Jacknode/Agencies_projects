webpackJsonp([28],{wQBr:function(t,e){},"x+4O":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("NYxO"),a={name:"",data:function(){return{formLabelWidth:"120px",isLoading:!1,addAdminGroupTourDialog:!1,updateAdminGroupTourDialog:!1,tourName:"",addOptions:{loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:{ii_ItemName:"",ii_Remark:""}}}},computed:Object(o.b)(["groupTourList","updateAdminGroupTourObj"]),methods:{initData:function(t){var e=this,i={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",isDelete:"0",groupName:t||""};this.isLoading=!0,this.$store.dispatch("initAdminGroupTour",i).then(function(){e.isLoading=!1},function(t){e.$notify({message:t,type:"error"})})},search:function(){this.initData(this.tourName.trim())},addAdminGroupTour:function(){this.$store.commit("setTranstionFalse"),this.addAdminGroupTourDialog=!0},addAdminGroupTourSubmit:function(){var t=this;this.$store.dispatch("AddAdminGroupTour",this.addOptions).then(function(){t.$notify({message:"添加成功!",type:"success"}),t.initData(t.tourName.trim())},function(e){t.$notify({message:e,type:"error"})}),this.addAdminGroupTourDialog=!1},updateAdminGroupTour:function(t){this.$store.commit("setTranstionFalse"),this.updateAdminGroupTourDialog=!0,this.$store.commit("initUpdateAdminGroupTourObj",t)},updateAdminGroupTourSubmit:function(t){var e=this,i={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:{ii_ID:t,ii_ItemName:this.updateAdminGroupTourObj.ii_ItemName,ii_Remark:this.updateAdminGroupTourObj.ii_Remark}};this.$store.dispatch("UpdateAdminGroupTour",i).then(function(){e.$notify({message:"修改成功!",type:"success"}),e.initData(e.tourName.trim())},function(t){e.$notify({message:t,type:"error"})}),this.updateAdminGroupTourDialog=!1},deleteAdminGroupTour:function(t){var e=this,i={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",ID:t};this.$store.dispatch("DeleteAdminGroupTour",i).then(function(){e.$notify({message:"删除成功!",type:"success"}),e.initData(e.tourName.trim())},function(t){e.$notify({message:t,type:"error"})})}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("section",{attrs:{id:"wrap"}},[i("h1",{staticClass:"userClass"},[t._v("跟团游栏目信息")]),t._v(" "),i("el-col",{staticClass:"formSearch",attrs:{span:24}},[i("el-form",{attrs:{inline:!0}},[i("el-form-item",[i("span",[t._v("栏目名称筛选:")])]),t._v(" "),i("el-form-item",[i("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"栏目名称"},model:{value:t.tourName,callback:function(e){t.tourName=e},expression:"tourName"}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.addAdminGroupTour}},[t._v("新增")])],1)],1)],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:t.groupTourList,"highlight-current-row":""}},[i("el-table-column",{attrs:{label:"栏目编码",align:"center",prop:"ii_ID"}}),t._v(" "),i("el-table-column",{attrs:{label:"栏目名称",align:"center",prop:"ii_ItemName"}}),t._v(" "),i("el-table-column",{attrs:{label:"备注",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-popover",{ref:"popover1",attrs:{placement:"top-start",width:"200",trigger:"hover",content:e.row.ii_Remark}}),t._v(" "),i("el-button",{directives:[{name:"popover",rawName:"v-popover:popover1",arg:"popover1"}],attrs:{size:"small"}},[t._v("移入查看")])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini"},on:{click:function(i){t.updateAdminGroupTour(e.row.ii_ID)}}},[t._v("修改\n          ")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){t.deleteAdminGroupTour(e.row.ii_ID)}}},[t._v("删除\n          ")])]}}])})],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"添加跟团游栏目",visible:t.addAdminGroupTourDialog},on:{"update:visible":function(e){t.addAdminGroupTourDialog=e}}},[i("el-form",{attrs:{model:t.addOptions}},[i("el-form-item",{attrs:{label:"栏目名称:","label-width":t.formLabelWidth}},[i("el-input",{attrs:{placeholder:"请输入栏目名称"},model:{value:t.addOptions.data.ii_ItemName,callback:function(e){t.$set(t.addOptions.data,"ii_ItemName",e)},expression:"addOptions.data.ii_ItemName"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"备注:","label-width":t.formLabelWidth}},[i("el-input",{attrs:{placeholder:"请输入内容",type:"textarea",autosize:{minRows:6,maxRows:10}},model:{value:t.addOptions.data.ii_Remark,callback:function(e){t.$set(t.addOptions.data,"ii_Remark",e)},expression:"addOptions.data.ii_Remark"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.addAdminGroupTourDialog=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.addAdminGroupTourSubmit}},[t._v("确 定")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"修改跟团游栏目",visible:t.updateAdminGroupTourDialog},on:{"update:visible":function(e){t.updateAdminGroupTourDialog=e}}},[i("el-form",{attrs:{model:t.updateAdminGroupTourObj}},[i("el-form-item",{attrs:{label:"栏目名称:","label-width":t.formLabelWidth}},[i("el-input",{attrs:{placeholder:"请输入栏目名称"},model:{value:t.updateAdminGroupTourObj.ii_ItemName,callback:function(e){t.$set(t.updateAdminGroupTourObj,"ii_ItemName",e)},expression:"updateAdminGroupTourObj.ii_ItemName"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"备注:","label-width":t.formLabelWidth}},[i("el-input",{attrs:{placeholder:"请输入内容",type:"textarea",autosize:{minRows:6,maxRows:10}},model:{value:t.updateAdminGroupTourObj.ii_Remark,callback:function(e){t.$set(t.updateAdminGroupTourObj,"ii_Remark",e)},expression:"updateAdminGroupTourObj.ii_Remark"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.updateAdminGroupTourDialog=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.updateAdminGroupTourSubmit(t.updateAdminGroupTourObj.ii_ID)}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]},n=i("VU/8")(a,r,!1,function(t){i("wQBr")},"data-v-5fe3dc18",null);e.default=n.exports}});