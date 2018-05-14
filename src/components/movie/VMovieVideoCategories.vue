<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">视频分类</h1>
      <!--查询栏-->
      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>视频分类编号:</span>
            <el-input type="text" v-model="movieType" auto-complete="off" placeholder="视频分类编号"  style="width: 250px"></el-input>
          </el-form-item>
          <el-form-item>
            <span>分类编号:</span>
            <el-select v-model="typeId" placeholder="请选择视频分类编号">
              <!--<el-option :key="item.b" label="item.b" :value="item.b" v-for="item in a"></el-option>-->
            </el-select>
          </el-form-item>
<!--          <el-form-item>
            <span>视频编号:</span>
            <el-select v-model="movieType" placeholder="请选择视频分类编号">
              <el-option ::key="item.b" label="item.b" :value="item.b" v-for="item in a"></el-option>
            </el-select>
          </el-form-item>-->
          <el-form-item>
            <el-button type="primary" @click="search">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>



      <!--数据展示-->
      <el-table
        :data="VMovieVideoCategoriesList"
        v-loading="isLoading"
        style="width: 100%">
        <el-table-column
          label="视频分类编号"
          prop="vf_vt_ID">
        </el-table-column>
        <el-table-column
          label="分类编号"
          prop="vf_vt_TypeID">
        </el-table-column>
        <el-table-column
          label="分类名称"
          prop="vf_te_Name">
        </el-table-column>
        <el-table-column
          label="视频编号"
          prop="vf_vt_VedioID">
        </el-table-column>
        <el-table-column
          label="标题"
          prop="vf_vo_Title">
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
        typeId:'',
        movieType:'',
        //是否禁用
        isDisabled: true,
        //修改
        updateDialog: false,
        ImageURL: '',
        ImageURL1: [],
        //数据展示
        isLoading: false,
        //分页
        total: 0,
        //查询
        movieType: '',
        //表单宽度
        formLabelWidth: '120px',
      }
    },
    computed: mapGetters([
      'VMovieVideoCategoriesList',
    ]),

    created() {
      this.initData();
    },
    methods: {
      //初始化微电影分类

      //分页
      handleCurrentChange(num) {
        this.initData('','','', num)
      },
      initData(videoCategoriesId,typeId, videoId,page) {
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",
          "vf_vt_ID": videoCategoriesId?videoCategoriesId:"",//视频分类编号
          "vf_vt_TypeID": typeId?typeId:"",//分类编号
          "vf_vt_VedioID": videoId?videoId:"",//视频编号
          "page": page?page:1,//页码
          "rows": 5//条数
        };
        this.$store.dispatch("initVMovieVideoCategories", options)
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
        this.initData(this.movieType,this.typeId);
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

    }
  }

</script>
<style scoped>
</style>
