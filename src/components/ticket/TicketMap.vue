<template>
  <div id="wrap" class="clearfix">
    <h1 class="userClass">导览信息</h1>
    <!--查询栏-->
    <el-col :span="24" class="formSearch">
      <el-form :inline="true">
        <el-form-item>
          <span>导览名称筛选:</span>
        </el-form-item>
        <el-form-item>
          <el-input v-model="siteName" size="small"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search" size="small">查询</el-button>
          <el-button type="primary" @click="Add" size="small">新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!--分页-->
    <div class="block" style="float: right;">
      <el-pagination
        @current-change="handleCurrentChange"
        :page-size="5"
        layout="total, prev, pager, next"
        :total="total"
        v-show="total"
      >
      </el-pagination>
    </div>

    <el-dialog title="添加地图坐标信息" :visible.sync="addDialog">
      <el-form :model="addOptions">
        <el-form-item label="小景点名称:" :label-width="formLabelWidth">
          <el-input v-model="addOptions.tm_se_Name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="小景点图片:" :label-width="formLabelWidth">
          <el-upload
            class="upload-demo"
            action="string"
            :on-remove="handleRemove"
            :file-list="fileList"
            :http-request="upload"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialog = false">取 消</el-button>
        <el-button type="primary" @click="addDialog = false">确 定</el-button>
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
        total: 0,
        siteName: '',
        isLoading: false,
        addDialog: false,//添加弹窗
        updateDialog: false,//修改弹窗
        addOptions: {
          "loginUserID": "huileyou",    //惠乐游用户ID
          "loginUserPass": "123",    //惠乐游用户密码
          "operateUserID": "",    //操作员编码
          "operateUserName": "",    //操作员名称
          "pcName": "",    //机器码
          "data": {
            "tm_se_Code": "",  //景点编号
            "tm_se_Name": "",  //小景点名称
            "tm_se_HandX": "",  //位于手绘图X
            "tm_se_HandY": "",  //位于手绘图Y
            "tm_se_Vedio": "",  //VR视频
            "tm_se_Sound": "",  //音频
            "tm_se_Intro": "",  //小景点介绍
            "tm_se_Image": "",  //小景点图片
            "tm_se_Remark": "",  //备注
          }
        },
        fileList:[]
      }
    },
    computed: mapGetters([
      'ticketMapList'
    ]),
    created(){
      this.id = this.$route.query.id;
      this.initData()
    },
    methods: {
      upload(item){
        var fd = new FormData();
        fd.append("fileToUpload", item.file);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://image.1000da.com.cn/PostImage/PostFile");
        xhr.send(fd);
        xhr.onreadystatechange = ()=>{
          if (xhr.readyState == 4 && xhr.status == 200) {
            let obj = JSON.parse(xhr.responseText);
            this.fileList.push({
              url:obj.data
            })
            item.onSuccess('配时文件上传成功')
            console.log(obj)
          }
        }
      },
      handleRemove(file) {
        this.fileList = this.fileList.filter(item=>{
          if(item.uid==file.uid){
            return false;
          }
          return true;
        })
      },
      //分页
      handleCurrentChange(num){
        this.initData(this.siteName,num)
      },
      initData(name,page){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "tm_se_ID": "",//景区小景点编码
          "tm_se_Code": this.id,//景点编号
          "tm_se_Name": name?name:'',//小景点名称
          "page": page?page:1,//页码
          "rows": 5//条数
        };
        this.isLoading = true;
        this.$store.dispatch('initTicketMap',options)
        .then(total => {
          this.total = total;
          this.isLoading = false;
        }, err => {
          this.$notify({
            message: err,
            type: 'error'
          });
        })
      },
      //查询
      search(){
        this.initData(this.siteName)
      },
      //添加
      Add(){
        this.$store.commit('setTranstionFalse');
        this.addDialog = true;
      }
    },
  }
</script>
<style scoped>

</style>
