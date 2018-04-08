export default {
  //初始化酒店信息数据
  initMyHotelDetails(state, obj){
    state.myHotelDetailsList = []
    state.myHotelDetailsList.push(obj)
  },
  //获取省
  initHotelProvinceData(state, data){
    state.provinceHotelDataList = data;
  },
  initHotelCityData(state, data){
    state.cityHotelDataList = data;
  },
  initHotelCountyData(state, data){
    state.countyHotelDataList = data;
  },
  //修改酒店信息
  updateHotelDetilsContent(state){
    state.updateHotelDetilsObj = state.myHotelDetailsList[0];
  },
  //酒店推荐列表数据
  changeRecommendType(state, data){
    state.recommendTypeList = data;
  },
  //酒店推荐类型
  initHotelQueryRecommend(state, data){
    state.hotelQueryRecommendList = data;
  },
  initHotelIntroduceType(state, data){
    state.hotelIntroduceTypeList = data;
  },
  initHotelImage(state, data){
    state.hotelImageList = data;
  },
  initHotelImageType(state, data){
    state.hotelImageTypeList = data;
  },
  initHotelPolicy(state,data){
    state.hotelPolicyList = data;
  },
  updateHotelImage(state,id){
    state.updateHotelImageObj = state.hotelImageList.filter(item=>{
      if(item.ht_hi_ID==id){
        return true;
      }
      return false;
    })[0]
  },
  updateHotelPolicy(state,id){
    state.updateHotelPolicyObj = state.hotelPolicyList.filter(item=>{
      if(item.ht_hi_ID==id){
        return true;
      }
      return false;
    })[0]
  },
  initHotelThemeType(state,data){
    state.hotelThemeTypeList = data;
  },
  initHotelTheme(state,data){
    state.hotelThemeList = data;
  },
  initHotelIcon(state,data){
    state.hotelIconList = data;
  },
  initHotelIconGallery(state,data){
    state.hotelIconGalleryList = data;
  }
}
