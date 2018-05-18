<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">审核表</h1>
      <!--查询栏-->
      <el-col :span="24" class="formSearch">
        <el-form :inline="true" size="mini">
          <el-form-item label="电影类型筛选:">
            <el-select v-model="movieType" placeholder="请选择电影类型">
              <el-option label="广告" value="1"></el-option>
              <el-option label="微电影" value="2"></el-option>
              <el-option label="教育" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search">查询</el-button>
            <el-button type="primary" @click="Add">新增</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <!--数据展示-->
      <el-table
        :data="VMovieCheckTableList"
        v-loading="isLoading"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="审核表编号:">
                <span>{{props.row.vf_ve_ID}}</span>
              </el-form-item>
              <el-form-item label="视频类型:">
                <span>{{props.row.vf_ve_TypeName}}</span>
              </el-form-item>
              <el-form-item label="创建视频时间:">
                <span>{{props.row.vf_ve_Content.vf_vo_CreateTime}}</span>
              </el-form-item>
              <el-form-item label="分类编号:">
                <span>{{props.row.vf_ve_Content.vf_te_IDs}}</span>
              </el-form-item>
              <el-form-item label="时长:">
                <span>{{props.row.vf_ve_Content.vf_vo_Time}}</span>
              </el-form-item>
              <el-form-item label="大小:">
                <span>{{props.row.vf_ve_Content.vf_vo_Size}}</span>
              </el-form-item>
              <el-form-item label="文件扩展名:">
                <span>{{props.row.vf_ve_Content.vf_vo_Extend}}</span>
              </el-form-item>
              <el-form-item label="作者:">
                <span>{{props.row.vf_ve_Content.vf_vo_AuthorID}}</span>
              </el-form-item>
              <el-form-item label="标题:">
                <span>{{props.row.vf_ve_Content.vf_vo_Title}}</span>
              </el-form-item>
              <el-form-item label="简介:">
                <span>{{props.row.vf_ve_Content.vf_vo_Introduce}}</span>
              </el-form-item>
              <el-form-item label="视频图片:">
                <img :src="props.row.vf_ve_Content.vf_vo_ImageURL" alt="" style="width: 100px;height: 100px">
              </el-form-item>
              <el-form-item label="备注:">
                <span>{{props.row.vf_ve_Content.vf_vo_Remark}}</span>
              </el-form-item>
              <el-form-item label="文件地址:">
                <video :src="props.row.vf_ve_Content.vf_vo_FileURL"  width="320" height="240" controls="controls"></video>
              </el-form-item>

            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="审核表编号"
          prop="vf_ve_ID">
        </el-table-column>
        <el-table-column
          label="视频类型">
          <template slot-scope="scope">
            {{ scope.row.vf_ve_TypeName }}
          </template>
        </el-table-column>

        <el-table-column
          label="创建审核表时间"
          prop="vf_ve_CreateTime">
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
              @click="Delete(scope.row.vf_ve_ID)">删除
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

      <!--添加-->
      <el-dialog title="添加" :visible.sync="addDialog">
        <el-form :model="addOptions">
          <el-form-item label="电影类型筛选:" :label-width="formLabelWidth">
            <el-select v-model="parentTypeId" placeholder="请选择电影类型" @change="parentChange">
              <el-option :key="item.vf_te_ID" :label="item.vf_te_Name" :value="item.vf_te_ID" v-for="item in VMovieTypeList"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="分类名称:" :label-width="formLabelWidth" v-show="isVisible">
            <el-select v-model="value5" multiple placeholder="请选择分类名称">
              <el-option
                v-for="item in VMovieChildTyeList"
                :key="item.vf_te_ID"
                :label="item.vf_te_Name"
                :value="item.vf_te_ID">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="标题:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.vf_ve_Content.vf_vo_Title" placeholder="标题"></el-input>
          </el-form-item>
          <el-form-item label="视频图片:" :label-width="formLabelWidth">
            <a href="javascript:;" class="file">
              视频图片上传
              <input type="file" name="" ref="upload" accept="image/*">
            </a>
            <img v-lazy="addOptions.data.vf_ve_Content.vf_vo_ImageURL"
                 v-show="addOptions.data.vf_ve_Content.vf_vo_ImageURL"
                 style="width: 100px;height: 100px">
          </el-form-item>
          <el-form-item label="选择视频:" :label-width="formLabelWidth">
            <a href="javascript:;" class="file">上传视频
              <input type="file" name="" ref="upload1" multiple>
            </a>
            <div id="myDiv" style="padding: 10px">选择视频上传:</div>
            <el-form-item size="large">
              <el-button type="primary" size="mini" @click="uploadFile">立即上传</el-button>
            </el-form-item>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="percentage" status="exception"></el-progress>
            <el-form-item size="large">
              <video id="addVideo" :src="addOptions.data.vf_ve_Content.vf_vo_FileURL"  width="320" height="240" controls="controls"></video>
            </el-form-item>
          </el-form-item>
          <el-form-item label="简介:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.vf_ve_Content.vf_vo_Introduce" placeholder="简介"></el-input>
          </el-form-item>
          <el-form-item label="详情:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.vf_ve_Content.vf_vo_Remark" placeholder="详情"></el-input>
          </el-form-item>


        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addDialog = false">取 消</el-button>
          <el-button type="primary" @click="addSubmit">确 定</el-button>
        </div>
      </el-dialog>

      <!--修改-->
      <el-dialog title="修改" :visible.sync="updateDialog">
        <el-form :model="VMovieCheckTableUpdateObj">

          <el-form-item label="审核表编码:" :label-width="formLabelWidth">
            <el-input v-model="VMovieCheckTableUpdateObj.data.vf_ve_ID" placeholder="时长" :disabled="isDisabled">>
            </el-input>
          </el-form-item>
          <el-form-item label="电影类型筛选:" :label-width="formLabelWidth">
            <el-select v-model="VMovieCheckTableUpdateObj.data.vf_ve_Type" placeholder="请选择电影类型">
              <el-option label="广告" value="1"></el-option>
              <el-option label="微电影" value="2"></el-option>
              <el-option label="教育" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="分类名称:" :label-width="formLabelWidth">
            <el-select v-model="categoriesName" multiple placeholder="请选择分类名称">
              <el-option :key="item.vf_te_ID" :label="item.vf_te_Name" :value="item.vf_te_ID" v-for="item in VMovieTypeList"></el-option>
            </el-select>
          </el-form-item>

<!--          <el-form-item label="子分类名称:" :label-width="formLabelWidth" v-show="isVisible">
            <el-select v-model="value5" multiple placeholder="请选择子分类名称">
              <el-option
                v-for="item in VMovieTypeList"
                :key="item.vf_te_ID"
                :label="item.vf_te_Name"
                :value="item.vf_te_ID">
              </el-option>
            </el-select>
          </el-form-item>-->

          <el-form-item label="视频图片:" :label-width="formLabelWidth">
            <a href="javascript:;" class="file">
              视频图片上传
              <input type="file" name="" ref="upload3" accept="image/*">
            </a>
            <img v-lazy="VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_vo_ImageURL"
                 v-show="VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_vo_ImageURL"
                 style="width: 100px;height: 100px">
          </el-form-item>
          <el-form-item label="上传视频:" :label-width="formLabelWidth">
            <a href="javascript:;" class="file">上传视频
              <input type="file" name="" ref="upload4" multiple>
            </a>
            <video id="addVideo1" :src="VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_vo_FileURL"  width="320" height="240" controls="controls"></video>
          </el-form-item>
          <el-form-item size="large" :label-width="formLabelWidth">
            <el-button type="primary" size="mini" @click="uploadFileUpdate">立即上传</el-button>
          </el-form-item>
          <el-form-item label="标题:" :label-width="formLabelWidth">
            <el-input v-model="VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_vo_Title" placeholder="标题"></el-input>
          </el-form-item>
          <el-form-item label="简介:" :label-width="formLabelWidth">
            <el-input v-model="VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_vo_Introduce" placeholder="简介"></el-input>
          </el-form-item>
          <el-form-item label="详情:" :label-width="formLabelWidth">
            <el-input v-model="VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_vo_Remark" placeholder="详情"></el-input>
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
        categoriesName:[],
        value11: [],
        value5:'',
        typeID:'',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        parentTypeId:'',
        typeId:'',
        isVisible:false,
        percentage:0,
        videoData:{
          "vedioName":''
        },
        //是否禁用
        isDisabled: true,
        //修改
        updateDialog: false,
        ImageURL: '',
        // ImageURL1: '',
        //数据展示
        isLoading: false,
        //分页
        total: 0,
        //查询
        movieType: '',
        //添加
        addDialog: false,
        addOptions: {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",
          "data": {
            "vf_ve_Type": "",//视频类型
            "vf_ve_Content": {
              "vf_vo_Time": "",
              "vf_vo_Size": "",
              "vf_vo_Extend": "",
              "vf_vo_FileURL": "",
              "vf_vo_AuthorID": "21",
              "vf_vo_Type": "",
              "vf_vo_Title": "",
              "vf_vo_ImageURL": "",
              "vf_vo_CreateTime": "",
              "vf_vo_Introduce": "",
              "vf_vo_Remark": "",
              "vf_te_IDs": "",
            },
          }
        },
        //表单宽度
        formLabelWidth: '120px',
        VMovieCheckTableUpdateObj: {
          "loginUserID": "huileyou",  //惠乐游用户ID
          "loginUserPass": "123",  //惠乐游用户密码
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",  //机器码
          "data": {
            "vf_ve_ID": "",//审核表编码
            "vf_ve_Type": "",//视频类型
            "vf_ve_Content": {
              "vf_vo_Time": "",
              "vf_vo_Size": "",
              "vf_vo_Extend": "",
              "vf_vo_FileURL": "",
              "vf_vo_AuthorID": "21",
              "vf_vo_Type": "",
              "vf_vo_Title": "",
              "vf_vo_ImageURL": "",
              "vf_vo_CreateTime": "",
              "vf_vo_Introduce": "",
              "vf_vo_Remark": "",
            },
          }
        },
      }
    },
    computed: mapGetters([
      'VMovieCheckTableList',
      'VMovieParentTypeList',
      'UploadVideoList',
      'VMovieTypeList',
      'VMovieChildTyeList',
    ]),

    created() {
      this.initData();
    },
    methods: {
      uploadFile() {
        var fd = new FormData();
        if(this.$refs.upload1.files[0]){
          //获取文件
          var file =this.$refs.upload1.files[0];
          //获取文件大小
          var fileSize = this.$refs.upload1.files[0].size;
          fileSize=parseInt(fileSize/1024*100/100); //单位为KB
          this.addOptions.data.vf_ve_Content.vf_vo_Size=fileSize;
          var str =this.$refs.upload1.files[0].name;
          //获取文件名
          this.addOptions.data.vf_ve_Content.vf_vo_Extend=str.split(".")[1];
          fd.append("fileUploadOss",this.$refs.upload1.files[0]);
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
                      this.addOptions.data.vf_ve_Content.vf_vo_FileURL=this.UploadVideoList;
                    //获取时长
                    var e =document.getElementById("addVideo");
                    setTimeout(()=>{
                      if(isNaN(e.duration)){
                        this.addOptions.data.vf_ve_Content.vf_vo_Time = '';
                      }else{
                        this.addOptions.data.vf_ve_Content.vf_vo_Time=parseInt(e.duration).toString();
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
      uploadFileUpdate() {
        var fd = new FormData();
        //获取文件
        var file =this.$refs.upload4.files[0];
        if(file){
          //获取文件大小
          var fileSize = file.size;
          fileSize=parseInt(fileSize/1024*100/100); //单位为KB
          this.VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_vo_Size=fileSize;
          var str =file.name;
          //获取文件名
          this.VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_vo_Extend=str.split(".")[1];
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
                      this.VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_vo_FileURL=this.UploadVideoList;
                    //获取时长
                    var e =document.getElementById("addVideo1");
                    setTimeout(()=>{
                      if(isNaN(e.duration)){
                        this.VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_vo_Time = '';
                      }else{
                        this.VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_vo_Time=parseInt(e.duration).toString();
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
      parentChange(){
        this.childTypeData(this.parentTypeId);
        this.isVisible=true;
      },
      childTypeData(typeParentName){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",
          "vf_te_ID":"",//分类编号
          "vf_te_Name":"",//分类名称
          "vf_te_ParentID": typeParentName?typeParentName:"0",//分类编号父编号
        };
        this.$store.dispatch("childTypeData", options)
          .then((total) => {
            this.total = total;
          }, (err) => {
            this.$notify({
              message: err,
              type: "error"
            });
          });
      },
      handleCurrentChange(num) {
        this.initData('', num)
      },
      intTypeData(typeName,typeParentName){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",
          "vf_te_ID":typeName?typeName:"",//分类编号
          "vf_te_Name":"",//分类名称
          "vf_te_ParentID": typeParentName?typeParentName:"0",//分类编号父编号
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
      initData(name, page) {
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",
          "vf_ve_ID": "",//审核表编号
          "vf_ve_Type": name ? name : "",//视频类型
          "page": page ? page : 1,//页码
          "rows": 5//条数
        };
        this.$store.dispatch("initVMovieCheckTable", options)
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
      Add() {
//        this.intParentTypeData();
        this.intTypeData();
        this.addOptions.data.vf_ve_Type = "";
        let content = this.addOptions.data.vf_ve_Content;
        for (let i in content) {
          content[i] = "";
        }
        ;
        this.uploaNode();
        this.addDialog = true;
        this.$store.commit('setTranstionFalse');
      },
      addSubmit() {
        let date = new Date();
        let day = date.getDay();
        let nowDate = date.getFullYear() + "/" + date.getMonth() + "/" + day + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        this.addOptions.data.vf_ve_Content.vf_te_IDs=this.value5.join(",");
        this.addOptions.data.vf_ve_Content.vf_vo_CreateTime = nowDate;
        this.$store.dispatch("addVMovieCheckTable", this.addOptions)
          .then((suc) => {
            this.$notify({
              message: suc,
              type: "success"
            })
            // this.initData();
             window.location.reload()
          }, (err) => {
            this.$notify({
              message: err,
              type: "error"
            });
          });
        this.initData();
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
        setTimeout(() => {
          if (this.$refs.upload) {
            this.$refs.upload.addEventListener('change', data => {
              for (var i = 0; i < this.$refs.upload.files.length; i++) {
                this.uploadImg(this.$refs.upload.files[i]).then(data => {
                  this.$store.dispatch('UploadnImgs', {
                    imageData: data
                  })
                    .then(data => {
                      this.addOptions.data.vf_ve_Content.vf_vo_ImageURL = "";
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
          if (this.$refs.upload3) {
            this.$refs.upload3.addEventListener('change', data => {
              for (var i = 0; i < this.$refs.upload3.files.length; i++) {
                this.uploadImg(this.$refs.upload3.files[i])
                  .then(data => {
                  this.$store.dispatch('UploadnImgs', {
                    imageData: data
                  })
                    .then(data => {
                      if (data) {
                        this.VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_vo_ImageURL=data.data;
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
            "vf_ve_ID": id,//申请广告编码
          }
        };
        this.$store.dispatch('DeleteVMovieCheckTable', deleteOption)
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
        this.intTypeData();
        this.uploaNode();
        this.updateDialog = true;
        this.$store.commit('setTranstionFalse');
        this.VMovieCheckTableUpdateObj.data.vf_ve_Content = obj.vf_ve_Content;
        this.VMovieCheckTableUpdateObj.data.vf_ve_ID = obj.vf_ve_ID;
        this.VMovieCheckTableUpdateObj.data.vf_ve_Type = obj.vf_ve_Type;
        this.VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_vo_FileURL = obj.vf_ve_Content.vf_vo_FileURL;
      },
      updateSubmit() {
        console.log(this.categoriesName.join(","))
        this.VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_te_IDs=this.categoriesName.join(",");
        this.$store.dispatch("updateVMovieCheckTable", this.VMovieCheckTableUpdateObj)
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
