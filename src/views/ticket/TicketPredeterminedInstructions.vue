<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">预定须知</h1>

      <!--添加-->
      <div class="search">
        <el-select v-model="ticketAttractionsValue" placeholder="请选择查询的景点" size="mini">
          <el-option
            v-for="item in ticketAttractionsList"
            :key="item.tm_ts_Code"
            :label="item.tm_ts_Name"
            :value="item.tm_ts_Code">
          </el-option>
        </el-select>

        <el-button type="primary" @click="search" size="mini">查询</el-button>
        <el-button type="primary" @click="Add" size="mini">新增</el-button>

      </div>
      <!--数据展示-->

      <el-table
        :data="predeterminedInstructionsList"
        v-loading="isLoading"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="预定须知编号:">
                <span>{{ props.row.tm_bk_ID }}</span>
              </el-form-item>
              <el-form-item label="开放时间:">
                <el-popover
                  ref="popover1"
                  placement="top-start"
                  title="开放时间"
                  width="500"
                  trigger="hover"
                  :content="props.row.tm_bk_OpenTime">
                </el-popover>
                <el-button v-popover:popover1 size="mini">移入查看</el-button>
              </el-form-item>
              <el-form-item label="特殊人群政策:">
                <el-popover
                  ref="popover1"
                  placement="top-start"
                  title="特殊人群政策"
                  width="500"
                  trigger="hover"
                  :content="props.row.tm_bk_SpecialPolicy">
                </el-popover>
                <el-button v-popover:popover1 size="mini">移入查看</el-button>
              </el-form-item>
              <el-form-item label="预订提醒:">
                <el-popover
                  ref="popover1"
                  placement="top-start"
                  title="预订提醒"
                  width="500"
                  trigger="hover"
                  :content="props.row.tm_bk_Remind">
                </el-popover>
                <el-button v-popover:popover1 size="mini">移入查看</el-button>
              </el-form-item>
              <el-form-item label="温馨提示:">
                <el-popover
                  ref="popover1"
                  placement="top-start"
                  title="温馨提示"
                  width="500"
                  trigger="hover"
                  :content="props.row.tm_bk_HappyNotice">
                </el-popover>
                <el-button v-popover:popover1 size="mini">移入查看</el-button>
              </el-form-item>
              <el-form-item label="发票说明:">
                <el-popover
                  ref="popover1"
                  placement="top-start"
                  title="发票说明"
                  width="500"
                  trigger="hover"
                  :content="props.row.tm_bk_TicketSay">
                </el-popover>
                <el-button v-popover:popover1 size="mini">移入查看</el-button>
              </el-form-item>
              <el-form-item label="退改规则:">
                <el-popover
                  ref="popover1"
                  placement="top-start"
                  title="退改规则"
                  width="500"
                  trigger="hover"
                  :content="props.row.tm_bk_ReturnRule">
                </el-popover>
                <el-button v-popover:popover1 size="mini">移入查看</el-button>
              </el-form-item>
              <el-form-item label="特殊信息:">
                <el-popover
                  ref="popover1"
                  placement="top-start"
                  title="特殊信息"
                  width="500"
                  trigger="hover"
                  :content="props.row.tm_bk_SpecialMessage">
                </el-popover>
                <el-button v-popover:popover1 size="mini">移入查看</el-button>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="预定须知编号"
          prop="tm_bk_ID">
        </el-table-column>
        <el-table-column
          label="开放时间">
          <template slot-scope="scope">
            <el-popover
              ref="popover1"
              placement="top-start"
              title="开放时间"
              width="500"
              trigger="hover"
              :content="scope.row.tm_bk_OpenTime">
            </el-popover>
            <el-button v-popover:popover1 size="mini">移入查看</el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="update(scope.row.tm_bk_ID)">修改
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!--添加预定须知-->

      <el-dialog title="添加预定须知" :visible.sync="addDialog">
        <el-form :model="addOptions">
          <el-form-item label="开放时间:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.tm_bk_OpenTime" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="特殊人群政策:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.tm_bk_SpecialPolicy" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="预订提醒:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.tm_bk_Remind" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="温馨提示:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.tm_bk_HappyNotice" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="发票说明:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.tm_bk_TicketSay" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="退改规则:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.tm_bk_ReturnRule" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="特殊信息:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.tm_bk_SpecialMessage" type="textarea"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addDialog = false">取 消</el-button>
          <el-button type="primary" @click="addSubmit">确 定</el-button>
        </div>
      </el-dialog>

      <!--修改预定须知-->

      <el-dialog title="修改预定须知" :visible.sync="updateDialog">
        <el-form :model="updatePredeterminedInstructionsObj">
          <el-form-item label="开放时间:" :label-width="formLabelWidth">
            <el-input v-model="updatePredeterminedInstructionsObj.tm_bk_OpenTime" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="特殊人群政策:" :label-width="formLabelWidth">
            <el-input v-model="updatePredeterminedInstructionsObj.tm_bk_SpecialPolicy" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="预订提醒:" :label-width="formLabelWidth">
            <el-input v-model="updatePredeterminedInstructionsObj.tm_bk_Remind" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="温馨提示:" :label-width="formLabelWidth">
            <el-input v-model="updatePredeterminedInstructionsObj.tm_bk_HappyNotice" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="发票说明:" :label-width="formLabelWidth">
            <el-input v-model="updatePredeterminedInstructionsObj.tm_bk_TicketSay" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="退改规则:" :label-width="formLabelWidth">
            <el-input v-model="updatePredeterminedInstructionsObj.tm_bk_ReturnRule" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="特殊信息:" :label-width="formLabelWidth">
            <el-input v-model="updatePredeterminedInstructionsObj.tm_bk_SpecialMessage" type="textarea"></el-input>
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
      'predeterminedInstructionsList',
      'updatePredeterminedInstructionsObj',
      'ticketAttractionsList'
    ]),
    data() {
      return {
        siteName: '',
        isLoading: false,
        addOptions: {
          "tm_bk_TourSiteID": "",
          "tm_bk_OpenTime": "",
          "tm_bk_SpecialPolicy": "",
          "tm_bk_Remind": "",
          "tm_bk_HappyNotice": "",
          "tm_bk_TicketSay": "",
          "tm_bk_ReturnRule": "",
          "tm_bk_SpecialMessage": ""
        },
        addDialog: false,
        formLabelWidth: '120px',
        updateDialog: false,
        adminUserInfo:'',
        ticketAttractionsValue:'',
      }
    },
    methods: {
      //初始化景点信息
      initTicketAttraction() {
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "tm_ts_Code": "",    //景点编码
          "tm_ts_Name": "",//景点名称
          "tm_ts_TradeInfoID": this.adminUserInfo.sm_ui_ID,//供应商编码
          "tm_ts_IsDelete": 0,//必须传
          "tm_ts_IsPass": "",//是否通过审核(0审核中1通过审核2未通过审核)
          "tm_ts_ShowTop": "",//是否展示首页（0否，1是）
          "tm_ts_IsHot": "",//是否热门景点（0普通1热门)
          "tm_ts_ThemeTypeID": "",//主题编码
          "page": 1,
          "rows": 5
        };
        this.$store.dispatch('initTicketAttractions', options)
      },
      initData(id) {
        if( !id ){
          this.$notify({
            message: '请选择景点!!',
            type: 'error'
          });
          return
        }
        this.isLoading = true;
        let getBookKnow = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "tm_bk_TourSiteID": id,
        };
        this.$store.dispatch('initPredeterminedInstructions', getBookKnow)
          .then(() => {
            this.isLoading = false;
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          })
      },

      search(){
        this.initData(this.ticketAttractionsValue)
      },

      Add() {
        this.$store.commit('setTranstionFalse');
        this.addDialog = true;
        this.addOptions.tm_bk_TourSiteID = this.ticketAttractionsValue;
      },

      addSubmit() {
        let insertBookKnow = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "data": this.addOptions
        };
        this.$store.dispatch('addPredeterminedInstructionsSubmit', insertBookKnow)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData(this.ticketAttractionsValue)
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
        this.$store.commit('updatePredeterminedInstructions',id)
      },

      updateSubmit(){
        let updateBookKnow = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "data": this.updatePredeterminedInstructionsObj
        };
        this.$store.dispatch('updatePredeterminedInstructionsSubmit',updateBookKnow)
          .then(suc => {
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData(this.ticketAttractionsValue);
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          })
        this.updateDialog = false;
      }
    },
    created(){
      this.adminUserInfo = JSON.parse(sessionStorage.getItem('admin'));
      this.initTicketAttraction();
    }
  }
</script>
<style scoped>
  .search {
    margin: 20px;
  }
</style>
