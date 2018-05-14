<template>
  <div id="wrap">
    <!--<div class="wrapper">-->
      <!--<ul class="functionTypeList clearfix" id="functionTypeList" v-model="activeName">-->
        <!--<li v-for="item,index in functionTypeList" :name="item.value" @click="clickChageType(index,item)">-->
          <!--<router-link :to="'/home/adminAllFunction2/'+ item.link">{{item.name}}</router-link>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
    <div v-loading="isLoading">
      <router-view name="Content"></router-view>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    name: '',
    computed: mapGetters([
      'adminMerchantProductsId'
    ]),
    created(){

    },
    data() {
      return {
        functionTypeList: [
//          {
//            name: '商家信息管理',
//            value: '0',
//            link: 'adminBusinessInformation'
//          },
          {
            name: '商家产品管理',
            value: '1',
            link: 'adminMerchantProducts'
          },
          {
            name: '产品线路管理',
            value: '2',
            link: 'adminQueryProductInformation'
          },
          {
            name: '产品详情管理',
            value: '3',
            link: 'adminQueryProductInformationList'
          },
//          {
//            name: '产品特色管理',
//            value: '3',
//            link: 'adminProductFeatures'
//          },
//          {
//            name: '线路日程管理',
//            value: '4',
//            link: 'adminLinePrepare'
//          },
          {
            name: '日程时间管理',
            value: '4',
            link: 'adminScheduleTime'
          },
          {
            name: '时间活动管理',
            value: '5',
            link: 'adminTimeActivities'
          },
          {
            name: '时间活动详情管理',
            value: '6',
            link: 'adminTimeActivitiesList'
          },
        ],
        isLoading: false,
        activeName:0,
      }
    },
    methods: {
      clickChageType(index) {
        this.activeName = index;
        this.isLoading = true;
        var lis = document.getElementById('functionTypeList').children;
        for (var i = 0; i < lis.length; i++) {
          lis[i].className = '';
        }
        lis[index].className = 'active'
        sessionStorage.setItem('index', index)
        this.isLoading = false;
      },
    },
    created() {
    },
    updated(){
      let num = sessionStorage.getItem('index');
      let ulEle= document.getElementById('functionTypeList')
      if(ulEle){
        var lis = ulEle.children;
        for (var i = 0; i < lis.length; i++) {
          lis[i].className = '';
        }
        lis[num].className = 'active';
      }
    },
    mounted() {
//      let num = sessionStorage.getItem('index')
//      var lis = document.getElementById('functionTypeList').children;
//      lis[num].className = 'active';
//      let scroll = new BScroll('.wrapper',{
//        scrollX: true,
//        click: true
//      })
    },
  }
</script>
<style scoped>
  .wrapper{
    height: 44px;
    overflow: hidden;
  }
  ul{
    width: 100000px;
  }
  .functionTypeList {
    font: 14px/3 "微软雅黑";
    border: 1px solid #ccc;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .functionTypeList li {
    background-color: #fff;
    float: left;
    padding: 0 15px;
    border: 1px solid #ccc;
    margin: -1px 0 -1px -1px;
  }

  .functionTypeList .active {
    border-bottom: 1px solid #fff;
  }

  .functionTypeList .active a {
    color: #409EFF;
  }

  .functionTypeList li a {
    color: #000;
    display: block;
  }
</style>
