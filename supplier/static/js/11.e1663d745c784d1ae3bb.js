webpackJsonp([11],{"7f5L":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("NYxO"),s={name:"",data:function(){return{formLabelWidth:"120px",total:0,siteName:"",isLoading:!1,addDialog:!1,updateDialog:!1,addOptions:{loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:{tm_se_Code:"",tm_se_Name:"",tm_se_HandX:"",tm_se_HandY:"",tm_se_Vedio:"",tm_se_Sound:"",tm_se_Intro:"",tm_se_Image:"",tm_se_Remark:""}},fileList:[]}},computed:Object(i.b)(["ticketMapList"]),created:function(){this.id=this.$route.query.id,this.initData()},methods:{upload:function(t){var e=this,a=new FormData;a.append("fileToUpload",t.file);var i=new XMLHttpRequest;i.open("POST","http://image.1000da.com.cn/PostImage/PostFile"),i.send(a),i.onreadystatechange=function(){if(4==i.readyState&&200==i.status){var a=JSON.parse(i.responseText);e.fileList.push({url:a.data}),t.onSuccess("配时文件上传成功"),console.log(a)}}},handleRemove:function(t){this.fileList=this.fileList.filter(function(e){return e.uid!=t.uid})},handleCurrentChange:function(t){this.initData(this.siteName,t)},initData:function(t,e){var a=this,i={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",tm_se_ID:"",tm_se_Code:this.id,tm_se_Name:t||"",page:e||1,rows:5};this.isLoading=!0,this.$store.dispatch("initTicketMap",i).then(function(t){a.total=t,a.isLoading=!1},function(t){a.$notify({message:t,type:"error"})})},search:function(){this.initData(this.siteName)},Add:function(){this.$store.commit("setTranstionFalse"),this.addDialog=!0}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clearfix",attrs:{id:"wrap"}},[a("h1",{staticClass:"userClass"},[t._v("导览信息")]),t._v(" "),a("el-col",{staticClass:"formSearch",attrs:{span:24}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",[a("span",[t._v("导览名称筛选:")])]),t._v(" "),a("el-form-item",[a("el-input",{attrs:{size:"small"},model:{value:t.siteName,callback:function(e){t.siteName=e},expression:"siteName"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.search}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.Add}},[t._v("新增")])],1)],1)],1),t._v(" "),a("div",{staticClass:"block",staticStyle:{float:"right"}},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],attrs:{"page-size":5,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:"添加地图坐标信息",visible:t.addDialog},on:{"update:visible":function(e){t.addDialog=e}}},[a("el-form",{attrs:{model:t.addOptions}},[a("el-form-item",{attrs:{label:"小景点名称:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addOptions.tm_se_Name,callback:function(e){t.$set(t.addOptions,"tm_se_Name",e)},expression:"addOptions.tm_se_Name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"小景点图片:","label-width":t.formLabelWidth}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"string","on-remove":t.handleRemove,"file-list":t.fileList,"http-request":t.upload,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addDialog=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addDialog=!1}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]},l=a("VU/8")(s,o,!1,function(t){a("iHk+")},null,null);e.default=l.exports},"iHk+":function(t,e){}});