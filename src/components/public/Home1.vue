<template>
  <div id="wrap">
    <header class="clearfix">
      <h4>供应商后台管理系统</h4>
      <div class="icon-paragraph-justify3 icon" @click="wee"></div>
      <div class="aboutLoginUser">
        <a href="javascript:;">管理员</a>
        <div class="dropDownSelete">
          <a href="javascript:;"><i class="icon-user-plus"></i>朱斌</a>
          <a href="javascript:;"><i class="icon-switch2"></i>退出</a>
        </div>
      </div>
    </header>
    <section class="clearfix">
      <div class="leftNav">

      </div>
      <div class="rightContent"></div>
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    name: '',
    data() {
      return {
        isCollapse: false,


        dialogVisible: false,
        status: '',
        qiankeUser: '',
        lxs: false,
        hotel: false,
        ticket: false,
        food: false,
        Advertising: false,
        userInfo: {}
//        isAdmin:true
      }
    },
    computed: mapGetters([
      'transtionActive',
    ]),
    created() {

      this.userInfo = JSON.parse(sessionStorage.getItem('admin'));
      this.status = this.userInfo.sm_ai_IsPass;
      let status = localStorage.getItem('status')
      if (!status) {
        this.dialogVisible = false;
      }
//      if (!this.hotelImageTypeList.length
//        || !this.hotelIntroduceTypeList.length
//        || !this.hotelThemeTypeList.length
//        || !this.hotelIconGalleryList.length
//      ) {
      this.initData().then(() => {

      }, err => {
        console.log(err)
      })
//      }
      if (this.status == 1) {
        localStorage.setItem('status', true)
      }
      if (!sessionStorage.getItem('index')) {
        sessionStorage.setItem('index', '0')
      }
    },
    mounted() {
      let user = JSON.parse(sessionStorage.getItem('admin'));
      if (!user) {
        this.$router.push({name: 'Login'})
      }
      this.qiankeUser = user.sm_ai_Name;
      let options = {
        "loginUserID": "huileyou",
        "loginUserPass": "123",
        "operateUserID": "",
        "operateUserName": "",
        "tradeID": user.ts_tb_UserID ? user.ts_tb_UserID : '',
        "userID": "",
        "pcName": "",
        "ID": "",
        "page": 1,
        "rows": 10
      };
      //跟团游栏目
      let AdminOptions = {
        "loginUserID": "huileyou",
        "loginUserPass": "123",
        "operateUserID": "",
        "operateUserName": "",
        "pcName": "",
        isDelete: '0',
        groupName: ''
      };
      this.$store.dispatch('initHomeAdminGroupTour', AdminOptions)
    },
    watch: {
      '$route'(to, from) {
//        this.$store.commit('clearData')
        if (to.path == '/home/adminAllFunction2') {
          this.$router.push({name: 'AdminMerchantProducts'})
        }
        // 对路由变化作出响应...
        if (this.transtionActive.isActive && this.transtionActive.isRotateInDownRight) {
          this.$store.commit('setTranstionFalse')
        }
        setTimeout(() => {
          this.$store.commit('oPTranstionFalse')
        }, 10)
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      wee() {
        if (this.isCollapse) {
          this.isCollapse = false;
        } else {
          this.isCollapse = true;
        }

      },


      async initData() {
        //惠乐游推荐类型
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "操作员编码",
          "operateUserName": "操作员名称",
          "pcName": "",
          "data": {
            "ht_it_ID": "",//推荐类型ID
            "ht_it_Name": "",//推荐类型名称
            "ht_it_ParentID": "",//推荐类型父ID
          }
        }
        await this.$store.dispatch('initHotelIntroduceType', options)
        //惠乐游图片类型
        let imgOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ht_it_ID": "",//图片类型编码
          "ht_hi_Name": '',//图片类型名称
        };
        await this.$store.dispatch('initHotelImageType', imgOptions)

        //惠乐游主题类型
        let themeOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ht_tt_ThemeID": "",//主题ID
          "ht_tt_Name": '',//主题名称
          "ht_tt_IsHot": "",//是否热门
        };
        await this.$store.dispatch('initHotelThemeType', themeOptions)

        //酒店图标库
        let iconOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "操作员编码",
          "operateUserName": "操作员名称",
          "pcName": "",
          "ht_ie_ID": "",//图标库ID
          "ht_ie_Name": '',//图标名称
          "ht_ie_Image": '',//图标
          "ht_id_Remark": "",//备注
        }
        await this.$store.dispatch('initHotelIconGallery', iconOptions)

        //租车城市级联城市
        let carOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
        };
        await this.$store.dispatch('initCarCityPlace', carOptions)

        // //退出
        // Quit() {
        //   this.$router.push({name: 'adminLogin'})
        // },
        // //用户信息
        // getUser() {
        //   this.$router.push({name: 'AdminMerchantProducts'})
        // },
        //查询景点主题分类信息

        let getThemeTypeList = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "ttID": "",
          "ttName": "",
          "isDelete": 0,
          "page": 1,
          "rows": 100
        };
        await this.$store.dispatch('initThemeType', getThemeTypeList)

        //惠乐游设施
        let hotelFacilitiesServicesoptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ht_hd_ID": "",//设施编码
          "ht_hd_Name": '',//设施名称
          "ht_hd_HardTypeID": "",//设施类型ID
          "ht_hd_IsHot": "",//是否热门
        }
        await this.$store.dispatch('initHotelFacilities', hotelFacilitiesServicesoptions)

        //惠乐游设施类型
        let hotelFacilitiesTypeOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ht_ht_ID": "",//设施类型Id
          "ht_ht_Name": '',//设施类型名称
        }
        await this.$store.dispatch('initHotelFacilitiesType', hotelFacilitiesTypeOptions)

        //惠乐游房间设施类型
        let roomTypeOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "操作员编码",
          "operateUserName": "操作员名称",
          "pcName": "",
          "ht_rht_ID": "",//房间设施类型ID
          "ht_rht_Name": "",//类型名称
        }
        await this.$store.dispatch('initHotelRoomFacilitiesType', roomTypeOptions)
//用餐人数类型
        let selectPropertyInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "fd_py_ParentID": "28",//父编码
          "page": "1",
          "rows": "10000",
        }
        await this.$store.dispatch('initNumberOfMeals', selectPropertyInfo)

//店面类型
        let selectPropertyInfoType = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "fd_py_ParentID": "1",//父编码
          "page": "1",
          "rows": "10000",
        }
        await this.$store.dispatch('initStorefrontType', selectPropertyInfoType)

        //店面列表
        let selectStoreFrontInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "fd_sf_ID": "",//店面编号
          "fd_sf_TypeID": "",//分类编号
          "fd_sf_MansID": "",//用餐人数编号
          "fd_sf_ProductName": "",//产品名称 like
          "fd_sf_Provice": "",//省
          "fd_sf_City": "",//市
          "priceFrom": "",//人均价格大于
          "priceTo": "",//人均价格小于
          "fd_sf_Phone": "",//联系电话
          "fd_sf_TradeID": this.userInfo.sm_ai_ID,//供应商编码
          "page": 1,
          "rows": 10000,
        };
        await this.$store.dispatch('initFoodStoreInformtion', selectStoreFrontInfo)
      },
      //退出
      Quit() {
        this.$router.push({name: 'adminLogin'})
      },
      //用户信息
      getUser() {
        this.$router.push({name: 'AdminMerchantProducts'})
        this.$store.dispatch('initThemeType', getThemeTypeList)
          .then(suc => {
          }, err => {
          })
      }
    },


  }
</script>
<style>

  header {
    width: 100%;
    background-color: #37474f;
    color: #fff;
    padding: 0 20px;
    box-sizing: border-box;
    font: 14px/20px "微软雅黑";
    position: relative;
    z-index: 10;
  }

  header > h4 {
    float: left;

    padding: 12px;
  }

  header > .icon {
    padding: 14px;
    height: 100%;
    float: left;
    margin-left: 150px;
  }

  header > .icon:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .aboutLoginUser {
    position: relative;
    float: right;
  }

  .aboutLoginUser > a {
    padding: 12px 20px;
    color: #fff;
  }

  .aboutLoginUser:hover > a {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .aboutLoginUser:hover > .dropDownSelete {
    display: block;
  }

  .aboutLoginUser > a:after {
    display: inline-block;
    content: '';
    width: 5px;
    height: 5px;
    border-left: 1px solid #fff;
    border-top: 1px solid #fff;
    transform: rotate(-135deg) translateY(80%);
  }

  .dropDownSelete {
    width: 200px;
    position: absolute;
    top: 44px;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 5px 0;
    font: 12px/3 "微软雅黑";
    border-radius: 5px;
    display: none;
  }

  .dropDownSelete > a {
    padding: 0 20px;
  }

  .dropDownSelete > a:hover {
    background-color: #cfcfcf;
  }

  .dropDownSelete > a > i {
    margin-right: 10px;
  }

  section {
    box-sizing: border-box;
    position: absolute;
    top: 44px;
    left: 0;
    bottom:0;
    right:0;
  }

  .leftNav {
    width:100px;
    background-color: #263238;
    float: left;
    color: #fff;
    min-height: 100%;
  }

  .rightContent {
    float: right;
  }
</style>
