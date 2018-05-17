<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">视频分类</h1>
      <!--查询栏-->
      <el-col :span="24" class="formSearch">
        <el-form :inline="true" size="small">
          <el-form-item>
            <span>父分类名称:</span>
            <el-select v-model="parentTypeId" placeholder="请选择父分类名称" @change="parentChange">
              <el-option :key="item.vf_te_ID" :label="item.vf_te_Name" :value="item.vf_te_ID" v-for="item in VMovieParentTypeList"></el-option>
            </el-select>
            <!--<span>子分类名称:</span>-->
            <el-select v-model="typeId" placeholder="请选择分类名称"  v-show="isVisible">
              <el-option :key="item.vf_te_ID" :label="item.vf_te_Name" :value="item.vf_te_ID" v-for="item in VMovieTypeList"></el-option>
            </el-select>
          </el-form-item>
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
          label="分类名称"
          prop="vf_te_Name">
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
        tylist:[],
        isVisible:false,
        parentTypeId:'',
        typeId:'',
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
      'VMovieTypeList',
      'VMovieParentTypeList',
    ]),

    created() {
      this.intParentTypeData();
    },
    methods: {
      parentChange(){
        this.typeId="";
        this.intTypeData(this.parentTypeId);
        this.tylist=this.VMovieTypeList;
        this.isVisible=true;
      },

      //分页
      handleCurrentChange(num) {
        this.initData(this.typeId,num)
      },
      initData(typeId,page) {
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",
          "vf_vt_ID": "",//视频分类编号
          "vf_vt_TypeID": typeId?typeId:"-1",//分类编号
          "vf_vt_VedioID":"",//视频编号
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
      intParentTypeData(parentId){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",
          "vf_te_ID":"",//分类编号
          "vf_te_Name":"",//分类名称
          "vf_te_ParentID": parentId?parentId:0,//分类编号父编号
          "page": 1,//页码
          "rows": 5//条数
        };
        this.$store.dispatch("initVMovieParentSorting", options)
          .then((total) => {
            this.total = total;
          }, (err) => {
            this.$notify({
              message: err,
              type: "error"
            });
          });
      },
      intTypeData(parentID){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",
          "vf_te_ID":"",//分类编号
          "vf_te_Name":"",//分类名称
          "vf_te_ParentID": parentID?parentID:"",//分类编号父编号
        };
        this.$store.dispatch("initVMovieSorting", options)
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
        this.initData(this.typeId,'');
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
