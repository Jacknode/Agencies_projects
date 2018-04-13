<template>
    <!--停车位-->
  <div id="wrap" class="clearfix">
    <div class="title clearfix" style="padding: 20px">
      <h1 style="font-size: 20px;">停车位</h1><br><br>
      <el-button type="primary" @click="Add" size="small" style="">新增</el-button>
      <el-button type="primary" @click="search" size="small" style="margin-left: 20px">查询</el-button>
    </div>

    <!--数据展示-->
    <el-table
      :data="FoodParkingSpace"
      style="width: 100%">

      <el-table-column
        prop=""
        label="停车位编号"
        align="center">
      </el-table-column>

      <el-table-column
        prop=""
        label="店面编号"
        align="center">
      </el-table-column>

      <el-table-column
        prop=""
        label="停车位名称"
        align="center">
      </el-table-column>

      <el-table-column
        prop=""
        label="停车位状态"
        align="center">
      </el-table-column>

    </el-table>

    <!--添加-->
    <el-dialog title="新增推荐菜" :visible.sync="dialogFormVisible">
      <el-form :model="data">

        <el-form-item label="店面编号" :label-width="formLabelWidth" style="width: 55%">
          <el-input v-model="data" auto-complete="off"></el-input>
        </el-form-item>


      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addSubmit">确 定</el-button>
      </div>
      </el-form>


    </el-dialog>



  </div>
</template>

<script>
  // import {mapGetters} from 'vuex'
    export default {
    // computed:mapGetters([
    //   'FoodParkingSpace'
    // ]),
      data(){
        return{
          dialogFormVisible:false,
          formLabelWidth:'120px',
          FoodStoreRoom:[],
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "操作员编码",
          "operateUserName": "操作员名称",
          "pcName": "",
          "data": {
            "fd_sc_ID": "1",//停车位编码
            "fd_sc_ShopID": "1",//店面编号
            "fd_sc_SeatNo": "1",//停车位名称
            "fd_sc_LockStatus": "1",//锁定状态
          }
        }
      },
      methods:{
        //添加
        Add(){
          this.dialogFormVisible = true;
        },
        //添加提交
        addSubmit(){
          this.dialogFormVisible = false;
        },
        search(){},
      }
    }
</script>

<style scoped>

</style>
