<template>
  <div>
    <div class="littleNav">
      <span>主题商品</span>
      <span>/</span>
      <span>甜蜜系列</span>
    </div>
    <div class="fa_table">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><p>商品名称</p></el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><p>商品价格</p></el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><p>商品销量</p></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><div class="grid-content bg-purple">
          <el-input v-model="sName"></el-input>
        </div></el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><div class="grid-content bg-purple-light">
          <el-input v-model="sPrice"></el-input>
        </div></el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><div class="grid-content bg-purple">
          <el-input v-model="sXl"></el-input>
        </div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12"><p>商品类别</p></el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12"><p>商品库存</p></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12"><div class="grid-content bg-purple">
          <el-input v-model="sCate"></el-input>
        </div></el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12"><div class="grid-content bg-purple-light">
          <el-input v-model="sKc"></el-input>
        </div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><p>商品热图</p></el-col>
        <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18"><p>商品描述</p></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus
              avatar-uploader-icon"></i>
          </el-upload>
        </el-col>
        <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18"><div class="grid-content bg-purple-light">
          <el-input type="textarea" v-model="textarea3" :rows="8" resize="none">
          </el-input>
        </div></el-col>
      </el-row>
      <el-row>
        <el-button></el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
  import ElRow from "element-ui/packages/row/src/row";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";

  export default {
    components: {
      ElButton,
      ElRow},
    name: '',
    data () {
      return {
        sName:'',//商品名称
        sPrice:'',//商品价格
        sXl:'',//商品销量
        sCate:'',//商品类型
        sKc:'',//商品库存
        imageUrl: '',//商品热图
        textarea3: ''
      }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 10;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  /*textarea{*/
  /*height: 175px;*/
  /*resize: none;*/
  /*}*/

  p{
    line-height: 30px;
    margin-left: 10px;
    font-size: 12px;
    text-align: left;
  }
  .fa_table{
    background-color: #fff;
    position: relative;
    padding: 15px;
    /*text-align: left;*/
  }
  .el-col {
    border-radius: 4px;
  }
  .avatar-uploader{
    margin:5px 10px;
    line-height: 50px;
  }
  .bg-purple-dark {
    background: #f4f8fb;
  }
  .bg-purple {
    background: #f4f8fb;
  }
  .bg-purple-light {
    background: #f4f8fb;
  }
  .grid-content {
    border-radius: 4px;
    line-height: 20px;
    border: 1px solid #e4e4e4;
    min-height: 36px;
    margin: 5px 10px;
  }
  /*图片上传*/
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-upload,.el-upload--text{
    border: 1px dashed #d9d9d9;
  }
  .el-input__inner,.el-textarea__inner{
    background-color: #f4f8fb !important;
    text-align: left;
  }

</style>
