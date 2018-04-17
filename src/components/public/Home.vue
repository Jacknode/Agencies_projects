<template>
  <div>
    <div class="navbar navbar-inverse">
      <div class="navbar-header">
        <a class="navbar-brand" href="javascript:;">供应商后台管理系统</a>

        <ul class="nav navbar-nav visible-xs-block">
          <li><a data-toggle="collapse" data-target="#navbar-mobile"><i class="icon-tree5"></i></a></li>
          <li><a class="sidebar-mobile-main-toggle"><i class="icon-paragraph-justify3"></i></a></li>
        </ul>
      </div>

      <div class="navbar-collapse collapse" id="navbar-mobile">
        <ul class="nav navbar-nav">
          <li><a class="sidebar-control sidebar-main-toggle hidden-xs"><i class="icon-paragraph-justify3"></i></a></li>

        </ul>


        <ul class="nav navbar-nav navbar-right">


          <li class="dropdown dropdown-user">
            <a class="dropdown-toggle" data-toggle="dropdown">
              <!--<img src="assets/images/placeholder.jpg" alt="">-->
              <span>管理员</span>
              <i class="caret"></i>
            </a>

            <ul class="dropdown-menu dropdown-menu-right">
              <li @click="getUser"><a href="javascript:;"><i class="icon-user-plus"></i>{{qiankeUser ? qiankeUser : ''}}</a>
              </li>
              <li @click="Quit"><a href="javascript:;"><i class="icon-switch2"></i>退出</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- /main navbar -->


    <!-- Page container -->
    <div class="page-container">

      <!-- Page content -->
      <div class="page-content">

        <!-- Main sidebar 左边导航栏开始-->
        <div class="sidebar sidebar-main">
          <div class="sidebar-content">

            <!-- User menu -->
            <div class="sidebar-user">
              <div class="category-content">
                <div class="media">
                  <a href="javascript:;" class="media-left">
                    <!--<img src="assets/images/placeholder.jpg" class="img-circle img-sm" alt="">-->
                  </a>
                  <div class="media-body">
                    <span class="media-heading text-semibold">欢迎您:{{qiankeUser ? qiankeUser : ''}}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- /user menu -->


            <!-- Main navigation -->
            <div class="sidebar-category sidebar-category-visible">
              <div class="category-content no-padding">

                <!-------------------------------------管理员------------------------------------------------------>


                <ul class="navigation navigation-main navigation-accordion">
                  <!-- Main -->
                  <li class="navigation-header"><span>main</span> <i class="icon-menu" title="Main pages"></i></li>
                  <!--境外查询-->

                  <li>
                    <a href="javascript:;"><i class=" icon-home"></i> <span>旅行社后台管理</span></a>
                    <ul>
                      <li>
                        <router-link to="/home/adminUserInfo">供应商信息</router-link>
                      </li>
                      <li v-show="userInfo.sm_ai_IsPass==1">
                        <router-link to="/home/adminAllFunction2">产品信息</router-link>
                      </li>
                      <li v-show="userInfo.sm_ai_IsPass==1">
                        <router-link to="/home/adminPersonalBenefits">供应商收益</router-link>
                      </li>
                    </ul>
                  </li>
                  <!-- /main -->
                </ul>
                <ul class="navigation navigation-main navigation-accordion">
                  <!--境外查询-->
                  <li>
                    <a href="javascript:;"><i class="icon-office"></i> <span>酒店后台管理</span></a>
                    <ul>
                      <li>
                        <router-link to="/home/hotelDetil">酒店基本信息</router-link>
                      </li>
                      <li>
                        <router-link to="/home/hotelOrderDetails">酒店订单明细</router-link>
                      </li>
                      <li>
                        <router-link to="/home/hotelConfirmOrder">酒店确认订单</router-link>
                      </li>
                      <li>
                        <router-link to="/home/hotelQueryRecommend">酒店推荐信息</router-link>
                      </li>
                      <li>
                        <router-link to="/home/hotelImage">酒店图片信息</router-link>
                      </li>
                      <li>
                        <router-link to="/home/hotelIcon">酒店图标信息</router-link>
                      </li>
                      <li>
                        <router-link to="/home/hotelPolicy">酒店政策信息</router-link>
                      </li>
                      <li>
                        <router-link to="/home/hotelTheme">酒店主题信息</router-link>
                      </li>
                      <li>
                        <router-link to="/home/hotelRoom">酒店房间管理</router-link>
                      </li>
                      <li>
                        <router-link to="/home/hotelFacilitiesServices">酒店设施服务信息</router-link>
                      </li>
                      <li>
                        <router-link to="/home/hotelFacilitiesServicesFacilities">酒店设施服务设施信息</router-link>
                      </li>
                    </ul>
                  </li>
                  <!-- /main -->
                </ul>
                <!--景点-->
                <ul class="navigation navigation-main navigation-accordion">
                  <!--境外查询-->
                  <li>
                    <a href="javascript:;"><i class="icon-ticket"></i> <span>门票后台管理</span></a>
                    <ul>
                      <li>
                        <router-link to="/home/ticketAttractions">门票景点信息管理</router-link>
                      </li>
                      <li>
                        <router-link to="/home/ticketPredeterminedInstructions">门票预定须知</router-link>
                      </li>
                      <li>
                        <router-link to="/home/trafficInformation">门票交通信息</router-link>
                      </li>
                      <li>
                        <router-link to="/home/ticketType">门票票种</router-link>
                      </li>
                      <li>
                        <router-link to="/home/ticketTypeTicketPrice">门票票种_票价</router-link>
                      </li>
                      <li>
                        <router-link to="/home/ticketQueryOrder">门票查询订单</router-link>
                      </li>
                      <li>
                        <router-link to="/home/ticketApplyShowHomePage">门票申请景点展示首页</router-link>
                      </li>
                    </ul>
                  </li>
                  <!-- /main -->
                </ul>
                <!--美食-->
                <ul class="navigation navigation-main navigation-accordion">
                  <li>
                    <!--美食管理-->
                    <a href="javascript:;"><i class="icon-ticket"></i> <span>美食后台管理</span></a>
                    <ul>
                      <li>
                        <router-link to="/home/foodStoreInformation">店面信息</router-link>
                      </li>
                      <li>
                        <router-link to="/home/foodRoomTableTimeEveryDay">店面每天可锁桌时间</router-link>
                      </li>
                      <!--<li>-->
                        <!--<router-link to="foodStoreRoomPicture">房间图片</router-link>-->
                      <!--</li>-->
                      <li>
                        <router-link to="/home/storeRecommendFood">推荐菜</router-link>
                      </li>
                      <li>
                        <router-link to="/home/foodStoreProduct">店面产品</router-link>
                      </li>
                      <li>
                        <router-link to="/home/foodStoreRoom">店面房间</router-link>
                      </li>
                      <li>
                        <router-link to="foodParkingSpace">停车位</router-link>
                      </li>
                      <li>
                        <router-link to="/home/foodRoomTable">房间餐桌</router-link>
                      </li>
                      <!--<li>-->
                        <!--<router-link to="/home/foodCanReserve">生成餐桌可订餐时间</router-link>-->
                      <!--</li>-->
                    </ul>
                  </li>
                </ul>
                <ul class="navigation navigation-main navigation-accordion">
                  <!--境外查询-->
                  <li>
                    <a href="javascript:;"><i class="icon-ticket"></i> <span>广告后台管理</span></a>
                    <ul>
                      <li>
                        <router-link to="/home/AdApply">广告申请管理</router-link>
                      </li>
                    </ul>
                  </li>
                  <!-- /main -->
                </ul>
              </div>
            </div>
            <!-- /main navigation-->

          </div>
        </div>
        <!-- /main sidebar  左边导航栏结束-->
        <!--右边内容-->
        <div class="content-wrapper">

          <div class="content"
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
        </div>
        <!--右边内容结束-->
        <!-- /dashboard content -->


        <!-- Footer -->
        <div class="footer text-muted">

        </div>
        <!-- /footer -->

      </div>
      <!-- /content area -->

    </div>
    <!-- /main content -->

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
        dialogVisible: false,
        status: '',
        qiankeUser: '',
        userInfo: {}
//        isAdmin:true
      }
    },
    computed: mapGetters([
      'transtionActive',
    ]),
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
        this.initData().then(()=>{

        },err=>{
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

      // //退出
      // Quit() {
      //   this.$router.push({name: 'adminLogin'})
      // },
      // //用户信息
      // getUser() {
      //   this.$router.push({name: 'AdminMerchantProducts'})
      // },
      //查询景点主题分类信息
      // initData() {
        let getThemeTypeList = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "ttID": "",
          "ttName": "",
          "isDelete": 0,
          "page": 1,
          "rows": 100
        };
//        await this.$store.dispatch('initThemeType', getThemeTypeList)

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
        };
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
        };
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
        };
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
        };
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
