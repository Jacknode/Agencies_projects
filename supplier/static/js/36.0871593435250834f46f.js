webpackJsonp([36],{Yxgp:function(t,e){},mMSC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("//Fk"),l=a.n(i),s=a("NYxO"),o={computed:Object(s.b)(["ticketTypeList","ticketAttractionsList","updateTicketTypeObj"]),data:function(){return{loginId:"",siteId:"",total:0,addDialog:!1,formLabelWidth:"120px",addOptions:{tm_ts_Code:"",tm_tt_Name:"",tm_tt_TradeInfoID:"",tm_tt_HelpCode:"",tm_tt_Image:"",tm_tt_Description:"",tm_tt_ExpireDay:"",tm_tt_BeforeTime:"",tm_tt_Remark:"",tm_tt_TicketPrice:"",tm_tt_RealPrice:""},ImageURL:[],updateDialog:!1}},methods:{uploadImg:function(t){return new l.a(function(e,a){lrz(t).then(function(t){e(t.base64.split(",")[1])})})},uploaNode:function(){var t=this;setTimeout(function(){t.$refs.upload&&t.$refs.upload.addEventListener("change",function(e){for(var a=0;a<t.$refs.upload.files.length;a++)t.uploadImg(t.$refs.upload.files[a]).then(function(e){t.$store.dispatch("uploadAdminImgs",{imageData:e}).then(function(e){e?t.ImageURL.push(e.data):t.$notify({message:"图片地址不存在!",type:"error"})})})})},30)},initTicketAttraction:function(){var t={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",tm_ts_Code:"",tm_ts_Name:"",tm_ts_TradeInfoID:this.loginId.sm_ai_ID,tm_ts_IsDelete:0,tm_ts_IsPass:"",tm_ts_ShowTop:"",tm_ts_IsHot:"",tm_ts_ThemeTypeID:"",page:1,rows:5};this.$store.dispatch("initTicketAttractions",t)},handleCurrentChange:function(t){this.initData("",t)},initData:function(t,e){var a=this,i={loginUserID:"huileyou",loginUserPass:"123",tm_ts_Code:t||"",tm_tt_TradeInfoID:this.loginId.sm_ai_ID,tm_tt_IsDelete:0,page:e||1,rows:5};this.$store.dispatch("initTicketType",i).then(function(t){a.total=t},function(t){a.$notify({message:t,type:"error"})})},search:function(){this.initData(this.siteId)},Add:function(){this.ImageURL=[],this.$store.commit("setTranstionFalse"),this.addDialog=!0,this.uploaNode()},addSubmit:function(){var t=this;this.addOptions.tm_tt_TradeInfoID=this.loginId.sm_ai_ID,this.addOptions.tm_tt_Image=this.ImageURL.join(",");var e={loginUserID:"huileyou",loginUserPass:"123",data:this.addOptions};this.$store.dispatch("addTicketTypeSubmit",e).then(function(e){t.$notify({message:e,type:"success"}),t.initData()},function(e){t.$notify({message:e,type:"error"})}),this.addDialog=!1},update:function(t){this.ImageURL=[],this.$store.commit("setTranstionFalse"),this.$store.commit("updateTicketType",t),this.updateDialog=!0,this.uploaNode()},updateSubmit:function(){var t=this;this.ImageURL.length?this.updateTicketTypeObj.tm_tt_Image=this.ImageURL.join(","):this.updateTicketTypeObj.tm_tt_Image=this.updateTicketTypeObj.tm_tt_Image.join(",");var e={loginUserID:"huileyou",loginUserPass:"123",data:this.updateTicketTypeObj};this.$store.dispatch("updateTicketTypeSubmit",e).then(function(e){t.$notify({message:e,type:"success"}),t.initData()},function(e){t.$notify({message:e,type:"error"})}),this.updateDialog=!1},deleteTicketType:function(t){var e=this,a={loginUserID:"huileyou",loginUserPass:"123",data:{tm_tt_ID:t}};this.$store.dispatch("deleteTicketType",a).then(function(t){e.$notify({message:t,type:"success"}),e.initData()},function(t){e.$notify({message:t,type:"error"})})}},created:function(){this.loginId=JSON.parse(sessionStorage.getItem("admin")),this.initTicketAttraction(),this.initData()}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"clearfix",attrs:{id:"wrap"}},[a("h1",{staticClass:"userClass"},[t._v("票种")]),t._v(" "),a("el-col",{staticClass:"formSearch",attrs:{span:24}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",[a("span",[t._v("票种编码筛选:")])]),t._v(" "),a("el-form-item",[a("el-input",{model:{value:t.siteId,callback:function(e){t.siteId=e},expression:"siteId"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.Add}},[t._v("新增")])],1)],1)],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.ticketTypeList}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"票种编码"}},[a("span",[t._v(t._s(e.row.tm_tt_ID))])]),t._v(" "),a("el-form-item",{attrs:{label:"景点名称"}},[a("span",[t._v(t._s(e.row.tm_ts_Name))])]),t._v(" "),a("el-form-item",{attrs:{label:"票种名称"}},[a("span",[t._v(t._s(e.row.tm_tt_Name))])]),t._v(" "),a("el-form-item",{attrs:{label:"商户编码"}},[a("span",[t._v(t._s(e.row.tm_tt_TradeInfoID))])]),t._v(" "),a("el-form-item",{attrs:{label:"票种助记码"}},[a("span",[t._v(t._s(e.row.tm_tt_HelpCode))])]),t._v(" "),a("el-form-item",{attrs:{label:"票种图片"}},t._l(e.row.tm_tt_Image,function(t,e){return a("img",{key:e,attrs:{src:t,alt:"",width:"300",height:"150"}})})),t._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("span",[t._v(t._s(e.row.tm_tt_Description))])]),t._v(" "),a("el-form-item",{attrs:{label:"允许超过天数"}},[a("span",[t._v(t._s(e.row.tm_tt_ExpireDay)+"天")])]),t._v(" "),a("el-form-item",{attrs:{label:"提前预定时间"}},[a("span",[t._v(t._s(e.row.tm_tt_BeforeTime)+"分钟")])]),t._v(" "),a("el-form-item",{attrs:{label:"票价"}},[a("span",[t._v(t._s(e.row.tm_tt_TicketPrice)+"元")])]),t._v(" "),a("el-form-item",{attrs:{label:"实际价格"}},[a("span",[t._v(t._s(e.row.tm_tt_RealPrice)+"元")])]),t._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("span",[t._v(t._s(e.row.tm_tt_Remark))])])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"票种编码",prop:"tm_tt_ID"}}),t._v(" "),a("el-table-column",{attrs:{label:"票种名称",prop:"tm_tt_Name"}}),t._v(" "),a("el-table-column",{attrs:{label:"景点名称",prop:"tm_ts_Name"}}),t._v(" "),a("el-table-column",{attrs:{label:"实际价格",prop:"tm_tt_RealPrice"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.update(e.row.tm_tt_ID)}}},[t._v("修改\n          ")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.deleteTicketType(e.row.tm_tt_ID)}}},[t._v("删除\n          ")])]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:"添加票种信息",visible:t.addDialog},on:{"update:visible":function(e){t.addDialog=e}}},[a("el-form",{attrs:{model:t.addOptions}},[a("el-form-item",{attrs:{label:"票种名称:","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.addOptions.tm_tt_Name,callback:function(e){t.$set(t.addOptions,"tm_tt_Name",e)},expression:"addOptions.tm_tt_Name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"景点名称:","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.addOptions.tm_ts_Code,callback:function(e){t.$set(t.addOptions,"tm_ts_Code",e)},expression:"addOptions.tm_ts_Code"}},t._l(t.ticketAttractionsList,function(t){return a("el-option",{key:t.tm_ts_Code,attrs:{label:t.tm_ts_Name,value:t.tm_ts_Code}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"票种助记码:","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.addOptions.tm_tt_HelpCode,callback:function(e){t.$set(t.addOptions,"tm_tt_HelpCode",e)},expression:"addOptions.tm_tt_HelpCode"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"票种图片:","label-width":t.formLabelWidth}},[a("a",{staticClass:"file",attrs:{href:"javascript:;"}},[t._v("上传文件\n            "),a("input",{ref:"upload",attrs:{type:"file",name:"",accept:"image/*",multiple:""}})]),t._v(" "),t._l(t.ImageURL,function(e){return a("img",{directives:[{name:"show",rawName:"v-show",value:t.ImageURL.length,expression:"ImageURL.length"}],staticStyle:{display:"block"},attrs:{src:e,width:"280",height:"125"}})})],2),t._v(" "),a("el-form-item",{attrs:{label:"描述:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.addOptions.tm_tt_Description,callback:function(e){t.$set(t.addOptions,"tm_tt_Description",e)},expression:"addOptions.tm_tt_Description"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"允许超过天数:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入数字"},model:{value:t.addOptions.tm_tt_ExpireDay,callback:function(e){t.$set(t.addOptions,"tm_tt_ExpireDay",e)},expression:"addOptions.tm_tt_ExpireDay"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"提前预定时间:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入分钟数且为数字"},model:{value:t.addOptions.tm_tt_BeforeTime,callback:function(e){t.$set(t.addOptions,"tm_tt_BeforeTime",e)},expression:"addOptions.tm_tt_BeforeTime"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"备注:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.addOptions.tm_tt_Remark,callback:function(e){t.$set(t.addOptions,"tm_tt_Remark",e)},expression:"addOptions.tm_tt_Remark"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"票价:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入数字"},model:{value:t.addOptions.tm_tt_TicketPrice,callback:function(e){t.$set(t.addOptions,"tm_tt_TicketPrice",e)},expression:"addOptions.tm_tt_TicketPrice"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"实际价格:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入数字"},model:{value:t.addOptions.tm_tt_RealPrice,callback:function(e){t.$set(t.addOptions,"tm_tt_RealPrice",e)},expression:"addOptions.tm_tt_RealPrice"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addDialog=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.addSubmit}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"修改票种信息",visible:t.updateDialog},on:{"update:visible":function(e){t.updateDialog=e}}},[a("el-form",{attrs:{model:t.updateTicketTypeObj}},[a("el-form-item",{attrs:{label:"票种名称:","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.updateTicketTypeObj.tm_tt_Name,callback:function(e){t.$set(t.updateTicketTypeObj,"tm_tt_Name",e)},expression:"updateTicketTypeObj.tm_tt_Name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"景点编码:","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.updateTicketTypeObj.tm_ts_Code,callback:function(e){t.$set(t.updateTicketTypeObj,"tm_ts_Code",e)},expression:"updateTicketTypeObj.tm_ts_Code"}},t._l(t.ticketAttractionsList,function(t){return a("el-option",{key:t.tm_ts_Code,attrs:{label:t.tm_ts_Name,value:t.tm_ts_Code}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"票种助记码:","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.updateTicketTypeObj.tm_tt_HelpCode,callback:function(e){t.$set(t.updateTicketTypeObj,"tm_tt_HelpCode",e)},expression:"updateTicketTypeObj.tm_tt_HelpCode"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"票种图片:","label-width":t.formLabelWidth}},[a("a",{staticClass:"file",attrs:{href:"javascript:;"}},[t._v("上传文件\n            "),a("input",{ref:"upload",attrs:{type:"file",name:"",accept:"image/*",multiple:""}})]),t._v(" "),t._l(t.updateTicketTypeObj.tm_tt_Image,function(e,i){return t.updateTicketTypeObj.tm_tt_Image.length&&!t.ImageURL.length?a("img",{staticStyle:{display:"block"},attrs:{src:e,width:"280",height:"125"}}):t._e()}),t._v(" "),t._l(t.ImageURL,function(e,i){return a("img",{directives:[{name:"show",rawName:"v-show",value:t.ImageURL.length,expression:"ImageURL.length"}],staticStyle:{display:"block"},attrs:{src:e,width:"280",height:"125"}})})],2),t._v(" "),a("el-form-item",{attrs:{label:"描述:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.updateTicketTypeObj.tm_tt_Description,callback:function(e){t.$set(t.updateTicketTypeObj,"tm_tt_Description",e)},expression:"updateTicketTypeObj.tm_tt_Description"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"允许超过天数:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入数字"},model:{value:t.updateTicketTypeObj.tm_tt_ExpireDay,callback:function(e){t.$set(t.updateTicketTypeObj,"tm_tt_ExpireDay",e)},expression:"updateTicketTypeObj.tm_tt_ExpireDay"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"提前预定时间:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入分钟数且为数字"},model:{value:t.updateTicketTypeObj.tm_tt_BeforeTime,callback:function(e){t.$set(t.updateTicketTypeObj,"tm_tt_BeforeTime",e)},expression:"updateTicketTypeObj.tm_tt_BeforeTime"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"备注:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.updateTicketTypeObj.tm_tt_Remark,callback:function(e){t.$set(t.updateTicketTypeObj,"tm_tt_Remark",e)},expression:"updateTicketTypeObj.tm_tt_Remark"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"票价:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入数字"},model:{value:t.updateTicketTypeObj.tm_tt_TicketPrice,callback:function(e){t.$set(t.updateTicketTypeObj,"tm_tt_TicketPrice",e)},expression:"updateTicketTypeObj.tm_tt_TicketPrice"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"实际价格:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入数字"},model:{value:t.updateTicketTypeObj.tm_tt_RealPrice,callback:function(e){t.$set(t.updateTicketTypeObj,"tm_tt_RealPrice",e)},expression:"updateTicketTypeObj.tm_tt_RealPrice"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.updateDialog=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.updateSubmit}},[t._v("确 定")])],1)],1),t._v(" "),a("div",{staticClass:"block",staticStyle:{float:"right"}},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],attrs:{"page-size":5,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)])},staticRenderFns:[]},n=a("VU/8")(o,r,!1,function(t){a("Yxgp")},"data-v-50268000",null);e.default=n.exports}});