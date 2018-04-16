/**
 * Created by leibo on 18/1/2.
 */
import axios from 'axios';

export default {

  //------------------------------------------管理员--------------------------------------------------
  //管理员活动景点查询
  initAdminActivitySite({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivitySite/GetActivitySite', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdminActivitySite', data.data);
            relove()
          } else {
            reject(data.resultcontent)
          }
        })

    })
  },
  //添加管理员活动景点
  initAddAdminActivitySite({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivitySite/Insert', JSON.stringify(data), {
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
  //修改管理员活动景点
  UpdateAdminActivitySite(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivitySite/Update', JSON.stringify(data), {
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
  //删除管理员活动景点
  DeleteAdminActivitySite(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivitySite/Delete', JSON.stringify(data), {
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
  //管理员活动交通查询
  initAdminActiveTraffic({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivityTransport/GetActivityTransport', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdminActiveTraffic', data.data)
            relove(data.resultcontent)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //添加活动交通
  AddAdminActiveTraffic(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivityTransport/Insert', JSON.stringify(data), {
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
  //修改活动交通
  UpdateAdminActiveTraffic(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivityTransport/Update', JSON.stringify(data), {
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
  //删除活动交通
  DeleteAdminActiveTraffic(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivityTransport/Delete', JSON.stringify(data), {
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
  //管理员查询活动购物
  initAdminEventShopping({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivityShopping/GetActivityShopping', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdminEventShopping', data.data)
            relove(data.resultcontent)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //添加活动购物
  AddAdminEventShopping(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivityShopping/Insert', JSON.stringify(data), {
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
  //修改活动购物
  UpdateAdminEventShopping(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivityShopping/Update', JSON.stringify(data), {
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
  //删除活动购物
  DeleteAdminEventShopping(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivityShopping/Delete', JSON.stringify(data), {
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
  //管理员产品线路查询
  initAdminProductLine({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ProductLine/GetProductLine', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdminProductLine', data.data);
            relove(data.data)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //管理员线路日程
  initAdminLinePrepare({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/LinePrepare/GetLinePrepare', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            for (var i = 0; i < data.data.length; i++) {
              data.data[i].ts_pt_ShowImage = data.data[i].ts_pt_ShowImage.split(',')
            }
            commit('initAdminLinePrepare', data.data);
            relove()
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //管理员日程时间
  initAdminScheduleTime({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TravelTime/GetTravelTime', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdminScheduleTime', data.data)
            relove()
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //管理员时间活动
  initAdminTimeActivities({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TimeActivity/GetTravelTime', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdminTimeActivities', data.data)
            relove()
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //管理员查商户信息
  initAdminTradeGoodList({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TradeGood/GetTradeGoodInfo', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            var resulte = data.data;
            for (var i = 0; i < resulte.length; i++) {
              resulte[i].ta_tg_ShowImages = resulte[i].ta_tg_ShowImage.split(',')
            }
            commit('initAdminTradeGoodList', resulte);
            relove(data)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //管理员上传图片
  uploadAdminImgs(store, data) {
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
  //查询商户订单
  initQueryUserOrder({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TravelOrder/GetOrderInfo', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initQueryUserOrder', data.data);
            relove(data.totalrows)
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //查询用户订单
  initSearchUserOrder({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TravelOrder/GetOrderInfo', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initSearchUserOrder', data.data);
            relove(data.totalrows);
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //添加时间活动
  AddAdminTimeActivities(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TimeActivity/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //修改时间活动
  UpdateAdminTimeActivities(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TimeActivity/Update', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //删除时间活动
  DeleteAdminTimeActivities(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TimeActivity/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //添加日程时间
  AddAdminScheduleTime(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TravelTime/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //修改日程时间
  UpdateAdminScheduleTime(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TravelTime/Update', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //删除日程时间
  DeletAdminScheduleTime(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TravelTime/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //添加线路
  AddAdminQueryProductInformationSubmit(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ProductLine/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //修改线路
  UpdateAdminQueryProductInformation(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ProductLine/Update', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //删除线路
  DeleteAdminQueryProductInformation(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ProductLine/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //Home初始化跟团游栏目
  initHomeAdminGroupTour({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/GroupItemInfo/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initHomeAdminGroupTour', data.data);
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //跟团游栏目
  initAdminGroupTour({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/GroupItemInfo/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdminGroupTour', data.data);
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //添加跟团游栏目
  AddAdminGroupTour(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/GroupItemInfo/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //修改跟团游栏目
  UpdateAdminGroupTour(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/GroupItemInfo/Update', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //删除跟团游栏目
  DeleteAdminGroupTour(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/GroupItemInfo/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //管理员商户信息
  initAdminBusinessInformation({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TradeInfo/GetTradeInfoList', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            for (var i = 0; i < data.data.length; i++) {
              if (data.data[i].ts_tb_ShowImage) {
                data.data[i].ts_tb_ShowImage = data.data[i].ts_tb_ShowImage.split(',')
              } else {
                data.data[i].ts_tb_ShowImage = []
              }
              if (data.data[i].ts_tb_StoreImageURL) {
                data.data[i].ts_tb_StoreImageURL = data.data[i].ts_tb_StoreImageURL.split(',')
              } else {
                data.data[i].ts_tb_StoreImageURL = []
              }
            }
            commit('initAdminBusinessInformation', data.data);
            relove(Number(data.totalrows));
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //修改商户
  UpdateAdminBusinessInformation(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TradeInfo/Update', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //删除商户
  DeleteAdminBusinessInformation(store, id) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TradeInfo/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //商户上传图片
  uploadImgs(store, data) {
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
  //模糊搜索商户
  AdminBusinessInformationSearch({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TradeInfo/GetTradeInfoList', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.data);
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //添加商家产品
  AddAdminMerchantProducts(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TradeGood/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //修改产品信息
  UpdateAdminMerchantProducts(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TradeGood/Update', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //删除产品信息
  DeleteAdminMerchantProducts(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TradeGood/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //添加线路日程
  AddAdminLinePrepare(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/LinePrepare/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //修改线路日程
  UpdateAdminLinePrepare(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/LinePrepare/Update', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //删除线路日程
  DeleteAdminLinePrepare(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/LinePrepare/Delete', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove();
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //查询菜单
  AdminProductMenu({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/Menu/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdminProductMenu', data.data);
            relove();
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //添加菜单
  addProductMenu({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/Menu/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent);
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //修改菜单提交
  updateProductMenuSubmit({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/Menu/Update', JSON.stringify(data), {
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
  //删除菜单
  deleteMenu({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/Menu/Delete', JSON.stringify(data), {
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
  //产品特色
  initProductFeatures({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/GoodSpecial/GetGoodSpecialList', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initProductFeatures', data.data)
            relove(data.resultcontent);
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //产品特色
  initAdminProductFeatures({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/GoodSpecial/GetGoodSpecialList', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdminProductFeatures', data.data)
            relove(data.resultcontent);
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //添加产品特色
  initAddAdminProductFeaturesObj({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/GoodSpecial/Insert', JSON.stringify(data), {
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
  //修改产品特色提交
  updateAdminProductFeaturesSubmit({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/GoodSpecial/Update', JSON.stringify(data), {
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
  //删除特色产品
  deleteAdminProductFeatures({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/GoodSpecial/Delete', JSON.stringify(data), {
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
//活动用餐
  initAdminEventDining({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivityFood/GetActivityFood', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {

          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdminEventDining', data.data);
            relove()
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //添加活动用餐
  initAdminActiveFood({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivityFood/Insert', JSON.stringify(data), {
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
  //修改活动用餐
  updateAdminActiveFoodSubmit({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivityFood/Update', JSON.stringify(data), {
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
  //删除活动用餐
  deleteAdminActiveFood({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivityFood/Delete', JSON.stringify(data), {
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
  //活动酒店
  initAdminActiveHotelList({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivityHotel/GetActivityHotel', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdminActiveHotelList', data.data);
            relove()
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //添加活动酒店
  addAdminActiveHotel({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivityHotel/Insert', JSON.stringify(data), {
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
  //修改活动酒店
  updateAdminActivityHotel({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivityHotel/Update', JSON.stringify(data), {
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
  //删除活动酒店
  deleteAdminActiveHotel({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivityHotel/Delete', JSON.stringify(data), {
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
  //初始化温馨提示数据
  initAdminActiveReminder({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivityNotice/GetActivityNotice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdminActiveReminder', data.data);
            relove(data.resultcontent)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //添加温馨提示
  addAdminActiveReminderObj(state, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivityNotice/Insert', JSON.stringify(data), {
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
  //修改温馨提示提交
  updateAdminActiveReminderSubmit({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivityNotice/Update', JSON.stringify(data), {
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
  //删除温馨提示
  deleteAdminActiveReminder({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/ActivityNotice/Delete', JSON.stringify(data), {
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
//查询线路费用说明
  initAdminCostsOf({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/FeeInfo/GetFeeInfoList', JSON.stringify(data), {
        headers: {
          'Content-Type':
            'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdminCostsOf', data.data)
            relove(Number(data.totalrows))
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
//初始化商户营业执照list
  initAdminBusinessLicense({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TradeLicence/GetTradeLicenceList', JSON.stringify(data), {
        headers: {
          'Content-Type':
            'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdminBusinessLicense', data.data);
            relove(Number(data.totalrows));
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
//添加线路费用说明
  AddAdminCostsOf(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/FeeInfo/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type':
            'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent);
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //添加营业执照
  addAdminBusinessLicenseSubmit({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TradeLicence/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type':
            'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(data.resultcontent);
          } else {
            reject(data.resultcontent)
          }
        })
    })
  }
  ,
  //修改线路费用说明
  UpdateAdminCostsOf(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/FeeInfo/Update', JSON.stringify(data), {
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

  //修改营业执照
  updateAdminBusinessLicenseSubmit({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TradeLicence/Update', JSON.stringify(data), {
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
  }
  ,
  //删除线路费用说明
  DeleteAdminCostsOf(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/FeeInfo/Delete', JSON.stringify(data),
        {
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
  //删除商户营业执照
  deleteAdminBusinessLicense({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TradeLicence/Delete', JSON.stringify(data), {
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
  }
  ,
  //初始化系统总菜单
  initAdminSystemMenu({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/System/GetSystemMenuInfo', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdminSystemMenu', data.data)
            relove(data.resultcontent)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  }
  ,
  //添加系统总菜单
  AddAdminSystemMenu(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/System/Insert', JSON.stringify(data), {
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
  }
  ,
  //修改系统总菜单
  UpdateAdminSystemMenu(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/System/Update', JSON.stringify(data), {
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
  }
  ,
  //删除系统总菜单
  DeleteAdminSystemMenu(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/System/Delete', JSON.stringify(data), {
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
  //查询评论类型
  initAdminCommentsType(store, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/CommentType/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdminCommentsType', data.data);
            relove(data.resultcontent)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //根据产品线路查询出发城市
  initDepartureCity({commit}, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/ProductPrice/GetLineCity', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initDepartureCity', data.data);
            relove(data.resultcontent)
          } else {
            reject(data.resultcontent)
          }
        })
    })

  },
  //初始化产品线路价格
  initAdminLinePrice({commit}, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/ProductPrice/GetProductPrice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdminLinePrice', data.data)
            relove(data.resultcontent)
          } else {
            reject(data.resultcontent)
          }
        })
    })

  },
  //初始化省
  initProvice({commit}, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initProvice', data.data)
            relove(data.resultcontent)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //初始化城市
  initCityList({commit}, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initCityList', data.data)
            relove(data.resultcontent)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //添加产品线路价格
  AddAdminLinePriceSubmit(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/ProductPrice/Insert', JSON.stringify(data), {
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
  //生成座位
  initBuildSeat(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/ProductPrice/MakeSeatNo', JSON.stringify(data), {
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
  //查询出发城市
  initAdminRouteDepartureCity({commit}, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/LineCity/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdminRouteDepartureCity', data.data)
            relove(Number(data.totalrows))
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //添加产品线路城市
  AddAdminRouteDepartureCity(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/LineCity/Insert', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            relove(Number(data.totalrows))
          } else {
            reject(data.resultcontent)
          }
        })
    })

  },
  //修改出发城市
  UpdateAdminRouteDepartureCity(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/LineCity/Update', JSON.stringify(data), {
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
  //删除出发城市
  DeleteAdminRouteDepartureCity(store, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/LineCity/Delete', JSON.stringify(data), {
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
  //初始化供应商信息
  initAdminSupplier({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/AgentInfo/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            let resulte = data.data
            for (var i = 0; i < resulte.length; i++) {
              if (resulte[i].agentInfo.sm_ai_CertImage) {
                resulte[i].agentInfo.sm_ai_CertImage = resulte[i].agentInfo.sm_ai_CertImage.split(',')
              } else {
                resulte[i].agentInfo.sm_ai_CertImage = []
              }
              if (data.data[i].agentInfo.sm_ai_OtherImage) {
                resulte[i].agentInfo.sm_ai_OtherImage = resulte[i].agentInfo.sm_ai_OtherImage.split(',')
              } else {
                resulte[i].agentInfo.sm_ai_OtherImage = []
              }
              if (data.data[i].agentInfo.sm_ai_FeeImage) {
                resulte[i].agentInfo.sm_ai_FeeImage = resulte[i].agentInfo.sm_ai_FeeImage.split(',')
              } else {
                resulte[i].agentInfo.sm_ai_FeeImage = []
              }
            }
            commit('initAdminSupplier', data.data)

            relove(data.data)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //经营范围
  initChangeScopeOfOperation({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/TradeScope/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initChangeScopeOfOperation', data.data)
            relove()
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //公司规模
  initChangeCompanyType({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/CompanySize/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initChangeCompanyType', data.data)
            relove()
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //供应商收益
  initAdminPersonalBenefits({commit}, data) {
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/AgentInfo/Income', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdminPersonalBenefits', data.data);
            relove(Number(data.totalrows))
          } else {
            reject(data.resultcontent)
          }
        })

    })
  },
  //查询结算币种
  initChangeMineyType({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/BalanceCurrency/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initChangeMineyType', data.data)
            relove(data.data)
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //类型
  initChangeCooperationType({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/CooperationType/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initChangeCooperationType', data.data)
            relove()
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //修改供应商信息
  updateAdminUserInfoSubmit({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://webservice.1000da.com.cn/AgentInfo/Update', JSON.stringify(data), {
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
  //获取省
  initProvinceData({commit}, data) {
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initProvinceData', data.checkFlowList)
            relove(data.resultcontent)
          } else {
            reject(data.resultcontent)
          }
        })
    })
  },
  //供应商查看审核流程
  initLookList({commit}, data) {
    return new Promise(function (relove, reject) {
        axios.post('http://webservice.1000da.com.cn/ProxyInfo/GetCheckInfo', JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
            .then(data => {
              var data = data.data;
              if (Number(data.resultcode) == 200) {
                commit('initLookList', data.checkFlowList)
                relove()
              }else{
                reject(data.resultcontent)
              }
            })
      })
  },
  initCityData({commit}, data){
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initCityData', data.data)
            relove();
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //获取县
  initCountyData({commit}, data){
    return new Promise(function (relove, reject) {
      axios.post('http://hly.lxs.1000da.com.cn/AreaFull/SelectProvice', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initCountyData', data.data)
            relove()
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },

}