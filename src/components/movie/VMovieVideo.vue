<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">视频</h1>
      <!--查询栏-->
      <el-col :span="24" class="formSearch">
        <el-form :inline="true" size="small">
          <el-form-item>
            <span>视频:</span>
            <el-input type="text" v-model="movieName" auto-complete="off" placeholder="视频名称"  style="width: 250px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>

      <!--数据展示-->
      <el-table
        :data="VMovieVideoList"
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
                <video :src="VMovieVideoUpdateObj.data.vf_vo_FileURL" width="320" height="240" controls="controls"></video>
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
              <el-form-item label="视频图片:">
                <img :src="props.row.vf_vo_ImageURL" alt="" style="width: 100px;height: 100px">
              </el-form-item>
              <el-form-item label="创建时间:">
                <span>{{props.row.vf_vo_CreateTime}}</span>
              </el-form-item>
              <el-form-item label="审核人编码:">
                <span>{{props.row.vf_vo_PasserID}}</span>
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
          label="标题"
          prop="vf_vo_Title">
        </el-table-column>

        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="Update(scope.row)">修改
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="Delete(scope.row.vf_vo_ID)">删除
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

      <!--修改-->
      <el-dialog title="修改" :visible.sync="updateDialog">
        <el-form :model="VMovieVideoUpdateObj">

          <el-form-item label="视频编号:" :label-width="formLabelWidth">
            <el-input v-model="VMovieVideoUpdateObj.data.vf_vo_ID" placeholder="视频编号" :disabled="isDisabled" ></el-input>
          </el-form-item>
          <el-form-item label="视频图片:" :label-width="formLabelWidth">
            <a href="javascript:;" class="file">
              视频图片上传
              <input type="file" name="" ref="upload3" accept="image/*">
            </a>
            <img v-lazy="VMovieVideoUpdateObj.data.vf_vo_ImageURL"
                 v-show="VMovieVideoUpdateObj.data.vf_vo_ImageURL"
                 style="width: 100px;height: 100px">
          </el-form-item>
          <el-form-item label="上传视频:" :label-width="formLabelWidth">
            <a href="javascript:;" class="file">上传视频
              <input type="file" name="" ref="upload" multiple>
            </a>
            <video id="addVideo" :src="VMovieVideoUpdateObj.data.vf_vo_FileURL"  width="320" height="240" controls="controls"></video>
          </el-form-item>
          <el-form-item size="large" :label-width="formLabelWidth">
            <el-button type="primary" size="mini" @click="uploadFile">立即上传</el-button>
          </el-form-item>
          <el-form-item label="作者:" :label-width="formLabelWidth">
            <el-input v-model="VMovieVideoUpdateObj.data.vf_vo_AuthorID" placeholder="作者" ></el-input>
          </el-form-item>
          <el-form-item label="视频类型:" :label-width="formLabelWidth">
            <el-input v-model="VMovieVideoUpdateObj.data.vf_vo_Type" placeholder="视频类型" ></el-input>
          </el-form-item>
          <el-form-item label="标题:" :label-width="formLabelWidth">
            <el-input v-model="VMovieVideoUpdateObj.data.vf_vo_Title" placeholder="标题" ></el-input>
          </el-form-item>
          <el-form-item label="简介:" :label-width="formLabelWidth">
            <el-input v-model="VMovieVideoUpdateObj.data.vf_vo_Introduce" placeholder="简介" ></el-input>
          </el-form-item>
          <el-form-item label="备注:" :label-width="formLabelWidth">
            <el-input v-model="VMovieVideoUpdateObj.data.vf_vo_Remark" placeholder="备注" ></el-input>
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

    data() {
      return {

        videoData:{
          "vedioName":''
        },
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
        movieName: '',
        //表单宽度
        formLabelWidth: '120px',
        VMovieVideoUpdateObj: {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",  //机器码
          "data": {
            "vf_vo_ID": "1",//视频编号
            "vf_vo_Time": "1",//时长
            "vf_vo_Size": "1",//大小
            "vf_vo_Extend": "1",//文件扩展名
            "vf_vo_FileURL": "1",//文件地址
            "vf_vo_AuthorID": "1",//作者
            "vf_vo_Type": "1",//视频类型
            "vf_vo_Title": "1",//标题
            "vf_vo_ImageURL": "1",//视频图片
            "vf_vo_PasserID": "1",//审核人编码
            "vf_vo_Introduce": "1",//简介
            "vf_vo_Remark": "1",//备注
          }
        },
      }
    },
    computed: mapGetters([
      'VMovieVideoList',
      'UploadVideoList',
    ]),

    created() {
      this.initData()
    },
    methods: {
      uploadFile() {
        var fd = new FormData();
        //获取文件
        var file =this.$refs.upload.files[0];
        if(file){
          //获取文件大小
          var fileSize = file.size;
          fileSize=parseInt(fileSize/1024*100/100); //单位为KB
          this.VMovieVideoUpdateObj.data.vf_vo_Size=fileSize;
          var str =file.name;
          //获取文件名
          this.VMovieVideoUpdateObj.data.vf_vo_Extend=str.split(".")[1];
          fd.append("fileUploadOss",file);
          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = ()=>{
            if (xhr.readyState == 4 && xhr.status == 200)
              if(xhr.responseText){
                let preData= JSON.parse(xhr.responseText).data;
                this.videoData.vedioName=preData;
                this.$store.dispatch("UploadVideo", this.videoData)
                  .then((suc) => {
                    this.$notify({
                      message: suc,
                      type: "success"
                    }),
                      this.percentage=100,
                      this.VMovieVideoUpdateObj.data.vf_vo_FileURL=this.UploadVideoList;
                    //获取时长
                    var e =document.getElementById("addVideo");
                    setTimeout(()=>{
                      if(isNaN(e.duration)){
                        this.VMovieVideoUpdateObj.data.vf_vo_Time = '';
                      }else{
                        this.VMovieVideoUpdateObj.data.vf_vo_Time=parseInt(e.duration).toString();
                      }
                    },1000);
                  }, (err) => {
                    this.$notify({
                      message: err,
                      type: "error"
                    });
                  });
              }
          }
          xhr.open("POST", "http://image.1000da.com.cn/PostImage/PostToOSS",true);
          xhr.send(fd);
        }else {
          alert("请选择上传视频")
        };
      },
      //分页
      handleCurrentChange(num) {
        this.initData('',num)
      },
      initData(title,page) {
        let options = {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",  //机器码
          "vf_vo_ID":"",//视频编号
          "vf_vo_Extend": "",//文件扩展名
          "vf_vo_AuthorID": "",//作者
          "vf_vo_Type": "",//视频类型
          "vf_vo_Title": title?title:"",//标题
          "vf_vo_PasserID":"",//审核人编码
          "page": page?page:1,//页码
          "rows": 5//条数
        };
        this.$store.dispatch("initVMovieVideo", options)
          .then((data) => {
          this.total=data.totalRows;
            for(let fiveList in this.VMovieVideoList){
            this.videoData.vedioName=this.VMovieVideoList[fiveList].vf_vo_FileURL;
            this.$store.dispatch("UploadVideo", this.videoData);
              this.VMovieVideoUpdateObj.data.vf_vo_FileURL=this.UploadVideoList;
            };
          }, (err) => {
            this.$notify({
              message: err,
              type: "error"
            });
          });
      },
      search() {
        this.initData(this.movieName);
      },
      searchSeries(name,page){
          let options = {
            "loginUserID": "huileyou",  //惠乐游用户ID
            "loginUserPass": "123",  //惠乐游用户密码
            "operateUserID": "",//操作员编码
            "operateUserName": "",//操作员名称
            "pcName": "",  //机器码
            "vf_ss_ID": "",//系列编号
            "vf_ss_Name": name?name:"",//系列名称
            "vf_ss_WriteState":"",//连载状态（0连载中1完结)
            "vf_ss_AuthorID":"",//作者
            "page": page?page:1,//页码
            "rows": 5//条数
          };
          this.$store.dispatch("initVMovieSeries", options)
            .then((total) => {
              this.total = total;
            }, (err) => {
              this.$notify({
                message: err,
                type: "error"
              });
            });
        },
      Add() {
        this.searchSeries('','','',1);
        for(let i in this.addOptions.data){
          this.addOptions.data[i]=""
        };
        this.addDialog = true;
        this.$store.commit('setTranstionFalse');
      },
      addSubmit() {
        this.$store.dispatch("addVMovieVideoSeries", this.addOptions)
          .then((suc) => {
            this.$notify({
              message: suc,
              type: "success"
            })
            this.initData('','', 1)
          }, (err) => {
            this.$notify({
              message: err,
              type: "error"
            });
          });
        this.addDialog = false;
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
            "vf_vo_ID": id,//
          }
        };
        this.$store.dispatch('DeleteVMovieVideo', deleteOption)
          .then(
            (suc) => {
              this.$notify({
                message: suc,
                type: "success"
              });
              this.initData(this.movieType);
            }
            , (err) => {
              this.$notify({
                message: err,
                type: "error"
              })
            })
      },
      Update(obj) {
        this.VMovieVideoUpdateObj.data=obj;
        this.videoData.vedioName=obj.vf_vo_FileURL;
        this.$store.dispatch("UploadVideo", this.videoData);
        this.VMovieVideoUpdateObj.data.vf_vo_FileURL=this.UploadVideoList;
        this.updateDialog = true;
        this.$store.commit('setTranstionFalse');
      },
      updateSubmit() {
        this.$store.dispatch("updateVMovieVideo", this.VMovieVideoUpdateObj)
          .then(
            (suc) => {
              this.$notify({
                message: suc,
                type: "success"
              });
              this.initData(this.movieType);
            }
            , (err) => {
              this.$notify({
                message: err,
                type: "error"
              })
            });
        this.updateDialog = false;
      },
    }
  }

</script>
<style scoped>
</style>
