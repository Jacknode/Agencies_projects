export default {
  //初始化酒店信息数据
  initMyHotelDetails(state,obj){
    state.myHotelDetailsList = []
    state.myHotelDetailsList.push(obj)
  },
  //获取省
  initHotelProvinceData(state,data){
    state.provinceHotelDataList = data;
  },
  initHotelCityData(state,data){
    state.cityHotelDataList = data;
  },
  initHotelCountyData(state,data){
    state.countyHotelDataList = data;
  },
  //修改酒店信息
  updateHotelDetilsContent( state ){
    state.updateHotelDetilsObj = state.myHotelDetailsList[0];
  },
  //酒店推荐列表数据
  changeRecommendType(state,data){
    state.recommendTypeList = data;
  },
  //酒店推荐类型
  initHotelQueryRecommend(state,data){
    state.hotelQueryRecommendList = data;
  },
  initHotelIntroduceType(state,data){
    state.hotelIntroduceTypeList = data;
  }
}
