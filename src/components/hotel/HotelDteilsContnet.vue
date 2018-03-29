<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1>酒店详细信息</h1>
      <el-tabs v-model="activeName">

        <el-tab-pane label="酒店推荐信息" name="first">
          <HotelQueryRecommend></HotelQueryRecommend>
        </el-tab-pane>












      </el-tabs>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import HotelQueryRecommend from './HotelQueryRecommend'
  export default {
    components:{
      HotelQueryRecommend
    },
    computed: mapGetters([]),
    data() {
      return {
        activeName: 'first',
        isLoading: false,
      }
    },
    methods: {

    },
    created(){

    }
  }
</script>
<style scoped>
  h1 {
    font: 20px/2 "微软雅黑";
  }
</style>
