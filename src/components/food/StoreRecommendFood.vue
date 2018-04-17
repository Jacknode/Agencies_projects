<template>
    <!--推荐菜   -->


  <div id="wrap" class="clearfix">
    <div class="title clearfix" style="padding: 20px">
      <h1 style="font-size: 20px;">美食推荐菜</h1><br><br>
      <el-button type="primary" @click="Add" size="small" style="">新增</el-button>
      <el-button type="primary" @click="search" size="small" style="margin-left: 20px">查询</el-button>
    </div>


    <!--添加推荐菜-->

    <el-dialog title="新增推荐菜" :visible.sync="dialogFormVisible">
      <el-form :model="data">

        <el-form-item label="推荐菜名称" :label-width="formLabelWidth" style="width: 55%">
          <el-input v-model="data.fd_sf_ProductName" auto-complete="off"></el-input>
        </el-form-item>

        <!--<el-form-item label="店面名称" :label-width="formLabelWidth">-->
          <!--<el-select v-model="form.region" placeholder="">-->
            <!--<el-option label="1" value="shanghai"></el-option>-->
            <!--<el-option label="2" value="beijing"></el-option>-->
          <!--</el-select>-->
        <!--</el-form-item>-->

        <el-form-item label="店面编号" :label-width="formLabelWidth" style="width: 55%">
          <el-input v-model="data.fd_if_StoreFrontID" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="价格" :label-width="formLabelWidth" style="width: 55%">
            <el-input v-model="data.fd_if_Price" auto-complete="off"></el-input>
         </el-form-item>

        <el-form-item label="图片上传:" :label-width="formLabelWidth">
          <a href="javascript:;" class="file">上传图片
            <input type="file" name="" ref="upload1" accept="image/*" multiple>
          </a>
          <img src="" alt="" v-lazy=""  v-show="" v-for="" style="width: 100px;height: 100px">
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addSubmit">确 定</el-button>
      </div>
    </el-dialog>

    <!--数据展示isLoading-->
    <el-table
      :data="RecommendFoodList"
      v-loading=""
      style="width: 100%"
    >
      <!--<el-table-column-->
        <!--prop="fd_if_StoreFrontID"-->
        <!--label="店面编号"-->
        <!--align="center"-->
      <!--&gt;-->
      <!--</el-table-column>-->
      <el-table-column
        prop="fd_if_StoreFrontID"
        label="店面编号"
        align="center"
      >
      </el-table-column>

      <el-table-column
        prop="fd_if_ID"
        label="推荐菜编号"
        align="center"
      >
      </el-table-column>

      <el-table-column
        prop="fd_sf_ProductName"
        label="推荐菜系名称"
        align="center"
      >
      </el-table-column>

      <el-table-column
        prop=""
        label="推荐菜系图片"
        align="center"
      >
      </el-table-column>

      <el-table-column
        prop="fd_if_Price"
        label="价格"
        align="center"
      >
      </el-table-column>

      <!--<el-table-column-->
        <!--label="图片地址"-->
        <!--align="center"-->
      <!--&gt;-->
        <!--<template slot-scope="scope">-->
          <!--<img src="" alt="" v-lazy="scope.row" title="点击查看大图" style="width:100px;height:100px;cursor: pointer" @click="clickImg(scope.row)">-->
        <!--</template>-->
      <!--</el-table-column>-->
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="update(scope.row.fd_if_ID)">修改
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="Delete(scope.row.fd_if_ID)">删除
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
      'RecommendFoodList',
      'updateRecommendFoodObj'
    ]),
      data(){
        return{
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "fd_if_StoreFrontID": "",//店面编号
            "fd_if_Image": "",//推荐菜系图片
            "fd_if_Price": "",//价格
            "fd_if_Name": "",//推荐菜系名称
          },


          dialogFormVisible: false,
         formLabelWidth: '120px',
        }
      },
      methods:{
        //分页
        handleCurrentChange(num){
          this.initData(num)
        },
        //添加
        Add(){
          this.dialogFormVisible = true;
          this.$store.commit('setTranstionFalse');
        },
        //初始化
        initData(page){
          let initRecommendFood={
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "操作员编码",
            "operateUserName": "操作员名称",
            "pcName": "",
            "page":page?page:1,//页码编号
            "rows":"5",//单页显示数量
          };
          this.$store.dispatch('initRecommendFood',initRecommendFood)
            .then(suc => {
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
        //查询
        search(){
          this.initData()
        },
        //添加提交
        addSubmit(){
          let addSubmitRecommendFood={
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "操作员编码",
            "operateUserName": "操作员名称",
            "pcName": "",
            "data": this.data
            //   {
            //   "fd_if_StoreFrontID": "",//店面编号
            //   "fd_if_Image": "",//推荐菜系图片
            //   "fd_if_Price": "",//价格
            //   "fd_if_Name": "",//推荐菜系名称
            // }
          };
          this.$store.dispatch('addRecommendFood',addSubmitRecommendFood)
            .then(suc => {
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
          this.dialogFormVisible=false;
        },
        //删除
        Delete(id){
          let delRecommendFood={
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "",
            "operateUserName": "",
            "pcName": "",
            "data": {
              "fd_if_ID": id//停车位编码
            },
          };
          this.$store.dispatch("deleteRecommendFood",delRecommendFood).then(
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
        //修改
      //   update(id){
      //     this.dialogFormVisible = true;
      //     // this.$store.commit('updateRecommendFood',id)
      //   },
      //   updataRecommendFood(){
      //     let updateRecommenFood={
      //       "loginUserID": "huileyou",
      //       "loginUserPass": "123",
      //       "operateUserID": "操作员编码",
      //       "operateUserName": "操作员名称",
      //       "pcName": "",
      //       "data": {
      //         "fd_if_ID": "",//推荐菜编号
      //         "fd_if_StoreFrontID": "",//店面编号
      //         "fd_if_Image": "",//推荐菜系图片
      //         "fd_if_Price": "",//价格
      //         "fd_if_Name": "",//推荐菜系名称
      //     }
      //   };
      //     this.$store.dispatch('updateRecommendFood',updateRecommenFood)
      // }
    }
  }
</script>

<style scoped>

</style>
