<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">视频</h1>
      <!--查询栏-->
      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>视频:</span>
            <el-input type="text" v-model="movieType" auto-complete="off" placeholder="视频编号"  style="width: 250px"></el-input>
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
              <el-form-item label="视频图片:">
                <span>{{props.row.vf_vo_ImageURL}}</span>
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
            <el-input v-model="VMovieVideoUpdateObj.data.vf_vo_ID" placeholder="视频编号" :disabled="isDisabled" >
            </el-input>
          </el-form-item>
          <el-form-item label="时长:" :label-width="formLabelWidth">
            <el-input v-model="VMovieVideoUpdateObj.data.vf_vo_Time" placeholder="时长" >
            </el-input>
          </el-form-item>
          <el-form-item label="大小:" :label-width="formLabelWidth">
            <el-input v-model="VMovieVideoUpdateObj.data.vf_vo_Size" placeholder="大小" >
            </el-input>
          </el-form-item>
          <el-form-item label="文件扩展名:" :label-width="formLabelWidth">
            <el-input v-model="VMovieVideoUpdateObj.data.vf_vo_Extend" placeholder="文件扩展名" >
            </el-input>
          </el-form-item>
          <el-form-item label="文件地址:" :label-width="formLabelWidth">
            <el-input v-model="VMovieVideoUpdateObj.data.vf_vo_FileURL" placeholder="文件地址" >
            </el-input>
          </el-form-item>
          <el-form-item label="作者:" :label-width="formLabelWidth">
            <el-input v-model="VMovieVideoUpdateObj.data.vf_vo_AuthorID" placeholder="作者" >
            </el-input>
          </el-form-item>
          <el-form-item label="视频类型:" :label-width="formLabelWidth">
            <el-input v-model="VMovieVideoUpdateObj.data.vf_vo_Type" placeholder="视频类型" >
            </el-input>
          </el-form-item>
          <el-form-item label="标题:" :label-width="formLabelWidth">
            <el-input v-model="VMovieVideoUpdateObj.data.vf_vo_Title" placeholder="标题" >
            </el-input>
          </el-form-item>
          <el-form-item label="视频图片:" :label-width="formLabelWidth">
            <el-input v-model="VMovieVideoUpdateObj.data.vf_vo_ImageURL" placeholder="视频图片" >
            </el-input>
          </el-form-item>
          <el-form-item label="审核人编码:" :label-width="formLabelWidth">
            <el-input v-model="VMovieVideoUpdateObj.data.vf_vo_PasserID" placeholder="审核人编码" >
            </el-input>
          </el-form-item>
          <el-form-item label="简介:" :label-width="formLabelWidth">
            <el-input v-model="VMovieVideoUpdateObj.data.vf_vo_Introduce" placeholder="简介" >
            </el-input>
          </el-form-item>
          <el-form-item label="备注:" :label-width="formLabelWidth">
            <el-input v-model="VMovieVideoUpdateObj.data.vf_vo_Remark" placeholder="备注" >
            </el-input>
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
    ]),

    created() {
      this.initData()
    },
    methods: {
      //分页
      handleCurrentChange(num) {
        this.initData('','','','','','',num)
      },
      initData(filmId,extend,author,type,title,passId, page) {
        let options = {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",  //机器码
          "vf_vo_ID": filmId?filmId:"",//视频编号
          "vf_vo_Extend": extend?extend:"",//文件扩展名
          "vf_vo_AuthorID": author?author:"",//作者
          "vf_vo_Type": type?type:"",//视频类型
          "vf_vo_Title": title?title:"",//标题
          "vf_vo_PasserID": passId?passId:"",//审核人编码
          "page": page?page:1,//页码
          "rows": 5//条数
        };
        this.$store.dispatch("initVMovieVideo", options)
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
      searchSeries(series,name,state,author,page){
          let options = {
            "loginUserID": "huileyou",  //惠乐游用户ID
            "loginUserPass": "123",  //惠乐游用户密码
            "operateUserID": "",//操作员编码
            "operateUserName": "",//操作员名称
            "pcName": "",  //机器码
            "vf_ss_ID": series?series:"",//系列编号
            "vf_ss_Name": name?name:"",//系列名称
            "vf_ss_WriteState": state?state:"",//连载状态（0连载中1完结)
            "vf_ss_AuthorID": author?author:"",//作者
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

        // console.log(this.addOptions)

        // this.vf_ve_Content.vf_vo_ImageURL = this.ImageURL;
        // let date = new Date();
        // let day = date.getDay() - 1;
        // let nowDate = date.getFullYear() + "/" + date.getMonth() + "/" + day + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        // this.addOptions.data.vf_ve_Content.vf_vo_CreateTime = nowDate;
        // this.addOptions.data.vf_ve_Content = JSON.stringify(this.addOptions.data.vf_ve_Content);
        // console.log(this.addOptions)
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
