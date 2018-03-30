<template>
  <div>
    <el-table
      :data="hotelPictureList"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="商品 ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="图片名称"
        prop="ht_ie_Name">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters([
      'hotelPictureList'
    ]),
    data() {
      return {
      }
    },
    methods: {
      initData() {
        let searchOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "ht_ie_ID": '',
          "ht_ie_Name": ''
        };
        this.$store.dispatch('initHotelPicture', searchOptions)
          .then(() => {
          }, err => {
            this.$notify({
              message: err,
              type: 'error'
            });
          })
      },
    },
    created() {
      this.initData();
    }
  }
</script>
<style scoped>
</style>
