<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">店面推荐菜</h1>

      <!--查询-->

      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>店面名称筛选:</span>
          </el-form-item>
          <el-form-item>
            <el-select v-model="storeId" placeholder="请选择店面">
              <el-option
                v-for="item in foodStoreInformtionList"
                :key="item.fd_sf_ID"
                :label="item.fd_sf_ProductName"
                :value="item.fd_sf_ID">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search">查询</el-button>
            <el-button type="primary" @click="add">添加</el-button>
          </el-form-item>
        </el-form>
      </el-col>

      <!--数据展示-->

      <el-table
        :data="foodStoreRecommendList"
        style="width: 100%">

        <el-table-column
          prop="fd_sf_ProductName"
          label="店面名称"
          align="center">
        </el-table-column>

        <el-table-column
          prop="fd_if_Name"
          label="菜名"
          align="center">
        </el-table-column>

        <el-table-column
          prop="fd_if_Price"
          label="价格(元)"
          align="center">
        </el-table-column>

        <el-table-column
          label="推荐菜图片"
          align="center">
          <template slot-scope="scope">
            <img v-lazy="scope.row.fd_if_Image" width="128" height="80"
                 @click="displayBigPicture(scope.row.fd_if_Image)">
          </template>
        </el-table-column>

        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="update(scope.row)">修改
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="Delete(scope.row.fd_if_ID)">删除
            </el-button>
          </template>
        </el-table-column>

      </el-table>

      <!--展示大图-->

      <el-dialog
        title="显示大图"
        :visible.sync="bigPictureDialog"
        width="50%">
        <img v-lazy="imgUrl" width="100%">
        <span slot="footer" class="dialog-footer">
          <el-button @click="bigPictureDialog = false">取 消</el-button>
        </span>
      </el-dialog>

      <!--分页-->
      <div class="block" style="text-align: right">
        <el-pagination
          :page-size="5"
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="total"
          v-show="total"
        >
        </el-pagination>
      </div>

      <!--添加-->

      <el-dialog title="添加店面房间图片" :visible.sync="addDialog">
        <el-form :model="addOptions">
          <el-form-item label="店面名称:" :label-width="formLabelWidth">
            <el-select v-model="addOptions.fd_if_StoreFrontID" placeholder="请选择店面">
              <el-option
                v-for="item in foodStoreInformtionList"
                :key="item.fd_sf_ID"
                :label="item.fd_sf_ProductName"
                :value="item.fd_sf_ID">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="推荐菜图片:" :label-width="formLabelWidth">
            <a href="javascript:;" class="file">上传图片
              <input type="file" name="" ref="upload" accept="image/*">
            </a>
            <img v-lazy="addOptions.fd_if_Image" v-show="addOptions.fd_if_Image" width="128" height="80">
          </el-form-item>
          <el-form-item label="推荐菜名称:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.fd_if_Name"></el-input>
          </el-form-item>
          <el-form-item label="价格(元):" :label-width="formLabelWidth">
            <el-input v-model="addOptions.fd_if_Price"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addDialog = false">取 消</el-button>
          <el-button type="primary" @click="addSubmit">确 定</el-button>
        </div>
      </el-dialog>

      <!--修改-->

      <el-dialog title="修改店面房间图片" :visible.sync="updateDialog">
        <el-form :model="updateObj">
          <el-form-item label="店面名称:" :label-width="formLabelWidth">
            <el-select v-model="updateObj.fd_if_StoreFrontID" placeholder="请选择店面">
              <el-option
                v-for="item in foodStoreInformtionList"
                :key="item.fd_sf_ID"
                :label="item.fd_sf_ProductName"
                :value="item.fd_sf_ID">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="推荐菜图片:" :label-width="formLabelWidth">
            <a href="javascript:;" class="file">上传图片
              <input type="file" name="" ref="upload" accept="image/*">
            </a>
            <p>如果不上传图片默认为原来的图片</p>
            <img v-lazy="addOptions.fd_if_Image" v-show="addOptions.fd_if_Image" width="128" height="80">
          </el-form-item>
          <el-form-item label="推荐菜名称:" :label-width="formLabelWidth">
            <el-input v-model="updateObj.fd_if_Name"></el-input>
          </el-form-item>
          <el-form-item label="价格(元):" :label-width="formLabelWidth">
            <el-input v-model="updateObj.fd_if_Price"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="updateDialog = false">取 消</el-button>
          <el-button type="primary" @click="updateSubmit">确 定</el-button>
        </div>
      </el-dialog>


    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([
      'foodStoreInformtionList',
      'foodStoreRecommendList'
    ]),
    data() {
      return {
        storeId: '',
        total: 0,
        formLabelWidth: '120px',
        addDialog: false,
        updateDialog: false,
        addOptions: {
          "fd_if_StoreFrontID": "",//店面编号
          "fd_if_Image": "",//推荐菜系图片
          "fd_if_Price": "",//价格
          "fd_if_Name": "",//推荐菜系名称
        },
        updateObj: {},
        imgUrl: '',
        bigPictureDialog: false,
      }
    },
    methods: {
      //      分页
      handleCurrentChange(num) {
        this.initData(this.storeId, num);
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
        this.addOptions.fd_if_Image = '';
        setTimeout(() => {
          if (this.$refs.upload) {
            this.$refs.upload.addEventListener('change', data => {
              for (var i = 0; i < this.$refs.upload.files.length; i++) {
                this.uploadImg(this.$refs.upload.files[i]).then(data => {
                  this.$store.dispatch('foodUploadAdminImgs', {
                    imageData: data
                  })
                    .then(data => {
                      if (data) {
                        this.addOptions.fd_if_Image = data.data;
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
      //初始化数据
      initData(id, num) {
        if (!id) {
          this.$notify({
            message: '请选择店面！',
            type: 'error'
          })
          return
        }
        let selectIntroduceFoodInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "fd_if_ID": "",//推荐菜编号
          "fd_if_StoreFrontID": id,//店面编号
          "priceFrom": "",//价格大于
          "priceTo": "",
          "fd_if_Name": "",//推荐菜系名称
          "page": num ? num : 1,
          "rows": "5",
        };
        this.$store.dispatch('initFoodStoreRecommend', selectIntroduceFoodInfo)
          .then(total => {
            this.total = total;
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },
      //查询
      search() {
        this.initData(this.storeId)
      },

      displayBigPicture(urlData) {
        this.$store.commit('setTranstionFalse');
        this.bigPictureDialog = true;
        this.imgUrl = urlData;
      },
      //添加
      add() {
        this.uploaNode();
        this.$store.commit('setTranstionFalse');
        this.addDialog = true;
      },
      //添加提交
      addSubmit() {
        let insertIntroduceFoodInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": this.addOptions
        };
        this.$store.dispatch('addFoodStoreRecommend', insertIntroduceFoodInfo)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            })
            this.initData(this.storeId)
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
        this.addDialog = false;
      },
      //修改
      update(rowData) {
        this.updateObj = rowData;
        this.$store.commit('setTranstionFalse');
        this.updateDialog = true;
        this.uploaNode();
      },
      //修改提交
      updateSubmit() {
        if (this.addOptions.fd_if_Image) {
          this.updateObj.fd_if_Image = this.addOptions.fd_if_Image;
        }
        ;
        let updateIntroduceFoodInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": this.updateObj
        };
        this.$store.dispatch('updateFoodStoreRecommend', updateIntroduceFoodInfo)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            })
            this.initData(this.storeId)
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
        this.updateDialog = false;
      },
      //删除
      Delete(id) {
        let deleteIntroduceFoodInfo = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "fd_if_ID": id ? id : '',//推荐菜编号
          }
        };
        this.$store.dispatch('deleteFoodStoreRecommend',deleteIntroduceFoodInfo)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            })
            this.initData(this.storeId)
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            })
          })
      },
    },
  }
</script>
<style scoped>
</style>
