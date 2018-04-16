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
        prop="fd_sc_ID"
        label="停车位编号"
        align="center">
      </el-table-column>

      <el-table-column
        prop="fd_sc_ShopID"
        label="店面编号"
        align="center">
      </el-table-column>

      <el-table-column

        prop="fd_sc_SeatNo"

        label="停车位名称"
        align="center">
      </el-table-column>


      <el-table-column
        prop=""
        label="停车位状态"
        align="center">
      </el-table-column>

      <!--<el-table-column-->
        <!--prop="fd_sc_LockStatus"-->
        <!--label="停车位状态"-->
        <!--align="center">-->
      <!--</el-table-column>-->

      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="update(scope.row.fd_sc_ID)">修改
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="deleteParkingSpace(scope.row.fd_sc_ID)">删除
          </el-button>
        </template>

      </el-table-column>

    </el-table>

    <!--添加-->



      <el-form-item label="店面编号" :label-width="formLabelWidth" style="width: 55%">
         <el-input v-model="data" auto-complete="off"></el-input>
      </el-form-item>


    <el-dialog title="停车位" :visible.sync="dialogFormVisible">
      <el-form :model="addOptions">

        <el-form-item label="停车位名称" :label-width="formLabelWidth" style="width: 55%">
          <el-input v-model="addOptions.data.fd_sc_SeatNo" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="店面编号" :label-width="formLabelWidth" style="width: 55%">
          <el-input v-model="addOptions.data.fd_sc_ShopID" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="停车位状态" :label-width="formLabelWidth" style="width: 55%">
          <el-input v-model="addOptions.data.fd_sc_LockStatus" auto-complete="off"></el-input>
        </el-form-item>

      </el-form>
    </el-dialog>


      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addSubmit">确 定</el-button>
      </div>










    <!--修改-->
    <!--<el-dialog title="修改停车位信息" :visible.sync="updatedialogFormVisible">-->
      <!--<el-form :model="updateFoodParkingSpaceObj">-->

        <!--<el-form-item label="停车位名称" :label-width="formLabelWidth" style="width: 55%">-->
          <!--<el-input v-model="updateFoodParkingSpaceObj.data.fd_sc_SeatNo" auto-complete="off"></el-input>-->
        <!--</el-form-item>-->

        <!--<el-form-item label="店面编号" :label-width="formLabelWidth" style="width: 55%">-->
          <!--<el-input v-model="updateFoodParkingSpaceObj.data.fd_sc_ShopID" auto-complete="off"></el-input>-->
        <!--</el-form-item>-->

        <!--<el-form-item label="停车位状态" :label-width="formLabelWidth" style="width: 55%">-->
          <!--<el-input v-model="updateFoodParkingSpaceObj.data.fd_sc_LockStatus" auto-complete="off"></el-input>-->
        <!--</el-form-item>-->

        <!--<el-form-item label="停车位编码" :label-width="formLabelWidth" style="width: 55%">-->
          <!--<el-input v-model="updateFoodParkingSpaceObj.data.fd_sc_ID" auto-complete="off"></el-input>-->
        <!--</el-form-item>-->

      <!--</el-form>-->

      <!--<div slot="footer" class="dialog-footer">-->
        <!--<el-button @click="dialogFormVisible = false">取 消</el-button>-->
        <!--<el-button type="primary" @click="updateSubmit">确 定</el-button>-->
      <!--</div>-->

    <!--</el-dialog>-->



  </div>
</template>

<script>

  // import {mapGetters} from 'vuex'
    // computed:mapGetters([
    //   'FoodParkingSpace'
    // ]),



  import {mapGetters} from 'vuex'
    export default {
    computed:mapGetters([
      'FoodParkingSpaceList',
      'updateFoodParkingSpaceObj'
    ]),
      data(){
        return{
          updatedialogFormVisible:false,
          dialogFormVisible:false,
          formLabelWidth:'120px',
          FoodStoreRoom:[],
          addOptions:{
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "",
            "operateUserName": "",
            "pcName": "",
            "data": {
              // "fd_sc_ID": "1",//停车位编码
              "fd_sc_ShopID": "",//店面编号
              "fd_sc_SeatNo": "",//停车位名称
              "fd_sc_LockStatus":""//停车位状态
            }
          },
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
        search(){
          this.$store.commit('setTranstionFalse');
        },


        //添加提交
        addSubmit(){
          this.$store.dispatch('addFoodParkingSpace',this.addOptions).then(
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
          this.dialogFormVisible = false;
          this.addOptions.data.fd_sc_SeatNo="";
          this.addOptions.data.fd_sc_LockStatus="";
          this.addOptions.data.fd_sc_ShopID="";
        },
        //查询
        search(){
          let initParkingSpace={
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "",
            "operateUserName": "",
            "pcName": "",
            //"fd_sc_ID": "2",//停车位编码
            //"fd_sc_ShopID": "1",//店面编号
            //"fd_sc_SeatNo": "1",//停车位名称
            //"fd_sc_LockStatus": "1",//锁定状态
          };

          this.$store.dispatch('initFoodParkingSpace',initParkingSpace).then(
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
        deleteParkingSpace(id){
          console.log(id)
          let delteParkingSpace={
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "操作员编码",
            "operateUserName": "操作员名称",
            "pcName": "",
            "data": {
              "fd_sc_ID": id//停车位编码
            },
          };
          this.$store.dispatch('deleteFoodParkingSpace',delteParkingSpace).then(
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
        //修改
        update(id){
          this.updatedialogFormVisible = true;
          this.$store.commit('setTranstionFalse');
          this.$store.commit('updateFoodParkingSpaceObj',id)
        },
        updateSubmit(){
          let updateOptions={
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "",
            "operateUserName": "",
            "pcName": "",
            "data": this.updateFoodParkingSpaceObj
            };
          this.$store.dispatch('updateFoodParkingSpace',updateOptions).then(
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
