/**
 * Created by leibo on 18/1/2.
 */
import getters from './getters'

const state = {
//初始化动画
  transtionActive: {
    isActive: false,
    isRotateInDownRight: false
  },

  //----------管理员----------
  adminEventDiningList: [],
  adminProductLine: [],
  adminLinePrepare: [],//线路日程
  adminScheduleTimeList: [],//日程时间
  adminTimeActivitiesList: [],//时间活动
  adminTradeGoodList: [],//商户产品
  queryUserOrderList: [],//查询商户订单
  searchUserOrderList: [],//查询用户订单
  updateAdminTimeActivitiesObj: {},//修改时间活动obj
  updateAdminQueryProductInformationObj: {},//修改产品线路obj
  updateAdminScheduleTimeObj: {},//修改日程时间obj
  groupTourList: [],//跟团游栏目
  homeAdminGroupTourList: [],//Home初始化跟团游栏目
  updateAdminGroupTourObj: {},//修稿跟团游栏目obj
  adminBusinessInformationList: [],//管理员商户信息
  updateAdminBusinessInformationObj: {},//修改商户初始化obj
  updateAdminMerchantProductsObj: {},//修改产品obj
  updateAdminLinePrepareObj: {},//修改线路日程obj
  adminProductMenuList: [],//查询菜单
  updateMenuObj: [],//初始化修改菜单数据
  adminProductFeaturesList: [],//产品特色
  updateAdminProductFeaturesObj: [],//修改产品特色初始化数据
  updateAdminActiveFoodObj: {},//初始化修改活动用餐数据
  adminActiveHotelList: [],//活动住宿
  adminActivitySiteList: [],//景点管理
  updateAdminActiveHotelObj: {},//修改活动酒店obj
  adminActiveReminderList: [],//初始化温馨提示数据
  updateAdminActivitySiteObj: {},//修改活动景点obj
  adminEventShoppingList: [],//活动购物
  updateAdminEventShoppingObj: {},//修改活动购物obj
  updateAdminActiveReminderObj: {},//修改温馨提示数据
  adminActiveTrafficList:[],//活动交通
  updateAdminActiveTrafficObj:{},//修改活动交通obj
  adminCostsOfList:[],//线路费用说明
  updateAdminCostsOfObj:{},//修改费用说明obj
  adminSystemMenuList:[],//系统总菜单
  updateAdminSystemMenuObj:{},//修改系统总菜单obj
  adminBusinessLicenseList:[],//商户营业执照列表
  updateAdminBusinessLicenseObj:{},//修改商户营业执照Obj
  adminCommentsTypeList:[],//评论类型
  departureCityList:[],//出发城市
  adminLinePriceList:[],//产品线路价格
  updateAdminLinePriceObj:{},//修改产品线路价格obj
  proviceList:[],//省份
  cityList:[],//城市
  adminRouteDepartureCity:[],//管理员出发城市
  updateAdminRouteDepartureCityObj:{},//修改出发城市obj
  adminSupplierList:[],//供应商信息
  adminSupplierListObj:{},

  changeScopeOfOperationList:[],//经营范围
  changeCompanyTypeList:[],//公司规模
  changeMineyTypeList:[],//结算币种
  changeCooperationTypecList:[],//合作类型




  //参数
  adminMerchantProductsId: '',
  adminProductLineManagementId: '',
  adminProductCharacteristicManagementId: '',
  adminLineScheduleManagementId: '',
  adminScheduleTimeManagementId: '',
  adminTimeActivityManagementId: '',
  adminActivityMealManagementId: '',

};
const mutations = {
  showAdmin(state) {
    state.isAdmin = true;
  },
  hideAdmin(state) {
    state.isAdmin = false;
  },
  //初始化动画
  setTranstionFalse(state) {
    state.transtionActive = {
      isActive: false,
      isRotateInDownRight: false
    }
  },
  oPTranstionFalse() {
    state.transtionActive = {
      isActive: !state.transtionActive.isActive,
      isRotateInDownRight: !state.transtionActive.isRotateInDownRight
    }
  },



  //----------------管理员-----------------
  initChangeScopeOfOperation(state,data){
    state.changeScopeOfOperationList = data;
  },

  initAdminActivitySite(state, data) {
    state.adminActivitySiteList = data;
  },
  initAdminTradeGoodList(state, data) {
    state.adminTradeGoodList = data;
  },
  initUpdateAdminActivitySiteObj(state, id) {
    state.updateAdminActivitySiteObj = state.adminActivitySiteList.filter(item => {
      if (item.ts_as_ID == id) {
        return true;
      }
      return false;
    })[0]
  },
  initAdminActiveTraffic(state,data){
    state.adminActiveTrafficList = data;
  },
  initUpdateAdminActiveTrafficObj(state,id){
    state.updateAdminActiveTrafficObj = state.adminActiveTrafficList.filter(item=>{
      if(item.ts_at_ID==id){
        return true;
      }
      return false;
    })[0]
  },
  initAdminEventShopping(state,data){
    state.adminEventShoppingList = data;
  },
  initUpdateAdminEventShoppingObj(state, id) {
    state.updateAdminEventShoppingObj = state.adminEventShoppingList.filter(item => {
      if (item.ts_as_ID == id) {
        return true;
      }
      return false;
    })[0]
  },

  initAdminProductLine(state, data) {
    state.adminProductLine = data;
  },
  initAdminScheduleTime(state, data) {
    state.adminScheduleTimeList = data;
  },
  initAdminLinePrepare(state, data) {
    state.adminLinePrepare = data;
  },
  initAdminTimeActivities(state, data) {
    state.adminTimeActivitiesList = data;
  },

  initAdminActiveHotelList(state, data) {
    state.adminActiveHotelList = data;
  },
  initAdminEventDining(state, data) {
    state.adminEventDiningList = data;
    let arr = state.adminEventDiningList;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].ts_af_Type == 0) {
        arr[i].ts_af_Type = '早餐'
      }
      if (arr[i].ts_af_Type == 1) {
        arr[i].ts_af_Type = '午餐'
      }
      if (arr[i].ts_af_Type == 2) {
        arr[i].ts_af_Type = '晚餐'
      }
    }
  },
  initQueryUserOrder(state, data) {
    state.queryUserOrderList = data;
  },
  initSearchUserOrder(state, data) {
    state.searchUserOrderList = data;
  },
  initUpdateAdminTimeActivitiesObj(state, id) {
    state.updateAdminTimeActivitiesObj = state.adminTimeActivitiesList.filter(item => {
      if (item.ts_ta_ID == id) {
        return true;
      }
      return false;
    })[0]
  },
  initUpdateAdminQueryProductInformationObj(state, id) {
    state.updateAdminQueryProductInformationObj = state.adminProductLine.filter(item => {
      if (item.ts_pt_ID == id) {
        return true
      }
      return false;
    })[0]
  },
  initUpdateAdminScheduleTimeObj(state, id) {
    state.updateAdminScheduleTimeObj = state.adminScheduleTimeList.filter(item => {
      if (item.ts_tt_ID == id) {
        return true;
      }
      return false;
    })[0]
  },
  initAdminGroupTour(state, data) {
    state.groupTourList = data;
  },
  initHomeAdminGroupTour(state, data) {
    state.homeAdminGroupTourList = data;
  },
  initUpdateAdminGroupTourObj(state, id) {
    state.updateAdminGroupTourObj = state.groupTourList.filter(item => {
      if (item.ii_ID == id) {
        return true;
      }
      return false
    })[0]
  },
  initAdminBusinessInformation(state, data) {
    state.adminBusinessInformationList = data;
  },
  initUpdateAdminBusinessInformationObj(state, id) {
    state.updateAdminBusinessInformationObj = state.adminBusinessInformationList.filter(item => {
      if (item.ts_tb_UserID == id) {
        return true;
      }
      return false;
    })[0]
  },
  initUpdateAdminMerchantProductsObj(state, id) {
    state.updateAdminMerchantProductsObj = state.adminTradeGoodList.filter(item => {
      if (item.ta_tg_TradeID == id) {
        return true;
      }
      return false;
    })[0]
  },
  initUpdateAdminLinePrepareObj(state, id) {
    state.updateAdminLinePrepareObj = state.adminLinePrepare.filter(item => {
      if (item.ts_pt_ID == id) {
        return true;
      }
      return false;
    })[0]
  },
  initAdminProductMenu(state, data) {
    state.adminProductMenuList = data;
  },
  initUpdateMenu(state, id) {
    state.updateMenuObj = state.adminProductMenuList.filter(item => {
      if (Number(item.ts_mu_ID) == id) {
        return true;
      }
      return false;
    })[0];
  },
  //产品特色
  initAdminProductFeatures(state, data) {
    state.adminProductFeaturesList = data;
  },
  //初始化修改产品特色数据
  initUpdateAdminProductFeatures(state, id) {
    state.updateAdminProductFeaturesObj = state.adminProductFeaturesList.filter(item => {
      if (Number(item.ts_gs_ID) == id) {
        return true;
      }
      return false;
    })[0]
  },
  //初始化修改活动用餐数据
  initUpdateAdminActiveFoodObj(state, id) {
    state.updateAdminActiveFoodObj = state.adminEventDiningList.filter(item => {
      if (Number(item.ts_af_ID) == id) {
        return true;
      }
      return false;
    })[0]
  },
  //初始化修改活动酒店obj
  initUpdateAdminActiveHotelObj(state, id) {
    state.updateAdminActiveHotelObj = state.adminActiveHotelList.filter(item => {
      if (Number(item.ts_ah_ID) == id) {
        return true;
      }
      return false;
    })[0];
  },
  //初始化温馨提示数据
  initAdminActiveReminder(state, data) {
    state.adminActiveReminderList = data;
  },
  //修改温馨提示数据
  updateAdminActiveReminderObj(state, id) {
    state.updateAdminActiveReminderObj = state.adminActiveReminderList.filter(item => {
      if (Number(item.ts_an_ID) == id) {
        return true;
      }
      return false;
    })[0]
  },
  //商户营业执照列表
  initAdminBusinessLicense(state,data){
    state.adminBusinessLicenseList = data;
  },
  //修改商户营业执照数据
  updateAdminBusinessLicense(state,id){
    state.updateAdminBusinessLicenseObj = state.adminBusinessLicenseList.filter(item=>{
      if( Number(item.ts_bl_ID) == id ){
        return true;
      }
      return false;
    })[0]
  },

  //参数
  adminMerchantProductsId(state, id) {
    state.adminMerchantProductsId = id;
  },
  adminProductLineManagementId(state, id) {
    state.adminProductLineManagementId = id;
  },
  adminProductCharacteristicManagementId(state, id) {
    state.adminProductCharacteristicManagementId = id;
  },
  adminLineScheduleManagementId(state, id) {
    state.adminLineScheduleManagementId = id;
  },
  adminScheduleTimeManagementId(state, id) {
    state.adminScheduleTimeManagementId = id;
  },
  adminTimeActivityManagementId(state, id) {
    state.adminTimeActivityManagementId = id;
  },
  adminActivityMealManagementId(state, id) {
    state.adminActivityMealManagementId = id;
  },
  initAdminCostsOf(state,data){
    state.adminCostsOfList = data;
  },
  initUpdateAdminCostsOfObj(state,id){
    state.updateAdminCostsOfObj = state.adminCostsOfList.filter(item=>{
      if(item.ts_fi_Code==id){
        return true;
      }
      return false;
    })[0]
  },
  initAdminSystemMenu(state,data){
    state.adminSystemMenuList = data;
  },
  filterAdminSystemMenu(state,name){
    state.adminSystemMenuList = state.adminSystemMenuList.filter(item=>{
      if(item.sm_si_Name==name){
        return true;
      }
      return false;
    })
  },
  initUpdateAdminSystemMenuObj(state,id){
    state.updateAdminSystemMenuObj = state.adminSystemMenuList.filter(item=>{
      if(item.sm_si_ID==id){
        return true;
      }
      return false;
    })[0]
  },
  initAdminCommentsType(state,data){
    state.adminCommentsTypeList = data;
  },
  initDepartureCity(state,data){
    state.departureCityList = data;
  },
  initAdminLinePrice(state,data){
    state.adminLinePriceList = data;
  },
  initProvice(state,data){
    state.proviceList = data;
  },
  initCityList(state,data){
    state.cityList = data;
  },
  initAdminRouteDepartureCity(state,data){
    state.adminRouteDepartureCity = data;
  },
  initUpdateAdminRouteDepartureCityObj(state,id){
    state.updateAdminRouteDepartureCityObj = state.adminRouteDepartureCity.filter(item=>{
      if(item.ts_cc_ID==id){
        return true;
      }
      return false;
    })[0]
  },
  initUpdateAdminLinePriceObj(state,id){
    state.updateAdminLinePriceObj = state.adminLinePriceList.filter(item=>{
      if(item.ts_pp_ID == id){
        return true;
      }
      return false;
    })[0]
  },
  initAdminSupplier(state,data){
    state.adminSupplierList = data;
    state.adminSupplierListObj = data[0]
  },
  initChangeCompanyType(state,data){
    state.changeCompanyTypeList = data;
  },
  initChangeMineyType(state,data){
    state.changeMineyTypeList = data;
  },
  initChangeCooperationType(sstate,data){
    state.changeCooperationTypecList = data;
  }

};

export default {
  getters,
  state,
  mutations
}
