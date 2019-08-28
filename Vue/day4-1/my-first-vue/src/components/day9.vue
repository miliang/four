<template>
  <div>
    <div class="littleNav">
      <span>会员管理</span>
      <span>/</span>
      <span>评论系列</span>
    </div>
    <div class="fa_table">
      <div class="searchBlock">
        <span>商品名称：</span>
        <input type="text" name="shopName">
        <button class="addShop" @click="selectName()">搜索</button>
        <span>评论者：</span>
        <input type="text" name="username">
        <button class="addShop" @click="selectName()">搜索</button>
        <span>等级：</span>
        <select name="level">
          <option value="great" name="shelves">好评</option>
          <option value="good" name="soldOut">中评</option>
          <option value="bad" name="soldOut">差评</option>
        </select>
        <button class="addShop" @click="selectName()">搜索</button>
      </div>

      <el-table :data="currentPageData"  style="width: 100%">
        <el-table-column label="编号" width="80">
          <template slot-scope="scope">
            <span style="margin-left: 0">{{ scope.row.j_id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="商品名称" width="120">
          <template slot-scope="scope">
            <span style="margin-left: -10px">{{ scope.row.j_pname}}</span>
          </template>
        </el-table-column>
        <el-table-column label="评论者" width="100">
          <template slot-scope="scope">
            <span style="margin-left: 0">{{ scope.row.j_username}}</span>
          </template>
        </el-table-column>
        <el-table-column label="评论等级" width="100">
          <template slot-scope="scope">
            <span >{{ scope.row.j_jcname}}</span>
          </template>
        </el-table-column>
        <el-table-column label="评论内容" width="430">
          <template slot-scope="scope">
            <span style="margin-left: -10px">{{ scope.row.j_content}}</span>
            <!--<i class="el-icon-edit" @click="handleEdit(scope.$index, scope.row)"></i>-->
          </template>
        </el-table-column>
        <el-table-column label="评论时间" width="230">
          <template slot-scope="scope">
            <span >{{ scope.row.j_date}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope" class="myEdit">
            <i class="el-icon-edit" @click="handleEdit(scope.$index, scope.row)"></i>
            <i class="el-icon-close" type="danger" @click="handleDelete(scope.$index, scope.row)"></i>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @current-change="changeNum" :page-size="pageNum" layout="prev, pager, next" :total="tableData.length">
        </el-pagination>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        pageD:'1',
        tableData: [],
        pageNum:4,
        currentPageData:[]
      }
    },
    methods: {
//        编辑方法
      handleEdit(index, row) {
        this.axios.get("/api//getEditJudge.do",{
//           //把所点击的这一行的id传给后台
          params:{
            myid:row.id
          }
        }).then((data)=>{
//          通过路由传参  $router.push跳转到changeSerialGoods页面（表单编辑页面）
//          通过params把查到的这一行的数据传给changeSerialGoods页面（表单编辑页面）
          //然后去看changeSerialGoods页面的操作
          console.log(data.data)
          this.$router.push({name:"replyComment",params:{xinxi:data}})
        })
      },
//      删除
      handleDelete(index, row) {
        console.log(index, row);
//        第一步拿到id将这个id传到服务器
//        第二步将渲染数组 tabledata修改
        this.axios.get("/api/getDeleteJudge.do",{
          params:{
            myid:row.id
          }
        }).then((data)=>{
          console.log(data)
//          后台已删除这一行数据
        })
//        除了要删除tableData的数据还要删除currentPageData，删除数据后重新分页
        let indexNew = this.pageNum*this.pageD-this.pageNum+index
        this.currentPageData.splice(index,1);
        this.tableData.splice(indexNew,1)
        if((this.tableData.length>0)&&(this.tableData.length>indexNew)){
          this.currentPageData.push(this.tableData[indexNew])
        }
      },
      //分页
      changeNum(val){
        this.pageD = val;
        this.currentPageData=[]
        for(var i = (val-1)*this.pageNum;i<val*this.pageNum;i++){
          if(i<this.tableData.length){
            this.currentPageData.push(this.tableData[i])
          }
        }

      }
    },
    created(){
      this.axios.get("/api/getJudgeTitle.do").then((data)=>{
        console.log(data.data)
        this.tableData = data.data
        for(let i=0;i<this.pageNum;i++){
          if(i<this.tableData.length){
            this.currentPageData.push(this.tableData[i])
          }
        }
      })
    }
  }
</script>
<style>
  .is-leaf{
    line-height: 40px;
  }
  .littleNav{
    margin-bottom: 20px;
    text-align: left;
    line-height: 80px;
  }
  .searchBlock{
    display: inline-block;
    color: #425866;
    margin-left: 5rem;
  }
  .searchBlock span{
    color: #425866;
  }
  .searchBlock input{
    border: 1px solid #ebebeb;
    background-color: #f4f8fb;
  }
  .block{
    margin: 1.5rem 0 ;
  }
  el-table>th{
    text-align: center;
  }
  /*th>.cell{*/
  /*margin-left: 30px;*/
  /*}*/


  .el-table th>.cell{
    text-align: center;
    color: #425866;
  }
  .cell>span{
    color: #425866;
  }
  /*隔行变色*/
  .el-table tr:nth-child(2n+1){
    background-color: #f4f8fb;
  }
  /*取消移入变色*/
  .el-table--enable-row-hover .el-table__body tr:hover>td{
    background-color: inherit;
  }
  .el-table{
    border-radius: 5px
  }
  .cell .el-icon-close{
    margin-left: 2rem;
  }
  .cell .el-icon-close,.cell .el-icon-edit{
    cursor: pointer;
  }
  .fa_table{
    background-color: #fff;
    position: relative;
    padding: 0;
  }
  .el-table{
    border-top:1px solid #ebebeb
  }
  .addShop{
    border: none;
    background-color: #188be3;
    color: white;
    padding: 0.2rem 0.5rem;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    top:5rem;
    /*left: 0.5rem;*/
  }
  .searchBlock{
    line-height: 40px;
    /*margin-bottom:15px ;*/
  }
  .el-main{
    line-height: 65px;
  }
</style>
