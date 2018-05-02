
<template>
  <el-row class="container">
    <!--头部-->
    <el-col :span="24" class="topbar-wrap">
      <div class="topbar-logo topbar-btn">
        <!--<a href="/"><img src="../assets/logo.png" style="padding-left:8px;"></a>-->
      </div>
      <div class="topbar-logos" v-show="!collapsed">
        <!--<a href="/"><img src="../assets/logotxt.png"></a>-->
      </div>
      <div class="topbar-title">
        <span style="font-size: 18px;color: #fff;">供应商后台管理系统</span>
      </div>
      <div class="topbar-account topbar-btn">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link userinfo-inner"><i class="iconfont icon-user"></i> 欢迎您:{{qiankeUser ? qiankeUser : ''}} <i
            class="iconfont icon-down"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div @click="jumpTo('/user/profile')"><span style="color: #555;font-size: 14px;">{{qiankeUser ? qiankeUser : ''}}</span></div>
            </el-dropdown-item>
            <el-dropdown-item divided @click.native="Quit">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>

    <!--中间-->
    <el-col :span="24" class="main">
      <!--左侧导航-->
      <aside :class="{showSidebar:!collapsed}">
        <!--展开折叠开关-->
        <div class="menu-toggle" @click.prevent="collapse">
          <i class="iconfont icon-menufold" v-show="!collapsed"></i>
          <i class="iconfont icon-menuunfold" v-show="collapsed"></i>
        </div>
        <!--导航菜单-->
        <el-menu default-active="defaultActiveIndex" class="el-menu-vertical-demo" :collapse="collapsed">
          <template v-for="item,index in menvList">
            <el-submenu :index="index+''">
              <template slot="title"><i></i><span slot="title">{{item.name}}</span></template>
              <el-menu-item v-for="v in item.children" :key="v.pathName" :index="v.pathName" @click="toPath(v)">
                <i></i><span slot="title">{{v.name}}</span>
              </el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
      </aside>

      <!--右侧内容区-->
      <section class="content-container"
               :class="{ 'animated': transtionActive.isActive, 'fadeIn': transtionActive.isRotateInDownRight }">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
              <router-view  name="User"></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>

  </el-row>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'home',
    created(){
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
    computed: mapGetters([
      'transtionActive',
    ]),
    data () {
      return {
        menvList:[
          {
            name:'旅行社后台管理',
            children:[
              {
                name:'供应商信息',
                pathName:'AdminUserInfo'
              },
              {
                name:'产品信息',
                pathName:'AdminAllFunction2'
              }
            ]
          }
        ],
        dialogVisible: false,
        status: '',
        qiankeUser: '',
        lxs:false,
        hotel:false,
        ticket:false,
        food:false,
        Advertising:false,
        userInfo: {},
        isCollapse: true,
        defaultActiveIndex: "0",
        nickname: '',
        collapsed: false,
      }
    },
    methods: {
      toPath(v){
        console.log(v)
        this.$router.push({name:v.pathName})
      },
      handleSelect(index){
        this.defaultActiveIndex = index;
      },
      //折叠导航栏
      collapse: function () {
        this.collapsed = !this.collapsed;
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
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/less">
  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    .topbar-wrap {
      height: 50px;
      line-height: 50px;
      background: #373d41;
      padding: 0px;
      .topbar-btn {
        color: #fff;
      }
      /*.topbar-btn:hover {*/
      /*background-color: #4A5064;*/
      /*}*/
      .topbar-logo {
        float: left;
        width: 59px;
        line-height: 26px;
      }
      .topbar-logos {
        float: left;
        width: 120px;
        line-height: 26px;
      }
      .topbar-logo img, .topbar-logos img {
        height: 40px;
        margin-top: 5px;
        margin-left: 2px;
      }
      .topbar-title {
        float: left;
        text-align: left;
        width: 200px;
        padding-left: 10px;
        border-left: 1px solid #000;
      }
      .topbar-account {
        float: right;
        padding-right: 12px;
      }
      .userinfo-inner {
        cursor: pointer;
        color: #fff;
        padding-left: 10px;
      }
    }
    .main {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      position: absolute;
      top: 50px;
      bottom: 0px;
      overflow: hidden;
    }
    aside {
      min-width: 50px;
      background: #333744;
      &::-webkit-scrollbar {
        display: none;
      }
      &.showSidebar {
        overflow-x: hidden;
        overflow-y: auto;
      }
      .el-menu {
        height: 100%; /*写给不支持calc()的浏览器*/
        height: -moz-calc(100% - 80px);
        height: -webkit-calc(100% - 80px);
        height: calc(100% - 80px);
        border-radius: 0px;
        background-color: #333744;
        border-right: 0px;
      }
      .el-submenu .el-menu-item {
        min-width: 60px;
      }
      .el-menu {
        width: 180px;
      }
      .el-menu--collapse {
        width: 60px;
      }
      .el-menu .el-menu-item, .el-submenu .el-submenu__title {
        height: 46px;
        line-height: 46px;
      }
      .el-menu-item:hover, .el-submenu .el-menu-item:hover, .el-submenu__title:hover {
        background-color: #7ed2df;
      }
    }
    .menu-toggle {
      background: #4A5064;
      text-align: center;
      color: white;
      height: 26px;
      line-height: 30px;
    }
    .content-container {
      background: #fff;
      flex: 1;
      overflow-y: auto;
      padding: 10px;
      padding-bottom: 1px;
      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
</style>
