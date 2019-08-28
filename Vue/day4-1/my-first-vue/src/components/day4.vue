<template>
  <div>
  <el-table :data="currentPageData" style="width: 100%">
    <el-table-column label="编号" width="180">
      <template slot-scope="scope">
        <!--<i class="el-icon-time"></i>-->
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column label="商品名称" width="180">
      <template slot-scope="scope">
        <!--<i class="el-icon-time"></i>-->
        <span style="margin-left: 10px">{{ scope.row.hh_name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="用户名" width="180">
      <template slot-scope="scope">
        <!--<i class="el-icon-time"></i>-->
        <span style="margin-left: 10px">{{ scope.row.m_username }}</span>
      </template>
    </el-table-column>
    <el-table-column label="日期" width="180">
      <template slot-scope="scope">
        <!--<i class="el-icon-time"></i>-->
        <span style="margin-left: 10px">{{ scope.row.jc_name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="日期" width="180">
      <template slot-scope="scope">
        <!--<i class="el-icon-time"></i>-->
        <span style="margin-left: 10px">{{ scope.row.content }}</span>
      </template>
    </el-table-column>
    <el-table-column label="姓名" width="180">
      <template slot-scope="scope">
        <!--<i class="el-icon-time"></i>-->
        <span style="margin-left: 10px">{{ scope.row.u_date }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <router-link to="/day1"> <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button></router-link>

        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <div class="block">
      <el-pagination @current-change="changeNum" :page-size="pageNum" layout="prev, pager, next" :total="tableData.length"></el-pagination>
    </div>
  </div>
  <!--<el-form ref="form" :model="form" labelWidth="80px">-->
  <!--<el-col :span="8">-->
  <!--<el-form-item label="编号"></el-form-item>-->
  <!--</el-col>-->
  <!--<el-col :span="8">-->
  <!--<el-form-item label="商品名称"></el-form-item>-->
  <!--</el-col>-->
  <!--<el-col :span="8">-->
  <!--<el-form-item label="用户名"></el-form-item>-->
  <!--</el-col>-->
  <!--<el-col :span="8">-->
  <!--<el-input v-model="form.no" class="input"></el-input>-->
  <!--</el-col>-->
  <!--<el-col :span="8">-->
  <!--<el-input v-model="form.productName" class="input"></el-input>-->
  <!--</el-col>-->
  <!--<el-col :span="8">-->
  <!--<el-input v-model="form.username" class="input"></el-input>-->
  <!--</el-col>-->
  <!--<el-col :span="8">-->
  <!--<el-form-item label="评价等级"></el-form-item>-->
  <!--</el-col>-->
  <!--<el-col :span="8">-->
  <!--<el-form-item label="评价时间"></el-form-item>-->
  <!--</el-col>-->

  <!--<el-col :span="10">-->
  <!--<el-select v-model="form.level">-->
  <!--<el-option label="好评" value="great"></el-option>-->
  <!--<el-option label="中评" value="good"></el-option>-->
  <!--<el-option label="差评" value="bad"></el-option>-->
  <!--</el-select>-->
  <!--</el-col>-->
  <!--<el-col :span="10">-->
  <!--&lt;!&ndash;<el-date-picker type="datetime" v-model="form.date1" class="time" placeholder="选择日期时间"></el-date-picker>&ndash;&gt;-->
  <!--<el-input v-model="form.date1" class="time" disabled></el-input>-->
  <!--</el-col>-->
  <!--<el-form-item label="评价内容" class="desc"></el-form-item>-->
  <!--<el-col :span="24">-->
  <!--<el-input type="textarea" v-model="form.desc" :rows="10"></el-input>-->
  <!--</el-col>-->
  <!--<el-col :span="24">-->
  <!--<el-input type="textarea" v-model="form.reDesc" :rows="5" placeholder="回复内容"></el-input>-->
  <!--</el-col>-->
  <!--<el-form-item>-->
  <!--<el-button type="primary" @click="onSubmit" class="myButton">提交</el-button>-->
  <!--<el-button @click="onClose" class="myButton">取消</el-button>-->
  <!--</el-form-item>-->
  <!--</el-form>-->
</template>
<style scoped>
  .el-table th>.cell {
    text-align: center;
    color: #425866;
  }
  /*!*标题文字*!*/
  /*.el-form-item__label{*/
  /*text-align: left;*/
  /*margin-left: 3%;*/
  /*}*/
  /*!*输入框*!*/
  /*.input{*/
  /*width: 96%;*/
  /*}*/
  /*!*评价内容*!*/
  /*.desc{*/
  /*float: left;*/
  /*margin-left: -82.5%;*/
  /*margin-top: 60px;*/
  /*}*/
  /*!*按钮*!*/
  /*.myButton{*/
  /*margin-top: 45%;*/
  /*}*/
  /*!*文本框*!*/
  /*.el-textarea{*/
  /*width: 98%;*/
  /*}*/
  /*.el-input__inner,.el-textarea__inner{*/
  /*background-color: #f4f8fb !important;*/
  /*text-align: left;*/
  /*}*/

</style>
<<script>
  export default {
    data() {
      return {
        tableData: [],
        pageNum: 3,
        currentPageData:[]
    }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
       console.log("koldjfildsj")
        console.log(index)
      },
      handleDelete(index, row) {
        console.log(index, row);
        //第一步拿到id将这个id传到服务器
        //第二步将渲染数组 tableData修改
        this.axios.get("api/getJudgeTitle.do", {
          params: {
            myid: row.id
          }
        }).then((data) => {
          console.log(data);
        })
        console.log(index);
        console.log(row.id);
        this.currentPageData.splice(index, 1);
        this.tableData.splice(index, 1);
      },
      changeNum(val){
        this.currentPageData = [];
        console.log(val);
//        如果最后一页的条数小于每一页应该渲染的条数
        for (let i = (val - 1) * 3; i < val * 3; i++) {
          //最终的目的不能让currentPageData有空值
          if (i < this.tableData.length) {
            this.currentPageData.push(this.tableData[i]);
          }
        }
      }
    },

    created(){
      this.axios.get("/api/getJudgeTitle.do").then((data)=>{
        console.log(data);
        this.tableData = data.data;
        for(let i=0;i<3;i++){
          this.currentPageData.push(this.tableData[i])
        }
      })
    }
  }
</script>
