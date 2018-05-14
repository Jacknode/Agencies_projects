<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">微电影</h1>
      <!--查询栏-->
      <el-col :span="24" class="formSearch">
        <!--<el-form :inline="true">-->
        <!--<el-form-item label="微电影筛选:">-->
        <!--<el-select v-model="movieType" placeholder="请选择微电影">-->
        <!--<el-option label="微电影" value="0"></el-option>-->
        <!--<el-option label="广告视频" value="1"></el-option>-->
        <!--<el-option label="教育视频" value="2"></el-option>-->
        <!--</el-select>-->
        <!--</el-form-item>-->
        <!--<el-form-item>-->
        <!--<el-button type="primary" @click="search">查询</el-button>-->
        <!--</el-form-item>-->
        <!--</el-form>-->
      </el-col>


      <!--数据展示-->
      <el-table
        :data="VMovieMiniVideoList"
        v-loading="isLoading"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="视频编号:">
                <span>{{props.row.vf_vo_ID}}</span>
              </el-form-item>
              <el-form-item label="时长:">
                <span>{{props.row.vf_vo_Time}}</span>
              </el-form-item>
              <el-form-item label="大小:">
                <span>{{props.row.vf_vo_Size}}</span>
              </el-form-item>
              <el-form-item label="文件扩展名:">
                <span>{{props.row.vf_vo_Extend}}</span>
              </el-form-item>
              <el-form-item label="文件地址:">
                <span>{{props.row.vf_vo_FileURL}}</span>
              </el-form-item>
              <el-form-item label="作者:">
                <span>{{props.row.vf_vo_AuthorID}}</span>
              </el-form-item>
              <el-form-item label="视频类型:">
                <span>{{props.row.vf_vo_Type}}</span>
              </el-form-item>
              <el-form-item label="标题:">
                <span>{{props.row.vf_vo_Title}}</span>
              </el-form-item>
              <!--              <el-form-item label="视频图片:">
                              <img src="" alt="" v-lazy="item"  v-show="props.row.vf_ve_Content.vf_vo_ImageURL.length" v-for="item in props.row.vf_ve_Content.vf_vo_ImageURL" style="width: 100px;height: 100px">
                            </el-form-item>-->
              <el-form-item label="视频图片:">
                <img :src="props.row.vf_vo_ImageURL" alt="" style="width: 100px;height: 100px">
              </el-form-item>
              <!--              <el-form-item label="审核人编码:">
                              <span>{{props.row.vf_ve_Content.vf_vo_PasserID}}</span>
                            </el-form-item>
                            <el-form-item label="审核时间:">
                              <span>{{props.row.vf_ve_Content.vf_vo_ValidateTime}}</span>
                            </el-form-item>-->
              <el-form-item label="创建时间:">
                <span>{{props.row.vf_vo_CreateTime}}</span>
              </el-form-item>
              <el-form-item label="审核人编码:">
                <span>{{props.row.f_vo_PasserID}}</span>
              </el-form-item>
              <el-form-item label="审核时间:">
                <span>{{props.row.vf_vo_ValidateTime}}</span>
              </el-form-item>
              <el-form-item label="简介:">
                <span>{{props.row.vf_vo_Introduce}}</span>
              </el-form-item>
              <el-form-item label="详情:">
                <span>{{props.row.vf_vo_Remark}}</span>
              </el-form-item>
              <el-form-item label="类型名称:">
                <span>{{props.row.vf_vo_TypeName}}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="视频编号"
          prop="vf_vo_ID">
        </el-table-column>
        <el-table-column
          label="作者"
          prop="vf_vo_AuthorID">
        </el-table-column>
        <el-table-column
          label="视频类型"
          prop="vf_vo_Type">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="Delete(scope.row.vf_fm_ID)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

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

    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {

    data() {
      return {
        //是否禁用
        isDisabled: true,
        ImageURL: '',
        ImageURL1: [],
        //数据展示
        isLoading: false,
        //分页
        total: 0,
        //查询
        //表单宽度
        formLabelWidth: '120px',
      }
    },
    computed: mapGetters([
      'VMovieMiniVideoList',
      // 'VMovieCheckTableListUpdateObj',
    ]),

    created() {
      this.initData();
    },
    methods: {
      //分页
      handleCurrentChange(num) {
        this.initData('', num)
      },
      initData(id,fromDate,toDate, page) {
        let options = {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",  //机器码
          "vf_fm_ID":  id?id:"",//视频编号
          "fromDate":  fromDate?fromDate:"",//日期从
          "toDate":  toDate?toDate:"",//日期到
          "page": page?page:1,//页码
          "rows": 5//条数
        };
        this.$store.dispatch("initVMovieMiniMovie", options)
          .then((total) => {
            this.total = total;
          }, (err) => {
            this.$notify({
              message: err,
              type: "error"
            });
          });
      },
      search() {
        this.initData(this.movieType);
      },
      uploadImg(file) {
        return new Promise((relove, reject) => {
          lrz(file)
            .then(data => {
              relove(data.base64.split(',')[1])
            })
        })
      },
      uploaNode() {
        this.addOptions.data.vf_ve_Content.vf_vo_ImageURL = '';
        this.ImageURL1 = [];
        setTimeout(() => {
          if (this.$refs.upload) {
            this.$refs.upload.addEventListener('change', data => {
              for (var i = 0; i < this.$refs.upload.files.length; i++) {
                this.uploadImg(this.$refs.upload.files[i]).then(data => {
                  this.$store.dispatch('VMovieCheckTableUploadnImgs', {
                    imageData: data
                  })
                    .then(data => {
                      this.addOptions.data.vf_ve_Content.vf_vo_ImageURL="";
                      if (data) {
                        this.addOptions.data.vf_ve_Content.vf_vo_ImageURL = data.data;
                        // console.log(data.data)
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
                  this.$store.dispatch('VMovieCheckTableUploadnImgs', {
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
      Delete(id) {
        let deleteOption = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "vf_fm_ID": id,//视频编号
          }
        };
        this.$store.dispatch('DeleteVMovieMiniVideo', deleteOption)
          .then(
            (suc) => {
              this.$notify({
                message: suc,
                type: "success"
              });
              this.initData();
            }
            , (err) => {
              this.$notify({
                message: err,
                type: "error"
              })
            })
      },


    }
  }

</script>
<style scoped>
</style>
