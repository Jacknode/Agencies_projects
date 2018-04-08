<template>
  <div>
    <div id="wrap" class="clearfix">
      <h1 class="userClass">预定须知</h1>

      <!--添加-->
      <div class="add">

        <el-button type="primary" @click="Add">新增</el-button>

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
      'updatePredeterminedInstructionsObj'
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
        number: '',
        updateDialog: false
      }
    },
    methods: {
      initData(id) {
        this.isLoding = true;
        let getBookKnow = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "tm_bk_TourSiteID": id ? id : '',
        };
        this.$store.dispatch('initPredeterminedInstructions', getBookKnow)
          .then(() => {
            this.isLoding = false;
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
        this.addOptions.tm_bk_TourSiteID = this.number;
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
            this.initData(this.number);
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          })
        this.updateDialog = false;
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
