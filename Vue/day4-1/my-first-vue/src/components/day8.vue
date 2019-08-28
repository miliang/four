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
      <el-row :gutter="10">
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><p>编号</p></el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><p>商品名称</p></el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><p>用户名</p></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><div class="grid-content bg-purple">
          <el-input v-model="form.no" id="no"></el-input>
        </div></el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><div class="grid-content bg-purple-light">
          <el-input v-model="form.productName" id="pName"></el-input>
        </div></el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><div class="grid-content bg-purple">
          <el-input v-model="form.username" id="uName"></el-input>
        </div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><p>评论等级</p></el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><p>评论时间</p></el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><p>回复时间</p></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><div class="grid-content bg-purple-light">
          <el-select v-model="form.level" id="level">
            <el-option label="好评" value="great"></el-option>
            <el-option label="中评" value="good"></el-option>
            <el-option label="差评" value="bad"></el-option>
          </el-select>
        </div></el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><div class="grid-content bg-purple-light time">
          <el-input v-model="form.date1" id="oldDate" disabled></el-input>
        </div>
        </el-col><el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><div class="grid-content bg-purple-light time">
        <el-input v-model="form.recom_date" id="newDate" disabled></el-input>
      </div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><p>评论内容</p></el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content bg-purple-light">
          <el-input type="textarea" v-model="form.desc" id="description" disabled :rows="8" resize="none">
          </el-input>
        </div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"><p>回复内容</p></el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content bg-purple-light">
          <el-input type="textarea" v-model="form.reDesc" id="reDesc" :rows="8" resize="none">
          </el-input>
        </div></el-col>
      </el-row>
      <el-row>
        <el-button type="primary" @click="changeMsg()">保存</el-button>
        <el-button type="info">取消</el-button>
      </el-row>
    </div>
  </div>
</template>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  /*标题*/
  .littleNav{
    text-align: left;
    margin-top: 20px;
  }
  /*题目*/
  p{
    line-height: 30px;
    margin-left: 10px;
    font-size: 12px;
    text-align: left;
  }
  /*div的样式*/
  .grid-content {
    border-radius: 4px;
    line-height: 20px;
    border: 1px solid #e4e4e4;
    min-height: 36px;
    margin: 5px 10px;
  }
  /*白色的背景*/
  .fa_table{
    margin-top: 3%;
    background-color: #fff;
    position: relative;
  }
  /*列的样式*/
  .el-col {
    border-radius: 4px;
  }
  /*背景颜色*/
  .bg-purple-dark {
    background: #f4f8fb;
  }
  .bg-purple {
    background: #f4f8fb;
  }
  .bg-purple-light {
    background: #f4f8fb;
  }
  /*下拉框*/
  .el-select{
    width: 100%;
  }
  .el-input__inner,.el-textarea__inner{
    background-color: #f4f8fb !important;
    text-align: left;
    border: none;
  }
  .el-row{
    line-height: 60px;
  }
</style>
<script>
  export default{
    data(){
      return {
        form:{
          no:'',//编号
          productName:'',//商品名
          username:'',//用户名
          level:'',//评论等级
          desc:'',//描述
          date1:'',//评论时间
          reDesc:'',//回复内容
          recom_date:new Date()//回复时间
        }
      }
    },
    methods:{
      //点击修改按钮
      changeMsg(){
        var bianhao = document.getElementById("no").value;
        var pName = document.getElementById("pName").value;
        var username = document.getElementById("uName").value;
        var level = document.getElementById("level").value;
        var desc = document.getElementById("description").value;
        var oldDate = document.getElementById("oldDate").value;//评论时间
        var reDesc = document.getElementById("reDesc").value;
        var reDate = document.getElementById("newDate").value;//回复时间

        this.axios.get("/api//getchangeMessage.do",{
          params:{
            bianhao:bianhao,
            pName:pName,
            username:username,
            desc:desc,
            level:level,
            date1:oldDate,
            reDesc:reDesc,
            reDate:reDate
          }
        }).then((data)=>{
          console.log(data);
          this.$router.push({name:'comment'})
        });
      }
    },
    activated(){
      var lineData=this.$router.history.current.params.xinxi.data[0]
      console.log(lineData)
      document.getElementById("no").value = lineData.j_id;
      document.getElementById("pName").value = lineData.j_pname;
      document.getElementById("uName").value = lineData.j_username;
      document.getElementById("level").value = lineData.j_jcname;
      document.getElementById("description").value = lineData.j_content;
      document.getElementById("oldDate").value = lineData.j_date;
      document.getElementById("reDesc").value = lineData.j_comment;
      document.getElementById("newDate").value = new Date();
//      lineData.recom_date =document.getElementById("reDesc").value;

    },
    componenet: {}
  }
</script>
