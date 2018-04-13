export default {
  FoodStoreRoomInformation: state => state.FoodStoreRoomInformation, //美食房间信息
  UpdataFoodStoreRoomInformationObj: state => state.UpdataFoodStoreRoomInformationObj,  //修改房间信息
  FoodStoreRoomPicture: state => state.FoodStoreRoomPicture, //房间图片
  updateStoreRoomImageObj: state => state.updateStoreRoomImageObj,   //修改房间图片
  FoodStoreRoomImageList: state => state.FoodStoreRoomImageList,   //房间图片类

  //美食推荐菜
  RecommendFood: state => state.RecommendFood,   //推荐菜


  //美食店面房间
  FoodStoreRoom: state => state.FoodStoreRoom,   //店面房间


  //美食店面产品
  //店面产品
  FoodStoreProduct: state => state.FoodStoreProduct,   //店面产品

  //停车位
  FoodParkingSpace: state => state.FoodParkingSpace,  //停车位

  foodStoreInformtionList: state => state.foodStoreInformtionList,

  updateFoodStoreInformtionObj: state => state.updateFoodStoreInformtionObj,

  numberOfMealsList: state => state.numberOfMealsList,

  storefrontTypeList: state => state.storefrontTypeList,

  foodProcinceList: state => state.foodProcinceList,

  foodCityList: state => state.foodCityList,

  roomTableTimeEveryDayList: state => state.roomTableTimeEveryDayList,

  foodTableTimeList: state => state.foodTableTimeList,
}
