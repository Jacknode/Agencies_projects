<template>
  <div>
    <div class="contentBox">
      <h1>产品线路管理</h1>
      <el-tabs v-model="activeName">
        <el-tab-pane label="产品线路出发城市" name="first">
          <adminRouteDepartureCity></adminRouteDepartureCity>
        </el-tab-pane>
        <el-tab-pane label="产品线路价格" name="fix">
          <adminLinePrice></adminLinePrice>
        </el-tab-pane>
        <el-tab-pane label="产品线路特色" name="second">
          <adminProductFeatures></adminProductFeatures>
        </el-tab-pane>
        <el-tab-pane label="线路日程" name="Three">
          <adminLinePrepare></adminLinePrepare>
        </el-tab-pane>
        <el-tab-pane label="费用说明" name="Four">
          <adminCostsOf></adminCostsOf>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import AdminProductFeatures from './AdminProductFeatures'
  import AdminLinePrepare from './AdminLinePrepare'
  import AdminCostsOf from './AdminCostsOf'
  //产品线路价格
  import AdminLinePrice from './AdminLinePrice'
  import AdminRouteDepartureCity from './AdminRouteDepartureCity'

  export default {
    components: {
      AdminProductFeatures,
      AdminLinePrepare,
      AdminCostsOf,
      AdminLinePrice,
      AdminRouteDepartureCity
    },
    name: '',
    computed: mapGetters([
      'adminProductLineManagementId'
    ]),
    data() {
      return {
        activeName: 'first'
      }
    },
    methods: {
      initData() {
      },
      search() {
        this.initData()
      }
    },
  }
</script>
<style scoped>
  .contentBox {
    padding: 20px;
  }
  .contentBox>h1 {
    font: bold 20px/2 '微软雅黑';
    margin-bottom: 20px;
  }
</style>
