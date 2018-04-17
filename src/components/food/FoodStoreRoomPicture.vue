<template>
    <!--房间图片-->
  <div id="wrap" class="clearfix">
    <div class="title clearfix" style="padding: 20px">
      <h1 style="font-size: 20px;">房间图片</h1><br><br>
      <el-button type="primary" @click="Add" size="small" style="float: right;">新增</el-button>
      <el-button type="primary" @click="search" size="small" style="float: right; margin-right: 20px">查询</el-button>
    </div>

    <!--数据展示-->
    <el-table
      :data="FoodStoreRoomPicture"
      v-loading="isLoading"
      style="width: 100%"
    >
      <el-table-column
        prop="fd_ri_RoomID"
        label="店面房间编码"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="fd_ri_ID"
        label="房间图片编码"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="fd_ri_Remark"
        label="备注"
        align="center"
      >
      </el-table-column>
      <el-table-column
        label="图片地址"
        align="center"
      >
        <template slot-scope="scope">
          <img src="" alt="" v-lazy="scope.row.fd_ri_Image" title="点击查看大图" style="width:100px;height:100px;cursor: pointer" @click="clickImg(scope.row.fd_ri_Image)">
        </template>
      </el-table-column>



      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="Update(scope.row.fd_ri_RoomID)">修改
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="Delete(scope.row.fd_ri_RoomID)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--分页-->
    <div class="block" style="float: right; margin:10px 40px 0px 0px">
      <el-pagination
        @current-change="handleCurrentChange"
        :page-size="5"
        layout="prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </div>


    <!--查看大图-->
    <el-dialog
      title="图片"
      :visible.sync="imgShow"
      width="60%"
      center>
      <img src="" alt="" v-lazy="imgUrl" style="width: 100%">
      <span slot="footer" class="dialog-footer">
        <el-button @click="imgShow = false">取 消</el-button>
        <el-button type="primary" @click="imgShow = false">确 定</el-button>
      </span>
    </el-dialog>

    <!--添加图片-->
    <el-dialog title="添加美食房间图片" :visible.sync="addDialog">
      <el-form :model="addOptions">

        <el-form-item label="图片类型:" :label-width="formLabelWidth">
          <el-select v-model="addOptions.data.fd_ri_Image" placeholder="请选择类型">
            <el-option
              v-for="item in FoodStoreRoomPicture"
              :key="item.fd_ri_ID"
              :label="item.fd_ri_RoomID"
              :value="item.fd_ri_ID">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="图片上传:" :label-width="formLabelWidth">
          <a href="javascript:;" class="file">上传图片
            <input type="file" name="" ref="upload" accept="image/*" multiple>
          </a>
          <img src="" alt="" v-lazy="item"  v-show="ImageURL.length" v-for="item in ImageURL" style="width: 100px;height: 100px">
        </el-form-item>
        <el-form-item label="备注:" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="addOptions.data.fd_ri_Remark">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialog = false">取 消</el-button>
        <el-button type="primary" @click="addSubmit">确 定</el-button>
      </div>
    </el-dialog>

    <!--修改房间图片-->
    <el-dialog title="修改店铺房间图片" :visible.sync="updateDialog">
      <el-form :model="FoodStoreRoomPicture">

        <el-form-item label="图片类型:" :label-width="formLabelWidth">
          <el-select v-model="FoodStoreRoomPicture.fd_ri_Image" placeholder="请选择类型">
            <!--fd_ri_ID房间图片编码?，fd_ri_RoomID房间号的编码-->
            <el-option
              v-for="item in FoodStoreRoomPicture"
              :key="item.fd_ri_ID"
              :label="item.fd_ri_RoomID"
              :value="item.fd_ri_ID">
            </el-option>
          </el-select>

        </el-form-item>
        <el-form-item label="图片上传:" :label-width="formLabelWidth">
          <a href="javascript:;" class="file">上传图片
            <input type="file" name="" ref="upload1" accept="image/*" multiple>
          </a>
          <img src="" alt="" v-lazy="item"  v-show="ImageURL1.length" v-for="item in ImageURL1" style="width: 100px;height: 100px">
        </el-form-item>
        <el-form-item label="备注:" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="updateStoreRoomImageObj.fd_ri_Remark">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="updateDialog = false">取 消</el-button>
        <el-button type="primary" @click="updateSubmit">确 定</el-button>
      </div>
    </el-dialog>



    <!--添加-->
    <!--<el-dialog title="添加产品图片" :visible.sync="dialogFormVisible">-->
      <!--<el-form :model="data">-->


        <!--<el-form-item label="店面房间编号" :label-width="formLabelWidth" style="width: 55%">-->
          <!--<el-input v-model="data.fd_ri_RoomID" auto-complete="off"></el-input>-->
        <!--</el-form-item>-->

        <!--<el-form-item label="图片地址" :label-width="formLabelWidth" style="width: 55%">-->
          <!--<el-input v-model="data.fd_ri_Image" auto-complete="off"></el-input>-->
        <!--</el-form-item>-->

        <!--<el-form-item label="备注" :label-width="formLabelWidth" style="width: 55%">-->
          <!--<el-input v-model="data.fd_ri_Remark" auto-complete="off"></el-input>-->
        <!--</el-form-item>-->

      <!--</el-form>-->
      <!--<div slot="footer" class="dialog-footer">-->
        <!--<el-button @click="dialogFormVisible = false">取 消</el-button>-->
        <!--<el-button type="primary" @click="addSubmit">确 定</el-button>-->
      <!--</div>-->
    <!--</el-dialog>-->

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    computed: mapGetters([
      'FoodStoreRoomPicture',   //房间图片
      'UpdataFoodStoreRoomInformationObj',      //修改房间信息
      'FoodStoreRoomInformation',    //房间信息
      'updateStoreRoomImageObj',   //修改房间图片
      // 'FoodStoreRoomImageList',   //房间图片类
    ]),
    data() {
      return {
        ImageURL: [],
        ImageURL1: [],
        isLoading: false,
        imgShow: false,
        imgUrl: '',
        RoomID: '',
        total:0,
        addDialog: false,
        updateDialog: false,
        formLabelWidth: '120px',
        addOptions: {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "操作员编码",
          "operateUserName": "操作员名称",
          "pcName": "",
          "data": {
            "fd_ri_RoomID": "",   //店面房间编号
            "fd_ri_Image": "",    //图片地址
            "fd_ri_Remark": "",   //备注
          }
        }
      }
    },
    methods: {
      //分页
      handleCurrentChange(num){
        this.initData(num)
      },
      //图片转二进制
      uploadImg(file) {
        return new Promise(function (relove, reject) {
          lrz(file)
            .then(data => {
              relove(data.base64.split(',')[1])
            })
        })
      },
      uploaNode() {
        this.ImageURL = [];
        this.ImageURL1 = [];
        setTimeout(() => {
          if (this.$refs.upload) {
            this.$refs.upload.addEventListener('change', data => {
              for (var i = 0; i < this.$refs.upload.files.length; i++) {
                this.uploadImg(this.$refs.upload.files[i]).then(data => {
                  this.$store.dispatch('hotelUploadAdminImgs', {
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
          if (this.$refs.upload1) {
            this.$refs.upload1.addEventListener('change', data => {
              for (var i = 0; i < this.$refs.upload1.files.length; i++) {
                this.uploadImg(this.$refs.upload1.files[i]).then(data => {
                  this.$store.dispatch('hotelUploadAdminImgs', {
                    imageData: data
                  })
                    .then(data => {
                      if (data) {
                        this.ImageURL1.push(data.data);
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
      clickImg(imgUrl) {
        this.$store.commit('setTranstionFalse');
        this.imgShow = true;
        this.imgUrl = imgUrl
      },
      //初始化
      initData(page) {
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "fd_ri_ID": "",   //房间图片编码
          "fd_ri_RoomID": this.RoomID,    //店面房间编码
          "fd_ri_Image": "",    //图片地址
          "page":page?page:1,//页码编号
          "rows":"5",//单页显示数量
        }
        this.isLoading = true;
        this.updateDialog = false;
        this.$store.dispatch('initFoodStoreRoomPicture', options)
          .then(() => {
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          })
      },
      //添加提交
      // addSubmit(){
      //   this.addOptions.data.fd_ri_RoomID = this.RoomID;
      //   this.addOptions.data.fd_ri_Image = this.ImageURL.join(',');
      //图片上传
      // this.$store.dispatch('foodUploadAdminImgs',this.addOptions)
      //   .then(suc => {},
      //添加
      Add() {
        this.uploaNode();
        this.addDialog = true;
        this.dialogFormVisible = true;
        this.$store.commit('setTranstionFalse');
      },
      //提交添加
      addSubmit() {
        this.dialogFormVisible = false;
        let addOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "操作员编码",
          "operateUserName": "操作员名称",
          "pcName": "",
          "data": {
            "fd_ri_RoomID": "",//店面房间编号
            "fd_ri_Image": "",//图片地址
            "fd_ri_Remark": "",//备注
          }
        };
        this.$store.dispatch('addFoodStoreRoomPicture', addOptions).then(
          suc => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData()
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
        this.addDialog = false;
      },
      //修改
      Update(id) {
        this.$store.commit('setTranstionFalse');
        this.updateDialog = true;
        //修改房间图片
        this.$store.commit('updataStoreRoomImage', id)
        this.uploaNode()
      },
      //修改提交
      updateSubmit() {
        let updateOptions = {};
      },
      //查询
      search() {
        this.initData()
      },

      //删除
      Delete(id) {
        let deleteStoreRoomPicture = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "操作员编码",
          "operateUserName": "操作员名称",
          "pcName": "",
          "data": {
            "fd_ri_ID": id    //图片编码
          }
        };
        this.$store.dispatch('deleteFoodStoreRoomPicture', deleteOptions)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData()
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          });
      },
    }
  }

    // created(){
    //   this.initData()
    // }



</script>

<style scoped>

</style>
