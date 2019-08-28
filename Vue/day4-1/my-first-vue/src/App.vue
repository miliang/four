<template>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <!--这里写导航-->
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
</template>

<script>
  import MyNav from './components/MyNav.vue'
export default {//默认导出对象
  name: 'App',
  components:{
      mynav:MyNav
  },
  methods:{


  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import "assets/animate.css";
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
  line-height: 30px;
}

body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 220px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
  .el-main{
    line-height: 0;
  }
</style>
