webpackJsonp([20],{BT6x:function(a,e){},QCKl:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t("//Fk"),i=t.n(s),l=t("NYxO"),o={name:"",data:function(){return{userInfo:{},loginUserID:"huileyou",isOff:!0,value:0,isShow:!0,isShow1:!0,ImageURL:[],ImageURL1:[],isLoading:!1,total:0,formLabelWidth:"120px",adApply:"",addDialog:!1,updateDialog:!1,addOptions:{loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:{sm_aa_AdviertiseTypeID:"",sm_aa_LocationID:"",sm_aa_AgentID:this.userInfo,sm_aa_Image:"",sm_aa_Describe:"",sm_aa_ProductID:"",sm_aa_OperateCode:"",sm_aa_FailedReason:"",sm_aa_Remark:""}},passOptions:[{value:"3",label:"审核中"},{value:"1",label:"通过"},{value:"2",label:"不通过"}],updatePassOptions:[{value:"3",label:"审核中"},{value:"1",label:"通过"},{value:"2",label:"不通过"}]}},computed:Object(l.b)(["adTypeApplyAllList","adApplyList","updateAdApplyObj","adPositionAllList"]),created:function(){this.userInfo=JSON.parse(sessionStorage.getItem("admin")).sm_ai_AgentID,this.initData(),this.adPositionAll(),this.initAdTypeAllList()},methods:{initData:function(){var a=this,e={loginUserID:this.loginUserID,loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",sm_aa_ID:"",sm_aa_AdviertiseTypeID:"",sm_aa_LocationID:"",sm_aa_AgentID:"",sm_aa_Image:"",sm_aa_Describe:"",sm_aa_ProductID:"",sm_aa_CreateTime:"",sm_aa_PassState:"",sm_aa_PassTime:"",sm_aa_OperateCode:"",sm_aa_FailedReason:"",sm_aa_Remark:""};this.isLoading=!0,this.$store.dispatch("initAdApply",e).then(function(e){a.total=e,a.isLoading=!1},function(e){a.$notify({message:e,type:"error"})})},adPositionAll:function(){var a=this;this.$store.dispatch("initAdPositionAll",{loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",sm_pi_ID:"",sm_pi_LocationNo:"",sm_pi_MaxNo:"",sm_pi_Name:"",sm_pi_Remark:""}).then(function(e){a.total=e,a.isLoading=!1},function(e){a.$notify({message:e,type:"error"})})},initAdTypeAllList:function(){var a=this;this.$store.dispatch("initAdTypeAllList",{loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",sm_at_ID:"",sm_at_Name:"",sm_at_CreateTime:"",sm_at_Cost:"",sm_at_Remark:"",page:1,rows:10}).then(function(e){a.total=e,a.isLoading=!1},function(e){a.$notify({message:e,type:"error"})})},search:function(){this.initData()},Add:function(){var a=this.addOptions.data;for(var e in a)a[e]="";this.addDialog=!0,this.$store.commit("setTranstionFalse"),this.uploaNode()},addSubmit:function(){var a=this;this.addOptions.data.sm_aa_Image=this.ImageURL.join(","),this.$store.dispatch("AddAdApply",this.addOptions).then(function(e){a.$notify({message:e,type:"success"}),a.initData()},function(e){a.$notify({message:e,type:"error"})}),this.addDialog=!1},OnChange:function(){1==this.addOptions.data.sm_aa_PassState?this.isShow=!1:this.isShow=!0},OnChangeUpdate:function(){1==this.updateAdApplyObj.sm_aa_PassState?this.isShow1=!1:this.isShow1=!0},uploadImg:function(a){return new i.a(function(e,t){lrz(a).then(function(a){e(a.base64.split(",")[1])})})},uploaNode:function(){var a=this;this.ImageURL=[],this.ImageURL1=[],setTimeout(function(){a.$refs.upload&&a.$refs.upload.addEventListener("change",function(e){for(var t=0;t<a.$refs.upload.files.length;t++)a.uploadImg(a.$refs.upload.files[t]).then(function(e){a.$store.dispatch("adApplyUploadAdminImgs",{imageData:e}).then(function(e){e?a.ImageURL.push(e.data):a.$notify({message:"图片地址不存在!",type:"error"})})})}),a.$refs.upload1&&a.$refs.upload1.addEventListener("change",function(e){for(var t=0;t<a.$refs.upload1.files.length;t++)a.uploadImg(a.$refs.upload1.files[t]).then(function(e){a.$store.dispatch("adApplyUploadAdminImgs",{imageData:e}).then(function(e){e?a.ImageURL1.push(e.data):a.$notify({message:"图片地址不存在!",type:"error"})})})})},30)},Update:function(a){this.updateDialog=!0,this.$store.commit("setTranstionFalse"),this.$store.commit("initUpdateAdApply",a),this.updateAdApplyObj.sm_aa_PassState="",this.uploaNode()},updateAdApplySubmit:function(){var a=this,e={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:{sm_aa_ID:this.updateAdApplyObj.sm_aa_ID,sm_aa_AdviertiseTypeID:this.updateAdApplyObj.sm_aa_AdviertiseTypeID,sm_aa_LocationID:this.updateAdApplyObj.sm_aa_LocationID,sm_aa_AgentID:this.userInfo,sm_aa_Image:this.updateAdApplyObj.sm_aa_Image,sm_aa_Describe:this.updateAdApplyObj.sm_aa_Describe,sm_aa_ProductID:this.updateAdApplyObj.sm_aa_ProductID,sm_aa_PassState:this.updateAdApplyObj.sm_aa_PassState,sm_aa_OperateCode:this.updateAdApplyObj.sm_aa_OperateCode,sm_aa_FailedReason:this.updateAdApplyObj.sm_aa_FailedReason,sm_aa_Remark:this.updateAdApplyObj.sm_aa_Remark}};console.log(e),e.data.sm_aa_Image=this.ImageURL1.join(","),this.$store.dispatch("UpdateAdApplyObj",e).then(function(e){a.$notify({message:e,type:"success"}),a.initData(a.adApply)},function(e){a.$notify({message:e,type:"error"})}),this.updateDialog=!1},Delete:function(a){var e=this,t={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:{sm_aa_ID:a}};this.$store.dispatch("DeleteAdApply",t).then(function(a){e.$notify({message:a,type:"success"}),e.initData(e.adApply)},function(a){e.$notify({message:a,type:"error"})})}}},r={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("section",{attrs:{id:"wrap"}},[t("h1",{staticClass:"userClass"},[a._v("广告申请管理")]),a._v(" "),t("el-col",{staticClass:"formSearch",attrs:{span:24}},[t("el-form",{attrs:{inline:!0}},[t("el-form-item",[t("el-button",{attrs:{type:"primary",size:"small"},on:{click:a.search}},[a._v("查询")]),a._v(" "),t("el-button",{attrs:{type:"primary",size:"small"},on:{click:a.Add}},[a._v("新增")])],1)],1)],1),a._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:a.adApplyList}},[t("el-table-column",{attrs:{type:"expand"},scopedSlots:a._u([{key:"default",fn:function(e){return[t("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[t("el-form-item",{attrs:{label:"申请广告编码"}},[t("span",[a._v(a._s(e.row.sm_aa_ID))])]),a._v(" "),t("el-form-item",{attrs:{label:"位置信息编码"}},[t("span",[a._v(a._s(e.row.sm_aa_LocationID))])]),a._v(" "),t("el-form-item",{attrs:{label:"广告类型编码 ID"}},[t("span",[a._v(a._s(e.row.sm_aa_AdviertiseTypeID))])]),a._v(" "),t("el-form-item",{attrs:{label:"供应商编码 ID"}},[t("span",[a._v(a._s(e.row.sm_aa_AgentID))])]),a._v(" "),t("el-form-item",{attrs:{label:"广告图片"}},a._l(e.row.sm_aa_Images,function(a){return t("img",{attrs:{src:a,width:"80",height:"50",alt:""}})})),a._v(" "),t("el-form-item",{attrs:{label:"广告描述"}},[t("span",[a._v(a._s(e.row.sm_aa_Describe))])]),a._v(" "),t("el-form-item",{attrs:{label:"产品ID"}},[t("span",[a._v(a._s(e.row.sm_aa_ProductID))])]),a._v(" "),t("el-form-item",{attrs:{label:"创建时间"}},[t("span",[a._v(a._s(a._f("getNewDate")(e.row.sm_aa_CreateTime)))])]),a._v(" "),t("el-form-item",{attrs:{label:"审核时间"}},[t("span",[a._v(a._s(a._f("getNewDate")(e.row.sm_aa_PassTime)))])]),a._v(" "),t("el-form-item",{attrs:{label:"审核状态"}},[t("span",[a._v(a._s(a._f("getAdApplyPass")(e.row.sm_aa_PassState)))])]),a._v(" "),t("el-form-item",{attrs:{label:"审核失败原因"}},[t("span",[a._v(a._s(e.row.sm_aa_FailedReason))])]),a._v(" "),t("el-form-item",{attrs:{label:"备注"}},[t("span",[a._v(a._s(e.row.sm_aa_Remark))])])],1)]}}])}),a._v(" "),t("el-table-column",{attrs:{label:"申请广告编码",prop:"sm_aa_ID"}}),a._v(" "),t("el-table-column",{attrs:{label:"审核时间",prop:"sm_aa_PassTime"},scopedSlots:a._u([{key:"default",fn:function(e){return[t("span",[a._v(a._s(a._f("getNewDate")(e.row.sm_aa_PassTime)))])]}}])}),a._v(" "),t("el-table-column",{attrs:{label:"审核状态",prop:"sm_aa_PassState"},scopedSlots:a._u([{key:"default",fn:function(e){return[t("span",[a._v(a._s(a._f("getAdApplyPass")(e.row.sm_aa_PassState)))])]}}])}),a._v(" "),t("el-table-column",{attrs:{label:"备注",prop:"sm_aa_Remark"}}),a._v(" "),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:a._u([{key:"default",fn:function(e){return[t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){a.Update(e.row.sm_aa_ID)}}},[a._v("修改\n            ")]),a._v(" "),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){a.Delete(e.row.sm_aa_ID)}}},[a._v("删除\n            ")])]}}])})],1),a._v(" "),t("el-dialog",{attrs:{title:"添加广告申请",visible:a.addDialog},on:{"update:visible":function(e){a.addDialog=e}}},[t("el-form",{attrs:{model:a.addOptions}},[t("el-form-item",{attrs:{label:"广告类型名称:","label-width":a.formLabelWidth}},[t("el-select",{attrs:{placeholder:"请选择广告类型名称"},model:{value:a.addOptions.data.sm_aa_AdviertiseTypeID,callback:function(e){a.$set(a.addOptions.data,"sm_aa_AdviertiseTypeID",e)},expression:"addOptions.data.sm_aa_AdviertiseTypeID"}},a._l(a.adTypeApplyAllList,function(a){return t("el-option",{key:a.sm_at_ID,attrs:{label:a.sm_at_Name,value:a.sm_at_ID}})}))],1),a._v(" "),t("el-form-item",{attrs:{label:"位置信息:","label-width":a.formLabelWidth}},[t("el-select",{attrs:{placeholder:"请选择位置信息"},model:{value:a.addOptions.data.sm_aa_LocationID,callback:function(e){a.$set(a.addOptions.data,"sm_aa_LocationID",e)},expression:"addOptions.data.sm_aa_LocationID"}},a._l(a.adPositionAllList,function(a){return t("el-option",{key:a.sm_pi_ID,attrs:{label:a.sm_pi_Name,value:a.sm_pi_ID}})}))],1),a._v(" "),t("el-form-item",{attrs:{label:"广告图片:","label-width":a.formLabelWidth}},[t("a",{staticClass:"file",attrs:{href:"javascript:;"}},[a._v("推荐类型图片上传\n            "),t("input",{ref:"upload",attrs:{type:"file",name:"",accept:"image/*",multiple:""}})]),a._v(" "),a._l(a.ImageURL,function(e){return t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"item"},{name:"show",rawName:"v-show",value:a.ImageURL.length,expression:"ImageURL.length"}],staticStyle:{width:"100px",height:"100px"},attrs:{src:"",alt:""}})})],2),a._v(" "),t("el-form-item",{attrs:{label:"广告描述:","label-width":a.formLabelWidth}},[t("el-input",{attrs:{placeholder:"广告描述"},model:{value:a.addOptions.data.sm_aa_Describe,callback:function(e){a.$set(a.addOptions.data,"sm_aa_Describe",e)},expression:"addOptions.data.sm_aa_Describe"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"产品ID:","label-width":a.formLabelWidth}},[t("el-input",{attrs:{placeholder:"产品ID"},model:{value:a.addOptions.data.sm_aa_ProductID,callback:function(e){a.$set(a.addOptions.data,"sm_aa_ProductID",e)},expression:"addOptions.data.sm_aa_ProductID"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"审核员编码:","label-width":a.formLabelWidth}},[t("el-input",{attrs:{placeholder:"审核员编码"},model:{value:a.addOptions.data.sm_aa_OperateCode,callback:function(e){a.$set(a.addOptions.data,"sm_aa_OperateCode",e)},expression:"addOptions.data.sm_aa_OperateCode"}})],1),a._v(" "),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:a.isShow,expression:"isShow"}],attrs:{label:"审核失败原因:","label-width":a.formLabelWidth}},[t("el-input",{attrs:{placeholder:"审核失败原因"},model:{value:a.addOptions.data.sm_aa_FailedReason,callback:function(e){a.$set(a.addOptions.data,"sm_aa_FailedReason",e)},expression:"addOptions.data.sm_aa_FailedReason"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"备注:","label-width":a.formLabelWidth}},[t("el-input",{attrs:{placeholder:"请输入备注",type:"textarea"},model:{value:a.addOptions.data.sm_aa_Remark,callback:function(e){a.$set(a.addOptions.data,"sm_aa_Remark",e)},expression:"addOptions.data.sm_aa_Remark"}})],1)],1),a._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(e){a.addDialog=!1}}},[a._v("取 消")]),a._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:a.addSubmit}},[a._v("确 定")])],1)],1),a._v(" "),t("el-dialog",{attrs:{title:"修改广告申请",visible:a.updateDialog},on:{"update:visible":function(e){a.updateDialog=e}}},[t("el-form",{attrs:{model:a.updateAdApplyObj}},[t("el-form-item",{attrs:{label:"申请广告编码:","label-width":a.formLabelWidth}},[t("el-input",{attrs:{placeholder:"请输入申请广告编码",disabled:a.isOff},model:{value:a.updateAdApplyObj.sm_aa_ID,callback:function(e){a.$set(a.updateAdApplyObj,"sm_aa_ID",e)},expression:"updateAdApplyObj.sm_aa_ID"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"广告类型名称:","label-width":a.formLabelWidth}},[t("el-select",{attrs:{placeholder:"请选择广告类型名称"},model:{value:a.updateAdApplyObj.sm_aa_AdviertiseTypeID,callback:function(e){a.$set(a.updateAdApplyObj,"sm_aa_AdviertiseTypeID",e)},expression:"updateAdApplyObj.sm_aa_AdviertiseTypeID"}},a._l(a.adTypeApplyAllList,function(a){return t("el-option",{key:a.sm_at_ID,attrs:{label:a.sm_at_Name,value:a.sm_aa_ID}})}))],1),a._v(" "),t("el-form-item",{attrs:{label:"位置信息:","label-width":a.formLabelWidth}},[t("el-select",{attrs:{placeholder:"请选择位置信息"},model:{value:a.updateAdApplyObj.sm_aa_LocationID,callback:function(e){a.$set(a.updateAdApplyObj,"sm_aa_LocationID",e)},expression:"updateAdApplyObj.sm_aa_LocationID"}},a._l(a.adPositionAllList,function(a){return t("el-option",{key:a.sm_aa_LocationID,attrs:{label:a.sm_pi_Name,value:a.sm_aa_LocationID}})}))],1),a._v(" "),t("el-form-item",{attrs:{label:"广告图片:","label-width":a.formLabelWidth}},[t("a",{staticClass:"file",attrs:{href:"javascript:void(0);"}},[a._v("推荐类型图片上传\n            "),t("input",{ref:"upload1",attrs:{type:"file",name:"",accept:"image/*",multiple:""}})]),a._v(" "),a._l(a.ImageURL1,function(e){return t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"item"},{name:"show",rawName:"v-show",value:a.ImageURL1.length,expression:"ImageURL1.length"}],staticStyle:{width:"100px",height:"100px"},attrs:{src:"",alt:""}})})],2),a._v(" "),t("el-form-item",{attrs:{label:"广告描述:","label-width":a.formLabelWidth}},[t("el-input",{attrs:{placeholder:"请输入广告描述"},model:{value:a.updateAdApplyObj.sm_aa_Describe,callback:function(e){a.$set(a.updateAdApplyObj,"sm_aa_Describe",e)},expression:"updateAdApplyObj.sm_aa_Describe"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"产品ID:","label-width":a.formLabelWidth}},[t("el-input",{attrs:{placeholder:"请输入产品ID"},model:{value:a.updateAdApplyObj.sm_aa_ProductID,callback:function(e){a.$set(a.updateAdApplyObj,"sm_aa_ProductID",e)},expression:"updateAdApplyObj.sm_aa_ProductID"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"审核状态:","label-width":a.formLabelWidth}},[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"1","inactive-value":"2","active-text":"通过","inactive-text":"不通过"},on:{change:a.OnChangeUpdate},model:{value:a.updateAdApplyObj.sm_aa_PassState,callback:function(e){a.$set(a.updateAdApplyObj,"sm_aa_PassState",e)},expression:"updateAdApplyObj.sm_aa_PassState"}})],1),a._v(" "),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:a.isShow1,expression:"isShow1"}],attrs:{label:"审核失败原因:","label-width":a.formLabelWidth}},[t("el-input",{attrs:{placeholder:"请输入审核失败原因"},model:{value:a.updateAdApplyObj.sm_aa_FailedReason,callback:function(e){a.$set(a.updateAdApplyObj,"sm_aa_FailedReason",e)},expression:"updateAdApplyObj.sm_aa_FailedReason"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"备注:","label-width":a.formLabelWidth}},[t("el-input",{attrs:{placeholder:"请输入备注",type:"textarea"},model:{value:a.updateAdApplyObj.sm_aa_Remark,callback:function(e){a.$set(a.updateAdApplyObj,"sm_aa_Remark",e)},expression:"updateAdApplyObj.sm_aa_Remark"}})],1)],1),a._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(e){a.updateDialog=!1}}},[a._v("取 消")]),a._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:a.updateAdApplySubmit}},[a._v("确 定")])],1)],1)],1)])},staticRenderFns:[]},n=t("VU/8")(o,r,!1,function(a){t("BT6x")},"data-v-7e8ac20a",null);e.default=n.exports}});