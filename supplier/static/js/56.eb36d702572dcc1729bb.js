webpackJsonp([56],{QaUw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("NYxO"),s={computed:Object(i.b)(["ticketAttractionsList","ticketTypeList","ticketTypeTicketPriceList"]),data:function(){return{searchTime:"",loginId:"",scenicNumber:"",ticketTypeNumber:"",total:0,addDialog:!1,formLabelWidth:"120px",addOptions:{tm_tt_ID:"",tm_tp_Limit:"",createFrom:"",createTo:""},deleteDialog:!1,deleteOptions:{tm_tt_ID:"",dateFrom:"",dateTo:""}}},methods:{handleCurrentChange:function(t){this.initData(this.ticketTypeNumber,t)},initTicketAttraction:function(){var t={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",tm_ts_Code:"",tm_ts_Name:"",tm_ts_TradeInfoID:this.loginId.sm_ai_ID,tm_ts_IsDelete:0,tm_ts_IsPass:"",tm_ts_ShowTop:"",tm_ts_IsHot:"",tm_ts_ThemeTypeID:"",page:1,rows:1e3};this.$store.dispatch("initTicketAttractions",t)},initTicketType:function(t){var e={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",tm_ts_Code:t||"",tm_tt_TradeInfoID:this.loginId.sm_ai_ID,tm_tt_IsDelete:0,page:1,rows:1e3};this.$store.dispatch("initTicketType",e)},changeScenicNumber:function(){this.initTicketType(this.scenicNumber)},initData:function(t,e){var a=this,i={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",tm_tt_ID:t||"",dateFrom:this.searchTime?this.searchTime:"",page:e||1,rows:5};this.$store.dispatch("initTicketTypeTicketPrice",i).then(function(t){a.total=t},function(t){a.$notify({message:t,type:"error"})})},search:function(){this.initData(this.ticketTypeNumber)},Add:function(){this.$store.commit("setTranstionFalse"),this.addDialog=!0},addSubmit:function(){var t=this,e={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",data:this.addOptions};this.$store.dispatch("addTicketTypeTicketPriceSubmit",e).then(function(e){t.$notify({message:e,type:"success"}),t.initData(t.ticketTypeNumber)},function(e){t.$notify({message:e,type:"error"})}),this.addDialog=!1},deleteBtn:function(){this.$store.commit("setTranstionFalse"),this.deleteDialog=!0},deleteSubmit:function(){var t=this,e={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",tm_tt_ID:this.deleteOptions.tm_tt_ID,dateFrom:this.deleteOptions.dateFrom,dateTo:this.deleteOptions.dateTo};this.$store.dispatch("deleteTicketTypeTicketPriceSubmit",e).then(function(e){t.$notify({message:e,type:"success"}),t.initData(t.ticketTypeNumber)},function(e){t.$notify({message:e,type:"error"})}),this.deleteDialog=!1}},created:function(){this.loginId=JSON.parse(sessionStorage.getItem("admin")),this.initTicketAttraction()}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"clearfix",attrs:{id:"wrap"}},[a("h1",{staticClass:"userClass"},[t._v("票种_票价信息")]),t._v(" "),a("el-col",{staticClass:"formSearch",attrs:{span:24}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",[a("span",[t._v("票种编码筛选:")])]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择景点"},on:{change:t.changeScenicNumber},model:{value:t.scenicNumber,callback:function(e){t.scenicNumber=e},expression:"scenicNumber"}},t._l(t.ticketAttractionsList,function(t){return a("el-option",{key:t.tm_ts_Code,attrs:{label:t.tm_ts_Name,value:t.tm_ts_Code}})})),t._v(" "),a("el-select",{attrs:{placeholder:"请选择票种"},model:{value:t.ticketTypeNumber,callback:function(e){t.ticketTypeNumber=e},expression:"ticketTypeNumber"}},t._l(t.ticketTypeList,function(t){return a("el-option",{key:t.tm_tt_ID,attrs:{label:t.tm_tt_Name,value:t.tm_tt_ID}})})),t._v(" "),a("el-form-item",[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期(默认为本月)","value-format":"yyyy-MM-dd"},model:{value:t.searchTime,callback:function(e){t.searchTime=e},expression:"searchTime"}})],1)]),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.Add}},[t._v("新增")]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:t.deleteBtn}},[t._v("删除")])],1)],1)],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.ticketTypeTicketPriceList}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"票种票价编号"}},[a("span",[t._v(t._s(e.row.tm_tp_ID))])]),t._v(" "),a("el-form-item",{attrs:{label:"票种编号"}},[a("span",[t._v(t._s(e.row.tm_tt_ID))])]),t._v(" "),a("el-form-item",{attrs:{label:"票价"}},[a("span",[t._v(t._s(e.row.tm_tp_TicketPrice)+"元")])]),t._v(" "),a("el-form-item",{attrs:{label:"实际价格"}},[a("span",[t._v(t._s(e.row.tm_tp_RealPrice)+"元")])]),t._v(" "),a("el-form-item",{attrs:{label:"日期"}},[a("span",[t._v(t._s(e.row.tm_tp_Date))])]),t._v(" "),a("el-form-item",{attrs:{label:"限售张数"}},[a("span",[t._v(t._s(e.row.tm_tp_Limit)+"张")])])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"实际价格(元)",prop:"tm_tp_RealPrice"}}),t._v(" "),a("el-table-column",{attrs:{label:"限售张数(张)",prop:"tm_tp_Limit"}}),t._v(" "),a("el-table-column",{attrs:{label:"日期",prop:"tm_tp_Date"}})],1),t._v(" "),a("div",{staticClass:"block",staticStyle:{float:"right"}},[a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],attrs:{"page-size":5,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:"添加票种票价",visible:t.addDialog},on:{"update:visible":function(e){t.addDialog=e}}},[a("el-form",{attrs:{model:t.addOptions}},[a("el-form-item",{attrs:{label:"票种编号:","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"如果没有数据先查询"},model:{value:t.addOptions.tm_tt_ID,callback:function(e){t.$set(t.addOptions,"tm_tt_ID",e)},expression:"addOptions.tm_tt_ID"}},t._l(t.ticketTypeList,function(t){return a("el-option",{key:t.tm_tt_ID,attrs:{label:t.tm_tt_Name,value:t.tm_tt_ID}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"限售张数:","label-width":t.formLabelWidth}},[a("el-input",{model:{value:t.addOptions.tm_tp_Limit,callback:function(e){t.$set(t.addOptions,"tm_tp_Limit",e)},expression:"addOptions.tm_tp_Limit"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"开始日期:","label-width":t.formLabelWidth}},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择开始生产日期","value-format":"yyyy-MM-dd"},model:{value:t.addOptions.createFrom,callback:function(e){t.$set(t.addOptions,"createFrom",e)},expression:"addOptions.createFrom"}})],1)]),t._v(" "),a("el-form-item",{attrs:{label:"结束日期:","label-width":t.formLabelWidth}},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择结束生成日期","value-format":"yyyy-MM-dd"},model:{value:t.addOptions.createTo,callback:function(e){t.$set(t.addOptions,"createTo",e)},expression:"addOptions.createTo"}})],1)])],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addDialog=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.addSubmit}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"删除票种票价",visible:t.deleteDialog},on:{"update:visible":function(e){t.deleteDialog=e}}},[a("el-form",{attrs:{model:t.deleteOptions}},[a("el-form-item",{attrs:{label:"票种编号:","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"如果没有数据先查询"},model:{value:t.deleteOptions.tm_tt_ID,callback:function(e){t.$set(t.deleteOptions,"tm_tt_ID",e)},expression:"deleteOptions.tm_tt_ID"}},t._l(t.ticketTypeList,function(t){return a("el-option",{key:t.tm_tt_ID,attrs:{label:t.tm_tt_Name,value:t.tm_tt_ID}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"开始日期:","label-width":t.formLabelWidth}},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择删除开始日期","value-format":"yyyy-MM-dd"},model:{value:t.deleteOptions.dateFrom,callback:function(e){t.$set(t.deleteOptions,"dateFrom",e)},expression:"deleteOptions.dateFrom"}})],1)]),t._v(" "),a("el-form-item",{attrs:{label:"结束日期:","label-width":t.formLabelWidth}},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择删除结束日期","value-format":"yyyy-MM-dd"},model:{value:t.deleteOptions.dateTo,callback:function(e){t.$set(t.deleteOptions,"dateTo",e)},expression:"deleteOptions.dateTo"}})],1)])],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.deleteDialog=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.deleteSubmit}},[t._v("确 定")])],1)],1)],1)])},staticRenderFns:[]},o=a("VU/8")(s,l,!1,function(t){a("nGIj")},"data-v-187ed7a5",null);e.default=o.exports},nGIj:function(t,e){}});