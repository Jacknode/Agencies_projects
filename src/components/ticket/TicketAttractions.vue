<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">商家景点信息</h1>

      <!--查询栏-->
      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>产品筛选:</span>
          </el-form-item>
          <el-form-item>
            <el-input v-model="siteName" size="small"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search">查询</el-button>
            <el-button type="primary" @click="Add" size="small">新增</el-button>
          </el-form-item>
        </el-form>
      </el-col>

      <!--添加景点-->
      <el-dialog title="添加景点" :visible.sync="addDialog">
        <el-form :model="addOptions">
          <!--<el-form-item label="线路名称:" :label-width="formLabelWidth">-->
            <!--<el-input v-model="addOptions.data.ts_pt_Name" placeholder="请输入线路名称"></el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="备注:" :label-width="formLabelWidth">-->
            <!--<el-input v-model="addOptions.data.ts_pt_Remark" placeholder="请输入内容" type="textarea"-->
                      <!--:autosize="{ minRows: 6, maxRows: 10}"></el-input>-->
          <!--</el-form-item>-->
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addDialog = false">取 消</el-button>
          <el-button type="primary" @click="addSubmit">确 定</el-button>
        </div>
      </el-dialog>

      <!--分页-->
      <div class="block" style="float: right;">
        <el-pagination
          @current-change="handleCurrentChange"
          :page-size="5"
          layout="total, prev, pager, next"
          :total="total"
          v-show="total"
        >
        </el-pagination>
      </div>
    </div>
    <div class="mapJW" v-show="isMap">
      <div id="allmap">
      </div>
      <el-form ref="form" :model="form"
               style="z-index: 9990;position: absolute;background: #fff;bottom: 30px;left: 0;padding: 10px 30px;">
        <el-form-item label="经度">
          <el-input v-model="form.x"></el-input>
        </el-form-item>
        <el-form-item label="纬度">
          <el-input v-model="form.y"></el-input>
        </el-form-item>
        <el-button type="primary">查询</el-button>
        <el-button type="success">提交</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    name: '',
    data(){
      return {
        formLabelWidth:'120px',
        isMap:false,
        siteName:'',//景点名称搜索
        adminUserInfo:{},
        total:0,
        addDialog:false,//添加弹窗
        updateDialog:false,//修改弹窗
        form:{
          x:'',
          y:''
        },
        addOptions:{
          "tm_ts_Code": "",//景点编码(主键)
          "tm_ts_Name": "",//景点名称
          "tm_ts_TradeInfoID":'',
          "tm_ts_ThemeTypeID": '',//主题编码
          "tm_ts_Great": "",//洲
          "tm_ts_Countrie": "",//国
          "tm_ts_Provice": "",//省
          "tm_ts_City": "",//市
          "tm_ts_Contry": "",//县
          "tm_ts_ShowImage": "",//展示图片
          "tm_ts_Introduce": "",//介绍
          "tm_ts_Detailedintroduction": "",//详细介绍
          "tm_ts_Address": "",//详细地址
          "tm_ts_Opentime": "",//开放时间
          "tm_ts_Time": "",//建议游玩时间（以小时为单位）
          "tm_ts_Phone": "",//联系电话号码
          "tm_ts_Longitude": "",//经度
          "tm_ts_Latitude": "",//纬度
          "tm_ts_IsHot": "",//是否热门景点（0普通1热门）
          "tm_ts_IsChoice": "",//是否精选景点（0普通1精选）
          "tm_ts_IsOversea": "",//是否境外景点（0境内1境外）
          "tm_ts_IsSeasonChoice": "",// 是否当季精选（0否1是）
          "tm_ts_SuggestPrice": "",//建议价格
          "tm_ts_Remark": "",//备注
        }
      }
    },
    computed: mapGetters([
      'ticketAttractionsList'
    ]),
    created(){
      this.adminUserInfo = JSON.parse(sessionStorage.getItem('admin'));
      this.initData('',1)
    },
    mounted(){
      var _this = this;
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function (r) {
        _this.form.x = r.point.lng;
        _this.form.y = r.point.lat;
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var map = new BMap.Map("allmap");
          // var point = new BMap.Point(116.400244, 39.92556);
          map.centerAndZoom(r.point, 12); //定义地图等级，就是放大倍数
          map.enableScrollWheelZoom(true); //启用地图滚轮放大缩小
          var marker = new BMap.Marker(r.point);// 创建标注

          map.addOverlay(marker);  // 将标注添加到地图中
          map.panTo(r.point);
          // alert('您的位置：' + r.point.lng + ',' + r.point.lat);

          marker.enableDragging(); //标注可拖拽
          //marker.disableDragging();           // 不可拖拽

          // 开启事件监听
          marker.addEventListener("dragend", function (e) {

            var x = e.point.lng; //经度
            var y = e.point.lat; //纬度
//            alert("拖到的地点的经纬度：" + x + "，" + y);
            _this.form.x = x;
            _this.form.y = y;
          });
        }
        else {
          alert('failed' + this.getStatus());
        }
      }, {enableHighAccuracy: true})
    },
    methods: {
      //分页
      handleCurrentChange(num){
        this.initData('',num)
      },
      initData(name,page){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "tsCode": "",    //景点编码
          "tsName": name?name:'',//景点名称
          "tradeInfoID": this.adminUserInfo.sm_ai_ID,//供应商编码
          "isDelete": 0,//必须传
          "page": page?page:1,
          "rows": 5
        };
        this.$store.dispatch('initTicketAttractions',options)
      },
      //查询
      search(){
        this.initData(this.siteName,1)
      },
      //添加
      Add(){
        this.$store.commit('setTranstionFalse');
        this.addDialog = true
      },
      //添加提交
      addSubmit(){}
    },
  }
</script>
<style scoped>
  #l-map {
    height: 500px;
    width: 100%;
  }
</style>
