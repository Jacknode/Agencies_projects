<template>
    <div>

      <ul class="navigation navigation-main navigation-accordion">
        <!--境外查询-->
        <li>
          <a href="javascript:;"><i class="icon-ticket"></i> <span>门票后台管理</span></a>
          <ul>
            <li>
              <router-link to="/home/ticketAttractions">景点信息管理</router-link>
            </li>
            <li>
              <router-link to="/home/ticketPredeterminedInstructions">预定须知</router-link>
            </li>
            <li>
              <router-link to="/home/trafficInformation">交通信息</router-link>
            </li>
            <li>
              <router-link to="/home/ticketType">票种</router-link>
            </li>
            <li>
              <router-link to="/home/ticketTypeTicketPrice">票种_票价</router-link>
            </li>
            <li>
              <router-link to="/home/ticketQueryOrder">查询订单</router-link>
            </li>
            <li>
              <router-link to="/home/ticketApplyShowHomePage">申请景点展示首页</router-link>
            </li>
          </ul>
        </li>
        <!-- /main -->
      </ul>

      <ul class="navigation navigation-main navigation-accordion">
        <li>
          <!--美食管理-->
          <a href="javascript:;"><i class="icon-ticket"></i> <span>美食后台管理</span></a>
          <ul>
            <!--美食店铺信息-->
            <li>
              <router-link to="foodStoreInformation">店面信息</router-link>
            </li>
            <li>
              <router-link to="foodRoomTableTimeEveryDay">店面每天可锁桌时间</router-link>
            </li>
            <li>
              <router-link to="foodStorefrontRoomTableTime">店面房间餐桌时间</router-link>
            </li>
            <li>
              <router-link to="foodStoreRoomPicture">房间图片</router-link>
            </li>
            <li>
              <router-link to="storeRecommendFood">推荐菜</router-link>
            </li>
            <li>
              <router-link to="foodStoreProduct">店面产品</router-link>
            </li>
            <li>
              <router-link to="foodStoreRoom">店面房间</router-link>
            </li>
            <li>
              <router-link to="foodParkingSpace">停车位</router-link>
            </li>
            <li>
              <router-link to="foodRoomTable">房间餐桌</router-link>
            </li>
            <li>
              <router-link to="foodCanReserve">生成餐桌可订餐时间</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: mapGetters([]),
        data() {
            return {}
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
</style>
