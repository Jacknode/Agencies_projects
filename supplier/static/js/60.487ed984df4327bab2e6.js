webpackJsonp([60],{"1SLf":function(e,t){},"9Dlh":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("//Fk"),i=s.n(a),n=s("NYxO"),l={name:"",computed:Object(n.b)(["updateAdminMerchantProductsObj","adminBusinessLicenseList","updateAdminBusinessLicenseObj"]),data:function(){return{userName:"",productsID:"",addOptions:{loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:{ta_tg_ID:"",ta_tg_TradeID:"",ta_tg_ItemInfoID:"",ta_tg_Title:"",ts_tg_Country:"",ts_tg_Provice:"",ts_tg_City:"",ts_tg_GroupSite:"",ta_tg_Describe:"",ta_tg_ShowImage:"",ta_tg_Remark:"",ts_tg_ShowTop:"",ts_tg_Special:"",ts_tg_LongOut:""}},isLoading:!1,total:0,addAdminBusinessLicenseDialog:!1,updateAdminBusinessLicenseDialog:!1,insertTradeLicence:{loginUserID:"huileyou",loginUserPass:123,data:{ts_bl_Code:"",ts_bl_Name:"",ts_bl_Type:"",ts_bl_LicenceImage:"",ts_bl_Address:"",ts_bl_LegalPerson:"",ts_bl_RegisterMoney:"",ts_bl_CreateDate:"",ts_bl_DateFrom:"",ts_bl_DateTo:"",ts_bl_ScopeBusiness:"",ts_bl_RegPlace:"",ts_bl_Remark:""}},formLabelWidth:"170px",ImageURL:[],ImageURL1:[]}},methods:{handleCurrentChange:function(e){this.initData(this.productsID.trim(),e)},handleSelect:function(e){this.userName=e.value,this.productsID=e.id,this.updateAdminMerchantProductsObj.ta_tg_TradeID=e.id,this.addOptions.data.ta_tg_TradeID=e.id},loadAll:function(e,t){var s=this;return new i.a(function(a,i){var n={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",tbUserID:"",tbName:t||"",isDelete:0,page:e||1,rows:5};s.$store.dispatch("AdminBusinessInformationSearch",n).then(function(e){a(e)},function(e){s.$message({message:e,type:"error"})})})},querySearchAsync:function(e,t){var s=this;this.loadAll(1,e).then(function(e){e=e.map(function(e){return{id:e.ts_tb_UserID,value:e.ts_tb_Name}}),s.restaurants=e,clearTimeout(s.timeout),s.timeout=setTimeout(function(){t(s.restaurants)},10)})},initData:function(e,t){var s=this,a={loginUserID:"huileyou",loginUserPass:"123",blCode:"",blName:"",isDelete:0,page:t||1,rows:5};this.$store.dispatch("initAdminBusinessLicense",a).then(function(e){s.total=e},function(e){s.$notify({message:e,type:"error"})})},search:function(){this.initData()},uploadImg:function(e){return new i.a(function(t,s){lrz(e).then(function(e){t(e.base64.split(",")[1])})})},uploaNode:function(){var e=this;setTimeout(function(){e.$refs.upload&&e.$refs.upload.addEventListener("change",function(t){for(var s=0;s<e.$refs.upload.files.length;s++)e.uploadImg(e.$refs.upload.files[s]).then(function(t){e.$store.dispatch("uploadAdminImgs",{imageData:t}).then(function(t){t?e.ImageURL.push(t.data):e.$notify({message:"图片地址不存在!",type:"error"})})})}),e.$refs.upload1&&e.$refs.upload1.addEventListener("change",function(t){for(var s=0;s<e.$refs.upload1.files.length;s++)e.uploadImg(e.$refs.upload1.files[s]).then(function(t){e.$store.dispatch("uploadAdminImgs",{imageData:t}).then(function(t){t?e.ImageURL.push(t.data):e.$notify({message:"图片地址不存在!",type:"error"})})})})},30)},addAdminBusinessLicense:function(){this.$store.commit("setTranstionFalse"),this.addAdminBusinessLicenseDialog=!0,this.uploaNode()},addAdminBusinessLicenseSubmit:function(){var e=this;this.insertTradeLicence.data.ts_bl_LicenceImage=this.ImageURL.join(","),this.$store.dispatch("addAdminBusinessLicenseSubmit",this.insertTradeLicence).then(function(t){e.$notify({message:t,type:"success"}),e.initData()},function(t){e.$notify({message:t,type:"error"})}),this.addAdminBusinessLicenseDialog=!1},updateAdminBusinessLicense:function(e){this.$store.commit("setTranstionFalse"),this.$store.commit("updateAdminBusinessLicense",e),this.uploaNode(),this.updateAdminBusinessLicenseDialog=!0},updateAdminBusinessLicenseSubmit:function(){var e=this;this.insertTradeLicence.data.ts_bl_LicenceImage=this.ImageURL.join(","),this.updateAdminBusinessLicenseObj.ts_bl_LicenceImage=this.ImageURL.join(",");var t={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:this.updateAdminBusinessLicenseObj};this.$store.dispatch("updateAdminBusinessLicenseSubmit",t).then(function(t){e.$notify({message:t,type:"success"}),e.initData()},function(t){e.$notify({message:t,type:"error"})}),this.updateAdminBusinessLicenseDialog=!1},deleteAdminBusinessLicense:function(e){var t=this,s={loginUserID:"huileyou",loginUserPass:"123",blID:e};this.$store.dispatch("deleteAdminBusinessLicense",s).then(function(e){t.$notify({message:e,type:"success"}),t.initData()},function(e){t.$notify({message:e,type:"error"})})}}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"clearfix",attrs:{id:"wrap"}},[s("h1",{staticClass:"userClass"},[e._v("商家营业执照管理")]),e._v(" "),s("el-col",{staticClass:"formSearch",attrs:{span:24}},[s("el-form",{attrs:{inline:!0}},[s("el-form-item",[s("span",[e._v("商家产品名称筛选:")])]),e._v(" "),s("el-form-item",[s("el-autocomplete",{attrs:{"fetch-suggestions":e.querySearchAsync,placeholder:"请输入商家名称"},on:{select:e.handleSelect},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.addAdminBusinessLicense}},[e._v("新增")])],1)],1)],1),e._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:e.adminBusinessLicenseList,"highlight-current-row":""}},[s("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[s("el-form-item",{attrs:{label:"标识:"}},[s("span",[e._v(e._s(t.row.ts_bl_ID))])]),e._v(" "),s("el-form-item",{attrs:{label:"商家编码:"}},[s("span",[e._v(e._s(t.row.ts_bl_TradeInfoID))])]),e._v(" "),s("el-form-item",{attrs:{label:"统一社会信用代码:"}},[s("span",[e._v(e._s(t.row.ts_bl_Code))])]),e._v(" "),s("el-form-item",{attrs:{label:"名称:"}},[s("span",[e._v(e._s(t.row.ts_bl_Name))])]),e._v(" "),s("el-form-item",{attrs:{label:"类型:"}},[s("span",[e._v(e._s(t.row.ts_bl_Type))])]),e._v(" "),s("el-form-item",{attrs:{label:"商家营业执照图片:"}},[s("span",[e._v(e._s(t.row.ts_bl_LicenceImage))])]),e._v(" "),s("el-form-item",{attrs:{label:"住所:"}},[s("span",[e._v(e._s(t.row.ts_bl_Address))])]),e._v(" "),s("el-form-item",{attrs:{label:"法定代表人:"}},[s("span",[e._v(e._s(t.row.ts_bl_LegalPerson))])]),e._v(" "),s("el-form-item",{attrs:{label:"注册资本:"}},[s("span",[e._v(e._s(t.row.ts_bl_RegisterMoney))])]),e._v(" "),s("el-form-item",{attrs:{label:"成立日期:"}},[s("span",[e._v(e._s(t.row.ts_bl_CreateDate.replace(/(T|Z)/g," ")))])]),e._v(" "),s("el-form-item",{attrs:{label:"营业期限从:"}},[s("span",[e._v(e._s(t.row.ts_bl_DateFrom.replace(/(T|Z)/g," ")))])]),e._v(" "),s("el-form-item",{attrs:{label:"营业期限到:"}},[s("span",[e._v(e._s(t.row.ts_bl_DateTo.replace(/(T|Z)/g," ")))])]),e._v(" "),s("el-form-item",{attrs:{label:"经营范围:"}},[s("span",[e._v(e._s(t.row.ts_bl_ScopeBusiness))])]),e._v(" "),s("el-form-item",{attrs:{label:"登记机关:"}},[s("span",[e._v(e._s(t.row.ts_bl_RegPlace))])]),e._v(" "),s("el-form-item",{attrs:{label:"创建时间:"}},[s("span",[e._v(e._s(t.row.ts_bl_CreateTime))])]),e._v(" "),s("el-form-item",{attrs:{label:"是否删除:"}},[s("span",[e._v(e._s(0==t.row.ts_bl_IsDelete?"未删除":"已删除"))])]),e._v(" "),s("el-form-item",{attrs:{label:"备注:"}},[s("span",[e._v(e._s(t.row.ts_bl_Remark))])])],1)]}}])}),e._v(" "),s("el-table-column",{attrs:{align:"center",label:"标识",prop:"ts_bl_ID"}}),e._v(" "),s("el-table-column",{attrs:{align:"center",label:"名称",prop:"ts_bl_Name"}}),e._v(" "),s("el-table-column",{attrs:{align:"center",label:"登记机关",prop:"ts_bl_RegPlace"}}),e._v(" "),s("el-table-column",{attrs:{align:"center",label:"经营范围",prop:"ts_bl_ScopeBusiness"}}),e._v(" "),s("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{size:"mini"},on:{click:function(s){e.updateAdminBusinessLicense(t.row.ts_bl_ID)}}},[e._v("修改\n        ")]),e._v(" "),s("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(s){e.deleteAdminBusinessLicense(t.row.ts_bl_ID)}}},[e._v("删除\n        ")])]}}])})],1),e._v(" "),s("div",{staticClass:"block",staticStyle:{float:"right"}},[s("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.total,expression:"total"}],attrs:{"page-size":5,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),s("el-dialog",{attrs:{title:"添加商家营业执照",visible:e.addAdminBusinessLicenseDialog},on:{"update:visible":function(t){e.addAdminBusinessLicenseDialog=t}}},[s("el-form",{attrs:{model:e.insertTradeLicence}},[s("el-form-item",{attrs:{label:"统一社会信用代码(ID):","label-width":e.formLabelWidth}},[s("el-input",{model:{value:e.insertTradeLicence.data.ts_bl_Code,callback:function(t){e.$set(e.insertTradeLicence.data,"ts_bl_Code",t)},expression:"insertTradeLicence.data.ts_bl_Code"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"名称:","label-width":e.formLabelWidth}},[s("el-input",{model:{value:e.insertTradeLicence.data.ts_bl_Name,callback:function(t){e.$set(e.insertTradeLicence.data,"ts_bl_Name",t)},expression:"insertTradeLicence.data.ts_bl_Name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"类型:","label-width":e.formLabelWidth}},[s("el-input",{model:{value:e.insertTradeLicence.data.ts_bl_Type,callback:function(t){e.$set(e.insertTradeLicence.data,"ts_bl_Type",t)},expression:"insertTradeLicence.data.ts_bl_Type"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"商家营业执照图片:","label-width":e.formLabelWidth}},[s("a",{staticClass:"file",attrs:{href:"javascript:;"}},[e._v("展示图片上传\n          "),s("input",{ref:"upload",attrs:{type:"file",name:"",accept:"image/*",multiple:""}})]),e._v(" "),e._l(e.ImageURL,function(t){return s("p",{directives:[{name:"show",rawName:"v-show",value:e.ImageURL.length,expression:"ImageURL.length"}]},[e._v(e._s(t||""))])})],2),e._v(" "),s("el-form-item",{attrs:{label:"住所:","label-width":e.formLabelWidth}},[s("el-input",{model:{value:e.insertTradeLicence.data.ts_bl_Address,callback:function(t){e.$set(e.insertTradeLicence.data,"ts_bl_Address",t)},expression:"insertTradeLicence.data.ts_bl_Address"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"法定代表人:","label-width":e.formLabelWidth}},[s("el-input",{model:{value:e.insertTradeLicence.data.ts_bl_LegalPerson,callback:function(t){e.$set(e.insertTradeLicence.data,"ts_bl_LegalPerson",t)},expression:"insertTradeLicence.data.ts_bl_LegalPerson"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"注册资本:","label-width":e.formLabelWidth}},[s("el-input",{model:{value:e.insertTradeLicence.data.ts_bl_RegisterMoney,callback:function(t){e.$set(e.insertTradeLicence.data,"ts_bl_RegisterMoney",t)},expression:"insertTradeLicence.data.ts_bl_RegisterMoney"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"成立日期:","label-width":e.formLabelWidth}},[s("div",{staticClass:"block"},[s("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.insertTradeLicence.data.ts_bl_CreateDate,callback:function(t){e.$set(e.insertTradeLicence.data,"ts_bl_CreateDate",t)},expression:"insertTradeLicence.data.ts_bl_CreateDate"}})],1)]),e._v(" "),s("el-form-item",{attrs:{label:"营业期限从:","label-width":e.formLabelWidth}},[s("div",{staticClass:"block"},[s("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.insertTradeLicence.data.ts_bl_DateFrom,callback:function(t){e.$set(e.insertTradeLicence.data,"ts_bl_DateFrom",t)},expression:"insertTradeLicence.data.ts_bl_DateFrom"}})],1)]),e._v(" "),s("el-form-item",{attrs:{label:"营业期限到:","label-width":e.formLabelWidth}},[s("el-input",{model:{value:e.insertTradeLicence.data.ts_bl_DateTo,callback:function(t){e.$set(e.insertTradeLicence.data,"ts_bl_DateTo",t)},expression:"insertTradeLicence.data.ts_bl_DateTo"}}),e._v(" "),s("span",{staticStyle:{color:"#f60"}},[e._v("(输入格式:yyyy-MM-dd或长期)")])],1),e._v(" "),s("el-form-item",{attrs:{label:"经营范围:","label-width":e.formLabelWidth}},[s("el-input",{model:{value:e.insertTradeLicence.data.ts_bl_ScopeBusiness,callback:function(t){e.$set(e.insertTradeLicence.data,"ts_bl_ScopeBusiness",t)},expression:"insertTradeLicence.data.ts_bl_ScopeBusiness"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"登记机关:","label-width":e.formLabelWidth}},[s("el-input",{model:{value:e.insertTradeLicence.data.ts_bl_RegPlace,callback:function(t){e.$set(e.insertTradeLicence.data,"ts_bl_RegPlace",t)},expression:"insertTradeLicence.data.ts_bl_RegPlace"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"备注:","label-width":e.formLabelWidth}},[s("el-input",{model:{value:e.insertTradeLicence.data.ts_bl_Remark,callback:function(t){e.$set(e.insertTradeLicence.data,"ts_bl_Remark",t)},expression:"insertTradeLicence.data.ts_bl_Remark"}})],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.addAdminBusinessLicenseDialog=!1}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.addAdminBusinessLicenseSubmit}},[e._v("确 定")])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"修改商家营业执照",visible:e.updateAdminBusinessLicenseDialog},on:{"update:visible":function(t){e.updateAdminBusinessLicenseDialog=t}}},[s("el-form",{attrs:{model:e.updateAdminBusinessLicenseObj}},[s("el-form-item",{attrs:{label:"统一社会信用代码(ID):","label-width":e.formLabelWidth}},[s("el-input",{model:{value:e.updateAdminBusinessLicenseObj.ts_bl_Code,callback:function(t){e.$set(e.updateAdminBusinessLicenseObj,"ts_bl_Code",t)},expression:"updateAdminBusinessLicenseObj.ts_bl_Code"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"名称:","label-width":e.formLabelWidth}},[s("el-input",{model:{value:e.updateAdminBusinessLicenseObj.ts_bl_Name,callback:function(t){e.$set(e.updateAdminBusinessLicenseObj,"ts_bl_Name",t)},expression:"updateAdminBusinessLicenseObj.ts_bl_Name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"类型:","label-width":e.formLabelWidth}},[s("el-input",{model:{value:e.updateAdminBusinessLicenseObj.ts_bl_Type,callback:function(t){e.$set(e.updateAdminBusinessLicenseObj,"ts_bl_Type",t)},expression:"updateAdminBusinessLicenseObj.ts_bl_Type"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"商家营业执照图片:","label-width":e.formLabelWidth}},[s("a",{staticClass:"file",attrs:{href:"javascript:;"}},[e._v("展示图片上传\n          "),s("input",{ref:"upload",attrs:{type:"file",name:"",accept:"image/*",multiple:""}})]),e._v(" "),e._l(e.ImageURL,function(t){return s("p",{directives:[{name:"show",rawName:"v-show",value:e.ImageURL.length,expression:"ImageURL.length"}]},[e._v(e._s(t||""))])})],2),e._v(" "),s("el-form-item",{attrs:{label:"住所:","label-width":e.formLabelWidth}},[s("el-input",{model:{value:e.updateAdminBusinessLicenseObj.ts_bl_Address,callback:function(t){e.$set(e.updateAdminBusinessLicenseObj,"ts_bl_Address",t)},expression:"updateAdminBusinessLicenseObj.ts_bl_Address"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"法定代表人:","label-width":e.formLabelWidth}},[s("el-input",{model:{value:e.updateAdminBusinessLicenseObj.ts_bl_LegalPerson,callback:function(t){e.$set(e.updateAdminBusinessLicenseObj,"ts_bl_LegalPerson",t)},expression:"updateAdminBusinessLicenseObj.ts_bl_LegalPerson"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"注册资本:","label-width":e.formLabelWidth}},[s("el-input",{model:{value:e.updateAdminBusinessLicenseObj.ts_bl_RegisterMoney,callback:function(t){e.$set(e.updateAdminBusinessLicenseObj,"ts_bl_RegisterMoney",t)},expression:"updateAdminBusinessLicenseObj.ts_bl_RegisterMoney"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"成立日期:","label-width":e.formLabelWidth}},[s("div",{staticClass:"block"},[s("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.updateAdminBusinessLicenseObj.ts_bl_CreateDate,callback:function(t){e.$set(e.updateAdminBusinessLicenseObj,"ts_bl_CreateDate",t)},expression:"updateAdminBusinessLicenseObj.ts_bl_CreateDate"}})],1)]),e._v(" "),s("el-form-item",{attrs:{label:"营业期限从:","label-width":e.formLabelWidth}},[s("div",{staticClass:"block"},[s("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.updateAdminBusinessLicenseObj.ts_bl_DateFrom,callback:function(t){e.$set(e.updateAdminBusinessLicenseObj,"ts_bl_DateFrom",t)},expression:"updateAdminBusinessLicenseObj.ts_bl_DateFrom"}})],1)]),e._v(" "),s("el-form-item",{attrs:{label:"营业期限到:","label-width":e.formLabelWidth}},[s("el-input",{model:{value:e.updateAdminBusinessLicenseObj.ts_bl_DateTo,callback:function(t){e.$set(e.updateAdminBusinessLicenseObj,"ts_bl_DateTo",t)},expression:"updateAdminBusinessLicenseObj.ts_bl_DateTo"}}),e._v(" "),s("span",{staticStyle:{color:"#f60"}},[e._v("(输入格式:yyyy-MM-dd或长期)")])],1),e._v(" "),s("el-form-item",{attrs:{label:"经营范围:","label-width":e.formLabelWidth}},[s("el-input",{model:{value:e.updateAdminBusinessLicenseObj.ts_bl_ScopeBusiness,callback:function(t){e.$set(e.updateAdminBusinessLicenseObj,"ts_bl_ScopeBusiness",t)},expression:"updateAdminBusinessLicenseObj.ts_bl_ScopeBusiness"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"登记机关:","label-width":e.formLabelWidth}},[s("el-input",{model:{value:e.updateAdminBusinessLicenseObj.ts_bl_RegPlace,callback:function(t){e.$set(e.updateAdminBusinessLicenseObj,"ts_bl_RegPlace",t)},expression:"updateAdminBusinessLicenseObj.ts_bl_RegPlace"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"备注:","label-width":e.formLabelWidth}},[s("el-input",{model:{value:e.updateAdminBusinessLicenseObj.ts_bl_Remark,callback:function(t){e.$set(e.updateAdminBusinessLicenseObj,"ts_bl_Remark",t)},expression:"updateAdminBusinessLicenseObj.ts_bl_Remark"}})],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.updateAdminBusinessLicenseDialog=!1}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.updateAdminBusinessLicenseSubmit}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]},o=s("VU/8")(l,r,!1,function(e){s("1SLf")},null,null);t.default=o.exports}});