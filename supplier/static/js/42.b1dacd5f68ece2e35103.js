webpackJsonp([42],{Ahng:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("//Fk"),n=a.n(i),o=a("bOdI"),s=a.n(o),r=a("NYxO"),l={data:function(){var e;return e={restaurants:[],tylist:[],filmName:"",inputFilmName:"",typeName:"",choiceFilmName:[]},s()(e,"inputFilmName",""),s()(e,"isDisabled",!0),s()(e,"updateDialog",!1),s()(e,"ImageURL",""),s()(e,"ImageURL1",[]),s()(e,"isLoading",!1),s()(e,"total",0),s()(e,"movieType",""),s()(e,"formLabelWidth","120px"),s()(e,"loadAllFilmTypeList",[{value:"(小杨生煎)西郊百联餐厅",address:"长宁区仙霞西路88号百联2楼"},{value:"阳阳麻辣烫",address:"天山西路389号"},{value:"南拳妈妈龙虾盖浇饭",address:"普陀区金沙江路1699号鑫乐惠美食广场A13"}]),e},computed:Object(r.b)(["VMovieVideoCategoriesList","VMovieParentTypeList","VMovieVideoList","adminProductLineManagementId"]),created:function(){this.initData(),this.initTypeData()},methods:{searchInitData:function(){this.initFilmData(this.filmName)},handleSelect:function(e){this.value=e.id,this.filmName=e.value,this.inputFilmName=e.id,this.userID=e.id,this.initFilmData(this.filmName)},loadAll:function(e){var t=this;return new n.a(function(a,i){var n={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",vf_vo_ID:"",vf_vo_Extend:"",vf_vo_AuthorID:"",vf_vo_Type:"",vf_vo_Title:e||"",vf_vo_PasserID:""};t.$store.dispatch("initVMovieVideo",n).then(function(e){a(e)},function(e){t.$notify({message:e,type:"error"})})})},createStateFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},querySearchAsync:function(e,t){var a=this;this.loadAll(e).then(function(e){e=(e=e.data).map(function(e){return{id:e.vf_vo_ID,value:e.vf_vo_Title}}),a.restaurants=e,clearTimeout(a.timeout),a.timeout=setTimeout(function(){t(a.restaurants)},10)})},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},handleCurrentChange:function(e){this.initData(this.typeId,e)},initData:function(e,t,a){var i=this,n={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",pcName:"",vf_vt_ID:"",vf_vt_TypeID:e||"",vf_vt_VedioID:t||"",page:a||2,rows:5};this.$store.dispatch("initVMovieVideoCategories",n).then(function(e){i.total=e},function(e){i.$notify({message:e,type:"error"})})},initTypeData:function(e){var t=this,a={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",vf_te_ID:"",vf_te_Name:"",vf_te_ParentIDs:e||"2,4"};this.$store.dispatch("initVMovieParentSorting",a).then(function(e){t.total=e},function(e){t.$notify({message:e,type:"error"})})},initFilmData:function(e){var t=this,a={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",vf_vo_ID:"",vf_vo_Extend:"",vf_vo_AuthorID:"",vf_vo_Type:"",vf_vo_Title:e||"",vf_vo_PasserID:""};this.$store.dispatch("initVMovieVideo",a).then(function(){for(var e=0;e<t.VMovieVideoList.length;e++){var a={};a.value=t.VMovieVideoList[e].vf_vo_ID,a.address=t.VMovieVideoList[e].vf_vo_Title,t.loadAllFilmTypeList.push(a)}},function(e){t.$notify({message:e,type:"error"})})},search:function(){this.initData(this.typeName.join(","),this.inputFilmName,1)},uploadImg:function(e){return new n.a(function(t,a){lrz(e).then(function(e){t(e.base64.split(",")[1])})})},uploaNode:function(){var e=this;this.addOptions.data.vf_ve_Content.vf_vo_ImageURL="",this.ImageURL1=[],setTimeout(function(){e.$refs.upload&&e.$refs.upload.addEventListener("change",function(t){for(var a=0;a<e.$refs.upload.files.length;a++)e.uploadImg(e.$refs.upload.files[a]).then(function(t){e.$store.dispatch("VMovieCheckTableUploadnImgs",{imageData:t}).then(function(t){e.addOptions.data.vf_ve_Content.vf_vo_ImageURL="",t?e.addOptions.data.vf_ve_Content.vf_vo_ImageURL=t.data:e.$notify({message:"图片地址不存在!",type:"error"})})})}),e.$refs.upload1&&e.$refs.upload1.addEventListener("change",function(t){for(var a=0;a<e.$refs.upload1.files.length;a++)e.uploadImg(e.$refs.upload1.files[a]).then(function(t){e.$store.dispatch("VMovieCheckTableUploadnImgs",{imageData:t}).then(function(t){t?e.ImageURL1.push(t.data):e.$notify({message:"图片地址不存在!",type:"error"})})})})},30)}},mounted:function(){this.searchInitData()}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"clearfix",attrs:{id:"wrap"}},[a("h1",{staticClass:"userClass"},[e._v("视频分类")]),e._v(" "),a("el-col",{staticClass:"formSearch",attrs:{span:24}},[a("el-form",{attrs:{inline:!0,size:"small"}},[a("el-form-item",[a("span",[e._v("请选择分类名称:")]),e._v(" "),a("el-select",{attrs:{multiple:"",placeholder:"请选择分类"},model:{value:e.typeName,callback:function(t){e.typeName=t},expression:"typeName"}},e._l(e.VMovieParentTypeList,function(e){return a("el-option",{key:e.vf_te_ID,attrs:{label:e.vf_te_Name,value:e.vf_te_ID}})}))],1),e._v(" "),a("el-form-item",[a("span",[e._v("视频名称筛选:")])]),e._v(" "),a("el-form-item",[a("el-autocomplete",{staticStyle:{width:"250px"},attrs:{"fetch-suggestions":e.querySearchAsync,placeholder:"请选择视频名称"},on:{select:e.handleSelect},model:{value:e.filmName,callback:function(t){e.filmName=t},expression:"filmName"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:e.VMovieVideoCategoriesList}},[a("el-table-column",{attrs:{label:"视频分类编号",prop:"vf_vt_ID"}}),e._v(" "),a("el-table-column",{attrs:{label:"分类名称",prop:"vf_te_Name"}}),e._v(" "),a("el-table-column",{attrs:{label:"标题",prop:"vf_vo_Title"}})],1),e._v(" "),a("div",{staticClass:"block",staticStyle:{"text-align":"right"}},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.total,expression:"total"}],attrs:{"page-size":5,layout:"prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1)])},staticRenderFns:[]},v=a("VU/8")(l,u,!1,function(e){a("NTNg")},"data-v-43f1aecc",null);t.default=v.exports},NTNg:function(e,t){}});