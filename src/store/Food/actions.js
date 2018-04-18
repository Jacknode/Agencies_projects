import axios from 'axios';

export default {
  initFoodStoreRoomInformation({commit}, data) {
    return new Promise((resolve, reject) => {
      axios.post('http://webservice.1000da.com.cn/RoomImage/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data => {
        if (Number(data.resultcode == 200)) {
          resolve(data.resultcontent)
          resolve(data.data)
        }
        else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //修改
  updataFoodStoreRoomInformation(store, data) {
    return new Promise((resolve, reject) => {
      axios.post('http://webservice.1000da.com.cn/RoomImage/Update', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data => {
        if (Number(data.resultcode == 200)) {
          resolve(data.resultcontent)
        }
        else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除
  dedleteFoodStoreRoomInformation({commit}, data) {
    return new Promise((resolve, reject) => {
      axios.post('http://webservice.1000da.com.cn/RoomImage/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data => {
        if (Number(data.resultcode == 200)) {
          resolve(data.resultcontent)
        }
        else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加
  addFoodStoreRoomInformation(store, data) {
    return new Promise((resolve, reject) => {
      axios.post('http://webservice.1000da.com.cn/RoomImage/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data => {
        var data = data.data
        if (Number(data.resultcode == 200)) {
          resolve(data.resultcontent)
        }
        else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //房间图片
  initFoodStoreRoomPicture({commit}, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/RoomImage/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data => {
        var data = data.data;
        if (Number(data.resultcode == 200)) {
          relove(data.resultcontent)
          commit('initFoodStoreRoomPicture', data.data)
        }
        else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除房间图片
  deleteFoodStoreRoomPicture(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/RoomImage/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //美食房间图片上传
  foodUploadAdminImgs(store, data) {
    //图片上传
    return new Promise((relove, reject) => {
      axios.post('http://image.1000da.com.cn/?', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          relove(data.data)
        })
    })
  },


  //删除房间图片
  deleteFoodStoreRoomPicture(store, data) {
    return new Promise((relove, resject) => {
      axios.post('http://webservice.1000da.com.cn/RoomImage/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    }).then(data => {
      var data = data.data;
      if (Number(data.resultcode == 200)) {
        relove(data.resultcontent)
      }
      else {
        reject(data.resultcontent)
      }
    })
  },
  //添加
  addFoodStoreRoomPicture(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/RoomImage/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    }).then(data => {
      var data = data.data;
      if (Number(data.resultcode == 200)) {
        relove(data.resultcontent)
      }
      else {
        reject(data.resultcontent)
      }
    })
  },

  //推荐菜
  initRecommendFood({commit}, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/IntroduceFood/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent)
            commit('initRecommendFood', data.data)
          }
        })
    })
  },
  //添加推荐菜
  addRecommendFood(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/IntroduceFood/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //删除
  deleteRecommendFood(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/IntroduceFood/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent)
          } else {
            reject(data.resultcontent)
          }
        })

    })
  },


  //修改
  // updateRecommendFood(store,data){
  //   return new Promise((relove, reject) => {
  //     axios.post('http://webservice.1000da.com.cn/IntroduceFood/Update', JSON.stringify(data), {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded'
  //       }
  //     })
  //       .then(data => {
  //         var data=data.data;
  //         console.log(111);
  //         // alert(111);
  //         if(Number(data.resultcode==200)){
  //           relove(data.resultcontent)
  //         }
  //         else {
  //           reject(data.resultcontent)
  //         }
  //       })
  //   })
  // },

  //美食店面房间
  //店面房间
  initFoodStoreRoom({commit}, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/StoreFrontRoom/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            relove(data.resultcontent)
            commit('initFoodStoreRoom', data.data)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //添加
  addFoodStoreRoom(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/StoreFrontRoom/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            relove(data.resultcontent)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //删除
  deleteFoodStoreRoom(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/StoreFrontRoom/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            relove(data.resultcontent)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },


  //美食店面产品
  //店面产品
  initFoodStoreProduct({commit}, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/StoreFrontProduct/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            relove(data.resultcontent)
            commit('initFoodStoreProduct', data.data)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //添加
  addFoodStoreProduct(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/StoreFrontProduct/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            relove(data.resultcontent)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //删除
  deleteFoodStoreProduct(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/StoreFrontProduct/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            relove(data.resultcontent)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //店面信息
  initFoodStoreInformtion({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/StoreFront/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            commit('initFoodStoreInformtion', data.data);
            relove(Number(data.totalrows))
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //用餐人数
  initNumberOfMeals({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/Property/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            commit('initNumberOfMeals', data.data);
            relove()
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },

  //店面类型
  initStorefrontType({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/Property/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            commit('initStorefrontType', data.data);
            relove()
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },

  //省
  initFoodProcince({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            commit('initFoodProcince', data.data);
            relove()
          } else {
            reject()
          }
        })
    })
  },
  //市
  initFoodCity({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            commit('initFoodCity', data.data);
            relove()
          } else {
            reject()
          }
        })
    })
  },

  //添加店面信息
  // addFoodStoreInformation({commit}, data) {
  //   return new Promise(function (relove, reject) {
  //     axios.post('http://webservice.1000da.com.cn/StoreFront/Insert', JSON.stringify(data), {


  //停车位
  //查询
  initFoodParkingSpace({commit}, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/StopCar/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            relove(data.resultcontent)
            commit('initFoodParkingSpace', data.data)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //修改店面信息
  updateFoodStoreInformtionSubmit({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/StoreFront/Update', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            relove(data.resultcontent)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //删除
  deleteFoodParkingSpace(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/StopCar/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            relove(data.resultcontent);
          }
          else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //删除店面信息
  // deleteFoodStoreInformtion({commit}, data) {
  //   return new Promise(function (relove, reject) {
  //     axios.post('http://webservice.1000da.com.cn/StoreFront/Delete', JSON.stringify(data), {
  //添加
  addFoodParkingSpace(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/StopCar/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            relove(data.resultcontent)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //初始化店面每天预定餐桌时间
  initRoomTableTimeEveryDay({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/CanLockTime/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            commit('initRoomTableTimeEveryDay', data.data)
            relove(Number(data.totalrows))
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },

  //添加店面每天预定餐桌时间

  // addTimeEveryDaySubmit({commit}, data) {
  //   return new Promise(function (relove, reject) {
  //     axios.post('http://webservice.1000da.com.cn/CanLockTime/Insert', JSON.stringify(data), {
  //修改
  updateFoodParkingSpace(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/StopCar/Update', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            relove(data.resultcontent)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },

  //修改店面每天预定餐桌时间

  // updateTimeEveryDaySubmit({commit}, data) {
  //   return new Promise(function (relove, reject) {
  //     axios.post('http://webservice.1000da.com.cn/CanLockTime/Update', JSON.stringify(data), {

  //美食房间餐桌
  //查询
  initFoodRoomTable({commit}, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/RoomTable/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            relove(data.resultcontent)
            commit('initFoodRoomTable', data.data)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },

  //删除

  // deleteTimeEveryDaySubmit({commit}, data) {
  //   return new Promise(function (relove, reject) {
  //     axios.post('http://webservice.1000da.com.cn/CanLockTime/Delete', JSON.stringify(data), {


  //删除
  deleteFoodRoomTable(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/RoomTable/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            relove(data.resultcontent)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },


  //添加
  addFoodRoomTable(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/RoomTable/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            relove(data.resultcontent)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //美食产品图片
  //查询
  initFoodProductImg({commit}, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/ProductImage/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            relove(data.resultcontent)
            commit('initFoodProductImg', data.data)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //删除
  deleteFoodProductImg(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/ProductImage/Delete', JSON.stringify(data), {

        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {

          var data = data.data;
          if (Number(data.resultcode == 200)) {
            relove(data.resultcontent)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //添加
  addFoodProductImg(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/ProductImage/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            relove(data.resultcontent)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //初始化店面房间餐桌时间
  initFoodTableTime({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/RoomTableTime/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            commit('initFoodTableTime', data.data)
            relove(Number(data.totalrows))
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //添加店面房间餐桌时间
  addTableTimeSubmit({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/RoomTableTime/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            relove(data.resultcontent)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //修改店面房间餐桌时间
  updateTableTimeSubmit({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/RoomTableTime/Update', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            relove(data.resultcontent)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //删除店面房间餐桌时间
  deleteTableTimeSubmit({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/RoomTableTime/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode == 200)) {
            relove(data.resultcontent)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },
}
























