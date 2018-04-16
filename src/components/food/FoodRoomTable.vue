<template>
    <!--房间餐桌   y -->

  <div id="wrap" class="clearfix">
    <div class="title clearfix" style="padding: 20px">
      <h1 style="font-size: 20px;">房间餐桌</h1><br><br>
      <el-button type="primary" @click="Add" size="small" style="">新增</el-button>
      <el-button type="primary" @click="search" size="small" style="margin-left: 20px">查询</el-button>
    </div>


    <!--添加-->
    <el-dialog title="添加房间信息" :visible.sync="dialogFormVisible">
      <el-form :model="data">

        <el-form-item label="店面房间编号" :label-width="formLabelWidth" style="width: 55%">
          <el-input v-model="data.fd_rt_RoomID" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="餐桌编号" :label-width="formLabelWidth" style="width: 55%">
          <el-input v-model="data.fd_rt_TableID" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="餐桌状态" :label-width="formLabelWidth" style="width: 55%">
          <el-input v-model="data.fd_rt_State" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="允许占用时间" :label-width="formLabelWidth" style="width: 55%">
          <el-input v-model="data.fd_rt_EatTime" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="备注" :label-width="formLabelWidth" style="width: 55%">
          <el-input v-model="data.fd_rt_Remark" auto-complete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addSubmit">确 定</el-button>
      </div>
    </el-dialog>


    <!--展示-->
    <el-table
      :data="FoodRoomTableList"
      style="width: 100%">

      <el-table-column
        prop="fd_rt_ID"
        label="房间餐桌编号"
        align="center">
      </el-table-column>

      <el-table-column
        prop="fd_rt_RoomID"
        label="店面房间编号"
        align="center">
      </el-table-column>

      <el-table-column
        prop="fd_rt_TableID"
        label="餐桌编号"
        align="center">
      </el-table-column>

      <el-table-column
        prop="fd_rt_State"
        label="餐桌状态"
        align="center">
      </el-table-column>

      <el-table-column
        prop="fd_rt_EatTime"
        label="允许占用时间"
        align="center">
      </el-table-column>

      <el-table-column
        prop="fd_rt_Remark"
        label="备注"
        align="center">
      </el-table-column>

      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="update(scope.row.fd_rt_ID)">修改
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="deleteFoodRoomTable(scope.row.fd_rt_ID)">删除
          </el-button>
        </template>
      </el-table-column>

    </el-table>






  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
    computed:mapGetters([
      'FoodRoomTableList',
      'updateFoodRoomTableObj'
    ]),
      data(){
        return{
          dialogFormVisible:false,
          formLabelWidth:'120px',
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "操作员编码",
          "operateUserName": "操作员名称",
          "pcName": "",
          "data": {
            // "fd_rt_ID": "",//房间餐桌编号
            "fd_rt_RoomID": "",//店面房间编号
            "fd_rt_TableID": "",//餐桌编号
            "fd_rt_State": "",//餐桌状态
            "fd_rt_EatTime": "",//允许占用时间
            "fd_rt_Remark": "",//备注
          }
        }
      },
      methods:{
        //添加
        Add(){
          this.dialogFormVisible=true;
          this.$store.commit('setTranstionFalse');
        },
        //添加提交
        addSubmit(){
          let addSubmitRoomTable={
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "操作员编码",
            "operateUserName": "操作员名称",
            "pcName": "",
            "data":this.data
            //   {
            //   "fd_rt_RoomID": "",//店面房间编号
            //   "fd_rt_TableID": "",//餐桌编号
            //   // "fd_rt_State": "",//餐桌状态
            //   // "fd_rt_EatTime": "",//允许占用时间
            //   "fd_rt_Remark": "",//备注
            // },
          };
          this.$store.dispatch('addFoodRoomTable',addSubmitRoomTable).then(
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
          this.dialogFormVisible=false;
          this.data.fd_rt_RoomID="";
          this.data.fd_rt_TableID="";
          this.data.fd_rt_Remark="";
        },
        //查询
        search(){
          let initRoomTable={
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "操作员编码",
            "operateUserName": "操作员名称",
            "pcName": "",
            // "data": {
            //   "fd_rt_ID": "",//餐桌编号
            //   "fd_rt_RoomID": "",//店面房间编号
            //   "fd_rt_State": "",//餐桌状态
            //   "fd_rt_TableID": "",//餐桌编号
            //   "fd_rt_EatTime": "",//允许占用时间
            //   "fd_rt_Remark": "",//备注
            //
            // },
          };
          this.$store.dispatch('initFoodRoomTable',initRoomTable).then(
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
        deleteFoodRoomTable(id){
          let deleteRoomTable={
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "操作员编码",
            "operateUserName": "操作员名称",
            "pcName": "",
            "data": {
              "fd_rt_ID":id,
            },
          };
          this.$store.dispatch('deleteFoodRoomTable',deleteRoomTable).then(
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
        }
      }

    }
</script>

<style scoped>

</style>
