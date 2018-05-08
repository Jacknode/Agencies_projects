<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">审核表</h1>
      <!--查询栏-->
      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item label="电影类型筛选:">
            <el-select v-model="movieType" placeholder="请选择电影类型">
              <el-option label="微电影" value="0"></el-option>
              <el-option label="广告视频" value="1"></el-option>
              <el-option label="教育视频" value="2"></el-option>
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
              <el-form-item label="电影类型:">
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
              <el-form-item label="文件地址:">
                <span>{{props.row.vf_ve_Content.vf_vo_FileURL}}</span>
              </el-form-item>
              <el-form-item label="作者:">
                <span>{{props.row.vf_ve_Content.vf_vo_AuthorID}}</span>
              </el-form-item>
              <el-form-item label="视频类型:">
                <span>{{props.row.vf_ve_Content.vf_vo_Type}}</span>
              </el-form-item>
              <el-form-item label="标题:">
                <span>{{props.row.vf_ve_Content.vf_vo_Title}}</span>
              </el-form-item>
              <!--              <el-form-item label="视频图片:">
                              <img src="" alt="" v-lazy="item"  v-show="props.row.vf_ve_Content.vf_vo_ImageURL.length" v-for="item in props.row.vf_ve_Content.vf_vo_ImageURL" style="width: 100px;height: 100px">
                            </el-form-item>-->
              <el-form-item label="视频图片:">
                <img :src="props.row.vf_ve_Content.vf_vo_ImageURL" alt="" style="width: 100px;height: 100px">
              </el-form-item>
              <!--              <el-form-item label="审核人编码:">
                              <span>{{props.row.vf_ve_Content.vf_vo_PasserID}}</span>
                            </el-form-item>
                            <el-form-item label="审核时间:">
                              <span>{{props.row.vf_ve_Content.vf_vo_ValidateTime}}</span>
                            </el-form-item>-->
              <el-form-item label="简介:">
                <span>{{props.row.vf_ve_Content.vf_vo_Introduce}}</span>
              </el-form-item>
              <el-form-item label="备注:">
                <span>{{props.row.vf_ve_Content.vf_vo_Remark}}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="审核表编号"
          prop="vf_ve_ID">
        </el-table-column>
        <el-table-column
          label="视频类型"
          prop="vf_ve_TypeName">
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
            <el-select v-model="addOptions.data.vf_ve_Type" placeholder="请选择电影类型">
              <el-option label="微电影" value="0"></el-option>
              <el-option label="广告视频" value="1"></el-option>
              <el-option label="教育视频" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="时长:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.vf_ve_Content.vf_vo_Time" placeholder="时长"></el-input>
          </el-form-item>
          <el-form-item label="大小:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.vf_ve_Content.vf_vo_Size" placeholder="大小"></el-input>
          </el-form-item>
          <el-form-item label="文件扩展名:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.vf_ve_Content.vf_vo_Extend" placeholder="文件扩展名"></el-input>
          </el-form-item>
          <el-form-item label="文件地址:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.vf_ve_Content.vf_vo_FileURL" placeholder="文件地址"></el-input>
          </el-form-item>
          <el-form-item label="作者:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.vf_ve_Content.vf_vo_AuthorID" placeholder="作者"></el-input>
          </el-form-item>
          <el-form-item label="视频类型:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.vf_ve_Content.vf_vo_Type" placeholder="视频类型"></el-input>
          </el-form-item>
          <el-form-item label="分类编号:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.vf_ve_Content.vf_te_IDs" placeholder="视频类型"></el-input>
          </el-form-item>
          <el-form-item label="标题:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.vf_ve_Content.vf_vo_Title" placeholder="标题"></el-input>
          </el-form-item>
          <el-form-item label="视频图片:" :label-width="formLabelWidth">
            <a href="javascript:;" class="file">
              视频图片上传
              <input type="file" name="" ref="upload" accept="image/*">
            </a>
            <img v-lazy="addOptions.data.vf_ve_Content.vf_vo_ImageURL" v-show="addOptions.data.vf_ve_Content.vf_vo_ImageURL"
                 style="width: 100px;height: 100px">
          </el-form-item>

          <!--          <el-form-item label="审核人编码:" :label-width="formLabelWidth">
            <el-input v-model="vf_ve_Content.vf_vo_PasserID" placeholder="审核人编码" ></el-input>
          </el-form-item>
          <el-form-item label="审核时间:" :label-width="formLabelWidth">
            <el-input v-model="vf_ve_Content.vf_vo_ValidateTime" placeholder="审核时间" ></el-input>
          </el-form-item>-->
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
              <el-option label="微电影" value="0"></el-option>
              <el-option label="广告视频" value="1"></el-option>
              <el-option label="教育视频" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="时长:" :label-width="formLabelWidth">
            <el-input v-model="VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_vo_Time" placeholder="时长"></el-input>
          </el-form-item>
          <el-form-item label="大小:" :label-width="formLabelWidth">
            <el-input v-model="VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_vo_Size" placeholder="大小"></el-input>
          </el-form-item>
          <el-form-item label="分类编号:" :label-width="formLabelWidth">
            <el-input v-model="VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_te_IDs" placeholder="分类编号"></el-input>
          </el-form-item>
          <el-form-item label="文件扩展名:" :label-width="formLabelWidth">
            <el-input v-model="VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_vo_Extend"
                      placeholder="文件扩展名"></el-input>
          </el-form-item>
          <el-form-item label="文件地址:" :label-width="formLabelWidth">
            <el-input v-model="VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_vo_FileURL"
                      placeholder="文件地址"></el-input>
          </el-form-item>
          <el-form-item label="作者:" :label-width="formLabelWidth">
            <el-input v-model="VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_vo_AuthorID" placeholder="作者"></el-input>
          </el-form-item>
          <el-form-item label="标题:" :label-width="formLabelWidth">
            <el-input v-model="VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_vo_Title" placeholder="标题"></el-input>
          </el-form-item>
          <el-form-item label="视频图片:" :label-width="formLabelWidth">
            <a href="javascript:;" class="file">
              视频图片上传
              <input type="file" name="" ref="upload1" accept="image/*">
            </a>
            <img src="" alt="" v-lazy="item" v-show="ImageURL1.length" v-for="item in ImageURL1"
                 style="width: 100px;height: 100px">
          </el-form-item>

          <!--          <el-form-item label="审核人编码:" :label-width="formLabelWidth">
            <el-input v-model="vf_ve_Content.vf_vo_PasserID" placeholder="审核人编码" ></el-input>
          </el-form-item>
          <el-form-item label="审核时间:" :label-width="formLabelWidth">
            <el-input v-model="vf_ve_Content.vf_vo_ValidateTime" placeholder="审核时间" ></el-input>
          </el-form-item>-->
          <el-form-item label="简介:" :label-width="formLabelWidth">
            <el-input v-model="VMovieCheckTableUpdateObj.data.vf_ve_Content.vf_vo_Introduce"
                      placeholder="简介"></el-input>
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
        //添加
        addDialog: false,
        addOptions: {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",//操作员编码
          "operateUserName": "",//操作员名称
          "pcName": "",
          "data": {
            "vf_ve_Type": "1",//视频类型
            "vf_ve_Content": {
              "vf_vo_Time": "1",
              "vf_vo_Size": "1",
              "vf_vo_Extend": "1",
              "vf_vo_FileURL": "1",
              "vf_vo_AuthorID": "1",
              "vf_vo_Type": "1",
              "vf_vo_Title": "1",
              "vf_vo_ImageURL": "http://image.1000da.com.cn/images/20180508/4c0777f9fd674d7d8eab2b0c37096c79.png",
              "vf_ve_CreateTime": "1",
              "vf_vo_Introduce": "1",
              "vf_vo_Remark": "1",
              "vf_te_IDs": "1",
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
              "vf_vo_AuthorID": "",
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
        this.addOptions.data.vf_ve_Type = "";
        let content =this.addOptions.data.vf_ve_Content;
        for(let i in content){
          content[i]="";
        };
        // this.vf_ve_Content.vf_vo_ImageURL="";
        // this.ImageURL="";
        this.uploaNode();
        this.addDialog = true;
        this.$store.commit('setTranstionFalse');
      },
      addSubmit() {
        // this.vf_ve_Content.vf_vo_ImageURL = this.ImageURL;
        let date = new Date();
        let day = date.getDay() - 1;
        let nowDate = date.getFullYear() + "/" + date.getMonth() + "/" + day + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        this.addOptions.data.vf_ve_Content.vf_vo_CreateTime = nowDate;
        // this.addOptions.data.vf_ve_Content = JSON.stringify(this.addOptions.data.vf_ve_Content);
        // console.log(this.addOptions)
        this.$store.dispatch("addVMovieCheckTable", this.addOptions)
          .then((suc) => {
            this.$notify({
              message: suc,
              type: "success"
            })
            this.initData();
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
        // console.log(obj)
        this.ImageURL1 = [];
        this.uploaNode();
        this.updateDialog = true;
        this.$store.commit('setTranstionFalse');
        this.VMovieCheckTableUpdateObj.data.vf_ve_Content = obj.vf_ve_Content;
        this.VMovieCheckTableUpdateObj.data.vf_ve_ID = obj.vf_ve_ID;
        this.VMovieCheckTableUpdateObj.data.vf_ve_Type = obj.vf_ve_Type;

      },
      updateSubmit() {
        // console.log(this.VMovieCheckTableUpdateObj)
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
