webpackJsonp([42],{SJNU:function(e,t){},"T/ca":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("//Fk"),i=a.n(s),l=a("NYxO"),o={data:function(){return{state:[{label:"连载中",value:0},{label:"完结",value:1}],Author:"",SeriesName:"",WriteState:"",isDisabled:!0,updateDialog:!1,ImageURL:"",ImageURL1:[],isLoading:!1,total:0,movieType:"",addDialog:!1,addOptions:{loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:{vf_ss_Name:"电影自习室",vf_ss_WriteState:"0",vf_ss_SeriesImageURL:"1",vf_ss_AuthorID:"23",vf_ss_UpdateTime:"每周二、四更新"}},formLabelWidth:"120px",VMovieSeriesUpdateObj:{loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:{vf_ss_ID:"",vf_ss_Name:"",vf_ss_WriteState:"",vf_ss_SeriesImageURL:"",vf_ss_AuthorID:"",vf_ss_UpdateTime:""}}}},computed:Object(l.b)(["VMovieSeries"]),created:function(){this.initData()},methods:{handleCurrentChange:function(e){this.initData("","","",e)},initData:function(e,t,a,s){var i=this,l={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",vf_ss_ID:"",vf_ss_Name:e||"",vf_ss_WriteState:t||"",vf_ss_AuthorID:a||"",page:s||1,rows:5};this.$store.dispatch("initVMovieSeries",l).then(function(e){i.total=e},function(e){i.$notify({message:e,type:"error"})})},search:function(){this.initData(this.SeriesName,this.WriteState,this.Author,1)},Add:function(){var e=this.addOptions.data;for(var t in e)e[t]="";this.addDialog=!0,this.$store.commit("setTranstionFalse"),this.uploaNode()},addSubmit:function(){var e=this;this.addOptions.data.vf_ss_AuthorID=22,this.$store.dispatch("addVMovieSeries",this.addOptions).then(function(t){e.$notify({message:t,type:"success"}),e.initData(e.SeriesName,e.WriteState,e.Author,1)},function(t){e.$notify({message:t,type:"error"})}),this.addDialog=!1},uploadImg:function(e){return new i.a(function(t,a){lrz(e).then(function(e){t(e.base64.split(",")[1])})})},uploaNode:function(){var e=this;this.addOptions.data.vf_ss_SeriesImageURL="",this.ImageURL1=[],setTimeout(function(){e.$refs.upload&&e.$refs.upload.addEventListener("change",function(t){for(var a=0;a<e.$refs.upload.files.length;a++)e.uploadImg(e.$refs.upload.files[a]).then(function(t){e.$store.dispatch("UploadnImgs",{imageData:t}).then(function(t){e.addOptions.data.vf_ss_SeriesImageURL="",t?e.addOptions.data.vf_ss_SeriesImageURL=t.data:e.$notify({message:"图片地址不存在!",type:"error"})})})}),e.$refs.upload1&&e.$refs.upload1.addEventListener("change",function(t){for(var a=0;a<e.$refs.upload1.files.length;a++)e.uploadImg(e.$refs.upload1.files[a]).then(function(t){e.$store.dispatch("UploadnImgs",{imageData:t}).then(function(t){t?e.VMovieSeriesUpdateObj.data.vf_ss_SeriesImageURL=t.data:e.$notify({message:"图片地址不存在!",type:"error"})})})})},30)},Delete:function(e){var t=this,a={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:{vf_ss_ID:e}};this.$store.dispatch("DeleteVMovieSeries",a).then(function(e){t.$notify({message:e,type:"success"}),t.initData(t.SeriesName,t.WriteState,t.Author,1)},function(e){t.$notify({message:e,type:"error"})})},Update:function(e){this.ImageURL1=[],this.uploaNode(),this.updateDialog=!0,this.$store.commit("setTranstionFalse"),this.VMovieSeriesUpdateObj.data=e,this.VMovieSeriesUpdateObj.data.vf_ss_AuthorID=22},updateSubmit:function(){var e=this;this.$store.dispatch("updateVMovieSeries",this.VMovieSeriesUpdateObj).then(function(t){e.$notify({message:t,type:"success"}),e.initData(e.movieType)},function(t){e.$notify({message:t,type:"error"})}),this.updateDialog=!1}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"clearfix",attrs:{id:"wrap"}},[a("h1",{staticClass:"userClass"},[e._v("系列")]),e._v(" "),a("el-col",{staticClass:"formSearch",attrs:{span:24}},[a("el-form",{attrs:{inline:!0,size:"small"}},[a("el-form-item",{attrs:{label:"系列名称:"}},[a("el-input",{attrs:{placeholder:"系列名称"},model:{value:e.SeriesName,callback:function(t){e.SeriesName=t},expression:"SeriesName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"连载状态:"}},[a("el-select",{attrs:{placeholder:"连载状态"},model:{value:e.WriteState,callback:function(t){e.WriteState=t},expression:"WriteState"}},[a("el-option",{attrs:{label:"连载中",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"已完结",value:"1"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"作者:"}},[a("el-input",{attrs:{placeholder:"作者"},model:{value:e.Author,callback:function(t){e.Author=t},expression:"Author"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.Add}},[e._v("新增")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:e.VMovieSeries}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"系列编号:"}},[a("span",[e._v(e._s(t.row.vf_ss_ID))])]),e._v(" "),a("el-form-item",{attrs:{label:"作者:"}},[a("span",[e._v(e._s(t.row.vf_ss_AuthorID))])]),e._v(" "),a("el-form-item",{attrs:{label:"创建时间:"}},[a("span",[e._v(e._s(t.row.vf_ss_CreateTime))])]),e._v(" "),a("el-form-item",{attrs:{label:"系列名称:"}},[a("span",[e._v(e._s(t.row.vf_ss_Name))])]),e._v(" "),a("el-form-item",{attrs:{label:"描述:"}},[a("span",[e._v(e._s(t.row.vf_ss_Describ))])]),e._v(" "),a("el-form-item",{attrs:{label:"完载时间:"}},[a("span",[e._v(e._s(t.row.vf_ss_OverTime))])]),e._v(" "),a("el-form-item",{attrs:{label:"系列图片:"}},[a("img",{staticStyle:{width:"100px",height:"50px"},attrs:{src:t.row.vf_ss_SeriesImageURL,alt:""}})]),e._v(" "),a("el-form-item",{attrs:{label:"更新时间:"}},[a("span",[e._v(e._s(t.row.vf_ss_UpdateTime))])]),e._v(" "),a("el-form-item",{attrs:{label:"连载状态:"}},[a("span",[e._v(e._s(e._f("getSeriesState")(t.row.vf_ss_WriteState)))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"系列编号",prop:"vf_ss_ID"}}),e._v(" "),a("el-table-column",{attrs:{label:"作者",prop:"vf_ss_AuthorID"}}),e._v(" "),a("el-table-column",{attrs:{label:"系列名称",prop:"vf_ss_Name"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){e.Update(t.row)}}},[e._v("修改\n          ")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.Delete(t.row.vf_ss_ID)}}},[e._v("删除\n          ")])]}}])})],1),e._v(" "),a("div",{staticClass:"block",staticStyle:{"text-align":"right"}},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.total,expression:"total"}],attrs:{"page-size":5,layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"添加",visible:e.addDialog},on:{"update:visible":function(t){e.addDialog=t}}},[a("el-form",{attrs:{model:e.addOptions}},[a("el-form-item",{attrs:{label:"系列名称:","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"系列名称"},model:{value:e.addOptions.data.vf_ss_Name,callback:function(t){e.$set(e.addOptions.data,"vf_ss_Name",t)},expression:"addOptions.data.vf_ss_Name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述:","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"描述"},model:{value:e.addOptions.data.vf_ss_Describ,callback:function(t){e.$set(e.addOptions.data,"vf_ss_Describ",t)},expression:"addOptions.data.vf_ss_Describ"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"连载状态:","label-width":e.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择连载状态"},model:{value:e.addOptions.data.vf_ss_WriteState,callback:function(t){e.$set(e.addOptions.data,"vf_ss_WriteState",t)},expression:"addOptions.data.vf_ss_WriteState"}},[a("el-option",{attrs:{label:"连载中",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"完结",value:"1"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"更新时间:","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"更新时间"},model:{value:e.addOptions.data.vf_ss_UpdateTime,callback:function(t){e.$set(e.addOptions.data,"vf_ss_UpdateTime",t)},expression:"addOptions.data.vf_ss_UpdateTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"系列图片:","label-width":e.formLabelWidth}},[a("a",{staticClass:"file",attrs:{href:"javascript:;"}},[e._v("\n            系列图片上传\n            "),a("input",{ref:"upload",attrs:{type:"file",name:"",accept:"image/*"}})]),e._v(" "),a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.addOptions.data.vf_ss_SeriesImageURL,expression:"addOptions.data.vf_ss_SeriesImageURL"},{name:"show",rawName:"v-show",value:e.addOptions.data.vf_ss_SeriesImageURL,expression:"addOptions.data.vf_ss_SeriesImageURL"}],staticStyle:{width:"100px",height:"100px"}})])],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addDialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.addSubmit}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"修改",visible:e.updateDialog},on:{"update:visible":function(t){e.updateDialog=t}}},[a("el-form",{attrs:{model:e.VMovieSeriesUpdateObj}},[a("el-form-item",{attrs:{label:"系列编号:","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"时长",disabled:e.isDisabled},model:{value:e.VMovieSeriesUpdateObj.data.vf_ss_ID,callback:function(t){e.$set(e.VMovieSeriesUpdateObj.data,"vf_ss_ID",t)},expression:"VMovieSeriesUpdateObj.data.vf_ss_ID"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"系列名称:","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"时长"},model:{value:e.VMovieSeriesUpdateObj.data.vf_ss_Name,callback:function(t){e.$set(e.VMovieSeriesUpdateObj.data,"vf_ss_Name",t)},expression:"VMovieSeriesUpdateObj.data.vf_ss_Name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述:","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"描述"},model:{value:e.VMovieSeriesUpdateObj.data.vf_ss_Describ,callback:function(t){e.$set(e.VMovieSeriesUpdateObj.data,"vf_ss_Describ",t)},expression:"VMovieSeriesUpdateObj.data.vf_ss_Describ"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"连载状态:","label-width":e.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择连载状态"},model:{value:e.VMovieSeriesUpdateObj.data.vf_ss_WriteState,callback:function(t){e.$set(e.VMovieSeriesUpdateObj.data,"vf_ss_WriteState",t)},expression:"VMovieSeriesUpdateObj.data.vf_ss_WriteState"}},[a("el-option",{attrs:{label:"连载中",value:"0"}}),e._v(" "),a("el-option",{attrs:{label:"完结",value:"1"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"更新时间:","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"更新时间"},model:{value:e.VMovieSeriesUpdateObj.data.vf_ss_UpdateTime,callback:function(t){e.$set(e.VMovieSeriesUpdateObj.data,"vf_ss_UpdateTime",t)},expression:"VMovieSeriesUpdateObj.data.vf_ss_UpdateTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"系列图片:","label-width":e.formLabelWidth}},[a("a",{staticClass:"file",attrs:{href:"javascript:;"}},[e._v("\n            系列图片上传\n            "),a("input",{ref:"upload1",attrs:{type:"file",name:"",accept:"image/*"}})]),e._v(" "),a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.VMovieSeriesUpdateObj.data.vf_ss_SeriesImageURL,expression:"VMovieSeriesUpdateObj.data.vf_ss_SeriesImageURL"},{name:"show",rawName:"v-show",value:e.VMovieSeriesUpdateObj.data.vf_ss_SeriesImageURL,expression:"VMovieSeriesUpdateObj.data.vf_ss_SeriesImageURL"}],staticStyle:{width:"100px",height:"100px"}})])],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.updateDialog=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.updateSubmit}},[e._v("确 定")])],1)],1)],1)])},staticRenderFns:[]},n=a("VU/8")(o,r,!1,function(e){a("SJNU")},"data-v-3448a88a",null);t.default=n.exports}});