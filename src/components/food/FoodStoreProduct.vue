<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">店面产品</h1>
      <!--查询-->
      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>店面名称筛选:</span>
          </el-form-item>
          <el-form-item>
            <el-select v-model="storeId" placeholder="请选择店面">
              <el-option
                v-for="item in foodStoreInformtionList"
                :key="item.fd_sf_ID"
                :label="item.fd_sf_ProductName"
                :value="item.fd_sf_ID">
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
        :data="foodStoreProductList"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="店面名称">
                <span>{{ props.row.fd_sf_ProductName }}</span>
              </el-form-item>
              <el-form-item label="菜名">
                <span>{{ props.row.fd_sfp_Name }}</span>
              </el-form-item>
              <el-form-item label="价格">
                <span>{{ props.row.fd_sfp_Price }}</span>
              </el-form-item>
              <el-form-item label="备注">
                <span>{{ props.row.fd_sfp_Remark }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="店面名称"
          prop="fd_sf_ProductName">
        </el-table-column>
        <el-table-column
          label="联系电话"
          prop="fd_sf_Phone">
        </el-table-column>
        <el-table-column
          label="人均价格">
          <template slot-scope="scope">
            {{scope.row.fd_sf_AvgPrice}}元
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="update(scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="deleteFoodStoreInformtion(scope.row.fd_sf_ID)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!--添加-->

      <el-dialog title="添加店面菜品" :visible.sync="addDialog">
        <el-form :model="addOptions">
          <el-form-item label="店面名称:" :label-width="formLabelWidth">
            <el-select v-model="addOptions.fd_sfp_StoreFrontID" placeholder="请选择店面">
              <el-option
                v-for="item in foodStoreInformtionList"
                :key="item.fd_sf_ID"
                :label="item.fd_sf_ProductName"
                :value="item.fd_sf_ID">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="菜名:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.fd_sfp_Name"></el-input>
          </el-form-item>
          <el-form-item label="价格:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.fd_sfp_Price"></el-input>
          </el-form-item>
          <el-form-item label="备注:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.fd_sfp_Remark"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addDialog = false">取 消</el-button>
          <el-button type="primary" @click="addSubmit">确 定</el-button>
        </div>
      </el-dialog>


    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([
      'foodStoreInformtionList',
      'foodStoreProductList'
    ]),
    data() {
      return {
        storeId: '',
        addDialog: false,
        addOptions: {
          "fd_sfp_StoreFrontID": "",//店面编号
          "fd_sfp_Name": "",//名称
          "fd_sfp_Price": "",//价格
          "fd_sfp_Remark": "",//备注
        },
        formLabelWidth: '120px',
      }
    },
    methods: {
      //初始化数据
      initData(id) {
        if (!id) {
          this.$notify({
            message: '请选择店面！',
            type: 'error'
          })
          return;
        }
        let selectStoreFrontProductInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "fd_sfp_ID": "",//店面产品编码
          "fd_sfp_StoreFrontID": id,//店面编号
          "fd_sfp_Name": "",//名称
          "priceFrom": "",//价格
          "priceTo": "",//备注
          "page": "1",
          "rows": "10",
        };
        this.$store.dispatch('initFoodStoreProduct',selectStoreFrontProductInfo)
      },
      //查询
      search() {
        this.initData(this.storeId)
      },
      //添加
      add(){
        this.$store.commit('setTranstionFalse');
        this.addDialog = true;
      },
      //添加提交
      addSubmit(){},
    },
  }
</script>
<style scoped>
</style>
