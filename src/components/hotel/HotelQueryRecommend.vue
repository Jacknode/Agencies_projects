<template>
  <div>
    <div id="wrap" class="clearfix">
      <div class="title clearfix" style="padding: 20px">
        <h1>酒店推荐信息</h1><br><br>
        <el-button type="primary" @click="addButton" size="small">新增</el-button>
      </div>

      <!--数据展示-->
      <el-table
        :data="hotelQueryRecommendList"
        v-loading="isLoading"
        style="width: 100%"
      >
        <el-table-column
          prop="ht_hi_ID"
          label="推荐类型编码"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="ht_hi_IntroduceTypeName"
          label="推荐类型"
          align="center"
        >
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <!--<el-button-->
              <!--size="mini"-->
              <!--@click="Update(scope.row.ht_hi_ID)"-->
            <!--&gt;修改-->
            <!--</el-button>-->
            <el-button
            size="mini"
            type="danger"
            @click="Delete(scope.row.ht_hi_ID)">删除
            </el-button>
            <!--<el-button-->
            <!--size="mini"-->
            <!--@click="goHotelRecommend">前往酒店推荐-->
            <!--</el-button>-->
          </template>
        </el-table-column>
      </el-table>

      <!--添加-->
      <el-dialog title="添加酒店推荐类型" :visible.sync="addRecommendDialog">
        <el-form :model="addOptions">

          <el-form-item label="推荐类型:" :label-width="formLabelWidth">
            <el-select v-model="addOptions.data.ht_hi_IntroduceType" placeholder="请选择类型">
              <el-option
                v-for="item in hotelIntroduceTypeList"
                :key="item.ht_it_ID"
                :label="item.ht_it_Name"
                :value="item.ht_it_ID">
              </el-option>
            </el-select>
          </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addRecommendDialog = false">取 消</el-button>
          <el-button type="primary" @click="addRecommendSubmit">确 定</el-button>
        </div>
      </el-dialog>

    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([
      'hotelQueryRecommendList',
      'recommendTypeList',
      'hotelIntroduceTypeList',
    ]),
    data() {
      return {
        isLoading:false,
        hotelID:'',
        addOptions: {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "ht_ht_hotelID": "",//酒店编码
            "ht_hi_IntroduceType": "",//推荐类型编码
          }
        },
        addRecommendDialog: false,
        formLabelWidth: '120px',
        updateRecommendDialog: false,
      }
    },
    created() {
      this.hotelID = sessionStorage.getItem('hotelID');
      if(!this.hotelID){
        this.$router.push({name:'HotelDetil'})
        this.$notify({
          message: '请先添加酒店信息!',
          position: 'top-left'
        });
        return
      }
      this.initData();
    },
    methods: {
      //初始化数据
      initData() {
        let selectHotelIntroduceInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "ht_ht_hotelID": this.hotelID
        };
        this.isLoading = true;
        this.$store.dispatch('initHotelQueryRecommend', selectHotelIntroduceInfo)
          .then(() => {
            this.isLoading  = false
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          })
      },
      //添加按钮
      addButton() {
        this.$store.commit('setTranstionFalse');
        this.addRecommendDialog = true;
      },
      //添加提交
      addRecommendSubmit() {
        this.addOptions.data.ht_ht_hotelID = this.hotelID;
        this.$store.dispatch('AddHotelQueryRecommend', this.addOptions)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData()
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          });
        this.addRecommendDialog = false;
      },
      //删除
      Delete(id){
        let deleteOptions = {
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "操作员编码",
            "operateUserName": "操作员名称",
            "pcName": "",
            "data": {
              "ht_hi_ID": id//酒店推荐编码
            }
          };
        this.$store.dispatch('DeleteHotelQueryRecommend',deleteOptions)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData()
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          });
      },
    },
  }
</script>
<style scoped>
  .title > h1 {
    float: left;
    font: 20px/2 "微软雅黑";
    color: #000;
  }

  .title > button {
    float: right;
  }
</style>
