webpackJsonp([27],{"/oBR":function(t,e){},jGTL:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("//Fk"),o=i.n(a),s=i("NYxO"),r={computed:Object(s.b)(["foodStoreInformtionList","foodProductPictureList"]),data:function(){return{storeId:"",addDialog:!1,formLabelWidth:"120px",addOptions:{fd_pi_StoreFront:"",fd_pi_ImageUrl:""},imgUrl:"",bigPictureDialog:!1,updateDialog:!1,updateObj:{}}},methods:{uploadImg:function(t){return new o.a(function(e,i){lrz(t).then(function(t){e(t.base64.split(",")[1])})})},uploaNode:function(){var t=this;this.addOptions.fd_pi_ImageUrl="",setTimeout(function(){t.$refs.upload&&t.$refs.upload.addEventListener("change",function(e){for(var i=0;i<t.$refs.upload.files.length;i++)t.uploadImg(t.$refs.upload.files[i]).then(function(e){t.$store.dispatch("foodUploadAdminImgs",{imageData:e}).then(function(e){e?t.addOptions.fd_pi_ImageUrl=e.data:t.$notify({message:"图片地址不存在!",type:"error"})})})})},30)},initData:function(t){var e=this;if(t){var i={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",fd_pi_ID:"",fd_pi_StoreFront:t};this.$store.dispatch("initFoodProductPicture",i).then(function(){},function(t){e.$notify({message:t,type:"error"})})}else this.$notify({message:"请先选择店面！",type:"error"})},search:function(){this.initData(this.storeId)},displayBigPicture:function(t){this.$store.commit("setTranstionFalse"),this.bigPictureDialog=!0,this.imgUrl=t},add:function(){this.$store.commit("setTranstionFalse"),this.addDialog=!0,this.uploaNode()},addSubmit:function(){var t=this,e={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:this.addOptions};this.$store.dispatch("addFoodProductPicture",e).then(function(e){t.$notify({message:e,type:"success"}),t.initData(t.storeId)},function(e){t.$notify({message:e,type:"error"})}),this.addDialog=!1},update:function(t){this.$store.commit("setTranstionFalse"),this.updateDialog=!0,this.updateObj=t,this.uploaNode()},updateSubmit:function(){var t=this;this.addOptions.fd_pi_ImageUrl&&(this.updateObj.fd_pi_ImageUrl=this.addOptions.fd_pi_ImageUrl);var e={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:this.updateObj};this.$store.dispatch("updateFoodProductPicture",e).then(function(e){t.$notify({message:e,type:"success"}),t.initData(t.storeId)},function(e){t.$notify({message:e,type:"error"})}),this.updateDialog=!1},Delete:function(t){var e=this,i={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:{fd_pi_ID:t||""}};this.$store.dispatch("deleteFoodProductPicture",i).then(function(t){e.$notify({message:t,type:"success"}),e.initData(e.storeId)},function(t){e.$notify({message:t,type:"error"})})}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"clearfix",attrs:{id:"wrap"}},[i("h1",{staticClass:"userClass"},[t._v("店面图片")]),t._v(" "),i("el-col",{staticClass:"formSearch",attrs:{span:24}},[i("el-form",{attrs:{inline:!0}},[i("el-form-item",[i("span",[t._v("店面名称筛选:")])]),t._v(" "),i("el-form-item",[i("el-select",{attrs:{placeholder:"请选择店面"},model:{value:t.storeId,callback:function(e){t.storeId=e},expression:"storeId"}},t._l(t.foodStoreInformtionList,function(t){return i("el-option",{key:t.fd_sf_ID,attrs:{label:t.fd_sf_ProductName,value:t.fd_sf_ID}})}))],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("添加")])],1)],1)],1),t._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.foodProductPictureList}},[i("el-table-column",{attrs:{prop:"fd_pi_ID",label:"图片编号",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"fd_sf_ProductName",label:"店面名称",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{label:"店面图片",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.row.fd_pi_ImageUrl,expression:"scope.row.fd_pi_ImageUrl"}],attrs:{width:"128",height:"80"},on:{click:function(i){t.displayBigPicture(e.row.fd_pi_ImageUrl)}}})]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){t.update(e.row)}}},[t._v("修改\n          ")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){t.Delete(e.row.fd_pi_ID)}}},[t._v("删除\n          ")])]}}])})],1),t._v(" "),i("el-dialog",{attrs:{title:"显示大图",visible:t.bigPictureDialog,width:"50%"},on:{"update:visible":function(e){t.bigPictureDialog=e}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgUrl,expression:"imgUrl"}],attrs:{width:"100%"}}),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.bigPictureDialog=!1}}},[t._v("取 消")])],1)]),t._v(" "),i("el-dialog",{attrs:{title:"添加店面图片",visible:t.addDialog},on:{"update:visible":function(e){t.addDialog=e}}},[i("el-form",{attrs:{model:t.addOptions}},[i("el-form-item",{attrs:{label:"店面名称:","label-width":t.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择店面"},model:{value:t.addOptions.fd_pi_StoreFront,callback:function(e){t.$set(t.addOptions,"fd_pi_StoreFront",e)},expression:"addOptions.fd_pi_StoreFront"}},t._l(t.foodStoreInformtionList,function(t){return i("el-option",{key:t.fd_sf_ID,attrs:{label:t.fd_sf_ProductName,value:t.fd_sf_ID}})}))],1),t._v(" "),i("el-form-item",{attrs:{label:"菜肴图片:","label-width":t.formLabelWidth}},[i("a",{staticClass:"file",attrs:{href:"javascript:;"}},[t._v("上传图片\n            "),i("input",{ref:"upload",attrs:{type:"file",name:"",accept:"image/*"}})]),t._v(" "),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.addOptions.fd_pi_ImageUrl,expression:"addOptions.fd_pi_ImageUrl"},{name:"show",rawName:"v-show",value:t.addOptions.fd_pi_ImageUrl,expression:"addOptions.fd_pi_ImageUrl"}],attrs:{width:"128",height:"80"}})])],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.addDialog=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.addSubmit}},[t._v("确 定")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"修改店面图片",visible:t.updateDialog},on:{"update:visible":function(e){t.updateDialog=e}}},[i("el-form",{attrs:{model:t.updateObj}},[i("el-form-item",{attrs:{label:"店面名称:","label-width":t.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择店面"},model:{value:t.updateObj.fd_pi_StoreFront,callback:function(e){t.$set(t.updateObj,"fd_pi_StoreFront",e)},expression:"updateObj.fd_pi_StoreFront"}},t._l(t.foodStoreInformtionList,function(t){return i("el-option",{key:t.fd_sf_ID,attrs:{label:t.fd_sf_ProductName,value:t.fd_sf_ID}})}))],1),t._v(" "),i("el-form-item",{attrs:{label:"菜肴图片:","label-width":t.formLabelWidth}},[i("a",{staticClass:"file",attrs:{href:"javascript:;"}},[t._v("上传图片\n            "),i("input",{ref:"upload",attrs:{type:"file",name:"",accept:"image/*"}})]),t._v(" "),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.addOptions.fd_pi_ImageUrl,expression:"addOptions.fd_pi_ImageUrl"},{name:"show",rawName:"v-show",value:t.addOptions.fd_pi_ImageUrl,expression:"addOptions.fd_pi_ImageUrl"}],attrs:{width:"128",height:"80"}})])],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.updateDialog=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.updateSubmit}},[t._v("确 定")])],1)],1)],1)])},staticRenderFns:[]},n=i("VU/8")(r,l,!1,function(t){i("/oBR")},"data-v-644dcf2e",null);e.default=n.exports}});