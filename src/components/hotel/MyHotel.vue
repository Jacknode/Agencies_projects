<template>
  <div>
    <div id="wrap" class="clearfix">
      <el-tabs type="border-card" @tab-click="click" v-model="hotelRouterIndex">
        <el-tab-pane v-for="item,index in myHotelRouterList" :key="index" :label="item.name">
          <div v-loading="isLoading">
            <router-view name="Hotel"></router-view>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([

    ]),
    data() {
      return {
        myHotelRouterList: [
          {
            index: 0,
            router: 'HotelDetilsInformation',
            name: '酒店基本信息'
          },
          {
            index: 1,
            router: 'HotelDteilsContnet',
            name: '酒店详细信息'
          },
        ],
        isLoading: false,
        hotelRouterIndex: 0
      }
    },
    methods: {
      click() {
        sessionStorage.setItem('hotelRouterIndex',this.hotelRouterIndex)
        this.$router.push({name:this.myHotelRouterList[this.hotelRouterIndex].router})
      }
    },
    updated(){
      this.hotelRouterIndex = sessionStorage.getItem('hotelRouterIndex')
    },
    created() {
      if( sessionStorage.getItem('hotelRouterIndex') != 0 ){
        this.hotelRouterIndex = sessionStorage.getItem('hotelRouterIndex')
        this.click()
      }else{
        sessionStorage.setItem('hotelRouterIndex',this.hotelRouterIndex)
      }


    },
  }
</script>
<style scoped>
  h1 {
    padding: 20px 0 0 20px;
    font-size: 18px;
  }
</style>
