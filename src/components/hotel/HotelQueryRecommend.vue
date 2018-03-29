<template>
  <div>
    <div id="wrap" class="clearfix">
      <div class="title clearfix">
        <h1>酒店推荐信息</h1>
        <el-button type="primary" @click="addButton">添加</el-button>
      </div>

      <!--数据展示-->
      <el-table
        :data="hotelQueryRecommendList"
        style="width: 100%">
        <el-table-column
          prop="ht_hi_IntroduceTypeName"
          label="推荐类型"
          align="center"
        >
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="updateButton(scope.row)"
            >修改
            </el-button>
            <el-button
            size="mini"
            type="danger"
            @click="deleteButton(scope.row)">删除
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
            <el-select v-model="addOptions.ht_hi_IntroduceType" placeholder="请选择类型" @focus="changeRecommendType">
              <el-option
                v-for="item in recommendTypeList"
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

      <!--修改-->

      <el-dialog title="修改酒店推荐类型" :visible.sync="updateRecommendDialog">
        <el-form :model="updateRecommendObj">

          <el-form-item label="推荐类型:" :label-width="formLabelWidth">
            <el-select v-model="updateRecommendObj.ht_hi_IntroduceType" placeholder="请选择类型"
                       @focus="changeRecommendType">
              <el-option
                v-for="item in recommendTypeList"
                :key="item.ht_it_ID"
                :label="item.ht_it_Name"
                :value="item.ht_it_ID">
              </el-option>
            </el-select>
          </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="updateRecommendDialog = false">取 消</el-button>
          <el-button type="primary" @click="updateRecommendSubmit">确 定</el-button>
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
      'updateRecommendObj'
    ]),
    data() {
      return {
        addOptions: {
          ht_hi_IntroduceType: ''
        },
        addRecommendDialog: false,
        formLabelWidth: '120px',
        updateRecommendDialog: false,
      }
    },
    methods: {
      //初始化数据
      initData() {
        let selectHotelIntroduceInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "ht_ht_hotelID": sessionStorage.getItem('hotelId')
        }
        this.$store.dispatch('initHotelQueryRecommend', selectHotelIntroduceInfo)
          .then(() => {
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
      //获取推荐类型数据
      changeRecommendType() {
        let selectIntroduceTypeInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "ht_it_ParentID": "0"
        };
        this.$store.dispatch('changeRecommendType', selectIntroduceTypeInfo)
      },
      //添加提交
      addRecommendSubmit() {
        //添加参数
        let insertHotelIntroduceInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "data": {
            "ht_ht_hotelID": sessionStorage.getItem('hotelId'),
            "ht_hi_IntroduceType": this.addOptions.ht_hi_IntroduceType,
          }
        };
        this.$store.dispatch('addRecommendSubmit', insertHotelIntroduceInfo)
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
          })
        this.addRecommendDialog = false;
      },
      //修改按钮
      updateButton(row) {
        this.$store.commit('setTranstionFalse');
        this.$store.commit('updateRecommendData', row.ht_hi_ID);
        this.updateRecommendDialog = true;
        this.updateRecommendObj.ht_hi_IntroduceType = ''
      },
      //修改提交
      updateRecommendSubmit() {
        //修改数据
        let updateHotelIntroduceInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "data": {
            "ht_hi_ID": this.updateRecommendObj.ht_hi_ID,
            "ht_ht_hotelID": this.updateRecommendObj.ht_ht_hotelID,
            "ht_hi_IntroduceType": this.updateRecommendObj.ht_hi_IntroduceType,
          }
        };
        this.$store.dispatch('updateRecommendSubmit', updateHotelIntroduceInfo)
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
          })
      },
      //删除酒店推荐
      deleteButton(row){
        let deleteHotelIntroduceInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "data": {
            "ht_hi_ID": row.ht_hi_ID,
          }
        };
        this.$store.dispatch('deleteHotelRecommendType', deleteHotelIntroduceInfo)
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
          })
      },
    },
    created() {
      this.initData();
    }
  }
</script>
<style scoped>
  .title > h1 {
    float: left;
    font: 15px/2 "微软雅黑";
    color: #000;
  }

  .title > button {
    float: right;
  }
</style>
