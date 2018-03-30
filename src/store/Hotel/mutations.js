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
  //修改酒店类型
  updateRecommendData(state,id) {
    state.updateRecommendObj = state.hotelQueryRecommendList.filter(item=>{
      if( item.ht_hi_ID == id ){
        return true;
      }
      return false;
    })[0];
  },
  //酒店图片列表
  initHotelPicture(state,data){
    state.hotelPictureList = data;
  },
  //酒店房间列表
  initHotelRoom(state,data){
    state.hotelRoomList = data;
  }
}
