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
              <li @click="getUser"><a href="javascript:;"><i class="icon-user-plus"></i>{{qiankeUser?qiankeUser:''}}</a>
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
                    <span class="media-heading text-semibold">欢迎您:{{qiankeUser?qiankeUser:''}}</span>
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
                      <li  v-show="userInfo.sm_ai_IsPass==1">
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
                        <router-link to="/home/myHotel/hotelDetilsInformation">酒店</router-link>
                      </li>
                    </ul>
                  </li>
                  <!-- /main -->
                </ul>
                <ul class="navigation navigation-main navigation-accordion">
                  <!--境外查询-->
                  <li>
                    <a href="javascript:;"><i class="icon-ticket"></i> <span>门票后台管理</span></a>
                    <ul>
                      <li>
                        <router-link to="/home/ticketAttractions">景点管理</router-link>
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
  export default{
    name: '',
    data(){
      return {
        dialogVisible:true,
        status:'',
        qiankeUser: '',
        userInfo:{}
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
      if(status){
        this.dialogVisible = false;
      }
      if(this.status==1){
        localStorage.setItem('status',true)
      }
      if (!sessionStorage.getItem('index')) {
        sessionStorage.setItem('index', '0')
      }
    },
    mounted(){
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
      '$route' (to, from) {
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
      //退出
      Quit(){
        this.$router.push({name: 'adminLogin'})
      },
      //用户信息
      getUser(){
        this.$router.push({name: 'AdminMerchantProducts'})
      },

    }
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
