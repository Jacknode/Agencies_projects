<template>
  <div id="wrap" class="clearfix">
    <h1 class="userClass not-print" >旅行社订单</h1>
 <!--   <el-col :span="24" class="formSearch not-print">
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
    </el-col>-->
    <!--数据展示-->
    <el-table
      :data="TravelAgencyOrderList"
      v-loading="isLoading"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="订单ID:">
              <span>{{props.row.ts_to_OrderID}}</span>
            </el-form-item>
            <el-form-item label="订单支付时间:">
              <span>{{props.row.ts_to_PayTime}}</span>
            </el-form-item>
            <el-form-item label="是否结算:">
              <span>{{props.row.ts_to_IsBalance}}</span>
            </el-form-item>
<!--            <el-form-item label="未知3:">
              <span>{{props.row.ts_to_LeaveMessage}}</span>
            </el-form-item>-->
            <el-form-item label="电子邮件:">
              <span>{{props.row.ts_to_Email}}</span>
            </el-form-item>
<!--            <el-form-item label="未知5:">
              <span>{{props.row.ts_to_AreaCode}}</span>
            </el-form-item>-->
            <el-form-item label="全票数:">
              <span>{{props.row.ts_to_FullCount}}</span>
            </el-form-item>
            <el-form-item label="儿童票数:">
              <span>{{props.row.ts_to_ChildCount}}</span>
            </el-form-item>
            <el-form-item label="产品编码:">
              <span>{{props.row.ts_to_GoodsListID}}</span>
            </el-form-item>
            <el-form-item label="产品名称:">
              <span>{{props.row.ts_to_GoodsListName}}</span>
            </el-form-item>
            <el-form-item label="联系人姓名:">
              <span>{{props.row.ts_to_ConnectName}}</span>
            </el-form-item>
            <el-form-item label="出发地点:">
              <span>{{props.row.ts_to_FromPlace}}</span>
            </el-form-item>
            <!--<el-form-item label="是否删除:">-->
              <!--<span>{{props.row.ts_to_IsDelete}}</span>-->
            <!--</el-form-item>-->
            <el-form-item label="发起订单时间:">
              <span>{{props.row.ts_to_CreateTime}}</span>
            </el-form-item>
            <el-form-item label="全票价:">
              <span>{{props.row.ts_to_FullPrice}}</span>
            </el-form-item>
            <el-form-item label="儿童价:">
              <span>{{props.row.ts_to_ChildPrice}}</span>
            </el-form-item>
            <el-form-item label="用户编码:">
              <span>{{props.row.ts_to_UserID}}</span>
            </el-form-item>
            <el-form-item label="出票状态:">
              <span>{{props.row.ts_to_OutStatus | getOutStatus}}</span>
            </el-form-item>
            <el-form-item label="用户名称:">
              <span>{{props.row.ts_to_UserName}}</span>
            </el-form-item>
            <el-form-item label="支付方式:">
              <span>{{props.row.ts_to_PayWay}}</span>
            </el-form-item>
            <el-form-item label="凭证码:">
              <span>{{props.row.ts_to_Password}}</span>
            </el-form-item>
            <el-form-item label="订单支付码:">
              <span>{{props.row.ts_to_PayParam}}</span>
            </el-form-item>
            <el-form-item label="订单状态:">
              <span>{{props.row.ts_to_PayState | getPayState}}</span>
            </el-form-item>
            <el-form-item label="总张数:">
              <span>{{props.row.ts_to_TicketCount}}</span>
            </el-form-item>
            <el-form-item label="备注:">
              <span>{{props.row.ts_to_Remark}}</span>
            </el-form-item>
            <el-form-item label="产品价格编码:">
              <span>{{props.row.ts_to_ProductPriceID}}</span>
            </el-form-item>
            <el-form-item label="供票方编码:">
              <span>{{props.row.ts_to_SellID}}</span>
            </el-form-item>
            <el-form-item label="供票方名称:">
              <span>{{props.row.ts_to_SellName}}</span>
            </el-form-item>
            <el-form-item label="总金额:">
              <span>{{props.row.ts_to_SumPrice}}</span>
            </el-form-item>
            <el-form-item label="总的网售手续费:">
              <span>{{props.row.ts_to_SumService}}</span>
            </el-form-item>
            <el-form-item label="电话号码:">
              <span>{{props.row.ts_to_TelePhone}}</span>
            </el-form-item>
            <el-form-item label="旅行社编码:">
              <span>{{props.row.ts_to_TouristTraderID}}</span>
            </el-form-item>
            <el-form-item label="旅行社名称:">
              <span>{{props.row.ts_to_TouristTraderName}}</span>
            </el-form-item>
            <el-form-item label="出发日期:">
              <span>{{props.row.ts_to_TravelDate}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="订单ID"
        prop="ts_to_OrderID">
      </el-table-column>
      <el-table-column
        label="旅行社编码">
        <template slot-scope="scope">
          {{ scope.row.ts_to_TouristTraderID }}
        </template>
      </el-table-column>
      <el-table-column
        label="凭证码"
        prop="ts_to_Password">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <!--                    :type="scope.row.ts_to_OutStatus == 0 ? 'primary':'success'  "-->
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  :type="scope.row.ts_to_OutStatus == 0 ? confirmState1:confirmState2  "
                  @click="ConfirmOrder(scope.row)">{{scope.row.ts_to_OutStatus | getMoneyState}}
                </el-button>
<!--                <el-button
                  size="mini"
                  type="danger"
                  @click="Delete(scope.row.vf_ve_ID)">删除
                </el-button>-->
              </template>
            </el-table-column>
    </el-table>

    <!--分页-->
    <div class="block" style="float: right;">
      <el-pagination
        @current-change="handleCurrentChange"
        :page-size="10"
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
        confirmState1:'primary',
        confirmState2:'success',
        confirmOderOrOreadyOrder:'确认订单',
        total: 0,
        num:0,
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
        this.num = num;
        this.initData('',num)
      },
      initData(orderID,page){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          ts_to_OrderID:orderID?orderID:'',
          "page": page?page:1,
          "rows": 10
        };
        if(this.num){
          options.page = this.num;
        }
        this.isLoading = true
        this.$store.dispatch("initTravelAgencyOrder",options)
          .then((total) => {
            this.total = total;
            this.isLoading = false;
          }, (err) => {
            this.$notify({
              message: err,
              type: "error"
            });
          });
      },
      //查询
      search(){
        this.initData(this.orderID.trim())
      },
      ConfirmOrder(row){
        let confirmID={
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "orderID": row.ts_to_OrderID,
        };
        this.isLoading = true;
        this.$store.dispatch("confirmTravelAgencyOrder",confirmID)
          .then((suc)=>{
            this.isLoading = false;
            this.$notify({
              message: suc,
              type: "success"
            });
            this.initData('',1)
          },(err)=>{
            this.$notify({
              message: err,
              type: "error"
            });
          });
      }
    },
  }
</script>
<style scoped>

</style>
