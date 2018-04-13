<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">店面每天可锁桌时间</h1>

      <!--查询-->
      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>店面名称筛选:</span>
          </el-form-item>
          <el-form-item>
            <el-select v-model="storeId" placeholder="请选择">
              <el-option
                v-for="item in foodStoreInformtionList"
                :key="item.fd_sf_ID"
                :label="item.fd_sf_ProductName"
                :value="item.fd_sf_ID">
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

      <el-table
        :data="roomTableTimeEveryDayList"
        style="width: 100%">
        <el-table-column
          align="center"
          prop="fd_sf_ProductName"
          label="店面名称">
        </el-table-column>
        <el-table-column
          align="center"
          prop="fd_clt_CanSellTime"
          label="可售时间">
        </el-table-column>
        <!--<el-table-column-->
        <!--align="center"-->
        <!--prop="fd_clt_Remark"-->
        <!--label="备注">-->
        <!--</el-table-column>-->
        <el-table-column
          align="center"
          label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="update(scope.row)">修改
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="Delete(scope.row.fd_clt_ID)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!--分页-->

      <div class="block" style="text-align: right">
        <el-pagination
          :page-size="5"
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
      </div>

      <!--添加-->

      <el-dialog title="添加店面信息" :visible.sync="addDialog">
        <el-form :model="addOptions">
          <el-form-item label="店面名称:" :label-width="formLabelWidth">
            <el-select v-model="addOptions.fd_clt_FrontID" placeholder="请选择">
              <el-option
                v-for="item in foodStoreInformtionList"
                :key="item.fd_sf_ID"
                :label="item.fd_sf_ProductName"
                :value="item.fd_sf_ID">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="可预定时间:" :label-width="formLabelWidth">
            <el-time-select
              v-model="addOptions.fd_clt_CanSellTime"
              :picker-options="{
                start: '00:00',
                step: '01:00',
                end: '24:00'
              }"
              placeholder="选择时间">
            </el-time-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addDialog = false">取 消</el-button>
          <el-button type="primary" @click="addSubmit">确 定</el-button>
        </div>
      </el-dialog>

      <!--添加-->

      <el-dialog title="添加店面信息" :visible.sync="updateDialog">
        <el-form :model="updateObj">
          <el-form-item label="店面名称:" :label-width="formLabelWidth">
            <el-select v-model="updateObj.fd_clt_FrontID" placeholder="请选择">
              <el-option
                v-for="item in foodStoreInformtionList"
                :key="item.fd_sf_ID"
                :label="item.fd_sf_ProductName"
                :value="item.fd_sf_ID">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="可预定时间:" :label-width="formLabelWidth">
            <el-time-select
              v-model="updateObj.fd_clt_CanSellTime"
              :picker-options="{
                start: '00:00',
                step: '01:00',
                end: '24:00'
              }"
              placeholder="选择时间">
            </el-time-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="updateDialog = false">取 消</el-button>
          <el-button type="primary" @click="updateSubmit">确 定</el-button>
        </div>
      </el-dialog>


    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([
      'roomTableTimeEveryDayList',
      'foodStoreInformtionList'
    ]),
    data() {
      return {
        total: 0,
        addDialog: false,
        addOptions: {
          "fd_clt_FrontID": "",
          "fd_clt_CanSellTime": "",
        },
        userInfo: {},
        formLabelWidth: '120px',
        storeId: '',
        updateObj: {},
        updateDialog: false,
      }
    },
    methods: {
//      分页
      handleCurrentChange(num) {
        this.initData(num)
      },
      //初始化店面数据
      initRoomData(name, num) {
        let selectStoreFrontInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "fd_sf_ID": "",//店面编号
          "fd_sf_TypeID": "",//分类编号
          "fd_sf_MansID": "",//用餐人数编号
          "fd_sf_ProductName": '',//产品名称 like
          "fd_sf_Provice": "",//省
          "fd_sf_City": "",//市
          "priceFrom": "",//人均价格大于
          "priceTo": "",//人均价格小于
          "fd_sf_Phone": "",//联系电话
          "fd_sf_TradeID": this.userInfo.sm_ai_ID,//供应商编码
          "page": 1,
          "rows": "10000",
        };
        this.$store.dispatch('initFoodStoreInformtion', selectStoreFrontInfo)
          .then(total => {
            this.total = total;
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          })
      },
      //初始化数据
      initData(id, num) {
        if (id == '') {
          this.$notify({
            message: '请选择店面',
            type: 'error'
          });
          return
        }
        let selectCanLockTimeInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "page": num ? num : 1,
          "rows": "5",
          "fd_clt_ID": "",
          "fd_clt_FrontID": id,
          "fd_clt_CanSellTime": "",
        };
        this.$store.dispatch('initRoomTableTimeEveryDay', selectCanLockTimeInfo)
          .then(total => {
            this.total = total;
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          })
      },
      //查询
      search() {
        this.initData(this.storeId)
      },
      //添加
      add() {
        this.$store.commit('setTranstionFalse');
        this.addDialog = true;
      },
      //添加提交
      addSubmit() {
        let insertCanLockTimeInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": this.addOptions,
        };
        this.$store.dispatch('addTimeEveryDaySubmit', insertCanLockTimeInfo)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData(this.storeId)
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          })
        this.addDialog = false;
      },
      //修改
      update(rowDate) {
        this.updateObj = rowDate;
        this.$store.commit('setTranstionFalse');
        this.updateDialog = true;
      },
      //修改提交
      updateSubmit() {
        let updateCanLockTimeInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": this.updateObj
        };
        this.$store.dispatch('updateTimeEveryDaySubmit', updateCanLockTimeInfo)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData(this.storeId)
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          })
        this.updateDialog = false;
      },
      //删除
      Delete(id) {
        let deleteCanLockTimeInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "fd_clt_ID": id ? id : '',//店面可锁桌时间编码
          }
        };
        this.$store.dispatch('deleteTimeEveryDaySubmit',deleteCanLockTimeInfo)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData(this.storeId)
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          })
      },
    },
    created() {
      this.userInfo = JSON.parse(sessionStorage.getItem('admin'))
      this.initRoomData();
    }
  }
</script>
<style scoped>
</style>
