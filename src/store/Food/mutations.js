export default {
  //房间信息
  FoodStoreRoomInformation(state, data) {
    state.FoodStoreRoomInformation = data;
  },
  //修改房间信息
  updataFoodStoreRoomInformation(state, data) {
    state.updataFoodStoreRoomInformationObj = data;
  },
  //房间图片
  initFoodStoreRoomPicture(state, data) {
    state.FoodStoreRoomPicture = data;
  },
  //修改房间图片
  updataStoreRoomImage(state, data) {
    state.updateStoreRoomImage = state.FoodStoreRoomPicture.filter(item => {
      if (item.fd_ri_ID == id) {
        return ture;
      }
      return false;
    })[0]
  },
  //房间图片类
  initFoodStoreRoomImageList(state, data) {
    state.FoodStoreRoomImageList = data;
  },


  //美食推荐菜
  //推荐菜
  initRecommendFood(state, data) {
    state.RecommendFood = data;
  },
  //修改推荐菜
  // updateRecommendFood(state,id){
  //   state.updateRecommendFood=state.RecommendFood.filter(item=>{
  //     if(item.fd_if_ID==id){
  //       return true;
  //     }
  //     return false
  //   })[0]
  // },


  //美食店面房间
  //店面房间
  FoodStoreRoom(state, data) {
    state.FoodStoreRoom = data;
  },
  //查询
  initFoodStoreRoom(state, data) {
    state.FoodStoreRoom = data;
  },


  //美食店面产品
  //店面产品
  FoodStoreProduct(state, data) {
    state.FoodStoreProduct = data;
  },
  //查询
  initFoodStoreProduct(state, data) {
    state.FoodStoreProduct = data;
  },

  //停车位
  FoodParkingSpace(state, data) {
    state.FoodParkingSpace = data;
  },
  //查询
  initFoodParkingSpace(state, data) {
    state.FoodParkingSpace = data;
  },
  initFoodStoreInformtion(state, data) {
    state.foodStoreInformtionList = data;
  },
  updateFoodStoreInformtion(state, id) {
    state.updateFoodStoreInformtionObj = state.foodStoreInformtionList.filter(item => {
      if (item.fd_sf_ID == id) {
        return true;
      }
      return false;
    })[0];
  },
  initNumberOfMeals(state, data) {
    state.numberOfMealsList = data;
  },
  initStorefrontType(state, data) {
    state.storefrontTypeList = data;
  },
  initFoodProcince(state,data) {
    state.foodProcinceList = data;
  },
  initFoodCity(state,data) {
    state.foodCityList = data;
  },
  initRoomTableTimeEveryDay(state, data){
    state.roomTableTimeEveryDayList = data;
  },
  initFoodTableTime(state,data) {
    state.foodTableTimeList = data;
  }



}
















