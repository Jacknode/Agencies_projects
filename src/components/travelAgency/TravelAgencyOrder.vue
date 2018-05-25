<template>
  <div id="wrap" class="clearfix">
    <h1 class="userClass not-print" >旅行社订单</h1>
    <el-col :span="24" class="formSearch not-print">
      <el-form :inline="true">
        <el-form-item>
          <span>筛选:</span>
        </el-form-item>
        <el-form-item>
          <el-input type="text" v-model="orderID" auto-complete="off" placeholder="筛选" size="small" style="width: 250px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search" size="small">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!--分页-->
    <div class="block" style="float: right;">
      <el-pagination
        @current-change="handleCurrentChange"
        :page-size="20"
        layout="total, prev, pager, next"
        :total="total"
        v-show="total"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    name: '',
    data(){
      return {
        orderID:'',
        total: 0,
        isLoading: false,
      }
    },
    computed: mapGetters([
      'TravelAgencyOrderList',
    ]),
    created(){
      this.initData()
    },
    methods: {
      handleCurrentChange(num){
        this.initData('',num)
      },
      initData(page){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ts_to_OrderID": "1",//订单ID
          "ts_to_TouristTraderID": "1",//旅行社编码
          "ts_to_Password": "1",//凭证码
          "ts_to_GoodsListID": "1",//
          "priceFrom": "1",//总金额
          "priceTo":"20",
          "ts_to_IsDelete": "1",//是否删除
          "ts_to_OutStatus": "1",//出票状态
          "createFrom": "2018-05-22",//发起订单时间
          "createTo":"2018-05-23",
          "payFrom": "2018-05-22",//订单支付时间
          "payTo": "2018-05-23",//订单支付时间
          "ts_to_PayWay": "1",//支付方式
          "ts_to_FromPlace": "1",//出发地点
          "ts_to_TravelDate": "1",//出发日期
          "ts_to_PayState": "1",//订单状态
          "ts_to_UserID": "1",//用户编码
          "ts_to_TelePhone": "1",//电话号码
          "page": page?page:1,
          "rows": 10

        };
        this.$store.dispatch("initTravelAgencyOrder",options)
      },
      //查询
      search(){
        this.initData()
      }
    },
  }
</script>
<style scoped>

</style>
