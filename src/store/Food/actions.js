import axios from 'axios';

export default {
  //美食房间图片上传
  foodUploadAdminImgs(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://image.1000da.com.cn/PostImage/PostToService', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          relove(data.data)
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

  //添加店面信息
  addFoodStoreInformation({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/StoreFront/Insert', JSON.stringify(data), {
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

  //删除店面信息
  deleteFoodStoreInformtion({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/StoreFront/Delete', JSON.stringify(data), {
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
          if (Number(data.resultcode) == 200) {
            relove(Number(data.totalrows))
            commit('initFoodStoreRoom', data.data)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },

  //添加店面房间
  addFoodStoreRoom({commit}, data) {
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

  //修改店面房间
  updateFoodStoreRoom({commit}, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/StoreFrontRoom/Update', JSON.stringify(data), {
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

  //删除店面房间
  deleteFoodStoreRoom({commit}, data) {
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

  //初始化店面产品
  initFoodStoreProduct({commit}, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/StoreFrontProduct/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(Number(data.totalrows));
            commit('initFoodStoreProduct', data.data)
          }
          else {
            reject(data.resultcontent)
          }
        })
    })
  },

/*****************************************停车场***************************************************/
//查询停车场
  initFoodStoppingPlace({commit},data){
    return new Promise(
      (relove,reject)=>{
        axios.post('http://webservice.1000da.com.cn/StopCar/Select', JSON.stringify(data), {
            headers:{'Content-Type': 'application/x-www-form-urlencoded'}
          })
          .then(data=>{
            var data = data.data;
            if(Number(data.resultcode)==200){
              relove(Number(data.totalrows));
              commit('initFoodStoppingPlace',data.data)
            }
            else{
              reject(data.resultcontent)
            }
          })
      }
    )
  },
//停车场:查询店面所有信息
  FoodStoreAll({commit},data){
    return new Promise((relove,reject)=>{
      axios.post('http://webservice.1000da.com.cn/StoreFront/Select',JSON.stringify(data),{headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
        .then(data=>{
          var data = data.data;
          if(Number(data.resultcode)==200){
            relove(Number(data.tatalrows));
            commit('FoodStoreAll',data.data)
          }
          else{
            reject(data.resultcontent)
          }
        });
    });
  },
//添加停车场
  addFoodStoppingPlace(store,data){
    return new Promise((relove,reject)=>{
      axios.post('http://webservice.1000da.com.cn/StopCar/Insert',JSON.stringify(data),{headers:{'Content-Type':'application/x-www-form-urlencoded'}})
        .then(data=>{
          var data = data.data;
          if(Number(data.resultcode==200)){
            relove(data.resultcontent);
          }
          else{
            reject(data.resultcontent);
          }
        });
    });
  },
//删除停车场
  deleteFoodStoppingPlace(store,data){
    return new Promise((relove,reject)=>{
      axios.post('http://webservice.1000da.com.cn/StopCar/Delete',JSON.stringify(data),{headers:{'Content-Type':'application/x-www-form-urlencoded'}})
        .then(data=>{
          var data = data.data;
          if(Number(data.resultcode==200)){
            relove(data.resultcontent);
          }
          else{
            reject(data.resultcontent);
          }
        })
    })
  },

//修改停车场
  updateFoodStoppingPlace(store,data){
    return new Promise((relove,reject)=>{
      axios.post('http://webservice.1000da.com.cn/StopCar/Update',JSON.stringify(data),{headers:{'Content-Type':'application/x-www-form-urlencoded'}})
        .then((data)=>{
          var data = data.data;
          if(Number(data.resultcode==200)){
            relove(data.resultcontent)
          }
          else{
            reject(data.resultcontent)
          }
        });
    });
  },

}

