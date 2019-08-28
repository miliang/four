<template>
  <div>
    <div class="littleNav">
      <span>主题商品</span>
      <span>/</span>
      <span>甜蜜系列</span>
    </div>
    <div class="fa_table">
      <router-link to="/day3">
        <button class="addShop" @click="addNewgood()">添加商品</button>
      </router-link>
      <div class="searchBlock">
        <span>商品名称：</span>
        <input type="text" name="shopName">
        <button class="addShop" @click="selectName()">搜索</button>
        <span>商品价格：</span>
        <input type="text" name="shopPrice">
        <button class="addShop" @click="selectPrice()">搜索</button>
        <span>状态：</span>
        <select>
          <option value="shelves" name="shelves">上架</option>
          <option value="soldOut" name="soldOut">下架</option>
        </select>
      </div>

      <el-table :data="currentPageData"  style="width: 100%">
        <el-table-column label="编号" width="150">
          <template slot-scope="scope">
            <!--<i class="el-icon-time"></i>-->
            <span style="margin-left: 0">{{ scope.row.dp_id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="商品名称" width="150">
          <template slot-scope="scope">
            <span style="margin-left: 0">{{ scope.row.dp_name}}</span>
          </template>
        </el-table-column>
        <el-table-column label="价格" width="150">
          <template slot-scope="scope">
            <span style="margin-left: -10px">{{ scope.row.dp_price}}</span>
          </template>
        </el-table-column>
        <el-table-column label="销量" width="150">
          <template slot-scope="scope">
            <span style="margin-left: 0">{{ scope.row.dp_xl}}</span>
          </template>
        </el-table-column>
        <el-table-column label="库存" width="150">
          <template slot-scope="scope">
            <span >{{ scope.row.dp_kucun}}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态" width="180">
          <template slot-scope="scope">
            <span style="margin-left: -10px">{{ scope.row.state}}</span>
            <i class="el-icon-edit" @click="handleEdit(scope.$index, scope.row)"></i>
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
        tableData: [],
        pageNum:4,
        currentPageData:[]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
//        第一步拿到id将这个id传到服务器
//        第二步将渲染数组 tabledata修改
        this.axios.get("/api/single.do",{
          params:{
            myid:row.id
          }
        }).then((data)=>{
          console.log(data)
        })
        this.tableData.splice(index,1)
      },
      //分页
      changeNum(val){
        this.currentPageData=[]
//        console.log(val)
//        console.log(this.tableData)
        for(var i = (val-1)*4;i<val*4;i++){
          if(i<this.tableData.length){
            this.currentPageData.push(this.tableData[i])
          }
        }

      }
    },
    created(){
      this.axios.post("/api/single.do").then((data)=>{
        console.log(data.data)
        this.tableData = data.data
        for(var i=0;i<4;i++){
          this.currentPageData.push(this.tableData[i])
        }
      })
    }
//    changeColor(){
//      this.tr=table.getElementsByTagName("tr");
//      for(var k=0;k<this.tr.length;k++){
//        var obj=tr[k];
//        if(k%2==0){
//          obj.style.backgroundColor="rgba(0, 58, 0)" ;
//        }
//      }
//    }
  }
</script>
<style>
  /**{*/
  /*text-align: center;*/
  /*}*/
  /*.littleNav{*/
  /*margin-left: -65rem;*/
  /*}*/
  /*.searchBlock{*/
  /*display: inline-block;*/
  /*color: #425866;*/
  /*margin-left: 5rem;*/
  /*}*/
  /*.searchBlock span{*/
  /*color: #425866;*/
  /*}*/
  /*.searchBlock input{*/
  /*border: 1px solid #ebebeb;*/
  /*background-color: #f4f8fb;*/
  /*}*/
  /*.block{*/
  /*margin: 1.5rem 0 ;*/
  /*}*/
  /*el-table>th{*/
  /*text-align: center;*/
  /*}*/
  /*!*th>.cell{*!*/
  /*!*margin-left: 30px;*!*/
  /*!*}*!*/
  /*.el-table_2_column_8{*/
  /*line-height: 50px;*/
  /*}*/

  /*.el-table th>.cell{*/
  /*text-align: center;*/
  /*color: #425866;*/
  /*}*/
  /*.cell>span{*/
  /*color: #425866;*/
  /*}*/
  /*!*隔行变色*!*/
  /*.el-table tr:nth-child(2n+1){*/
  /*background-color: #f4f8fb;*/
  /*}*/
  /*!*取消移入变色*!*/
  /*.el-table--enable-row-hover .el-table__body tr:hover>td{*/
  /*background-color: inherit;*/
  /*}*/
  /*.el-table{*/
  /*border-radius: 5px*/
  /*}*/
  /*.cell .el-icon-close{*/
  /*margin-left: 2rem;*/
  /*}*/
  /*.cell .el-icon-close,.cell .el-icon-edit{*/
  /*cursor: pointer;*/
  /*}*/
  /*.fa_table{*/
  /*background-color: #fff;*/
  /*position: relative;*/
  /*}*/
  /*.el-table{*/
  /*border-top:1px solid #ebebeb*/
  /*}*/
  /*.addShop{*/
  /*border: none;*/
  /*background-color: #188be3;*/
  /*color: white;*/
  /*padding: 0.5rem 0.5rem;*/
  /*-webkit-border-radius: 2px;*/
  /*-moz-border-radius: 2px;*/
  /*border-radius: 2px;*/
  /*top:5rem;*/
  /*!*left: 0.5rem;*!*/

  /*}*/
  .is-leaf{
    line-height: 40px;
  }
  .littleNav{
    /*margin-left: -65rem;*/
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
</style>
