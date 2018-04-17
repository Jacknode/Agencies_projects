export default {
  //初始化动画
  setTranstionFalse(state) {
    state.transtionActive = {
      isActive: false,
      isRotateInDownRight: false
    }
  },
  //房间信息
  FoodStoreRoomInformation(state, data) {
    state.FoodStoreRoomInformation = data;
  },
  //修改房间信息
  updataFoodStoreRoomInformation(state, data) {
    state.updataFoodStoreRoomInformationObj = data;
  },

  //修改房间图片
  updataStoreRoomImageObj(state, data) {
    state.updateStoreRoomImageObj = state.FoodStoreRoomPictureList.filter(item => {
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


  //查询
  initFoodStoreRoomPicture(state, data) {
    state.FoodStoreRoomPicture = data;
  },


  //推荐菜
  initRecommendFood(state, data) {
    state.RecommendFoodList = data;
  },
  updateRecommendFoodObj(state, data) {
    state.updateRecommendFoodObj = state.RecommendFoodList.filter(item => {
      if (item.fd_if_ID == id) {
        return true;
      }
      return false;
    })[0]
  },


  //美食店面房间
  //查询
  initFoodStoreRoom(state, data) {
    state.FoodStoreRoomList = data;
  },
  updateFoodStoreRoomObj(state, data) {
    state.updateFoodStoreRoomObj = state.FoodStoreRoomList.filter(item => {
      if (item.fd_sfp_ID == id) {
        return true;
      }
      return false;
    })[0];
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




  //美食店面产品
  //店面产品
  // FoodStoreProduct(state, data) {
  //   state.FoodStoreProduct = data;
  // },
  //查询
  initFoodStoreProduct(state, data) {
    state.FoodStoreProductList = data;
  },
  updateFoodStoreProductObj(state, data) {
    state.updateFoodStoreProductObj = state.FoodStoreProductList.filter(item => {
      if (item.fd_sfp_ID == id) {
        return true;
      }
      return false;
    })[0];
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
  initFoodProcince(state, data) {
    state.foodProcinceList = data;
  },
  initFoodCity(state, data) {
    state.foodCityList = data;
  },
  initRoomTableTimeEveryDay(state, data) {
    state.roomTableTimeEveryDayList = data;
  },
  initFoodTableTime(state, data) {
    state.foodTableTimeList = data;
  },




  //停车位
  // FoodParkingSpace(state,data){
  //   state.FoodParkingSpaceList=data;
  // },
  //查询
  initFoodParkingSpace(state, data) {
    state.FoodParkingSpaceList = data;
  },
  //修改
  updateFoodParkingSpaceObj(state, id) {
    state.updateFoodParkingSpaceObj = state.FoodParkingSpaceList.filter(item => {
      if (item.fd_sc_ID == id) {
        return true;
      }
      return false;
    })[0]
  },

  //查询
  initFoodRoomTable(state, data) {
    state.FoodRoomTableList = data;
  },
  //修改
  updateFoodRoomTableObj(state, id) {
    state.updateFoodRoomTableObj = state.FoodRoomTableList.filter(item => {
      if (item.fd_sc_ID == id) {
        return true;
      }
      return false;
    })[0]
  },


  //美食产品图片
  initFoodProductImg(state, data) {
    state.FoodProductImgList = data;
  },
  //修改
  updateFoodRoomTableObj(state, id) {
    state.updateFoodRoomTableObj = state.FoodProductImgList.filter(item => {
      if (item.fd_pi_ID == id) {
        return true;
      }
      return false;
    })[0]
  },
}


















