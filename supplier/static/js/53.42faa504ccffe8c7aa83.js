webpackJsonp([53],{Alnc:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("bOdI"),r=a.n(i),o=a("NYxO"),s={name:"",data:function(){var t;return t={carCompaniesID:"",dateArr:""},r()(t,"carCompaniesID",""),r()(t,"addDialog",!1),r()(t,"total",0),r()(t,"updateDialog",!1),r()(t,"isLoading",!1),r()(t,"formLabelWidth","120px"),r()(t,"updateOptions",{}),r()(t,"addOptions",{loginUserID:"huileyou",loginUserPass:"123",operateUserID:"操作员编码",operateUserName:"操作员名称",pcName:"",data:{cr_i_HertzId:"",cr_i_Name:"",cr_i_BeginDate:"",cr_i_EndDate:"",cr_i_MinDays:"",cr_i_UseCount:"",cr_i_Introduce:"",cr_i_FavorablePrice:""}}),t},computed:Object(o.b)(["carPreferentialPoliciesList"]),created:function(){if(this.carCompaniesID=sessionStorage.getItem("carCompaniesID"),this.carCompaniesID=sessionStorage.getItem("carCompaniesID"),!this.carCompaniesID)return this.$router.push({name:"CarHome"}),void this.$notify({message:"请先添加租车公司!",position:"top-left",type:"error"});this.addOptions.data.cr_i_HertzId=this.carCompaniesID,this.initData(1)},methods:{handleCurrentChange:function(t){this.initData(t)},cancel:function(){this.initData(1),this.addDialog=!1,this.updateDialog=!1},initData:function(t){var e=this,a={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"操作员编码",operateUserName:"操作员名称",pcName:"",page:t||1,rows:"10",cr_i_Id:"",cr_i_HertzId:this.carCompaniesID,cr_i_Name:""};this.isLoading=!0,this.$store.dispatch("initCarPreferentialPolicies",a).then(function(t){e.total=t,e.isLoading=!1},function(t){e.$notify({message:t,type:"error"})})},Add:function(){this.$store.commit("setTranstionFalse"),this.addDialog=!0},addSubmit:function(){var t=this;this.addOptions.data.cr_i_BeginDate=this.dateArr[0],this.addOptions.data.cr_i_EndDate=this.dateArr[1],this.$store.dispatch("AddCarPreferentialPolicies",this.addOptions).then(function(e){t.$notify({message:e,type:"success"}),t.initData(1)},function(e){t.$notify({message:e,type:"error"})}),this.addDialog=!1},Update:function(t){this.updateOptions=t,this.$store.commit("setTranstionFalse"),this.updateDialog=!0},updateSubmit:function(){var t=this,e={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"操作员编码",operateUserName:"操作员名称",pcName:"",data:{cr_i_Id:this.updateOptions.cr_i_Id,cr_i_HertzId:this.updateOptions.cr_i_HertzId,cr_i_Name:this.updateOptions.cr_i_Name,cr_i_BeginDate:this.dateArr[0],cr_i_EndDate:this.dateArr[1],cr_i_MinDays:this.updateOptions.cr_i_MinDays,cr_i_UseCount:this.updateOptions.cr_i_UseCount,cr_i_Introduce:this.updateOptions.cr_i_Introduce,cr_i_FavorablePrice:this.updateOptions.cr_i_FavorablePrice}};this.$store.dispatch("UpdateCarPreferentialPolicies",e).then(function(e){t.$notify({message:e,type:"success"}),t.initData(1)},function(e){t.$notify({message:e,type:"error"}),t.initData(1)}),this.updateDialog=!1},Delete:function(t){var e=this,a={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"操作员编码",operateUserName:"操作员名称",pcName:"",data:{cr_i_Id:t}};this.$store.dispatch("DeleteCarPreferentialPolicies",a).then(function(t){e.$notify({message:t,type:"success"}),e.initData(1)},function(t){e.$notify({message:t,type:"error"}),e.initData(1)})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clearfix",attrs:{id:"wrap"}},[a("div",{staticClass:"title clearfix",staticStyle:{padding:"20px"}},[a("h1",{staticStyle:{"font-size":"20px"}},[t._v("租车优惠政策管理")]),a("br"),a("br"),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:t.Add}},[t._v("新增")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:t.carPreferentialPoliciesList}},[a("el-table-column",{attrs:{prop:"cr_i_Id",label:"优惠政策编号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cr_i_Name",label:"优惠政策名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cr_i_BeginDate",label:"开始日期",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cr_i_EndDate",label:"结束日期",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cr_i_MinDays",label:"最低租车天数(天)",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cr_i_UseCount",label:"每客使用次数",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cr_i_FavorablePrice",label:"优惠价格(元)",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cr_i_Introduce",label:"介绍",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticStyle:{"margin-bottom":"5px"},attrs:{size:"mini",type:"primary"},on:{click:function(a){t.Update(e.row)}}},[t._v("修改\n        ")]),t._v(" "),a("br"),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.Delete(e.row.cr_i_Id)}}},[t._v("删除\n        ")])]}}])})],1),t._v(" "),a("div",{staticClass:"block",staticStyle:{float:"right"}},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],attrs:{"page-size":5,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:"添加优惠政策",visible:t.addDialog},on:{"update:visible":function(e){t.addDialog=e}}},[a("el-form",{attrs:{model:t.addOptions}},[a("el-form-item",{attrs:{label:"优惠政策名称:","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.addOptions.data.cr_i_Name,callback:function(e){t.$set(t.addOptions.data,"cr_i_Name",e)},expression:"addOptions.data.cr_i_Name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"使用日期:","label-width":t.formLabelWidth}},[a("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.dateArr,callback:function(e){t.dateArr=e},expression:"dateArr"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"最低租车天数:","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.addOptions.data.cr_i_MinDays,callback:function(e){t.$set(t.addOptions.data,"cr_i_MinDays",e)},expression:"addOptions.data.cr_i_MinDays"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"每客使用次数:","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.addOptions.data.cr_i_UseCount,callback:function(e){t.$set(t.addOptions.data,"cr_i_UseCount",e)},expression:"addOptions.data.cr_i_UseCount"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"优惠价格:","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.addOptions.data.cr_i_FavorablePrice,callback:function(e){t.$set(t.addOptions.data,"cr_i_FavorablePrice",e)},expression:"addOptions.data.cr_i_FavorablePrice"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"介绍:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:5,placeholder:"请输入介绍内容"},model:{value:t.addOptions.data.cr_i_Introduce,callback:function(e){t.$set(t.addOptions.data,"cr_i_Introduce",e)},expression:"addOptions.data.cr_i_Introduce"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.addSubmit}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"修改优惠政策",visible:t.updateDialog},on:{"update:visible":function(e){t.updateDialog=e}}},[a("el-form",{attrs:{model:t.updateOptions}},[a("el-form-item",{attrs:{label:"优惠政策名称:","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.updateOptions.cr_i_Name,callback:function(e){t.$set(t.updateOptions,"cr_i_Name",e)},expression:"updateOptions.cr_i_Name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"使用日期:","label-width":t.formLabelWidth}},[a("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.dateArr,callback:function(e){t.dateArr=e},expression:"dateArr"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"最低租车天数:","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.updateOptions.cr_i_MinDays,callback:function(e){t.$set(t.updateOptions,"cr_i_MinDays",e)},expression:"updateOptions.cr_i_MinDays"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"每客使用次数:","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.updateOptions.cr_i_UseCount,callback:function(e){t.$set(t.updateOptions,"cr_i_UseCount",e)},expression:"updateOptions.cr_i_UseCount"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"优惠价格:","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.updateOptions.cr_i_FavorablePrice,callback:function(e){t.$set(t.updateOptions,"cr_i_FavorablePrice",e)},expression:"updateOptions.cr_i_FavorablePrice"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"介绍:","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:5,placeholder:"请输入介绍内容"},model:{value:t.updateOptions.cr_i_Introduce,callback:function(e){t.$set(t.updateOptions,"cr_i_Introduce",e)},expression:"updateOptions.cr_i_Introduce"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.updateSubmit}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]},n=a("VU/8")(s,l,!1,function(t){a("f7gv")},"data-v-2e7be09a",null);e.default=n.exports},f7gv:function(t,e){}});