webpackJsonp([25],{Hts8:function(e,t){},yAJA:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("NYxO"),o={name:"",data:function(){return{commentsName:"",isLoading:!1,addDialog:!1,updateDialog:!1,formLabelWidth:"120px"}},computed:Object(n.b)(["adminCommentsTypeList"]),methods:{initData:function(e){if(!e){var t={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",commentID:""};this.$store.dispatch("initAdminCommentsType",t)}},search:function(){this.initData(this.commentsName)},addAdminCommentsType:function(){}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"clearfix",attrs:{id:"wrap"}},[a("h1",{staticClass:"userClass"},[e._v("评论类型")]),e._v(" "),a("el-col",{staticClass:"formSearch",attrs:{span:24}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",[a("span",[e._v("评论类型筛选:")])]),e._v(" "),a("el-form-item",[a("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"请输入评论类型名称"},model:{value:e.commentsName,callback:function(t){e.commentsName=t},expression:"commentsName"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.addAdminCommentsType}},[e._v("添加")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:e.adminCommentsTypeList}},[a("el-table-column",{attrs:{prop:"ts_ct_ID",align:"center",label:"类型编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ts_ct_Type",align:"center",label:"类型名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ts_ct_Score",align:"center",label:"分数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ts_ct_CommentID",align:"center",label:"评论编码"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"内容"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{ref:"popover1",attrs:{placement:"top-start",width:"200",trigger:"hover",content:t.row.ts_ct_Content}}),e._v(" "),a("el-button",{directives:[{name:"popover",rawName:"v-popover:popover1",arg:"popover1"}]},[e._v("移入查看")])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"备注"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{ref:"popover1",attrs:{placement:"top-start",width:"200",trigger:"hover",content:t.row.ts_ct_Remark}}),e._v(" "),a("el-button",{directives:[{name:"popover",rawName:"v-popover:popover1",arg:"popover1"}]},[e._v("移入查看")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.updateAdminSystemMenu(t.row.sm_si_ID)}}},[e._v("修改\n        ")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.deleteAdminSystemMenu(t.row.sm_si_ID)}}},[e._v("删除\n        ")])]}}])})],1)],1)},staticRenderFns:[]},l=a("VU/8")(o,r,!1,function(e){a("Hts8")},"data-v-7026ea1e",null);t.default=l.exports}});