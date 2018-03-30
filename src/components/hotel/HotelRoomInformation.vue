<template>
  <div>
    <h1>酒店房间信息</h1>
    <!--查询栏-->
    <el-col :span="24" class="formSearch">
      <el-form :inline="true">
        <el-form-item>
          <span>房间信息筛选:</span>
        </el-form-item>
        <el-form-item>
          <el-input v-model="userName" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
          <el-button type="primary" @click="addButton">添加</el-button>
        </el-form-item>
      </el-form>
    </el-col>


    <!--数据展示-->

    <el-table
      :data="hotelRoomList"
      style="width: 100%"

    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="房间编码:">
              <span>{{ props.row.RoomInfo.ht_bt_RoomID }}</span>
            </el-form-item>
            <el-form-item label="酒店编码:">
              <span>{{ props.row.RoomInfo.ht_bt_HotelID }}</span>
            </el-form-item>
            <el-form-item label="房间名称:">
              <span>{{ props.row.RoomInfo.ht_bt_RoomName }}</span>
            </el-form-item>
            <el-form-item label="床型:">
              <span>{{ props.row.RoomInfo.ht_bt_BedType }}</span>
            </el-form-item>
            <el-form-item label="最多入住数:">
              <span>{{ props.row.RoomInfo.ht_bt_MostIn }}人</span>
            </el-form-item>
            <el-form-item label="楼层:">
              <span>{{ props.row.RoomInfo.ht_bt_Level }}</span>
            </el-form-item>
            <el-form-item label="面积:">
              <span>{{ props.row.RoomInfo.ht_bt_Area }}㎡</span>
            </el-form-item>
            <el-form-item label="无烟房:">
              <span>{{ props.row.RoomInfo.ht_bt_Smoke }}</span>
            </el-form-item>
            <el-form-item label="加床:">
              <span>{{ props.row.RoomInfo.ht_bt_AddBed }}</span>
            </el-form-item>
            <el-form-item label="创建时间:">
              <span>{{ props.row.RoomInfo.ht_bt_CreateTime }}</span>
            </el-form-item>
            <el-form-item label="备注:">
              <span>{{ props.row.RoomInfo.ht_bt_Remark }}</span>
            </el-form-item>
            <el-form-item label="房间图片:">
              <span>{{ props.row.RoomInfo.ht_bt_ImagePath }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="房间名称"
        align="center"
        prop="RoomInfo.ht_bt_RoomName">
      </el-table-column>
      <el-table-column
        label="无烟房"
        align="center"
        prop="RoomInfo.ht_bt_Smoke">
      </el-table-column>
      <el-table-column
        label="面积(㎡)"
        align="center"
        prop="RoomInfo.ht_bt_Area">
      </el-table-column>
      <el-table-column
        label="最多入住数(人)"
        align="center"
        prop="RoomInfo.ht_bt_MostIn">
      </el-table-column>
    </el-table>


    <!--分页-->
    <div class="block" style="margin-top: 20px;float: right;">
      <el-pagination
        layout="prev, pager, next"
        @current-change="changePage"
        :page-size="5"
        :total="total">
      </el-pagination>
    </div>

    <!--添加酒店房间-->


    <el-dialog title="添加酒店房间" :visible.sync="addHotelRoomDialog">
      <el-form :model="insertRoomInfo">
        <el-form-item label="房间名称:" :label-width="formLabelWidth">
          <el-input v-model="insertRoomInfo.ht_bt_RoomName"></el-input>
        </el-form-item>
        <el-form-item label="床型:" :label-width="formLabelWidth">
          <el-input v-model="insertRoomInfo.ht_bt_BedType"></el-input>
        </el-form-item>
        <el-form-item label="最多入住数:" :label-width="formLabelWidth">
          <el-input v-model="insertRoomInfo.ht_bt_MostIn"></el-input>
        </el-form-item>
        <el-form-item label="楼层:" :label-width="formLabelWidth">
          <el-input v-model="insertRoomInfo.ht_bt_Level"></el-input>
        </el-form-item>
        <el-form-item label="面积:" :label-width="formLabelWidth">
          <el-input v-model="insertRoomInfo.ht_bt_Area"></el-input>
        </el-form-item>
        <el-form-item label="无烟房:" :label-width="formLabelWidth">
          <el-input v-model="insertRoomInfo.ht_bt_Smoke"></el-input>
        </el-form-item>
        <el-form-item label="加床:" :label-width="formLabelWidth">
          <el-input v-model="insertRoomInfo.ht_bt_AddBed"></el-input>
        </el-form-item>
        <el-form-item label="创建时间:" :label-width="formLabelWidth">
          <el-input v-model="insertRoomInfo.ht_bt_CreateTime"></el-input>
        </el-form-item>
        <el-form-item label="房间图片:" :label-width="formLabelWidth">
          <a href="javascript:;" class="file">上传文件
            <input type="file" name="" ref="upload" accept="image/*" multiple>
          </a>
          <img
            style="display: block"
            v-for="item in ImageURL"
            v-lazy="item"
            width="280"
            height="125"
            v-show="ImageURL.length"
          >
          <!--<el-input v-model="insertRoomInfo.ht_bt_ImagePath"></el-input>-->
        </el-form-item>
        <el-form-item label="备注:" :label-width="formLabelWidth">
          <el-input v-model="insertRoomInfo.ht_bt_Remark"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addHotelRoomDialog = false">取 消</el-button>
        <el-button type="primary" @click="addHotelRoomSubmit">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([
      'hotelRoomList'
    ]),
    data() {
      return {
        userName: '',
        total: 0,
        addHotelRoomDialog: false,
        insertRoomInfo: {
          "ht_bt_HotelID": "",
          "ht_bt_RoomName": "",
          "ht_bt_BedType": "",
          "ht_bt_MostIn": "",
          "ht_bt_Level": "",
          "ht_bt_Area": "",
          "ht_bt_Smoke": "",
          "ht_bt_AddBed": "",
          "ht_bt_IsDelete": "1",
          "ht_bt_CreateTime": "",
          "ht_bt_ImagePath": "",
          "ht_bt_Remark": "",
        },
        formLabelWidth: '120px',
        ImageURL: [],
      }
    },
    methods: {
      //图片转二进制
      uploadImg(file) {
        return new Promise(function (relove, reject) {
          lrz(file)
            .then(data => {
              relove(data.base64.split(',')[1])
            })
        })
      },
      //添加图片
      uploaNode() {
        setTimeout(() => {
          if (this.$refs.upload) {
            this.$refs.upload.addEventListener('change', data => {
              for (var i = 0; i < this.$refs.upload.files.length; i++) {
                this.uploadImg(this.$refs.upload.files[i]).then(data => {
                  this.$store.dispatch('uploadAdminImgs', {
                    imageData: data
                  })
                    .then(data => {
                      if (data) {
                        this.ImageURL.push(data.data);
                      } else {
                        this.$notify({
                          message: '图片地址不存在!',
                          type: 'error'
                        });
                      }
                    })
                })
              }
            })
          }
        }, 30)
      },
      //分页
      changePage(num) {

        this.initData(num)
      },
      //初始化数据
      initData(num) {
        let HotelSearchRoomInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "page": num ? num : 1,
          "rows": 5,
          "ht_bt_HotelID": sessionStorage.getItem('hotelId'),
        };
        this.$store.dispatch('initHotelRoom', HotelSearchRoomInfo)
          .then(total => {
            this.total = total;
          })
      },
      search() {
        this.initData()
      },
//      添加按钮
      addButton() {
        this.insertRoomInfo.ht_bt_HotelID = sessionStorage.getItem('hotelId')
        this.$store.commit('setTranstionFalse');
        this.addHotelRoomDialog = true;
      },
//      添加提交
      addHotelRoomSubmit() {
        let addOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "data": this.insertRoomInfo
        }

      },
    },
    mounted() {
      this.uploadImg();
    },
    created() {
      this.initData();
    }
  }
</script>
<style scoped>
  h1 {
    font: 16px/2 "微软雅黑";
  }

  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
