<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">店面可订餐时间</h1>

      <!--查询-->

      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>店面名称筛选:</span>
          </el-form-item>
          <el-form-item>
            <el-select v-model="storeId" placeholder="请选择店面" @change="changeTime">
              <el-option
                v-for="item in foodStoreInformtionList"
                :key="item.fd_sf_ID"
                :label="item.fd_sf_ProductName"
                :value="item.fd_sf_ID">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select v-model="timeId" placeholder="请选择店面订餐时间">
              <el-option
                v-for="item in foodStoreTableTimeList"
                :key="item.fd_clt_ID"
                :label="item.fd_clt_CanSellTime"
                :value="item.fd_clt_ID">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search">查询</el-button>
            <el-button type="primary" @click="add">添加</el-button>
          </el-form-item>
        </el-form>
      </el-col>

      <!--数据展示-->


    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([
      'foodStoreInformtionList',
      'foodStoreTableTimeList',
      'foodStoreOrderingTimeList'
    ]),
    data() {
      return {
        storeId: '',
        timeId: '',
        total: 0,
      }
    },
    methods: {
      //选择可订餐时间
      changeTime(id) {
        this.initTimeData(id)
      },
      //初始化时间数据
      initTimeData(id) {
        if (!id) {
          this.$notify({
            message: '请选择店面！',
            type: 'error'
          })
          return
        }
        let selectCanLockTimeInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "page": 1,
          "rows": 100,
          "fd_clt_ID": "",//店面可锁桌时间编码
          "fd_clt_FrontID": id,//店面编号
          "fd_clt_CanSellTime": "",//可售时间
        };
        this.$store.dispatch('initFoodStoreTableTime', selectCanLockTimeInfo)
          .then(() => {
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },
      //初始化数据
      initData(id) {
        if (!id) {
          this.$notify({
            message: '请选择时间！',
            type: 'error'
          })
          return
        }
        let selectRoomTableTimeInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "page": "1",
          "rows": "5",
//          "fd_rtt_ID": "",//店面房间餐桌时间标识
//          "fd_rtt_LockID": id,//店面可锁桌时间编码
//          "dateFrom": "",//日期范围
//          "dateTo": "",//日期范围
//          "fd_rtt_TableState": "",//餐桌锁定状态
        };
        this.$store.dispatch('initFoodStoreOrderingTime', selectRoomTableTimeInfo)
          .then(total => {
            this.total = total;
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },
      //查询
      search() {
        this.initData(this.timeId);
      },
      //添加
      add() {
      },
      //添加提交
      addSubmit() {
      },
      //修改
      update() {
      },
      //修改提交
    },
  }
</script>
<style scoped>
</style>
