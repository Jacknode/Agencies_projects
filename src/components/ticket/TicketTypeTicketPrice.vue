<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">票种_票价信息</h1>

      <!--查询栏-->

      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>票种编码筛选:</span>
          </el-form-item>
          <el-form-item>
            <el-input v-model="siteId"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search">查询</el-button>
            <el-button type="primary" @click="Add">新增</el-button>
          </el-form-item>
        </el-form>
      </el-col>

      <!--数据展示-->


    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([]),
    data() {
      return {
        siteId: '',
        loginId: '',
      }
    },
    methods: {
      //初始化景点信息
      initTicketAttraction() {
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "tsCode": "",    //景点编码
          "tsName": '',//景点名称
          "tradeInfoID": this.loginId.sm_ai_ID,//供应商编码
          "isDelete": 0,//必须传
          "page": 1,
          "rows": 5
        };
        this.$store.dispatch('initTicketAttractions', options)
      },
      //初始化票种
      //初始化数据
      initData() {
        let getTicketTypePriceList = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "tm_tt_ID": 27,
          "dateFrom": "2018-03-27",
          "page": 1,
          "rows": 5
        }
      },
      //查询
      search() {
        this.initData()
      },
      //添加按钮
      Add() {
      },
    },
    created() {
      this.loginId = JSON.parse(sessionStorage.getItem('admin'));
      this.initData();
      this.initTicketAttraction();
    }
  }
</script>
<style scoped>
</style>
