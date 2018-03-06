<template>
  <section id="wrap">
    <h1 class="userClass">商家产品信息</h1>
    <el-col :span="24" class="formSearch">
      <el-form :inline="true">
        <!--<el-form-item>-->
          <!--<span>商家产品名称筛选:</span>-->
        <!--</el-form-item>-->
        <!--<el-form-item>-->
          <!--<el-autocomplete-->
            <!--v-model="userName"-->
            <!--:fetch-suggestions="querySearchAsync"-->
            <!--placeholder="请输入商家名称"-->
            <!--@select="handleSelect"-->
          <!--&gt;</el-autocomplete>-->
        <!--</el-form-item>-->
        <el-form-item style="float: right;">
          <!--<el-button type="primary" @click="search">查询</el-button>-->
          <el-button type="primary" @click="addAdminMerchantProducts">新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>


    <el-table
      :data="adminTradeGoodList"
      highlight-current-row
      v-loading="isLoading"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商户编号:">
              <span>{{ props.row.ta_tg_TradeID }}</span>
            </el-form-item>
            <el-form-item label="产品标题:">
              <el-popover
                ref="popover1"
                placement="top-start"
                trigger="hover"
                :content="props.row.ta_tg_Title">
              </el-popover>
              <el-button v-popover:popover1 size="small">移入查看</el-button>
            </el-form-item>
            <el-form-item label="推荐价格:">
              <span>¥ {{ props.row.ts_tg_lowestPrice}}</span>
            </el-form-item>
            <el-form-item label="所属国家:">
              <span>{{ props.row.ts_tg_Country }}</span>
            </el-form-item>
            <el-form-item label="所属省市:">
              <span>{{ props.row.ts_tg_Provice+props.row.ts_tg_City}}</span>
            </el-form-item>
            <el-form-item label="产品描述:">
              <el-popover
                ref="popover1"
                placement="top-start"
                trigger="hover"
                :content="props.row.ta_tg_Describe">
              </el-popover>
              <el-button v-popover:popover1 size="small">移入查看</el-button>
            </el-form-item>
            <el-form-item label="成团地点:">
              <span>{{ props.row.ts_tg_GroupSite }}</span>
            </el-form-item>
            <el-form-item label="展示图片地址:">
              <img :src="item" alt="" v-for="item in props.row.ta_tg_ShowImages" style="width: 100px;height: 100px;margin-right: 10px">
            </el-form-item>
            <el-form-item label="产品创建时间:">
              <span>{{ props.row.ta_tg_CreateDateTime }}</span>
            </el-form-item>
            <el-form-item label="备注:">
              <el-popover
                ref="popover1"
                placement="top-start"
                trigger="hover"
                :content="props.row.ta_tg_Remark">
              </el-popover>
              <el-button v-popover:popover1 size="small">移入查看</el-button>
            </el-form-item>
            <!--<el-form-item label="是否展示首页:">-->
              <!--<span>{{ props.row.ts_tg_ShowTop==0?"否":"是" }}</span>-->
            <!--</el-form-item>-->
            <el-form-item label="是否精选:">
              <span>{{ props.row.ts_tg_Special==0?"非精选":"精选" }}</span>
            </el-form-item>
            <el-form-item label="境外线路:">
              <span>{{ props.row.ts_tg_LongOut | getLongOut }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="产品编码"
        prop="ta_tg_ID">
      </el-table-column>
      <el-table-column
        label="产品标题"
        prop="ta_tg_Title">
      </el-table-column>
      <el-table-column
        label="创建时间"
        prop="ta_tg_CreateDateTime">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="updateAdminMerchantProducts(scope.row.ta_tg_TradeID)">修改
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="DeleteAdminMerchantProducts(scope.row.ta_tg_TradeID)">删除
          </el-button>
          <el-button
            size="mini"
            @click="productLineManagement(scope.row.ta_tg_ID)">产品线路管理
          </el-button>
        </template>
      </el-table-column>
    </el-table>
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
    <!--添加产品-->
    <el-dialog title="添加产品" :visible.sync="addAdminMerchantProductsDialog">
      <el-form :model="addOptions">
        <el-form-item label="产品编号:" :label-width="formLabelWidth">
          <el-input v-model="addOptions.data.ta_tg_ID" placeholder="请输入产品编号"></el-input>
        </el-form-item>
        <el-form-item label="跟团游栏目:" :label-width="formLabelWidth">
          <el-select v-model="addOptions.data.ta_tg_ItemInfoID" placeholder="请选择跟团游栏目">
            <el-option
              v-for="item in homeAdminGroupTourList"
              :key="item.ii_ID"
              :label="item.ii_ItemName"
              :value="item.ii_ID">
            </el-option>
          </el-select>
        </el-form-item>
        <!--<el-form-item label="商家名称" :label-width="formLabelWidth">-->
          <!--<el-autocomplete-->
            <!--v-model="userName"-->
            <!--:fetch-suggestions="querySearchAsync"-->
            <!--placeholder="请输入商家"-->
            <!--@select="handleSelect"-->
          <!--&gt;</el-autocomplete>-->
          <!--<span style="color: #f60;">(模糊搜索)</span>-->
        <!--</el-form-item>-->
        <el-form-item label="产品标题:" :label-width="formLabelWidth">
          <el-input v-model="addOptions.data.ta_tg_Title" placeholder="请输入产品标题"></el-input>
        </el-form-item>
        <el-form-item label="所属国家:" :label-width="formLabelWidth">
          <el-input v-model="addOptions.data.ts_tg_Country" placeholder="请输入国家"></el-input>
        </el-form-item>
        <el-form-item label="所属省:" :label-width="formLabelWidth">
          <el-select v-model="value" placeholder="请选择省份" @change="changeProvice">
            <el-option
              v-for="item in proviceList"
              :key="item.sm_af_AreaName"
              :label="item.sm_af_AreaName"
              :value="item.sm_af_AreaID">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属市:" :label-width="formLabelWidth">
          <el-select v-model="addOptions.data.ts_tg_City" placeholder="请选择市">
            <el-option
              v-for="item in cityList"
              :key="item.sm_af_AreaID"
              :label="item.sm_af_AreaName"
              :value="item.sm_af_AreaName">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品描述:" :label-width="formLabelWidth">
          <el-input v-model="addOptions.data.ta_tg_Describe" placeholder="请输入产品描述"></el-input>
        </el-form-item>
        <el-form-item label="成团地点:" :label-width="formLabelWidth">
          <el-input v-model="addOptions.data.ts_tg_GroupSite" placeholder="请输入成团地点"></el-input>
        </el-form-item>
        <el-form-item label="推荐价格:" :label-width="formLabelWidth">
          <el-input v-model="addOptions.data.ts_tg_lowestPrice" placeholder="请输入推荐价格"></el-input>
        </el-form-item>
        <el-form-item label="展示图片:" :label-width="formLabelWidth">
          <a href="javascript:;" class="file">展示图片上传
            <input type="file" name="" ref="upload" accept="image/*" multiple>
          </a>
          <p v-for="item in ImageURL" v-show="ImageURL.length">{{item?item:""}}</p>
        </el-form-item>
        <!--<el-form-item label="是否展示首页:" :label-width="formLabelWidth">-->
          <!--<el-select v-model="addOptions.data.ts_tg_ShowTop" placeholder="请选择是否展示首页">-->
            <!--<el-option-->
              <!--label="是"-->
              <!--value="1">-->
            <!--</el-option>-->
            <!--<el-option-->
              <!--label="否"-->
              <!--value="0">-->
            <!--</el-option>-->
          <!--</el-select>-->
        <!--</el-form-item>-->
        <el-form-item label="是否精选:" :label-width="formLabelWidth">
          <el-select v-model="addOptions.data.ts_tg_Special" placeholder="请选择是否精选">
            <el-option
              label="精选"
              value="1">
            </el-option>
            <el-option
              label="非精选"
              value="0">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="境外线路:" :label-width="formLabelWidth">
          <el-select v-model="addOptions.data.ts_tg_LongOut" placeholder="请选择境外线路">
            <el-option
              label="长线"
              value="1">
            </el-option>
            <el-option
              label="短线"
              value="0">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注:" :label-width="formLabelWidth">
          <el-input v-model="addOptions.data.ta_tg_Remark" placeholder="请输入内容" type="textarea"
                    :autosize="{ minRows: 6, maxRows: 10}"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addAdminMerchantProductsDialog = false">取 消</el-button>
        <el-button type="primary" @click="addAdminMerchantProductsSubmit">确 定</el-button>
      </div>
    </el-dialog>
    <!--修改产品-->
    <el-dialog title="修改产品" :visible.sync="updateAdminMerchantProductsDialog">
      <el-form :model="updateAdminMerchantProductsObj">
        <el-form-item label="产品编号:" :label-width="formLabelWidth">
          <el-input v-model="updateAdminMerchantProductsObj.ta_tg_ID" placeholder="请输入产品编号"></el-input>
        </el-form-item>
        <el-form-item label="跟团游栏目:" :label-width="formLabelWidth">
          <el-select v-model="updateAdminMerchantProductsObj.ta_tg_ItemInfoID" placeholder="请选择跟团游栏目">
            <el-option
              v-for="item in homeAdminGroupTourList"
              :key="item.ii_ID"
              :label="item.ii_ItemName"
              :value="item.ii_ID">
            </el-option>
          </el-select>
        </el-form-item>
        <!--<el-form-item label="商家名称" :label-width="formLabelWidth">-->
          <!--<el-autocomplete-->
            <!--v-model="userName"-->
            <!--:fetch-suggestions="querySearchAsync"-->
            <!--placeholder="请输入商家"-->
            <!--@select="handleSelect"-->
          <!--&gt;</el-autocomplete>-->
          <!--<span style="color: #f60;">(模糊搜索)</span>-->
        <!--</el-form-item>-->
        <el-form-item label="产品标题:" :label-width="formLabelWidth">
          <el-input v-model="updateAdminMerchantProductsObj.ta_tg_Title" placeholder="请输入产品标题"></el-input>
        </el-form-item>
        <el-form-item label="所属国家:" :label-width="formLabelWidth">
          <el-input v-model="updateAdminMerchantProductsObj.ts_tg_Country" placeholder="请输入产品标题"></el-input>
        </el-form-item>
        <el-form-item label="所属省:" :label-width="formLabelWidth">
          <el-select v-model="value" placeholder="请选择省份" @change="changeProvice">
            <el-option
              v-for="item in proviceList"
              :key="item.sm_af_AreaName"
              :label="item.sm_af_AreaName"
              :value="item.sm_af_AreaID">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属市:" :label-width="formLabelWidth">
          <el-select v-model="updateAdminMerchantProductsObj.ts_tg_City" placeholder="请选择市">
            <el-option
              v-for="item in cityList"
              :key="item.sm_af_AreaID"
              :label="item.sm_af_AreaName"
              :value="item.sm_af_AreaName">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品描述:" :label-width="formLabelWidth">
          <el-input v-model="updateAdminMerchantProductsObj.ta_tg_Describe" placeholder="请输入产品描述"></el-input>
        </el-form-item>
        <el-form-item label="推荐价格:" :label-width="formLabelWidth">
          <el-input v-model="updateAdminMerchantProductsObj.ts_tg_lowestPrice" placeholder="请输入推荐价格"></el-input>
        </el-form-item>
        <el-form-item label="成团地点:" :label-width="formLabelWidth">
          <el-input v-model="updateAdminMerchantProductsObj.ts_tg_GroupSite" placeholder="请输入成团地点"></el-input>
        </el-form-item>
        <el-form-item label="展示图片:" :label-width="formLabelWidth">
          <a href="javascript:;" class="file">展示图片上传
            <input type="file" name="" ref="upload1" accept="image/*" multiple>
          </a>
         <p v-if="ImageURL.length" v-for="item in ImageURL">{{item}}</p>
          <p v-for="item in updateAdminMerchantProductsObj.ta_tg_ShowImages" v-show="updateAdminMerchantProductsObj.ta_tg_ShowImages.length" v-else>{{item?item:""}}</p>
        </el-form-item>
        <!--<el-form-item label="是否展示首页:" :label-width="formLabelWidth">-->
          <!--<el-select v-model="updateAdminMerchantProductsObj.ts_tg_ShowTop" placeholder="请选择是否展示首页">-->
            <!--<el-option-->
              <!--label="是"-->
              <!--value="1">-->
            <!--</el-option>-->
            <!--<el-option-->
              <!--label="否"-->
              <!--value="0">-->
            <!--</el-option>-->
          <!--</el-select>-->
        <!--</el-form-item>-->
        <el-form-item label="是否精选:" :label-width="formLabelWidth">
          <el-select v-model="updateAdminMerchantProductsObj.ts_tg_Special" placeholder="请选择是否精选">
            <el-option
              label="精选"
              value="1">
            </el-option>
            <el-option
              label="非精选"
              value="0">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="境外线路:" :label-width="formLabelWidth">
          <el-select v-model="updateAdminMerchantProductsObj.ts_tg_LongOut" placeholder="请选择境外线路">
            <el-option
              label="长线"
              value="1">
            </el-option>
            <el-option
              label="短线"
              value="0">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注:" :label-width="formLabelWidth">
          <el-input v-model="updateAdminMerchantProductsObj.ta_tg_Remark" placeholder="请输入内容" type="textarea"
                    :autosize="{ minRows: 6, maxRows: 10}"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="updateAdminMerchantProductsDialog = false">取 消</el-button>
        <el-button type="primary" @click="updateAdminMerchantProductsSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    name: '',
    data(){
      return {
        value:'',
        userName:'',
        formLabelWidth: '120px',
        total: 0,
        ImageURL: [],
        restaurants:[],
        productsID: '',//查询产品编号
        addAdminMerchantProductsDialog: false,//添加弹窗
        updateAdminMerchantProductsDialog: false,//修改弹窗
        isLoading: false,
        userObj:{},
        addOptions: {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            ts_tg_lowestPrice:'',
            ta_tg_TradeName:'',
            "ta_tg_ID": "",
            "ta_tg_TradeID": "",
            "ta_tg_ItemInfoID": "",
            "ta_tg_Title": "",
            "ts_tg_Country": "",
            "ts_tg_Provice": "",
            "ts_tg_City": "",
            "ts_tg_GroupSite": "",
            "ta_tg_Describe": "",
            "ta_tg_ShowImage": "",
            "ta_tg_Remark": "",
            "ts_tg_ShowTop": '',
            "ts_tg_Special": '',
            "ts_tg_LongOut": '',
          }
        }
      }
    },
    computed: mapGetters([
      'adminTradeGoodList',
      'homeAdminGroupTourList',
      'updateAdminMerchantProductsObj',
      'adminMerchantProductsId',
      'proviceList',
      'cityList'
    ]),
    created(){
      //初始化省
      let sCity = {
        "areaPid": 0
      };
      this.$store.dispatch('initProvice',sCity)
      let obj = JSON.parse(sessionStorage.getItem('admin'));
      this.userObj = obj;
      this.productsID = obj.sm_ai_AgentID
    },
    methods: {
      //选中省
      changeProvice(item){
        let obj = this.proviceList.filter(v=>{
          if(v.sm_af_AreaID==item){
            return true;
          }
          return false;
        })[0]
        this.updateAdminMerchantProductsObj.ts_tg_Provice = obj.sm_af_AreaName
        this.addOptions.data.ts_tg_Provice = obj.sm_af_AreaName

        let searchCity = {
          "areaPid": this.value
        }
        this.$store.dispatch('initCityList',searchCity)
      },
      //选中商家
      handleSelect(item){
        this.userName = item.value;
        this.productsID = item.id;
        this.updateAdminMerchantProductsObj.ta_tg_TradeID = item.id;
        this.addOptions.data.ta_tg_TradeID = item.id;
      },
      loadAll(num, name) {
        return new Promise((relove,reject)=>{
          var _this = this;
          var GetAdminBusinessInformationList = {
            "loginUserID": "huileyou",
            "loginUserPass": "123",
            "operateUserID": "",
            "operateUserName": "",
            "pcName": "",
            "tbUserID": "",
            "tbName": name?name:'',
            "isDelete": 0,
            "page": num?num:1,
            "rows": 5
          };
          //旅行社商户查询
          this.$store.dispatch('AdminBusinessInformationSearch',GetAdminBusinessInformationList)
          .then(data=>{
            relove(data)
          },err=>{
            this.$message({
              message: err,
              type: 'error'
            });
          })
        })
      },
      querySearchAsync(queryString, cb) {
        this.loadAll( 1,queryString).then(data => {
          data = data.map(item => {
            return {
              id: item.ts_tb_UserID,
              value: item.ts_tb_Name
            }
          })
          this.restaurants = data;
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            cb(this.restaurants);
          }, 10);
        })
      },
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
      //初始化数据
      initData(id, page){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "tradeID": id ? id : '',
          "userID": "",
          "pcName": "",
          "ID": '',
          'isDelete': 0,
          "page": page ? page : 1,
          "rows": 5
        };
        this.isLoading = true;
        this.$store.dispatch('initAdminTradeGoodList', options)
        .then((data) => {
          this.total = data.totalrows;
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
        this.initData(this.productsID, 1)
      },
      //查询初始化数据
      searchInitData(){
        this.initData(this.productsID)
      },

      //分页
      handleCurrentChange(num){
        this.initData(this.productsID, num);
      },
      //添加
      addAdminMerchantProducts(){
        this.$store.commit('setTranstionFalse');
        this.addAdminMerchantProductsDialog = true;
        this.uploaNode()
      },
      //添加提交
      addAdminMerchantProductsSubmit(){
        this.addOptions.data.ta_tg_ShowImage = this.ImageURL.join(',');
        this.addOptions.data.ta_tg_TradeID = this.productsID
        this.addOptions.data.ta_tg_TradeName = this.userObj.sm_ai_GoodName
        this.$store.dispatch('AddAdminMerchantProducts',this.addOptions)
          .then(() => {
            this.$notify({
              message: '添加成功!',
              type: 'success'
            });
            this.initData(this.productsID, 1);
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          });
        this.addAdminMerchantProductsDialog = false;
      },
      //修改
      updateAdminMerchantProducts(id){
        this.$store.commit('setTranstionFalse');
        this.updateAdminMerchantProductsDialog = true;
        this.uploaNode();
        this.$store.commit('initUpdateAdminMerchantProductsObj',id)
      },
      //修改提交
      updateAdminMerchantProductsSubmit(){
        let updateOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "ta_tg_ID": this.updateAdminMerchantProductsObj.ta_tg_ID,
            "ta_tg_TradeID": this.productsID,
            ts_tg_lowestPrice:this.updateAdminMerchantProductsObj.ts_tg_lowestPrice,
            "ta_tg_ItemInfoID": this.updateAdminMerchantProductsObj.ta_tg_ItemInfoID,
            "ta_tg_Title": this.updateAdminMerchantProductsObj.ta_tg_Title,
            "ts_tg_Country": this.updateAdminMerchantProductsObj.ts_tg_Country,
            "ts_tg_Provice": this.updateAdminMerchantProductsObj.ts_tg_Provice,
            "ts_tg_City": this.updateAdminMerchantProductsObj.ts_tg_City,
            "ts_tg_GroupSite": this.updateAdminMerchantProductsObj.ts_tg_GroupSite,
            "ta_tg_Describe": this.updateAdminMerchantProductsObj.ta_tg_Describe,
            "ta_tg_ShowImage": this.ImageURL.join(','),
            "ta_tg_IsDelete":this.updateAdminMerchantProductsObj.ta_tg_IsDelete,
            "ta_tg_Remark": this.updateAdminMerchantProductsObj.ta_tg_Remark,
            "ts_tg_ShowTop": this.updateAdminMerchantProductsObj.ts_tg_ShowTop,
            "ts_tg_Special": this.updateAdminMerchantProductsObj.ts_tg_Special,
            "ts_tg_LongOut":this.updateAdminMerchantProductsObj.ts_tg_LongOut
          }
        };
        this.$store.dispatch('UpdateAdminMerchantProducts',updateOptions)
          .then(() => {
            this.$notify({
              message: '修改成功!',
              type: 'success'
            });
            this.initData(this.productsID, 1);
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          });
        this.updateAdminMerchantProductsDialog = false;
      },
      //删除
      DeleteAdminMerchantProducts(id){
        let deleteOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "tgID": id
        };
        this.$store.dispatch('DeleteAdminMerchantProducts',deleteOptions)
        .then(() => {
          this.$notify({
            message: '删除成功!',
            type: 'success'
          });
          this.initData(this.productsID, 1);
        }, err => {
          this.$notify({
            message: err,
            type: 'error'
          });
        });
      },
      //点击跳转到产品线路管理
      productLineManagement(id){
        this.$store.commit('adminProductLineManagementId',id);
        this.$router.push({name:'AdminQueryProductInformation'})
        sessionStorage.setItem('index','1')
      }
    },
    mounted(){
      this.searchInitData();
    },
    updated(){
    },

  }
</script>
<style scoped>

</style>
