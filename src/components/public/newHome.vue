<template>
  <div>
    <div class="navbar navbar-inverse">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <a class="navbar-brand" href="#">供应商后台管理系统</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">管理员 <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li @click="getUser"><a href="javascript:;"><i class="icon-user-plus" style="padding-right: 10px"></i>{{qiankeUser ? qiankeUser : ''}}</a></li>
                <li @click="Quit"><a href="javascript:;"><i class="icon-switch2" style="padding-right: 10px"></i>退出</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fl
      <!--</div>-->
    </div>
    <!-- /main navbar -->
    <el-container>
      <el-aside width="200px">
        <span style="background: #28343a;display: block;width: 199px;color: #fff;line-height: 60px;text-align: center;">欢迎您:{{qiankeUser ? qiankeUser : ''}}</span>
        <el-menu
          default-active="1"
          :unique-opened="true"
          class="el-menu-vertical-demo"
          background-color="#28343a"
          text-color="rgba(255,255,255,0.75)"
          :router="true"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>供应商信息</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/home/adminUserInfo">供应商信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2"  v-show="userInfo.sm_ai_IsPass==1&&isAgencies">
            <template slot="title">
              <i class="icon-home" style="padding-right: 15px"></i>
              <span>旅行社后台管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/home/adminAllFunction2">产品信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- v-show="userInfo.sm_ai_IsPass==1&&isHotel"-->
          <el-submenu index="3" v-show="userInfo.sm_ai_IsPass==1&&isHotel">
            <template slot="title">
              <i class="icon-office" style="padding-right: 15px"></i>
              <span>酒店后台管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/home/hotelDetil">酒店基本信息</el-menu-item>
              <el-menu-item index="/home/hotelOrderDetails">酒店订单明细</el-menu-item>
              <el-menu-item index="/home/hotelConfirmOrder">酒店确认订单</el-menu-item>
              <el-menu-item index="/home/hotelQueryRecommend">酒店推荐信息</el-menu-item>
              <el-menu-item index="/home/hotelImage">酒店图片信息</el-menu-item>
              <el-menu-item index="/home/hotelIcon">酒店图标信息</el-menu-item>
              <el-menu-item index="/home/hotelPolicy">酒店政策信息</el-menu-item>
              <el-menu-item index="/home/hotelTheme">酒店主题信息</el-menu-item>
              <el-menu-item index="/home/hotelRoom">酒店房间管理</el-menu-item>
              <el-menu-item index="/home/hotelFacilitiesServices">酒店设施服务信息</el-menu-item>
              <el-menu-item index="/home/hotelFacilitiesServicesFacilities">酒店设施服务设施信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4"  v-show="userInfo.sm_ai_IsPass==1&&isTickets">
            <template slot="title">
              <i class="icon-ticket" style="padding-right: 15px"></i>
              <span>门票后台管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/home/ticketAttractions">门票景点信息管理</el-menu-item>
              <el-menu-item index="/home/ticketPredeterminedInstructions">门票预定须知</el-menu-item>
              <el-menu-item index="/home/TicketTrafficInformation">门票交通信息</el-menu-item>
              <el-menu-item index="/home/ticketType">门票票种</el-menu-item>
              <el-menu-item index="/home/ticketTypeTicketPrice">门票票种_票价</el-menu-item>
              <el-menu-item index="/home/ticketQueryOrder">门票查询订单</el-menu-item>
              <el-menu-item index="/home/ticketApplyShowHomePage">门票申请景点展示首页</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="5"  v-show="userInfo.sm_ai_IsPass==1&&isFood">
            <template slot="title">
              <i class="icon-office" style="padding-right: 15px"></i>
              <span>美食后台管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/home/foodStoreInformation">美食店面信息</el-menu-item>
              <el-menu-item index="/home/foodStorePicture">美食店面图片</el-menu-item>
              <el-menu-item index="/home/foodStoreRecommend">美食推荐菜</el-menu-item>
              <el-menu-item index="/home/foodStoreProduct">美食店面菜肴</el-menu-item>
              <el-menu-item index="/home/foodStoreProductPicture">美食店面菜肴图片</el-menu-item>
              <el-menu-item index="/home/foodStoreRoom">美食店面房间</el-menu-item>
              <el-menu-item index="/home/foodRoomPicture">美食房间图片</el-menu-item>
              <el-menu-item index="/home/foodStoreRoomTabel">美食房间餐桌</el-menu-item>
              <el-menu-item index="/home/foodStoreTableTime">美食店面每天可锁桌时间</el-menu-item>
              <el-menu-item index="/home/foodStoreOrderingTime">美食店面可订餐时间</el-menu-item>
              <el-menu-item index="/home/foodStoppingPlace">美食停车场</el-menu-item>
              <el-menu-item index="/home/foodStoreConfirmOrder">美食订单管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="6"  v-show="userInfo.sm_ai_IsPass==1&&isAdvertising">
            <template slot="title">
              <i class="icon-twitter" style="padding-right: 15px"></i>
              <span>广告后台管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/home/AdApply">广告申请管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="7"  v-show="userInfo.sm_ai_IsPass==1">
            <template slot="title">
              <i class="icon-car" style="padding-right: 15px"></i>
              <span>租车后台管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/home/carHome">租车公司基本信息</el-menu-item>
              <el-menu-item index="/home/carStore">租车门店管理</el-menu-item>
              <el-menu-item index="/home/carProduct">租车汽车产品管理</el-menu-item>
              <el-menu-item index="/home/carPreferentialPolicies">租车优惠政策管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <div
             :class="{ 'animated': transtionActive.isActive, 'fadeIn': transtionActive.isRotateInDownRight }">
          <!-- Page length options -->
          <!-- /page length options -->
          <router-view name="User"></router-view>

          <!-- Footer -->
          <!--<div class="footer text-muted">-->
          <!--&copy; 2015. <a href="#">Limitless Web App Kit</a> by <a href="http://themeforest.net/user/Kopyov" target="_blank">Eugene Kopyov</a>-->
          <!--</div>-->
          <!-- /footer -->
        </div>
      </el-main>
    </el-container>



    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      当前审核状态为:<span style="color: #f60;font-weight: bold;padding-left: 10px">{{status | getPass}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
  <!-- /page content -->
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    name: '',
    data() {
      return {
        isCollapse:false,
        dialogVisible: false,
        status: '',
        qiankeUser: '',
        lxs:false,
        hotel:false,
        ticket:false,
        food:false,
        Advertising:false,
        userInfo: {}
//        isAdmin:true
      }
    },
    computed: mapGetters([
      'transtionActive',
      'isAgencies',
      'isFood',
      'isHotel',
      'isTickets',
      'isCar',
      'isAdvertising'
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
        return
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

        let userOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          sm_ai_Name: '',
          "sm_ai_ID": this.userInfo.sm_ai_ID,
          "page": 1,
          "rows": 5,
        };
        await this.$store.dispatch('initSetCooperationType',userOptions)
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
  .navbar-inverse{
    background-color: #28343a;
    border-color:#28343a;
  }
  .navbar{
    margin-bottom: 0;
    border-radius: 0;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 1400px;
  }
  .el-loading-spinner .circular {
    margin-left: 50%;
  }

  .edui-default {
    z-index: 3000 !important;
  }

  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

  #allmap {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9900;
    margin-top: -50px;
    font-family: "微软雅黑";
  }

  #wrap {
    background: #fff;
  }

  .formSearch {
    padding: 20px 0 0 20px;
  }

  .userClass {
    padding: 20px 0 0 20px;
    font-size: 18px;
  }

  .file {
    position: relative;
    display: inline-block;
    background: #409EFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #fff;
    text-decoration: none;
    text-indent: 0;
    font-size: 12px;
    line-height: 20px;
  }

  .file input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
  }
</style>
