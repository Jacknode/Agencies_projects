<template>
  <div>
    <section id="wrap">
      <h1 class="userClass">线路日程信息</h1>
      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>线路日程筛选:</span>
          </el-form-item>
          <el-form-item>
            <el-autocomplete
              style="width: 250px"
              v-model="userName"
              :fetch-suggestions="querySearchAsync"
              placeholder="请选择产品"
              @select="handleSelect"
            ></el-autocomplete>
          </el-form-item>
          <el-form-item>
            <el-select v-model="userSearchID" placeholder="请选择产品线路">
              <el-option
                v-for="item in adminProductLine"
                :key="item.ts_pt_ID"
                :label="item.ts_pt_Name"
                :value="item.ts_pt_ID">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addAdminLinePrepare">新增</el-button>
          </el-form-item>
        </el-form>
      </el-col>

      <el-table
        :data="adminLinePrepare"
        highlight-current-row
        v-loading="isLoading"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="主键编号:">
                <span>{{ props.row.ts_pt_ID }}</span>
              </el-form-item>
              <el-form-item label="线路编号:">
                <span>{{ props.row.ts_pt_Product_LineID }}</span>
              </el-form-item>
              <el-form-item label="日程名称:">
                <span>{{ props.row.ts_pt_Name }}</span>
              </el-form-item>
              <el-form-item label="产品描述:">
                <!--<span>{{ props.row.ta_tg_Describe }}</span>-->
                <el-popover
                  ref="popover1"
                  placement="top-start"
                  trigger="hover"
                  :content="props.row.ts_pt_Describe">
                </el-popover>
                <el-button v-popover:popover1 size="small">移入查看</el-button>
              </el-form-item>
              <el-form-item label="展示图片地址:">
                <img :src="item" alt="" v-for="item in props.row.ts_pt_ShowImage" style="width: 100px;height: 100px;margin-right: 10px">
                <!--<p v-for="item in props.row.ta_tg_ShowImages">{{ item }}</p>-->
              </el-form-item>
              <el-form-item label="第几天日程:">
                <span>{{ props.row.ts_pt_Day }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="主键编号"
          prop="ts_pt_ID"
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="线路编号"
          align="center"
          prop="ts_pt_Product_LineID">
        </el-table-column>
        <el-table-column
          label="日程名称"
          align="center"
          prop="ts_pt_Name">
        </el-table-column>
        <el-table-column
          label="第几天日程"
          align="center"
          prop="ts_pt_Day">
        </el-table-column>
        <el-table-column
          align="center"
          label="备注">
          <template slot-scope="props">
            <el-popover
              ref="popover1"
              placement="top-start"
              trigger="hover"
              :content="props.row.ts_pt_Remark">
            </el-popover>
            <el-button v-popover:popover1>移入查看</el-button>
          </template>

        </el-table-column>
        <el-table-column label="操作" width="300" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="updateAdminLinePrepare(scope.row.ts_pt_ID)">修改
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="deleteAdminLinePrepare(scope.row.ts_pt_ID)">删除
            </el-button>
            <el-button
              size="mini"
              @click="scheduleTimeManagement(scope.row.ts_pt_ID)">日程时间管理
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!--添加线路日程-->
      <el-dialog title="添加线路日程" :visible.sync="addAdminLinePrepareDialog">
        <el-form :model="addOptions">
          <el-form-item label="请选择产品线路:" :label-width="formLabelWidth">
            <el-select v-model="addOptions.data.ts_pt_Product_LineID" placeholder="请选择产品线路">
              <el-option
                v-for="item in adminProductLine"
                :key="item.ts_pt_ID"
                :label="item.ts_pt_Name"
                :value="item.ts_pt_ID">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="日程名称:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ts_pt_Name" placeholder="请输入日程名称"></el-input>
          </el-form-item>
          <el-form-item label="展示图片:" :label-width="formLabelWidth">
            <a href="javascript:;" class="file">展示图片上传
              <input type="file" name="" ref="upload" accept="image/*" multiple>
            </a>
            <p v-for="item in ImageURL" v-show="ImageURL.length">{{item?item:""}}</p>
          </el-form-item>
          <el-form-item label="第几天日程:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ts_pt_Day" placeholder="请输入第几天日程"></el-input>
          </el-form-item>
          <el-form-item label="产品描述:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ts_pt_Describe" placeholder="请输入产品描述" type="textarea"
                      :autosize="{ minRows: 6, maxRows: 10}"></el-input>
          </el-form-item>
          <el-form-item label="备注:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.ts_pt_Remark" placeholder="请输入内容" type="textarea"
                      :autosize="{ minRows: 6, maxRows: 10}"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addAdminLinePrepareDialog = false">取 消</el-button>
          <el-button type="primary" @click="addAdminLinePrepareSubmit">确 定</el-button>
        </div>
      </el-dialog>

      <!--修改线路日程-->
      <el-dialog title="修改线路日程" :visible.sync="updateAdminLinePrepareDialog">
        <el-form :model="updateAdminLinePrepareObj">
          <el-form-item label="请选择产品线路:" :label-width="formLabelWidth">
            <el-select v-model="updateAdminLinePrepareObj.ts_pt_Product_LineID" placeholder="请选择产品线路">
              <el-option
                v-for="item in adminProductLine"
                :key="item.ts_pt_ID"
                :label="item.ts_pt_Name"
                :value="item.ts_pt_ID">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="日程名称:" :label-width="formLabelWidth">
            <el-input v-model="updateAdminLinePrepareObj.ts_pt_Name" placeholder="请输入日程名称"></el-input>
          </el-form-item>
          <el-form-item label="展示图片:" :label-width="formLabelWidth">
            <a href="javascript:;" class="file">展示图片上传
              <input type="file" name="" ref="upload1" accept="image/*" multiple>
            </a>
            <p v-if="ImageURL.length" v-for="item in ImageURL">{{item}}</p>
            <p v-for="item in updateAdminLinePrepareObj.ts_pt_ShowImage" v-show="updateAdminLinePrepareObj.ts_pt_ShowImage.length" v-else>{{item?item:""}}</p>
          </el-form-item>
          <el-form-item label="第几天日程:" :label-width="formLabelWidth">
            <el-input v-model="updateAdminLinePrepareObj.ts_pt_Day" placeholder="请输入第几天日程"></el-input>
          </el-form-item>
          <el-form-item label="产品描述:" :label-width="formLabelWidth">
            <el-input v-model="updateAdminLinePrepareObj.ts_pt_Describe" placeholder="请输入内容" type="textarea"
                      :autosize="{ minRows: 6, maxRows: 10}"></el-input>
          </el-form-item>
          <el-form-item label="备注:" :label-width="formLabelWidth">
            <el-input v-model="updateAdminLinePrepareObj.ts_pt_Remark" placeholder="请输入内容" type="textarea"
                      :autosize="{ minRows: 6, maxRows: 10}"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="updateAdminLinePrepareDialog = false">取 消</el-button>
          <el-button type="primary" @click="updateAdminLinePrepareSubmit">确 定</el-button>
        </div>
      </el-dialog>
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    name: '',
    data(){
      return {
        GoodId: '',
        LineID: '',
        userName: '',
        ImageURL: [],
        isLoading: false,
        userSearchID: '',
        formLabelWidth: '120px',
        addAdminLinePrepareDialog:false,
        updateAdminLinePrepareDialog:false,
        addOptions:{
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "ts_pt_Product_LineID": "",
            "ts_pt_Name": "",
            "ts_pt_Day": "",
            "ts_pt_Remark": "",
            ts_pt_Describe:'',
            ts_pt_ShowImage:'',
          }
        }
      }
    },
    computed: mapGetters([
      'adminTradeGoodList',
      'adminProductLine',
      'adminQueryProductList',
      'adminLinePrepare',
      'updateAdminLinePrepareObj',
      'adminLineScheduleManagementId'
    ]),
    methods: {
      //图片转二进制
      uploadImg(file){
        return new Promise(function (relove, reject) {
          lrz(file)
          .then(data => {
            relove(data.base64.split(',')[1])
          })
        })
      },
      uploaNode(){
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
          if (this.$refs.upload1) {
            this.$refs.upload1.addEventListener('change', data => {
              for (var i = 0; i < this.$refs.upload1.files.length; i++) {
                this.uploadImg(this.$refs.upload1.files[i]).then(data => {
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

      //选中产品
      handleSelect(item) {
        this.addOptions.data.ts_pt_Product_LineID = item.id;
        this.updateAdminLinePrepareObj.ts_pt_Product_LineID = item.id;
        this.userName = item.value;
        let options = {
          loginUserID: 'huileyou',
          loginUserPass: 123,
          goodID: item.id ? item.id : ''
        };
        this.$store.dispatch('initAdminProductLine', options)
      },
      loadAll(num, name) {
        return new Promise((relove, reject) => {
          var _this = this;
          let obj = JSON.parse(sessionStorage.getItem('admin'))
          let options = {
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "",
            "operateUserName": "",
            "tradeID": obj.sm_ai_AgentID ? obj.sm_ai_AgentID : '',
            "userID": "",
            "pcName": "",
            "ID": '',
            'isDelete': 0,
            "page": 1,
            "rows": 100
          };
          this.$store.dispatch('initAdminTradeGoodList', options)
          .then((data) => {
            relove(data)
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          })
        })
      },
      querySearchAsync(queryString, cb) {
        this.loadAll(1, queryString).then(data => {
          var  data = data.data
          data = data.map(item => {
            return {
              id: item.ta_tg_ID,
              value: item.ta_tg_Title
            }
          })
          this.restaurants = data;
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            cb(this.restaurants);
          }, 10);
        })
      },
      initData(id){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "goodID": id?id:''
        };
        this.isLoading = true;
        this.$store.dispatch('initAdminLinePrepare',options)
        .then(()=>{
          this.isLoading = false;
        },err=>{
          this.$notify({
            message: err,
            type: 'error'
          });
        })
      },
      //查询
      search(){
        if(!this.userSearchID){
          this.$notify({
            message: '请选择筛选条件',
            type: 'error'
          });
          return;
        }
        this.initData(this.userSearchID)
      },
      //查询初始化数据
      searchInitData(){
        if(this.adminLineScheduleManagementId){
          this.initData(this.adminLineScheduleManagementId)
        }
      },
      //添加
      addAdminLinePrepare(){
        this.$store.commit('setTranstionFalse');
        this.addAdminLinePrepareDialog = true;
        this.uploaNode()
      },
      //添加提交
      addAdminLinePrepareSubmit(){
        this.addOptions.data.ts_pt_ShowImage =  this.ImageURL.join(',');
        this.$store.dispatch('AddAdminLinePrepare',this.addOptions)
          .then(() => {
            this.$notify({
              message: '添加成功!',
              type: 'success'
            });
            this.initData(this.addOptions.data.ts_pt_Product_LineID)
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          });
        this.addAdminLinePrepareDialog = false;
      },
      //修改
      updateAdminLinePrepare(id){
        this.$store.commit('setTranstionFalse');
        this.updateAdminLinePrepareDialog = true;
        this.uploaNode();
        this.$store.commit('initUpdateAdminLinePrepareObj',id)
      },
      //修改提交
      updateAdminLinePrepareSubmit(){

        let updateOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          data:{
            "ts_pt_ID": this.updateAdminLinePrepareObj.ts_pt_ID,
            "ts_pt_Product_LineID": this.updateAdminLinePrepareObj.ts_pt_Product_LineID,
            "ts_pt_Name": this.updateAdminLinePrepareObj.ts_pt_Name,
            "ts_pt_Day": this.updateAdminLinePrepareObj.ts_pt_Day,
            "ts_pt_Describe": this.updateAdminLinePrepareObj.ts_pt_Describe,
            "ts_pt_ShowImage":  this.ImageURL.join(','),
            "ts_pt_Remark": this.updateAdminLinePrepareObj.ts_pt_Remark,
          }
        };
        this.$store.dispatch('UpdateAdminLinePrepare',updateOptions)
          .then(() => {
            this.$notify({
              message: '修改成功!',
              type: 'success'
            });
            this.initData( this.updateAdminLinePrepareObj.ts_pt_Product_LineID)
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          });
        this.updateAdminLinePrepareDialog = false;
      },
      //删除
      deleteAdminLinePrepare(id){
        let deleteOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "ID": id
        };
        this.$store.dispatch('DeleteAdminLinePrepare',deleteOptions)
          .then(() => {
            this.$notify({
              message: '删除成功!',
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
      //点击跳转日程时间管理
      scheduleTimeManagement(id){
        this.$store.commit('adminScheduleTimeManagementId',id);
        this.$router.push({name:'AdminScheduleTime'});
        sessionStorage.setItem('index','3')
      }
    },
    mounted(){
      this.searchInitData();
    }
  }
</script>
<style scoped>

</style>
