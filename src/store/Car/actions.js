/**
 * Created by leibo on 18/4/25.
 */
import axios from 'axios'

export default {
  //上传图片
  CarUploadAdminImgs(store,data){
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
  initCarCompanies({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/Hertz/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initCarCompanies',data.data)
          if(data.data.length){
            relove(data.data[0].cr_h_Id)
          }else{
            relove('')
          }

        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加租车公司
  addCarHomeSubmit(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/Hertz/Insert',JSON.stringify(data),{
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
  //修改租车公司
  UpdateCarHomeSubmit(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/Hertz/Update',JSON.stringify(data),{
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
  //租车门店
  initCarStore({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/CRStore/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initCarStore',data.data);
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //洲
  initCarGreat({commit},data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.data)
        }else{
          reject()
        }
      })
    })
  },
  //添加门店
  AddCarStore(store,data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/CRStore/Insert', JSON.stringify(data), {
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
  //修改门店
  UpdateCarStore(store,data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/CRStore/Update', JSON.stringify(data), {
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
  //删除门店
  DeleteCarStore(store,data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/CRStore/Delete', JSON.stringify(data), {
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
  //所有汽车
  initCarList(store,data){
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/CRCar/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(data => {
        var data = data.data;
        if (Number(data.resultcode) == 200) {
          relove(data.data)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //初始化汽车产品
  initCarProduct({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/CarProducts/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initCarProduct',data.data);
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加汽车产品
  AddCarProduct(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/CarProducts/Insert',JSON.stringify(data),{
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
  }
}
