webpackJsonp([10],{"9Tzd":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("//Fk"),c=a.n(r),i=a("NYxO"),s={name:"",data:function(){return{carName:"",addDialog:!1,updateDialog:!1,isLoading:!1,total:0,productID:"",carID:"",formLabelWidth:"120px",addOptions:{loginUserID:"huileyou",loginUserPass:"123",operateUserID:"操作员编码",operateUserName:"操作员名称",pcName:"",data:{cr_cc_ProductId:"",cr_crc_CarId:"",cr_crs_StoreId:"",cr_cc_NumberPlates:"",cr_cc_Color:"",cr_cc_UseStatus:"0"}},updateOptions:{}}},computed:Object(i.b)(["carCompanyCarList","carCompanyCarStoreList"]),created:function(){var t=this;if(this.carCompaniesID=sessionStorage.getItem("carCompaniesID"),!this.carCompaniesID)return this.$router.push({name:"CarHome"}),void this.$notify({message:"请先添加租车公司!",position:"top-left",type:"error"});this.productID=this.$route.params.id,this.carID=this.$route.params.carID,this.initCarStore().then(function(){t.initData(1)},function(e){t.$notify({message:e,type:"error"})}),this.initData(1)},methods:{initCarStore:function(){var t=this;return new c.a(function(e,a){var r={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"操作员编码",operateUserName:"操作员名称",pcName:"",page:"",rows:"",cr_crs_Id:"",cr_crs_Name:"",cr_crs_HertzId:t.carCompaniesID,cr_crs_Address:"",cr_crs_CityLandmarkId:"",cr_crs_CityId:"",cr_crs_Lng:"",cr_crs_Lat:"",cr_crs_WorkTime:"",cr_crs_Telephone:""};return t.$store.dispatch("initCarCompanyCarStore",r)})},cancel:function(){this.initData(1),this.addDialog=!1,this.updateDialog=!1},handleSelect:function(t){this.addOptions.data.cr_crc_CarId=t.id,this.updateOptions.cr_crc_CarId=t.id},handleCurrentChange:function(t){this.initData(t)},loadAll:function(t,e){var a={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"操作员编码",operateUserName:"操作员名称",pcName:"",page:t||1,rows:"10",cr_crc_Id:"",cr_crc_Name:e||"",cr_crc_VariableSpeed:"",cr_crc_Displacement:"",cr_crc_SeatNumber:"",cr_crc_ImagePath:"",cr_crc_BrandId:"",cr_crc_Structure:"",cr_crc_CreateTime:""};return this.$store.dispatch("initCarList",a)},querySearchAsync:function(t,e){var a=this;this.loadAll(1,t).then(function(t){t=t.map(function(t){return{id:t.cr_crc_Id,value:t.cr_crc_Name}}),a.restaurants=t,clearTimeout(a.timeout),a.timeout=setTimeout(function(){e(a.restaurants)},10)})},initData:function(t){var e=this,a={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"操作员编码",operateUserName:"操作员名称",pcName:"",page:t||1,rows:"5",cr_cc_Id:"",cr_cc_ProductId:this.productID,cr_crc_CarId:"",cr_crs_StoreId:"",cr_cc_NumberPlates:"",cr_cc_Color:"",cr_cc_UseStatus:""};this.isLoading=!0,this.$store.dispatch("initCarCompanyCar",a).then(function(t){e.total=t,e.isLoading=!1},function(t){e.$notify({message:t,type:"error"})})},Add:function(){this.$store.commit("setTranstionFalse"),this.addDialog=!0},addSubmit:function(){var t=this;this.addOptions.data.cr_cc_ProductId=this.productID,this.addOptions.data.cr_crc_CarId=this.carID,this.$store.dispatch("AddCarCompanyCar",this.addOptions).then(function(e){t.$notify({message:e,type:"success"}),t.initData(1)},function(e){t.$notify({message:e,type:"error"})}),this.addDialog=!1},Update:function(t){t.cr_cc_UseStatus=t.cr_cc_UseStatus+"",this.updateOptions=t,this.$store.commit("setTranstionFalse"),this.updateDialog=!0},updateSubmit:function(){var t=this;delete this.updateOptions.cr_crc_CarName,delete this.updateOptions.cr_crs_StoreName;var e={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"操作员编码",operateUserName:"操作员名称",pcName:"",data:this.updateOptions};this.$store.dispatch("UpdateCarCompanyCar",e).then(function(e){t.$notify({message:e,type:"success"}),t.initData(1)},function(e){t.$notify({message:e,type:"error"}),t.initData(1)}),this.updateDialog=!1},Delete:function(t){var e=this,a={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"操作员编码",operateUserName:"操作员名称",pcName:"",data:{cr_cc_Id:t}};this.$store.dispatch("DeleteCarCompanyCar",a).then(function(t){e.$notify({message:t,type:"success"}),e.initData(1)},function(t){e.$notify({message:t,type:"error"}),e.initData(1)})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clearfix",attrs:{id:"wrap"}},[a("div",{staticClass:"title clearfix",staticStyle:{padding:"20px"}},[a("h1",{staticStyle:{"font-size":"20px"}},[t._v("租车公司汽车管理")]),a("br"),a("br"),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:t.Add}},[t._v("新增")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:t.carCompanyCarList}},[a("el-table-column",{attrs:{prop:"cr_cc_Id",label:"公司汽车编码",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cr_crs_StoreName",label:"门店名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cr_crc_CarName",label:"汽车名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cr_cc_Color",label:"汽车颜色",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cr_cc_NumberPlates",label:"车牌号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"使用状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("getCarUseStatus")(e.row.cr_cc_UseStatus)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){t.Update(e.row)}}},[t._v("修改\n        ")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.Delete(e.row.cr_cc_Id)}}},[t._v("删除\n        ")])]}}])})],1),t._v(" "),a("div",{staticClass:"block",staticStyle:{float:"right"}},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],attrs:{"page-size":5,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:"添加公司汽车",visible:t.addDialog},on:{"update:visible":function(e){t.addDialog=e}}},[a("el-form",{attrs:{model:t.addOptions}},[a("el-form-item",{attrs:{label:"门店:","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择门店"},model:{value:t.addOptions.data.cr_crs_StoreId,callback:function(e){t.$set(t.addOptions.data,"cr_crs_StoreId",e)},expression:"addOptions.data.cr_crs_StoreId"}},t._l(t.carCompanyCarStoreList,function(t){return a("el-option",{key:t.cr_crs_Id,attrs:{label:t.cr_crs_Name,value:t.cr_crs_Id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"车牌号:","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.addOptions.data.cr_cc_NumberPlates,callback:function(e){t.$set(t.addOptions.data,"cr_cc_NumberPlates",e)},expression:"addOptions.data.cr_cc_NumberPlates"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"车身颜色:","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.addOptions.data.cr_cc_Color,callback:function(e){t.$set(t.addOptions.data,"cr_cc_Color",e)},expression:"addOptions.data.cr_cc_Color"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"使用状态:","label-width":t.formLabelWidth}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"0","inactive-value":"1"},model:{value:t.addOptions.data.cr_cc_UseStatus,callback:function(e){t.$set(t.addOptions.data,"cr_cc_UseStatus",e)},expression:"addOptions.data.cr_cc_UseStatus"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.addSubmit}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"修改公司汽车",visible:t.updateDialog},on:{"update:visible":function(e){t.updateDialog=e}}},[a("el-form",{attrs:{model:t.updateOptions}},[a("el-form-item",{attrs:{label:"门店:","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择门店"},model:{value:t.updateOptions.cr_crs_StoreId,callback:function(e){t.$set(t.updateOptions,"cr_crs_StoreId",e)},expression:"updateOptions.cr_crs_StoreId"}},t._l(t.carCompanyCarStoreList,function(t){return a("el-option",{key:t.cr_crs_Id,attrs:{label:t.cr_crs_Name,value:t.cr_crs_Id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"车牌号:","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.updateOptions.cr_cc_NumberPlates,callback:function(e){t.$set(t.updateOptions,"cr_cc_NumberPlates",e)},expression:"updateOptions.cr_cc_NumberPlates"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"车身颜色:","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.updateOptions.cr_cc_Color,callback:function(e){t.$set(t.updateOptions,"cr_cc_Color",e)},expression:"updateOptions.cr_cc_Color"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"使用状态:","label-width":t.formLabelWidth}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"0","inactive-value":"1"},model:{value:t.updateOptions.cr_cc_UseStatus,callback:function(e){t.$set(t.updateOptions,"cr_cc_UseStatus",e)},expression:"updateOptions.cr_cc_UseStatus"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.updateSubmit}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]},n=a("VU/8")(s,o,!1,function(t){a("u8B1")},"data-v-c011797c",null);e.default=n.exports},u8B1:function(t,e){}});