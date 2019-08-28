<template>
    <div>
      <div class="littleNav">
        <span>会员管理</span>
        <span>/</span>
        <span>评论管理</span>
        <span>/</span>
        <span>回复评论</span>
      </div>
      <div class="fa_table">
      <el-form ref="form" :model="form" labelWidth="80px">
        <el-col :span="8">
          <el-form-item label="编号"></el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="商品名称"></el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="用户名"></el-form-item>
        </el-col>
        <el-col :span="8">
          <el-input v-model="form.no" class="input"></el-input>
        </el-col>
        <el-col :span="8">
          <el-input v-model="form.productName" class="input"></el-input>
        </el-col>
        <el-col :span="8">
          <el-input v-model="form.username" class="input"></el-input>
        </el-col>
        <el-col :span="8">
          <el-form-item label="评价等级"></el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="评价时间"></el-form-item>
        </el-col>

        <el-col :span="10">
          <el-select v-model="form.level">
            <el-option label="好评" value="great"></el-option>
            <el-option label="中评" value="good"></el-option>
            <el-option label="差评" value="bad"></el-option>
          </el-select>
        </el-col>
        <el-col :span="10">
          <!--<el-date-picker type="datetime" v-model="form.date1" class="time" placeholder="选择日期时间"></el-date-picker>-->
          <el-input v-model="form.date1" class="time" disabled></el-input>
        </el-col>
          <el-form-item label="评价内容" class="desc"></el-form-item>
        <el-col :span="24">
        <el-input type="textarea" v-model="form.desc" :rows="10"></el-input>
        </el-col>
        <el-col :span="24">
        <el-input type="textarea" v-model="form.reDesc" :rows="5" placeholder="回复内容"></el-input>
        </el-col>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="myButton">提交</el-button>
          <el-button @click="onClose" class="myButton">取消</el-button>
        </el-form-item>
      </el-form>
      </div>
    </div>
</template>
<style>
  /*标题*/
  .littleNav{
    text-align: left;
    margin-top: 20px;
  }
  /*白色的背景*/
  .fa_table{
    margin-top: 3%;
    background-color: #fff;
    position: relative;
  }
  /*下拉框*/
.el-select{
  width: 70%;
  margin-left: -26%;
}
/*显示时间的输入框*/
  .time{
    margin-left: -59%;
    width: 76%;
  }
  /*标题文字*/
  .el-form-item__label{
    text-align: left;
    margin-left: 3%;
  }
  /*输入框*/
  .input{
    width: 96%;
  }
  /*评价内容*/
  .desc{
    float: left;
    margin-left: -82.5%;
    margin-top: 40px;
  }
  /*按钮*/
  .myButton{
   margin-top: 45%;
  }
  /*文本框*/
  .el-textarea{
    width: 98%;
  }
  .el-input__inner,.el-textarea__inner{
    background-color: #f4f8fb !important;
    text-align: left;
  }
</style>
<script>
    export default{
        data(){
            return {
                form:{
                    no:'',
                    productName:'',
                    username:'',
                    level:'',
                    desc:'',
                    date1: new Date(),
                    reDesc:''
                }
            }
        },
        methods:{
            onSubmit(){
                console.log('submit!');
            },
          onClose(){
                window.close();
          },
          created(){
            this.axios.get("/api/getAddJudge.do").then((data)=>{
              console.log(data.data)
              this.tableData = data.data
              for(var i=0;i<4;i++){
                this.currentPageData.push(this.tableData[i])
              }
            })
          }
        },
        componenet: {}
    }
</script>
