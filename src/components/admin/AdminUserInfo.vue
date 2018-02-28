<template>
  <div id="wrap" class="clearfix">
    <h1 class="userClass">供应商信息</h1>

    <!--数据展示-->
    <el-table
      :data="userInfo"
      highlight-current-row
      v-loading="isLoading"
      style="width: 100%;padding-top: 50px">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="供应商编号:">
              <span>{{ props.row.agentInfo.sm_ai_ID }}</span>
            </el-form-item>
            <el-form-item label="供应商商户号:">
              <span>{{ props.row.agentInfo.sm_ai_AgentID }}</span>
            </el-form-item>
            <el-form-item label="供应商名称:">
              <span>{{ props.row.agentInfo.sm_ai_Name }}</span>
            </el-form-item>
            <el-form-item label="供应商手机号码:">
              <span>{{ props.row.agentInfo.sm_ai_Telephone }}</span>
            </el-form-item>
            <el-form-item label="性别:">
              <span>{{ props.row.agentInfo.sm_ai_Sex | getSex }}</span>
            </el-form-item>
            <el-form-item label="固定电话:">
              <span>{{ props.row.agentInfo.sm_ai_FixPhoneAreaCode+"-" +props.row.agentInfo.sm_ai_FixPhoneContryCode}}</span>
            </el-form-item>
            <el-form-item label="QQ:">
              <span>{{ props.row.agentInfo.sm_ai_QQ }}</span>
            </el-form-item>
            <el-form-item label="传真:">
              <span>{{ props.row.agentInfo.sm_ai_FaxNo}}</span>
            </el-form-item>
            <el-form-item label="电子邮箱:">
              <span>{{ props.row.agentInfo.sm_ai_Email}}</span>
            </el-form-item>
            <el-form-item label="公司名称:">
              <span>{{ props.row.agentInfo.sm_ai_GoodName}}</span>
            </el-form-item>
            <el-form-item label="获许经营范围:">
              <span v-for="item in props.row.agentInfoScopeList" style="margin-right: 10px">{{item.sm_ts_Name}}</span>
            </el-form-item>
            <el-form-item label="公司地址:">
              <span>{{ props.row.agentInfo.sm_ai_Address}}</span>
            </el-form-item>
            <el-form-item label="注册成立时间:">
              <span>{{ props.row.agentInfo.sm_ai_RegTime}}</span>
            </el-form-item>
            <el-form-item label="注册资金:">
              <span>{{ props.row.agentInfo.sm_ai_RegMoney}}万元</span>
            </el-form-item>
            <el-form-item label="公司规模:">
              <span>{{ props.row.agentInfo.sm_ai_CompanyPersons}}</span>
            </el-form-item>
            <el-form-item label="结算币种:">
              <span>{{ props.row.agentInfo.sm_ai_BalanceCurrencyName}}</span>
            </el-form-item>
            <el-form-item label="合作类型:">
              <span v-for="item in props.row.agentInfoTypeList" style="margin-right: 10px">{{item.sm_cp_PartnerTypeName}}</span>
            </el-form-item>
            <el-form-item label="优势产品说明:">
              <span>{{ props.row.agentInfo.sm_ai_GoodIntroduce}}</span>
            </el-form-item>
            <el-form-item label="已合作的网销渠道:">
              <span>{{ props.row.agentInfo.sm_ai_PartnerWay}}</span>
            </el-form-item>
            <el-form-item label="是否三证合一:">
              <span>{{ props.row.agentInfo.sm_ai_IncludeCert | getIncludeCert}}</span>
            </el-form-item>
            <el-form-item label="营业执照号:">
              <span>{{ props.row.agentInfo.sm_ai_CertNo}}</span>
            </el-form-item>
            <el-form-item label="证件有效期 :">
              <span>{{ props.row.agentInfo.sm_ai_CertExpireTo}}</span>
            </el-form-item>
            <el-form-item label="营业执照扫描件 :">
              <img :src="item" alt="" v-for="item in props.row.agentInfo.sm_ai_CertImage"
                   style="width: 100px;height: 100px" v-show="props.row.agentInfo.sm_ai_CertImage.length">
            </el-form-item>
            <el-form-item label="税务登记号 :">
              <span>{{ props.row.agentInfo.sm_ai_FeeNo}}</span>
            </el-form-item>
            <el-form-item label="税务登记证扫描件 :">
              <img :src="item" alt="" v-for="item in props.row.agentInfo.sm_ai_FeeImage"
                   style="width: 100px;height: 100px" v-show="props.row.agentInfo.sm_ai_FeeImage.length">
            </el-form-item>
            <el-form-item label="其他证件号 :">
              <span>{{ props.row.agentInfo.sm_ai_OtherCert}}</span>
            </el-form-item>
            <el-form-item label="其他证件扫描件 :">
              <img :src="item" alt="" v-for="item in props.row.agentInfo.sm_ai_OtherImage"
                   style="width: 100px;height: 100px" v-show="props.row.agentInfo.sm_ai_OtherImage.length">
            </el-form-item>
            <el-form-item label="审核状态 :">
              <span>{{ props.row.agentInfo.sm_ai_IsPass | getPass}}</span>
            </el-form-item>
            <el-form-item label="创建时间 :">
              <span>{{ props.row.agentInfo.sm_ai_CreateTime}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="供应商编号"
        prop="agentInfo.sm_ai_ID">
      </el-table-column>
      <el-table-column
        label="供应商名称"
        prop="agentInfo.sm_ai_Name">
      </el-table-column>
      <el-table-column
        label="供应商手机号码"
        prop="agentInfo.sm_ai_Telephone">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            v-show="scope.row.agentInfo.sm_ai_IsPass!=1"
            @click="updateAdminUserInfo(scope.row.agentInfo.sm_ai_ID)">修改
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--修改-->
    <el-dialog title="收货地址" :visible.sync="updateDialog">
      <el-form :model="userInfoObj">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="userInfoObj.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="userInfoObj.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="updateDialog = false">取 消</el-button>
        <el-button type="primary" @click="updateDialog = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    name: '',
    data(){
      return {
        formLabelWidth:'120px',
        isLoading:false,
        userInfo:[],
        userInfoObj:{},
        updateDialog:false,//修改弹窗
      }
    },
    created(){
      let userInfo = JSON.parse(sessionStorage.getItem('admin'))
      let options = {
        "loginUserID": "huileyou",
        "loginUserPass": "123",
        "operateUserID": "",
        "operateUserName": "",
        sm_ai_Name:'',
        "sm_ai_ID": userInfo.sm_ai_ID,
        "page": 1,
        "rows": 5,
      };
      this.$store.dispatch('initAdminSupplier',options)
      .then(userInfo=>{
        this.userInfo = userInfo
        this.userInfoObj = userInfo[0]
      },err=>{
        this.$notify({
          message: err,
          type: 'error'
        });
      })
    },
    computed: mapGetters([]),
    methods: {
      //修改
      updateAdminUserInfo(id){
        console.log(this.userInfo)
        this.updateDialog = true;
        this.$store.commit('setTranstionFalse');
      },
      //
    },
  }
</script>
<style scoped>

</style>
