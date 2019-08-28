<template>
  <!--<div id="app">-->
    <!--<img src="./assets/logo.png">-->
    <!--<div>-->
      <!--<button @click="toDay3">day3</button>-->
     <!--<router-link to="index">hello world</router-link>-->
    <!--</div>-->
    <!--<router-view/>-->
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <!--在这里写导航-->
        <mynav></mynav>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>

  <!--</div>-->
</template>

<script>
import MyNav from './components/MyNav.vue'
export default {
  name: 'App',
  components:{
     mynav:MyNav
  },
  methods:{
//    toDay3(){
//        this.$router.push({path:'day3'})
//    },

  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
