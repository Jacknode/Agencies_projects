<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">交通信息</h1>

      <!--添加-->

      <div class="add">
        <el-button type="primary" @click="Add">新增</el-button>
      </div>

      <!--数据展示-->

      <el-table
        :data="trafficInformationList"
        v-loading="isLoading"
        style="width: 100%">
        <el-table-column
          prop="tm_tm_ID"
          label="交通信息编号">
        </el-table-column>
        <el-table-column label="自驾线路">
          <template slot-scope="scope">
            <el-popover
              ref="popover1"
              placement="top-start"
              title="自驾线路"
              width="300"
              align="center"
              trigger="hover"
              :content="scope.row.tm_tm_Drive">
            </el-popover>
            <el-button v-popover:popover1 size="mini">移入查看</el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="公交线路">
          <template slot-scope="scope">
            <el-popover
              ref="popover1"
              placement="top-start"
              title="公交线路"
              width="300"
              align="center"
              trigger="hover"
              :content="scope.row.tm_tm_Bus">
            </el-popover>
            <el-button v-popover:popover1 size="mini">移入查看</el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="景点地址">
          <template slot-scope="scope">
            <el-popover
              ref="popover1"
              placement="top-start"
              title="景点地址"
              width="300"
              align="center"
              trigger="hover"
              :content="scope.row.tm_tm_Address">
            </el-popover>
            <el-button v-popover:popover1 size="mini">移入查看</el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="update(scope.row.tm_tm_ID)">修改
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="deleteTrafficInformation(scope.row.tm_tm_ID)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!--添加交通信息-->

      <el-dialog title="添加预定须知" :visible.sync="addDialog">
        <el-form :model="addOptions">
          <el-form-item label="自驾线路:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.tm_tm_Drive" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="公交线路:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.tm_tm_Bus" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="景点地址:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.tm_tm_Address" type="textarea"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addDialog = false">取 消</el-button>
          <el-button type="primary" @click="addSubmit">确 定</el-button>
        </div>
      </el-dialog>

      <!--修改交通信息-->

      <el-dialog title="修改预定须知" :visible.sync="updateDialog">
        <el-form :model="updateTrafficInformationObj">
          <el-form-item label="自驾线路:" :label-width="formLabelWidth">
            <el-input v-model="updateTrafficInformationObj.tm_tm_Drive" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="公交线路:" :label-width="formLabelWidth">
            <el-input v-model="updateTrafficInformationObj.tm_tm_Bus" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="景点地址:" :label-width="formLabelWidth">
            <el-input v-model="updateTrafficInformationObj.tm_tm_Address" type="textarea"></el-input>
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
      'trafficInformationList',
      'updateTrafficInformationObj'
    ]),
    data() {
      return {
        number: '',
        addOptions: {
          "tm_tm_TourSiteID": "",
          "tm_tm_Drive": "",
          "tm_tm_Bus": "",
          "tm_tm_Address": ""
        },
        addDialog: false,
        formLabelWidth: '120px',
        isLoading: false,
        updateDialog: false,
      }
    },
    methods: {
      initData(id) {
        this.isLoading = true;
        let getTransport = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "tm_tm_TourSiteID": id ? id : '',
        };
        this.$store.dispatch('initTrafficInformation', getTransport)
          .then(() => {
            this.isLoading = false;
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          })
      },
      Add() {
        this.$store.commit('setTranstionFalse');
        this.addDialog = true;
        this.addOptions.tm_tm_TourSiteID = this.number
      },
      addSubmit() {
        let insertTransport = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "data": this.addOptions
        };
        this.$store.dispatch('addTrafficInformationSubmit', insertTransport)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData(this.number)
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          })
        this.addDialog = false;
      },

      update(id) {
        this.$store.commit('setTranstionFalse');
        this.updateDialog = true;
        this.$store.commit('updateTrafficInformation', id)
      },
      updateSubmit() {
        let updateTransport = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "data": this.updateTrafficInformationObj
        };
        this.$store.dispatch('updateTrafficInformationSubmit', updateTransport)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData(this.number);
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          })
        this.updateDialog = false;
      },

      deleteTrafficInformation(id) {
        let deleteTransport = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "data": {
            "tm_tm_ID": id
          }
        };
        this.$store.dispatch('deleteTrafficInformation',deleteTransport)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData(this.number);
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          })
      }
    },
    created() {
      this.number = this.$route.params.id;
      this.initData(this.number);
    }
  }
</script>
<style scoped>
  .add {
    margin: 20px;
    text-align: right;
  }
</style>
