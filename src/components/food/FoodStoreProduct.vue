<template>
    <!--店面产品-->
  <div id="wrap" class="clearfix">
    <div class="title clearfix" style="padding: 20px">
      <h1 style="font-size: 20px;">店面产品</h1><br><br>
      <el-button type="primary" @click="Add" size="small" style="">新增</el-button>
      <el-button type="primary" @click="search" size="small" style="margin-left: 20px">查询</el-button>
    </div>

    <!--添加-->
    <el-dialog title="添加房间信息" :visible.sync="dialogFormVisible">
      <el-form :model="data">

        <el-form-item label="名称" :label-width="formLabelWidth" style="width: 55%">
          <el-input v-model="data.fd_sfp_Name" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="店面编码" :label-width="formLabelWidth" style="width: 55%">
          <el-input v-model="data.fd_sfp_StoreFrontID" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="价格" :label-width="formLabelWidth" style="width: 55%">
          <el-input v-model="data.fd_sfp_Price" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="备注" :label-width="formLabelWidth" style="width: 55%">
          <el-input v-model="data.fd_sfp_Remark" auto-complete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addSubmit">确 定</el-button>
      </div>
    </el-dialog>


    <!--展示-->
    <el-table
      :data="FoodStoreProductList"
      style="width: 100%">


      <el-table-column
        prop="fd_sfp_StoreFrontID"
        label="店面编号"
        align="center">
      </el-table-column>

      <el-table-column
        prop="fd_sfp_ID"
        label="店面产品编号"
        align="center">
      </el-table-column>

      <el-table-column
        prop="fd_sfp_Name"
        label="名称"
        align="center">
      </el-table-column>

      <el-table-column
        prop="fd_sfp_Price"
        label="价格"
        align="center">
      </el-table-column>

      <el-table-column
        prop="fd_sfp_Remark"
        label="备注"
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
            @click="Delete(scope.row.fd_sfp_ID)">删除
          </el-button>
        </template>
      </el-table-column>

    </el-table>

    <!--分页-->
    <div class="block" style="float: right; margin:10px 40px 0px 0px">
      <el-pagination
        @current-change="handleCurrentChange"
        :page-size="5"
        layout="prev, pager, next"
      >
      </el-pagination>
    </div>




  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
    export default {
      computed:mapGetters([
        'FoodStoreProductList',
        'updateFoodStoreProductObj'
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
            // "fd_sfp_ID": "",//店面产品编码
            "fd_sfp_ID": "",//店面产品编码
            "fd_sfp_StoreFrontID": "",//店面编号
            "fd_sfp_Name": "",//名称
            "fd_sfp_Price": "",//价格
            "fd_sfp_Remark": "",//备注
          }
        }
      },
      methods:{
        //分页
        handleCurrentChange(num){
          this.initData(num)
        },
        //添加
        Add(){
          this.dialogFormVisible= true;
          this.$store.commit('setTranstionFalse');
        },
        //添加提交
        addSubmit(){
          this.dialogFormVisible= false;
          let addSubmitStoreProduct={
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "操作员编码",
            "operateUserName": "操作员名称",
            "pcName": "",
            "data": this.data
            //   {
            //   "fd_sfp_StoreFrontID": "",//店面编号
            //   "fd_sfp_Name": "",//名称
            //   "fd_sfp_Price": "",//价格
            //   "fd_sfp_Remark": "",//备注
            // }
          };
          this.$store.dispatch('addFoodStoreProduct',addSubmitStoreProduct).then(
            suc => {
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
        //查询
        search(){
          this.initData()
        },
        initData(page){
          let initOptions={
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "操作员编码",
            "operateUserName": "操作员名称",
            "pcName": "",
            "page":page?page:1,//页码编号
            "rows":"5",//单页显示数量
            // "data":this.data,
          };
          this.$store.dispatch('initFoodStoreProduct',initOptions).then(
            suc => {
              // this.$notify({
              //   message: suc,
              //   type: 'success'
              // });
            }, err => {
              this.$notify({
                message: err,
                type: 'error'
              });
            })
        },
        //删除
        Delete(id){
          let deleteStoreProduct={
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "操作员编码",
            "operateUserName": "操作员名称",
            "pcName": "",
            "data":{
              "fd_sfp_ID":id,
            }
          };
          this.$store.dispatch('deleteFoodStoreProduct',deleteStoreProduct).then(
            suc => {
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
      }
    }
</script>

<style scoped>

</style>
