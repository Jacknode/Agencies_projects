<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">店面房间餐桌时间</h1>

      <!--查询-->
      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>店面名称筛选:</span>
          </el-form-item>
          <el-form-item>
            <el-select v-model="storeId" placeholder="请选择" @change="changeStore">
              <el-option
                v-for="item in foodStoreInformtionList"
                :key="item.fd_sf_ID"
                :label="item.fd_sf_ProductName"
                :value="item.fd_sf_ID">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select v-model="timeId" placeholder="请选择">
              <el-option
                v-for="item in roomTableTimeEveryDayList"
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

      <el-table
        :data="foodTableTimeList"
        style="width: 100%">
        <el-table-column
          align="center"
          prop="fd_clt_CanSellTime"
          label="可售时间">
        </el-table-column>
        <el-table-column
          align="center"
          prop="fd_rtt_Date"
          label="日期">
        </el-table-column>
        <el-table-column
          align="center"
          prop="fd_rtt_TableID"
          label="餐桌编号">
        </el-table-column>
        <el-table-column
          align="center"
          prop="fd_rtt_TableState"
          label="餐桌状态">
        </el-table-column>
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
              @click="Delete(scope.row.fd_rtt_ID)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!--添加-->

      <!--<el-dialog title="添加店面信息" :visible.sync="addDialog">-->
        <!--<el-form :model="addOptions">-->
          <!--<el-form-item label="店面名称:" :label-width="formLabelWidth">-->
            <!--<el-form-item>-->
              <!--<el-select v-model="storeId" placeholder="请选择" @change="changeStore">-->
                <!--<el-option-->
                  <!--v-for="item in foodStoreInformtionList"-->
                  <!--:key="item.fd_sf_ID"-->
                  <!--:label="item.fd_sf_ProductName"-->
                  <!--:value="item.fd_sf_ID">-->
                <!--</el-option>-->
              <!--</el-select>-->
            <!--</el-form-item>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="可预定时间:" :label-width="formLabelWidth">-->
            <!--<el-form-item>-->
              <!--<el-select v-model="addOptions.fd_rtt_ID" placeholder="请选择">-->
                <!--<el-option-->
                  <!--v-for="item in roomTableTimeEveryDayList"-->
                  <!--:key="item.fd_clt_ID"-->
                  <!--:label="item.fd_clt_CanSellTime"-->
                  <!--:value="item.fd_clt_ID">-->
                <!--</el-option>-->
              <!--</el-select>-->
            <!--</el-form-item>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="日期:" :label-width="formLabelWidth">-->
            <!--<el-form-item>-->
              <!--<div class="block">-->
                <!--<el-date-picker-->
                  <!--v-model="addOptions.fd_rtt_Date"-->
                  <!--type="date"-->
                  <!--placeholder="选择日期"-->
                  <!--value-format="yyyy-MM-dd"-->
                <!--&gt;-->
                <!--</el-date-picker>-->
              <!--</div>-->
            <!--</el-form-item>-->
          <!--</el-form-item>-->
        <!--</el-form>-->
        <!--<div slot="footer" class="dialog-footer">-->
          <!--<el-button @click="addDialog = false">取 消</el-button>-->
          <!--<el-button type="primary" @click="addSubmit">确 定</el-button>-->
        <!--</div>-->
      <!--</el-dialog>-->

      <!--修改-->

      <el-dialog title="添加店面信息" :visible.sync="updateDialog">
        <el-form :model="updateObj">
          <el-form-item label="店面名称:" :label-width="formLabelWidth">
            <el-form-item>
              <el-select v-model="storeId" placeholder="请选择" @change="changeStore">
                <el-option
                  v-for="item in foodStoreInformtionList"
                  :key="item.fd_sf_ID"
                  :label="item.fd_sf_ProductName"
                  :value="item.fd_sf_ID">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form-item>
          <el-form-item label="可预定时间:" :label-width="formLabelWidth">
            <el-form-item>
              <el-select v-model="updateObj.fd_rtt_LockID" placeholder="请选择">
                <el-option
                  v-for="item in roomTableTimeEveryDayList"
                  :key="item.fd_clt_ID"
                  :label="item.fd_clt_CanSellTime"
                  :value="item.fd_clt_ID">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form-item>
          <el-form-item label="日期:" :label-width="formLabelWidth">
            <el-form-item>
              <div class="block">
                <el-date-picker
                  v-model="updateObj.fd_rtt_Date"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd"
                >
                </el-date-picker>
              </div>
            </el-form-item>
          </el-form-item>

          <el-form-item label="餐桌状态:" :label-width="formLabelWidth">
            <el-form-item>
              <el-select v-model="updateObj.fd_rtt_TableState" placeholder="请选择">
                <el-option
                  v-for="item in stateList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
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
      'foodTableTimeList',
      'foodStoreInformtionList',
      'roomTableTimeEveryDayList'
    ]),
    data() {
      return {
        total: 0,
        userInfo: {},
        storeId: '',
        timeId: '',
        addDialog: false,
        addOptions: {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "page": "1",
          "rows": "5",
          "fd_rtt_ID": "",
          "tableID": "",
          "dateFrom": "",
          "dateTo": "",
        },
        formLabelWidth: '120px',
        updateObj: {},
        updateDialog: false,
        stateList:[
          {
            value: 0,
            label: '空闲'
          },
          {
            value: 1,
            label: '锁定'
          },
          {
            value: 2,
            label: '已售'
          }
        ],
      }
    },
    methods: {

      //初始化店面数据
      initRoomData(name) {
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
          .then(() => {
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          })
      },
      //初始化餐桌数据
      initTimeData(id) {
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
          "page": 1,
          "rows": "10000",
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
      //选择店面
      changeStore(id) {
        this.initTimeData(id)
      },
      //初始化数据
      initData(id) {
        if(!id){
          this.$notify({
            message: '选择时间！',
            type: 'error'
          });
          return
        }
        let selectRoomTableTimeInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "page": "1",
          "rows": "10",
          "fd_rtt_ID": "",//店面房间餐桌时间标识
          "fd_rtt_LockID": id,//店面可锁桌时间编码
          "dateFrom": "",//日期范围
          "dateTo": "",//日期范围
          "fd_rtt_TableState": "",//餐桌锁定状态
        };
        this.$store.dispatch('initFoodTableTime', selectRoomTableTimeInfo)
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
        this.initData(this.timeId)
      },
      //添加
      add() {
        this.$store.commit('setTranstionFalse');
        this.addDialog = true;
      },
      //添加提交
      addSubmit() {
        let insertRoomTableTimeInfo = {

        };
        return;
        this.$store.dispatch('addTableTimeSubmit', insertRoomTableTimeInfo)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData(this.timeId)
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          })
        this.addDialog = false;
      },
      //修改
      update(rowData) {
        this.updateObj = rowData;
        this.$store.commit('setTranstionFalse');
        this.updateDialog = true;
        this.updateObj.fd_rtt_TableState = '';
      },
      //修改提交
      updateSubmit(){
        let updateRoomTableTimeInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "fd_rtt_ID": this.updateObj.fd_rtt_ID,
            "fd_rtt_LockID": this.updateObj.fd_rtt_LockID,
            "fd_rtt_Date": this.updateObj.fd_rtt_Date,
            "fd_rtt_TableState": this.updateObj.fd_rtt_TableState,
          }
        };
        this.$store.dispatch('updateTableTimeSubmit',updateRoomTableTimeInfo)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData(this.timeId)
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
        let deleteRoomTableTimeInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "fd_rtt_ID": id,
          }
        };
        this.$store.dispatch('deleteTableTimeSubmit',deleteRoomTableTimeInfo)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData(this.timeId)
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          })
      },
    },
    created() {
//      this.initData();
      this.userInfo = JSON.parse(sessionStorage.getItem('admin'))
      this.initRoomData();
    }
  }
</script>
<style scoped>
</style>
