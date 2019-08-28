<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-col :span="8">
        <el-form-item label="编号"></el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="商品名"></el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item  label="用户名"></el-form-item>
      </el-col>
      <el-col :span="8" >
        <el-input v-model="form.no"></el-input>
      </el-col>
      <el-col :span="8" >
        <el-input v-model="form.productName"></el-input>
      </el-col>
      <el-col :span="8" >
        <el-input v-model="form.name"></el-input>
      </el-col>

      <el-col :span="12">
        <el-form-item label="评论日期"></el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="评论等级"></el-form-item>
      </el-col>
      <el-col :span="10" >
        <el-input v-model="form.date1"></el-input>
      </el-col>
      <el-col :span="12" >
       <el-select v-model="form.level" placeholder="请选择">
         <el-option label="等级一" value="好评"></el-option>
         <el-option label="等级二" value="中评"></el-option>
         <el-option label="等级三" value="差评"></el-option>
       </el-select>
      </el-col>
      <el-form-item label="评价内容"></el-form-item>
      <el-input type="textarea" :rows="10" v-model="form.desc"></el-input>
      <el-form-item label="回复内容"></el-form-item>
      <el-input type="textarea" :rows="10" v-model="form.desc"></el-input>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          no:'',
          productName: '',
          name: '',
          level:'',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>
  div .el-input{

    line-height: 20px;
  }

  element.style {
  }
  .el-form-item {
    margin-bottom: 22px;
  }
  user agent stylesheet
  div {
    display: block;
  }
  /*.el-main {*/
  /*line-height: 20px;*/
  /*outline: 5px solid crimson;*/
  /*}*/
  .el-col-8{
    margin-top: -20px;
  }
  .el-col-10{
    margin-top: -20px;
  }
  .el-textarea__inner{
    margin-top: 60px;
  }
  .el-input{
    width: 96%;
  }
  .el-form-item[data-v-0a75b589]{
    margin-top: 20px;
  }
</style>
