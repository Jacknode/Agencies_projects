export default {
  //初始化动画
  setTranstionFalse(state) {
    state.transtionActive = {
      isActive: false,
      isRotateInDownRight: false
    }
  },
  initFoodStoreInformtion(state, data) {
    state.foodStoreInformtionList = data;
  },
  initNumberOfMeals(state, data) {
    state.numberOfMealsList = data;
  },
  initStorefrontType(state, data) {
    state.storefrontTypeList = data;
  },
  initFoodProcince(state, data) {
    state.foodProcinceList = data;
  },
  initFoodCity(state, data) {
    state.foodCityList = data;
  },
  initFoodStoreRoom(state, data) {
    state.foodStoreRoomList = data;
  },
  initFoodStoreProduct(state, data) {
    state.foodStoreProductList = data;
  },

/*******************************************停车场****************************************************/
//查询停车场
  initFoodStoppingPlace(state,data){
    state.foodStoppingPlaceList=data;
  },
//查询停车场所有店面信息
  FoodStoreAll(state,data){
    state.foodStoppingPlaceStoreAllList=data;
  }
}


















