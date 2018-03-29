<template>
  <div>
    <div class="contentBox">
      <h1>时间活动详情</h1>
      <el-tabs v-model="activeName">
        <el-tab-pane label="活动用餐" name="first">
          <adminActiveFood></adminActiveFood>
        </el-tab-pane>
        <el-tab-pane label="活动景点" name="second">
          <adminActivitySite></adminActivitySite>
        </el-tab-pane>
        <el-tab-pane label="活动购物" name="Three">
          <adminEventShopping></adminEventShopping>
        </el-tab-pane>
        <el-tab-pane label="活动住宿" name="Four">
          <adminActiveHotel></adminActiveHotel>
        </el-tab-pane>
        <el-tab-pane label="活动温馨提示" name="Five">
          <adminActiveReminder></adminActiveReminder>
        </el-tab-pane>
        <el-tab-pane label="活动交通" name="Six">
          <adminActiveTraffic></adminActiveTraffic>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import AdminActiveFood from './AdminActiveFood'
  import AdminLinePrepare from './AdminLinePrepare'
  import AdminActiveHotel from './AdminActiveHotel'
  import AdminActiveReminder from './AdminActiveReminder'
  import AdminActivitySite from './AdminActivitySite'
  import AdminEventShopping from './AdminEventShopping'
  import AdminActiveTraffic from './AdminActiveTraffic'

  export default {
    components: {
      AdminActiveFood,
      AdminLinePrepare,
      AdminActiveHotel,
      AdminActiveReminder,
      AdminActivitySite,
      AdminEventShopping,
      AdminActiveTraffic
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
    },
  }
</script>
<style scoped>
  .contentBox {
    padding: 20px;
  }

  .contentBox > h1 {
    font: bold 20px/2 '微软雅黑';
    margin-bottom: 20px;
  }
</style>
