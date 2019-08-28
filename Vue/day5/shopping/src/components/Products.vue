<template>
    <div id="myProducts">
      <div class="products_item" v-for="item in commodity">
        <router-link to="/Detail">
          <img src="../assets/logo.png" alt="">
        </router-link>
        <span class="commodity">{{item.name}}</span>
        <span class="shoppingCar_icon">加入购物车</span>
      </div>
    </div>
</template>
<style scoped>
  .products_item{
    border:1px solid red;
    display: inline-block;
    text-align: center;
    width: 25%;
    margin: 20px 30px;
  }
  #myProducts{
    margin: auto;
  }
  .commodity{
    color: red;
    display: inline-block;
    margin: 20px;
  }
  .shoppingCar_icon{
    color: salmon;
    display: inline-block;
    margin: 20px;
  }
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue',
              commodity:[
                {id:1,name:'1号商品的描述'},
                {id:2,name:'2号商品的描述'},
                {id:3,name:'3号商品的描述'},
                {id:4,name:'4号商品的描述'},
                {id:5,name:'5号商品的描述'},
                {id:6,name:'6号商品的描述'},
              ]
            }
        },
        componenet: {}
    }
</script>
