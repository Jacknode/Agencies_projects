webpackJsonp([5],{"7f5L":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("//Fk"),i=a.n(s),o=a("NYxO"),l={name:"",data:function(){return{tableData:[],formLabelWidth:"120px",total:0,siteName:"",isLoading:!1,addDialog:!1,updateDialog:!1,VideoNameObj:"",AudioNews:"",addOptions:{loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:{tm_se_Code:"002",tm_se_Name:"",tm_se_HandX:"",tm_se_HandY:"",tm_se_Vedio:"",tm_se_Sound:"",tm_se_Intro:"",tm_se_Image:"",tm_se_Remark:""}},updateOptions:{loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:{tm_se_ID:"",tm_se_Code:"002",tm_se_Name:"",tm_se_HandX:"",tm_se_HandY:"",tm_se_Vedio:"",tm_se_Sound:"",tm_se_Intro:"",tm_se_Image:"",tm_se_Remark:""}},fileList:[],Imgs:""}},computed:Object(o.b)(["ticketMapList"]),created:function(){this.id=this.$route.query.id,this.initData()},methods:{UpLoadvideo:function(){var t=this,e=new FormData;e.append("fileUploadOss",this.$refs.UpLoad.files[0]),console.log(2331,this.$refs.UpLoad.files[0]);var a=this.$refs.UpLoad.files[0].name,s=new XMLHttpRequest;s.open("POST","http://image.1000da.com.cn/PostImage/PostToOSS"),s.send(e),s.onreadystatechange=function(){if(4==s.readyState&&200==s.status){var e=JSON.parse(s.responseText);t.addOptions.data.tm_se_Vedio=e.data,t.updateOptions.data.tm_se_Vedio=e.data,t.VideoNameObj=a}}},uploadaudio:function(){var t=this,e=new FormData;e.append("fileUpLoad",this.$refs.audio.files[0]);var a=new XMLHttpRequest;a.open("POST","http://image.1000da.com.cn/PostImage/PostFile"),a.send(e),a.onreadystatechange=function(){if(4==a.readyState&&200==a.status){var e=JSON.parse(a.responseText);t.addOptions.data.tm_se_Sound=e.data,t.updateOptions.data.tm_se_Sound=e.data,t.AudioNews="上传成功"}}},uploadToOSS:function(t){return new i.a(function(e,a){var s=new FormData;s.append("fileToUpload",t.file);var i=new XMLHttpRequest;i.open("POST","http://webservice.1000da.com.cn/OSSFile/PostToOSS"),i.send(s),i.onreadystatechange=function(){if(4==i.readyState&&200==i.status){var e=JSON.parse(i.responseText);this.fileList.push({url:e.data}),this.addOptions.data.tm_se_Image=e.data,this.updateOptions.data.tm_se_Image=e.data,t.onSuccess("配时文件上传成功"),console.log(e)}else console.log(i.responseText)}})},handleRemove:function(t){this.fileList=this.fileList.filter(function(e){return e.uid!=t.uid})},handleCurrentChange:function(t){this.initData(this.siteName,t)},initData:function(t,e){var a=this,s={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",tm_se_ID:"",tm_se_Code:"002",tm_se_Name:t||"",page:e||1,rows:"5"};this.isLoading=!0,this.$store.dispatch("initTicketMap",s).then(function(t){a.isLoading=!1,a.total=t},function(t){a.$notify({message:t,type:"error"})})},addMap:function(){var t=this;this.$store.dispatch("addTicketMap",this.addOptions).then(function(e){t.initData()})},deleteMap:function(t){var e=this,a={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:{tm_se_ID:t}};this.$store.dispatch("deleteTicketMap",a).then(function(t){e.initData()})},upDateMap:function(){var t=this;this.$store.dispatch("upDateTicketMap",this.updateOptions).then(function(e){t.initData()})},search:function(){this.initData(this.siteName)},Add:function(){this.$store.commit("setTranstionFalse"),this.addDialog=!0},AddSubmit:function(){this.addMap(),this.addDialog=!1},upDateSubmit:function(){this.upDateMap(),this.updateDialog=!1},Update:function(t){this.updateOptions.data.tm_se_ID=t.tm_se_ID,this.updateOptions.data.tm_se_Name=t.tm_se_Name,this.updateOptions.data.tm_se_HandX=t.tm_se_HandX,this.updateOptions.data.tm_se_HandY=t.tm_se_HandY,this.updateOptions.data.tm_se_Intro=t.tm_se_Intro,this.updateOptions.data.tm_se_Remark=t.tm_se_Remark,this.updateOptions.data.tm_se_Image=t.tm_se_Image,this.updateOptions.data.tm_se_Sound=t.tm_se_Sound,this.updateOptions.data.tm_se_Vedio=t.tm_se_Vedio,this.updateDialog=!0},Delete:function(t){this.deleteMap(t)}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clearfix",attrs:{id:"wrap"}},[a("h1",{staticClass:"userClass"},[t._v("导览信息")]),t._v(" "),a("el-col",{staticClass:"formSearch",attrs:{span:24}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",[a("span",[t._v("导览名称筛选:")])]),t._v(" "),a("el-form-item",[a("el-input",{attrs:{size:"small"},model:{value:t.siteName,callback:function(e){t.siteName=e},expression:"siteName"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.search}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.Add}},[t._v("新增")])],1)],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"添加地图坐标信息",visible:t.addDialog},on:{"update:visible":function(e){t.addDialog=e}}},[a("el-form",{attrs:{model:t.addOptions}},[a("el-form-item",{attrs:{label:"小景点名称:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addOptions.data.tm_se_Name,callback:function(e){t.$set(t.addOptions.data,"tm_se_Name",e)},expression:"addOptions.data.tm_se_Name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"手绘图的横坐标:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addOptions.data.tm_se_HandX,callback:function(e){t.$set(t.addOptions.data,"tm_se_HandX",e)},expression:"addOptions.data.tm_se_HandX"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"手绘图的纵坐标:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addOptions.data.tm_se_HandY,callback:function(e){t.$set(t.addOptions.data,"tm_se_HandY",e)},expression:"addOptions.data.tm_se_HandY"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"小景点介绍:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addOptions.data.tm_se_Intro,callback:function(e){t.$set(t.addOptions.data,"tm_se_Intro",e)},expression:"addOptions.data.tm_se_Intro"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"小景点备注:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addOptions.data.tm_se_Remark,callback:function(e){t.$set(t.addOptions.data,"tm_se_Remark",e)},expression:"addOptions.data.tm_se_Remark"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"小景点图片:","label-width":t.formLabelWidth}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"string","on-remove":t.handleRemove,"file-list":t.fileList,"http-request":t.upload,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"小景点音频:","label-width":t.formLabelWidth}},[a("a",{staticClass:"flie",attrs:{href:"javascript:;"}},[a("input",{ref:"audio",attrs:{type:"file",name:"",multiple:""}})]),t._v(" "),a("span",{staticStyle:{display:"inline-block",height:"30px","margin-left":"40px","font-size":"18px"}},[t._v(t._s(t.AudioNews))]),t._v(" "),a("el-form-item",{attrs:{size:"large"}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.uploadaudio}},[t._v("立即上传")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"小景点视频:","label-width":t.formLabelWidth}},[a("a",{staticClass:"file",attrs:{href:"javascript:;"}},[t._v("选择视频\n          "),a("input",{ref:"UpLoad",attrs:{type:"file",name:"",multiple:""}})]),t._v(" "),a("span",{staticStyle:{display:"inline-block",height:"30px","margin-left":"40px","font-size":"18px"}},[t._v(t._s(t.VideoNameObj))]),t._v(" "),a("el-form-item",{attrs:{size:"large"}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.UpLoadvideo}},[t._v("立即上传")])],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addDialog=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.AddSubmit}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"修改地图坐标信息",visible:t.updateDialog},on:{"update:visible":function(e){t.updateDialog=e}}},[a("el-form",{attrs:{model:t.updateOptions}},[a("el-form-item",{attrs:{label:"小景点名称:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.updateOptions.data.tm_se_Name,callback:function(e){t.$set(t.updateOptions.data,"tm_se_Name",e)},expression:"updateOptions.data.tm_se_Name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"手绘图的横坐标:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.updateOptions.data.tm_se_HandX,callback:function(e){t.$set(t.updateOptions.data,"tm_se_HandX",e)},expression:"updateOptions.data.tm_se_HandX"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"手绘图的纵坐标:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.updateOptions.data.tm_se_HandY,callback:function(e){t.$set(t.updateOptions.data,"tm_se_HandY",e)},expression:"updateOptions.data.tm_se_HandY"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"小景点介绍:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.updateOptions.data.tm_se_Intro,callback:function(e){t.$set(t.updateOptions.data,"tm_se_Intro",e)},expression:"updateOptions.data.tm_se_Intro"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"小景点备注:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.updateOptions.data.tm_se_Remark,callback:function(e){t.$set(t.updateOptions.data,"tm_se_Remark",e)},expression:"updateOptions.data.tm_se_Remark"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"小景点图片:","label-width":t.formLabelWidth}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"string","on-remove":t.handleRemove,"file-list":t.fileList,"http-request":t.upload,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"小景点音频:","label-width":t.formLabelWidth}},[a("a",{staticClass:"flie",attrs:{href:"javascript:;"}},[a("input",{ref:"audio",attrs:{type:"file",name:"",multiple:""}})]),t._v(" "),a("span",{staticStyle:{display:"inline-block",height:"30px","margin-left":"40px","font-size":"18px"}},[t._v(t._s(t.AudioNews))]),t._v(" "),a("el-form-item",{attrs:{size:"large"}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.uploadaudio}},[t._v("立即上传")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"小景点视频:","label-width":t.formLabelWidth}},[a("a",{staticClass:"file",attrs:{href:"javascript:;"}},[t._v("选择视频\n          "),a("input",{ref:"UpLoad",attrs:{type:"file",name:"",multiple:""}})]),t._v(" "),a("span",{staticStyle:{display:"inline-block",height:"30px","margin-left":"40px","font-size":"18px"}},[t._v(t._s(t.VideoNameObj))]),t._v(" "),a("el-form-item",{attrs:{size:"small"}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.UpLoadvideo}},[t._v("立即上传")])],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.updateDialog=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.upDateSubmit}},[t._v("确 定")])],1)],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.ticketMapList}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"景点编码"}},[a("span",[t._v(t._s(e.row.tm_se_ID))])]),t._v(" "),a("el-form-item",{attrs:{label:"手绘图横坐标"}},[a("span",[t._v(t._s(e.row.tm_se_HandX))])]),t._v(" "),a("el-form-item",{attrs:{label:"手绘图纵坐标"}},[a("span",[t._v(t._s(e.row.tm_se_HandY))])]),t._v(" "),a("el-form-item",{attrs:{label:"景点视频"}},[a("span",[t._v(t._s(e.row.tm_se_Vedio))])]),t._v(" "),a("el-form-item",{attrs:{label:"景点音乐"}},[a("span",[t._v(t._s(e.row.tm_se_Sound))])]),t._v(" "),a("el-form-item",{attrs:{label:"景点图片"}},[a("span",[t._v(t._s(e.row.tm_se_Image))])]),t._v(" "),a("el-form-item",{attrs:{label:"景点介绍"}},[a("span",[t._v(t._s(e.row.tm_se_Intro))])])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"小景点编号",prop:"tm_se_ID"}}),t._v(" "),a("el-table-column",{attrs:{label:"景点名称",prop:"tm_se_Name"}}),t._v(" "),a("el-table-column",{attrs:{label:"备注",prop:"tm_se_Remark"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){t.Update(e.row)}}},[t._v("修改\n        ")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.Delete(e.row.tm_se_ID)}}},[t._v("删除\n        ")])]}}])})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],staticClass:"block",staticStyle:{float:"right"}},[a("el-pagination",{attrs:{"page-size":5,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]},d=a("VU/8")(l,n,!1,function(t){a("tXXF")},null,null);e.default=d.exports},tXXF:function(t,e){}});