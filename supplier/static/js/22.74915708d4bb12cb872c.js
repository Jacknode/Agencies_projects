webpackJsonp([22],{"72ne":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("NYxO"),r={computed:Object(a.b)(["ticketAttractionsList"]),data:function(){return{siteName:"",total:0,adminUserInfo:{},isLoading:!1,page:1}},methods:{handleCurrentChange:function(t){this.page=t,this.initData("")},initData:function(t){var e=this;this.isLoading=!0;var s={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",tm_ts_Code:"",tm_ts_Name:t||"",tm_ts_TradeInfoID:this.adminUserInfo.sm_ai_ID,tm_ts_IsDelete:0,tm_ts_IsPass:"",tm_ts_ShowTop:"",tm_ts_IsHot:"",tm_ts_ThemeTypeID:"",page:this.page?this.page:1,rows:5};this.$store.dispatch("initTicketAttractions",s).then(function(t){e.total=t,e.isLoading=!1},function(t){e.$notify({message:t,type:"error"})})},search:function(){this.initData(this.siteName)},apply:function(t){var e=this;0==t.tm_ts_ShowTop?t.tm_ts_ShowTop=1:t.tm_ts_ShowTop=0;var s={loginUserID:"huileyou",loginUserPass:"123",operateUserID:"",operateUserName:"",pcName:"",tm_ts_Code:t.tm_ts_Code,tm_ts_ShowTop:t.tm_ts_ShowTop};this.$store.dispatch("applyShowHomePage",s).then(function(t){e.$notify({message:t,type:"success"}),e.initData("")},function(t){e.$notify({message:t,type:"error"})})}},created:function(){this.adminUserInfo=JSON.parse(sessionStorage.getItem("admin")),this.initData("")}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"clearfix",attrs:{id:"wrap"}},[s("h1",{staticClass:"userClass"},[t._v("申请景点展示首页")]),t._v(" "),s("el-col",{staticClass:"formSearch",attrs:{span:24}},[s("el-form",{attrs:{inline:!0}},[s("el-form-item",[s("span",[t._v("景点名称筛选:")])]),t._v(" "),s("el-form-item",[s("el-input",{model:{value:t.siteName,callback:function(e){t.siteName=e},expression:"siteName"}})],1),t._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1)],1)],1),t._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:t.ticketAttractionsList}},[s("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[s("el-form-item",{attrs:{label:"景点编码(主键):"}},[s("span",[t._v(t._s(e.row.tm_ts_Code))])]),t._v(" "),s("el-form-item",{attrs:{label:"景点名称:"}},[s("span",[t._v(t._s(e.row.tm_ts_Name))])]),t._v(" "),s("el-form-item",{attrs:{label:"主题名称:"}},[s("span",[t._v(t._s(e.row.tm_tt_Name))])]),t._v(" "),s("el-form-item",{attrs:{label:"洲:"}},[s("span",[t._v(t._s(e.row.tm_ts_GreatName))])]),t._v(" "),s("el-form-item",{attrs:{label:"国:"}},[s("span",[t._v(t._s(e.row.tm_ts_CountrieName))])]),t._v(" "),s("el-form-item",{attrs:{label:"省:"}},[s("span",[t._v(t._s(e.row.tm_ts_ProviceName))])]),t._v(" "),s("el-form-item",{attrs:{label:"市:"}},[s("span",[t._v(t._s(e.row.tm_ts_CityName))])]),t._v(" "),s("el-form-item",{attrs:{label:"县:"}},[s("span",[t._v(t._s(e.row.tm_ts_ContryName))])]),t._v(" "),s("el-form-item",{attrs:{label:"展示图片:"}},t._l(e.row.tm_ts_ShowImage,function(t,e){return s("img",{staticStyle:{"margin-top":"10px"},attrs:{src:t,width:"300",height:"150"}})})),t._v(" "),s("el-form-item",{attrs:{label:"介绍:"}},[s("span",[t._v(t._s(e.row.tm_ts_Introduce))])]),t._v(" "),s("el-form-item",{attrs:{label:"详细介绍:"}},[s("span",[t._v(t._s(e.row.tm_ts_Detailedintroduction))])]),t._v(" "),s("el-form-item",{attrs:{label:"详细地址:"}},[s("span",[t._v(t._s(e.row.tm_ts_Address))])]),t._v(" "),s("el-form-item",{attrs:{label:"开放时间:"}},[s("span",[t._v(t._s(e.row.tm_ts_Opentime))])]),t._v(" "),s("el-form-item",{attrs:{label:"建议游玩时间:"}},[s("span",[t._v(t._s(e.row.tm_ts_Time))])]),t._v(" "),s("el-form-item",{attrs:{label:"联系电话号码:"}},[s("span",[t._v(t._s(e.row.tm_ts_Phone))])]),t._v(" "),s("el-form-item",{attrs:{label:"经度:"}},[s("span",[t._v(t._s(e.row.tm_ts_Longitude))])]),t._v(" "),s("el-form-item",{attrs:{label:"纬度:"}},[s("span",[t._v(t._s(e.row.tm_ts_Latitude))])]),t._v(" "),s("el-form-item",{attrs:{label:"是否热门景点:"}},[s("span",[t._v(t._s(e.row.tm_ts_IsHot))])]),t._v(" "),s("el-form-item",{attrs:{label:"是否境外景点:"}},[s("span",[t._v(t._s(e.row.tm_ts_IsOversea))])]),t._v(" "),s("el-form-item",{attrs:{label:"是否当季精选:"}},[s("span",[t._v(t._s(e.row.tm_ts_IsSeasonChoice))])]),t._v(" "),s("el-form-item",{attrs:{label:"建议价格:"}},[s("span",[t._v(t._s(e.row.tm_ts_SuggestPrice)+"元")])]),t._v(" "),s("el-form-item",{attrs:{label:"创建时间:"}},[s("span",[t._v(t._s(e.row.tm_ts_CreateTime))])]),t._v(" "),s("el-form-item",{attrs:{label:"备注:"}},[s("span",[t._v(t._s(e.row.tm_ts_Remark))])])],1)]}}])}),t._v(" "),s("el-table-column",{attrs:{label:"景点名称",prop:"tm_ts_Name"}}),t._v(" "),s("el-table-column",{attrs:{label:"联系电话号码",prop:"tm_ts_Phone"}}),t._v(" "),s("el-table-column",{staticStyle:{width:"1000px"},attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(s){t.apply(e.row)}}},[[t._v(t._s(e.row.showTopLabel))]],2)]}}])})],1),t._v(" "),s("div",{staticClass:"block",staticStyle:{float:"right"}},[s("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],attrs:{"page-size":5,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],1)],1)])},staticRenderFns:[]},i=s("VU/8")(r,o,!1,function(t){s("wJL+")},"data-v-6d10f3da",null);e.default=i.exports},"wJL+":function(t,e){}});