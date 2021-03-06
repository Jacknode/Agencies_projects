
import {getNewStr} from '@/assets/public'
export default {
  //惠乐游酒店主题类别
  initHotelThemeType({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HotelThemeType/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelThemeType',data.data)
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //查询惠乐游酒店推荐类型
  initHotelIntroduceType({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/IntroduceType/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initHotelIntroduceType', data.data);
          relove(data.resultcontent);
        } else {
          reject(data.resultcontent)
        }
      })
    })
  },
  //酒店数据
  initMyHotelDetails({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/HotelWebPage/Detail', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initMyHotelDetails', data.data.HotelModel);
            relove(data.data.HotelModel.ht_ht_hotelID);
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //获取省
  initHotelProvinceData({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          console.log(data)
          if (Number(data.resultcode) == 200) {
            commit('initHotelProvinceData', data.data)
            relove()
          }
        })
    })
  },
  //获取市
  initHotelCityData({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initHotelCityData', data.data)
            relove()
          }
        })
    })
  },
  //获取县
  initHotelCountyData({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initHotelCountyData', data.data)
            relove()
          }
        })
    })
  },
  //添加酒店信息
  addHotelDetilsSubmit({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/Hotel/Insert', JSON.stringify(data), {
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
  //修改酒店数据
  updateHotelDetilsSubmit({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/Hotel/Update', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent);
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
//查询酒店推荐类型
  initHotelQueryRecommend({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/HotelIntroduce/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initHotelQueryRecommend',data.data)
          relove(Number(data.totalrows))
        } else {
          reject(data.resultcontent);
        }
      })
    })
  },
  //添加酒店推荐类型
  AddHotelQueryRecommend(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/HotelIntroduce/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent);
        } else {
          reject(data.resultcontent);
        }
      })
    })
  },
  //删除酒店推荐类型
  DeleteHotelQueryRecommend(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/HotelIntroduce/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent);
        } else {
          reject(data.resultcontent);
        }
      })
    })
  },
  //初始化酒店图片信息
  initHotelImage({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/HotelImage/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initHotelImage',data.data)
          relove(data.resultcontent);
        } else {
          reject(data.resultcontent);
        }
      })
    })
  },
  //酒店图片类型
  initHotelImageType({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/ImageType/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelImageType',data.data)
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //酒店上传图片
  hotelUploadAdminImgs(store,data){
    //图片上传
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
  //添加酒店图片
  AddHotelImage(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HotelImage/Insert',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //初始化酒店政策
  initHotelPolicy({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HotelPolicy/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelPolicy',data.data);
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //修改酒店图片
  UpdateHotelImage(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HotelImage/Update',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除酒店图片
  DeleteHotelImage(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HotelImage/Delete',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加酒店政策
  AddHotelPolicy(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HotelPolicy/Insert',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //修改酒店政策
  UpdateHotelPolicy(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HotelPolicy/Update',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除酒店政策
  DeleteHotelPolicy(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HotelPolicy/Delete',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //初始化酒店主题
  initHotelTheme({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HotelTheme/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelTheme',data.data);
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加酒店主题
  AddHotelTheme(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HotelTheme/Insert',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除酒店主题
  DeleteHotelTheme(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HotelTheme/Delete',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //初始化酒店图标
  initHotelIcon({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HotelSpecialImage/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelIcon',data.data)
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //初始化惠乐游图标库
  initHotelIconGallery({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/Image/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initHotelIconGallery',data.data);
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加酒店图标
  AddHotelIcon(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/HotelSpecialImage/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除酒店图标
  DeleteHotelIcon(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/HotelSpecialImage/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //酒店设施服务
  initHotelFacilitiesServices({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/HardService/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initHotelFacilitiesServices',data.data);
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加酒店设施服务
  AddHotelFacilitiesServices(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/HardService/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //修改酒店设施服务
  UpdateHotelFacilitiesServices(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/HardService/Update', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除酒店设施服务
  DeleteHotelFacilitiesServices(store,data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/HardService/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //惠乐游酒店设施初始化
  initHotelFacilities({commit},data){
    return new Promise(function (relove, reject) {
      axios.post(getNewStr+'/Hard/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          commit('initHotelFacilities',data.data)
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //初始化酒店设施服务设施
  initHotelFacilitiesServicesFacilities({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HardServiceHard/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelFacilitiesServicesFacilities',data.data);
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //初始化房间
  initHotelRoom({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/Room/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelRoom',data.data);
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加房间
  AddHotelRoom(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/Room/Insert',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //修改酒店房间
  UpdateHotelRoom(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/Room/Update',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除酒店房间
  DeleteHotelRoom(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/Room/Delete',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //惠乐游设施类型
  initHotelFacilitiesType({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HardType/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelFacilitiesType',data.data);
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //选中设施类型获取对应设施
  initSearchFacilities({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/Hard/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initSearchFacilities',data.data);
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加酒店设施服务设施
  AddHotelFacilitiesServicesFacilities(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HardServiceHard/Insert',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除酒店设施服务设施
  DeleteHotelFacilitiesServicesFacilities(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HardServiceHard/Delete',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //惠乐游房间设施类型
  initHotelRoomFacilitiesType({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/RoomHardType/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelRoomFacilitiesType',data.data)
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //初始化房间产品
  initHotelRoomProduct({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/RoomProductPrice/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelRoomProduct',data.data);
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加房间产品
  AddHotelRoomProduct(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/RoomProductPrice/Insert',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //修改酒店房间产品
  UpdateHotelRoomProduct(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/RoomProductPrice/Update',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除酒店房间产品
  DeleteHotelRoomProduct(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/RoomProductPrice/Delete',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //初始化酒店房间房间设施
  initHotelRoomRoomFacilities({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/RoomTypeHard/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          if(data.data.length){
            commit('initHotelID',data.data[0].ht_ht_hotelID)
          }
          commit('initHotelRoomRoomFacilities',data.data);
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //房间设施
  initRoomFacilities({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/RoomHard/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initRoomFacilities',data.data);
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加房间房间设施
  AddHotelRoomRoomFacilities(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/RoomTypeHard/Insert',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //修改房间房间设施
  UpdateHotelRoomRoomFacilities(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/RoomTypeHard/Update',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除房间房间设施
  DeleteHotelRoomRoomFacilities(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/RoomTypeHard/Delete',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //初始化酒店订单明细
  initHotelOrderDetails({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/OrderDetail/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelOrderDetails',data.data);
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //酒店确认订单查询订单
  initHotelConfirmOrder({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HotelOrder/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelConfirmOrder',data.data);
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //酒店确认订单
  ConfirmOrder(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/HotelOrder/OutOrder',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //初始化房间实体
  initHotelRoomEntity({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/RoomEntity/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelRoomEntity',data.data);
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加房间实体
  AddHotelRoomEntity(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/RoomEntity/Insert',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //修改房间实体
  UpdateHotelRoomEntity(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/RoomEntity/Update',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除房间实体
  DeleteHotelRoomEntity(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/RoomEntity/Delete',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //初始化房间实体到生成房间
  initHotelRoomNumber({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/RoomSeat/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelRoomNumber',data.data);
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //房间实体生成房间
  AddHotelRoomNumber(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/RoomSeat/GenerateRoom',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //房间产品批量房间
  AddHotelLotRoomNumber(store,data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/RoomSeat/BathGenerateRoom',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //初始化批量生成房间
  initHotelLotRoomNumber({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/RoomSeat/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelLotRoomNumber',data.data);
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //通过父类型查询子 类型
  initParentHotelQueryRecommend({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/IntroduceType/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initParentHotelQueryRecommend',data.data);
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  ////通过父类型查询子 下一级类型
  initShowChildHotelQueryRecommend({commit},data){
    return new Promise((relove, reject) => {
      axios.post(getNewStr+'/IntroduceType/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initShowChildHotelQueryRecommend',data.data);
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  }
}


