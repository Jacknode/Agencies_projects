<template>
  <!--产品图片-->
  <div id="wrap" class="clearfix">
    <div class="title clearfix" style="padding: 20px">
      <h1 style="font-size: 20px;">产品图片</h1><br><br>
      <el-button type="primary" @click="Add" size="small" style="">新增</el-button>
      <el-button type="primary" @click="search" size="small" style="margin-left: 20px">查询</el-button>
    </div>

    <!--添加-->
    <el-dialog title="添加产品图片" :visible.sync="dialogFormVisible">
      <el-form :model="data">


        <el-form-item label="图片编码" :label-width="formLabelWidth" style="width: 55%">
          <el-input v-model="data.fd_pi_ID" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="店面编码" :label-width="formLabelWidth" style="width: 55%">
          <el-input v-model="data.fd_pi_StoreFront" auto-complete="off"></el-input>
        </el-form-item>

        <!--<el-form-item label="图片地址" :label-width="formLabelWidth" style="width: 55%">-->
          <!--<el-input v-model="data.fd_pi_ImageUrl" auto-complete="off"></el-input>-->
        <!--</el-form-item>-->

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addSubmit">确 定</el-button>
      </div>
    </el-dialog>


    <!--展示-->
    <el-table
      :data="FoodProductImgList"
      style="width: 100%">

      <!--<el-table-column-->
        <!--prop="fd_pi_ID"-->
        <!--label="图片编码"-->
        <!--align="center">-->
      <!--</el-table-column>-->
      :data="FoodProductImg"
      style="width: 100%">

      <el-table-column
        prop="fd_pi_ID"
        label="图片编码"
        align="center">
      </el-table-column>

      <el-table-column
        prop="fd_pi_StoreFront"
        label="店面编号"
        align="center">
      </el-table-column>

      <el-table-column
        prop="fd_pi_ImageUrl"
        label="图片地址"
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
            @click="Delete(scope.row.fd_pi_ID)">删除
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
      'FoodProductImgList',
      'updateFoodProductImgObj'
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
            // "fd_pi_ID": "",//图片编号
            "fd_pi_ID": "",//图片编号
            "fd_pi_StoreFront": "",//店面编号
            "fd_pi_ImageUrl": "",//图片地址
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
          this.dialogFormVisible=true;
          this.$store.commit('setTranstionFalse');
        },
        //提交添加
        addSubmit(){
          this.dialogFormVisible=false;
          let addSubmitProductImg={
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "",
            "operateUserName": "",
            "pcName": "",
            "data": this.data
            //   {
            //   "fd_pi_StoreFront": "",//店面编号
            //   "fd_pi_ImageUrl": "",//图片地址
            // }

          };
          this.$store.dispatch('addFoodProductImg',addSubmitProductImg).then(
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
        },
        //查询
        search(){
          this.initData();
        },
        initData(page){
          let initOptions={
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "",
            "operateUserName": "",
            "pcName": "",
            "page":page?page:1,//页码编号
            "rows":"5",//单页显示数量
            "data": {
              "fd_pi_ID": "1",//图片编号
              "fd_pi_StoreFront": "",//店面编号
              "fd_pi_ImageUrl": "",//图片地址
            }
          };
          this.$store.dispatch('initFoodProductImg',initOptions).then(
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
        Delete(id){
          let deleteProductImg={
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "操作员编码",
            "operateUserName": "操作员名称",
            "pcName": "",
            "data": {
              "fd_pi_ID": id//图片编号
            }
          };
          this.$store.dispatch('deleteFoodProductImg',deleteProductImg).then(
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
