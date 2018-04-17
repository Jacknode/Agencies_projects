<template>
    <!--店面房间-->
  <div id="wrap" class="clearfix">
    <div class="title clearfix" style="padding: 20px">
      <h1 style="font-size: 20px;">店面房间</h1><br><br>
      <el-button type="primary" @click="Add" size="small" style="">新增</el-button>
      <el-button type="primary" @click="search" size="small" style="margin-left: 20px">查询</el-button>
    </div>

    <!--数据展示-->
    <el-table
      :data="FoodStoreRoomList"
      style="width: 100%">

      <el-table-column
        prop="fd_sfr_StoreFrontID"
        label="店面编号"
        align="center">
      </el-table-column>

      <el-table-column
        prop="fd_sfr_ID"
        label="店面房间编号"
        align="center">
      </el-table-column>


      <el-table-column
        prop="fd_sfr_RoomName"
        label="房间名称"
        align="center">
      </el-table-column>

      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="update(scope.row.fd_sfr_ID)">修改
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="Delete(scope.row.fd_sfr_ID)">删除
          </el-button>
        </template>
      </el-table-column>

    </el-table>

    <!--添加-->
    <el-dialog title="新增推荐菜" :visible.sync="dialogFormVisible">
      <el-form :model="addOptions">

        <!--<el-form-item label="店面房间编号" :label-width="formLabelWidth" style="width: 55%">-->
          <!--<el-input v-model="addOptions.data.fd_sfr_ID" auto-complete="off"></el-input>-->
        <!--</el-form-item>-->

        <el-form-item label="店面编号" :label-width="formLabelWidth" style="width: 55%">
          <el-input v-model="addOptions.data.fd_sfr_StoreFrontID" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="店面名称" :label-width="formLabelWidth" style="width: 55%">
          <el-input v-model="addOptions.data.fd_sfr_RoomName" auto-complete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addSubmit">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
      computed: mapGetters([
        'FoodStoreRoomList',
        'updateFoodStoreRoomObj'
      ]),
      data() {
        return {
          dialogFormVisible: false,
          formLabelWidth: '120px',
          addOptions:{
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "操作员编码",
            "operateUserName": "操作员名称",
            "pcName": "",
            "data": {
              // "fd_sfr_ID": "",//店面房间编号
              "fd_sfr_StoreFrontID": "",//店面编号
              "fd_sfr_RoomName": "",//店面房间
            },
          }
        }
      },
      methods: {
        //新增
        Add() {
          this.dialogFormVisible = true;
          this.$store.commit('setTranstionFalse');
        },
        //新增提交
        addSubmit() {
          this.$store.dispatch('addFoodStoreRoom',this.addOptions).then(
            suc => {
              this.$notify({
                message: suc,
                type: 'success'
              });
              this.initData();
            }, err => {
              this.$notify({
                message: err,
                type: 'error'
              });
            })
          this.dialogFormVisible = false;
        },
        //查询
        search(){
          this.initData();
        },
        initData() {
          let initOptions={
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "操作员编码",
            "operateUserName": "操作员名称",
            "pcName": "",
            // "data": this.data
          }
          this.$store.dispatch('initFoodStoreRoom',initOptions).then(
            suc => {
              this.$notify({
                message: suc,
                type: 'success'
              });
            }, err => {
              this.$notify({
                message: err,
                type: 'error'
              });
            })
        },
        //删除
        Delete(id){
          let deleteOptions={
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "",
            "operateUserName": "",
            "pcName": "",
            "data":{
              "fd_sfr_ID":id,
            }

          };
          this.$store.dispatch('deleteFoodStoreRoom',deleteOptions).then(
            suc => {
              this.$notify({
                message: suc,
                type: 'success'
              });
              this.initData();
            }, err => {
              this.$notify({
                message: err,
                type: 'error'
              });
            })
        }
      }
    }
</script>

<style scoped>

</style>
