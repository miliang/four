<template>
    <div id="container">
      <h3>{{iPhone6s.name}}</h3>
      <div id="container_left">
        <img :src="iPhone6s.activeStyleUrl" alt="">
      </div>
      <div id="container_right">
        <div>
          <div id="describe">
            <h3>描述：</h3>
            <p>{{iPhone6s.desc}}</p>
          </div>
          <div class="color">
            <h3>颜色：</h3>
            <div :class="{active:color==index}" @click="changeColor(index)" v-for="(item,index) in iPhone6s.style" v-text="index"></div>
          </div>
          <div id="storage">
            <h3>内存：</h3>
            <div :class="{active:storage==index}" @click="changeStorage(index)" v-for="(item,index) in iPhone6s.storage" v-text="index"></div>
          </div>
          <div id="price">
            <h3>价钱：</h3>
            <p>{{iPhone6s.price}}</p>
          </div>
        </div>
      </div>
      <button @click="toShopping()">加入购物车</button>
    </div>

</template>
<style scoped>
  #container{
    outline:1px solid greenyellow;
  }
  #container_left{
    margin-left: 10%;
    outline: 1px solid red;
    float: left;
  }
  #container_right{
    text-align: left;
    outline: 1px solid #2c4aff;
    float: left;
    margin-left: 10%;
  }
  .color>div{
    float: left;
    padding: 10px;
    border: 1px solid black;
    line-height: 18px;
    margin-right: 10px;
  }
  #price{
    clear: both;/*清除浮动*/
  }
  #storage,.color{
    overflow: hidden;
  }
  #storage>div{
    border: 1px solid black;
    float: left;
    margin-right: 10px;
    padding: 10px;
    line-height: 18px;
  }
  #container_right>div{
    margin: 60px 0 0 10%;
  }
  #container_right>div button{
    padding: 10px 20px;
    background-color: red;
    margin-left: 200px;
  }
  .active{
    border: 1px solid red!important;
  }
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue',
              iPhone6s:{
                 name:'Apple/苹果 iPhone 6s',
                desc:'3D Touch、1200万像素照片、4K视频，强大功能集一身',
                prices:'5288 - 6888',
                isSelected:true,
                style:{
                     '银色':'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
                     '金色':'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
                     '黑色':'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
                     '深空灰色':'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png'
                },
                activeStyleUrl:'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
                storage:{
                     '16GB': 5288,
                     '32GB': 5688,
                     '64GB': 6088,
                     '128GB': 6888,
                }
              },
              color:'',
              storage:''
            }
        },
        componenet: {},
        methods:{
            changeColor(index){
                this.color = index;
            },
            changeStorage(index){
                this.storage = index;
                this.iPhone6s.price = this.iPhone6s.storage[index]
            },
          toShopping(){
                let shopObj = {
                    color:this.color,
                    storage:this.storage,
                    price:this.iPhone6s.price
                }
                this.$router.push({name:'shoppingCar',params:{xinxi:shopObj}})
          }
      }
    }
</script>
