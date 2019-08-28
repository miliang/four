<template>
    <div>
      <el-row class="tac">
        <el-col :span="24">
          <el-menu :router="true" default-active="/day3" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>浪漫玫瑰</span>
              </template>
              <el-submenu index="1-1">
                <template slot="title">玫瑰系列</template>
                <el-menu-item index="/index" >
                  红玫瑰
                </el-menu-item>
                <el-menu-item index="/day3" >
                  蓝色妖姬
                </el-menu-item>
                <el-menu-item index="/day1" >
                  紫玫瑰
                </el-menu-item>
                <el-menu-item index="/day2" >
                  计划收购
                </el-menu-item>
              </el-submenu>
              <el-submenu index="1-2">
                <template slot="title">蔷薇</template>
                <el-menu-item index="day4">芍药</el-menu-item>
                <el-menu-item index="day5">水仙</el-menu-item>
                <el-menu-item index="day6">茉莉</el-menu-item>
                <el-menu-item index="day7">昙花</el-menu-item>
                <el-menu-item index="day8">茶花</el-menu-item>
                <el-menu-item index="demo">杜鹃</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">牡丹</span>
            </el-menu-item>

          </el-menu>
        </el-col>
      </el-row>

    </div>
</template>
<style>
  a{
    text-decoration: none;
  }
  a:active{
    color: black;
  }
  a:visited{
    color: black;
  }
  .el-input_inner{
    background-color: #000000 !important;
  }
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        componenet: {},
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>
