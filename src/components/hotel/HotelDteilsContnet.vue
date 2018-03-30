<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1>酒店详细信息</h1>
      <el-tabs v-model="activeName">

        <el-tab-pane label="酒店推荐信息" name="first">
          <HotelQueryRecommend></HotelQueryRecommend>
        </el-tab-pane>

        <!--<el-tab-pane label="酒店图片信息" name="second">-->
        <!--<HotelPicture></HotelPicture>-->
        <!--</el-tab-pane>-->
        <el-tab-pane label="酒店房间信息" name="second">
          <HotelRoomInformation></HotelRoomInformation>
        </el-tab-pane>


      </el-tabs>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import HotelQueryRecommend from './HotelQueryRecommend'
  import HotelPicture from './HotelPicture'
  import HotelRoomInformation from './HotelRoomInformation'


  export default {
    components: {
      HotelQueryRecommend,
      HotelPicture,
      HotelRoomInformation
    },
    computed: mapGetters([]),
    data() {
      return {
        activeName: 'first',
        isLoading: false,
      }
    },
    methods: {},
    created() {

    }
  }
</script>
<style scoped>
  h1 {
    font: 20px/2 "微软雅黑";
  }
</style>
