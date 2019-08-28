<template>
    <div>
      <el-container>
        <el-main>
          <div id="table-div" v-if="shopping.length">
            <el-table :data="shopping" border>
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column prop="storage" label="型号"></el-table-column>
              <el-table-column prop="color" label="颜色"></el-table-column>
              <el-table-column prop="price" label="价格"></el-table-column>
              <el-table-column label="数量">
                <template slot-scope="scope">
                  <el-input-number v-model="num1" size="mini" :min="1" :max="10" label="描述文字"></el-input-number>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button size="mini" type="primary" icon="el-icon-delete">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div id="car-price">
              <i class="el-icon-sold-out"></i>
              <i>总计：</i>
              <span>{{num}}</span>
            </div>
          </div>
          <div class="cart-empty" v-else>
            <div id="content"><span class="pomegranage"><strong>购物车里什么都没有</strong></span></div>
          </div>
        </el-main>
      </el-container>

    </div>
</template>
<style scoped>

</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue',
              num:"",
              shopping:{},
              mun1:0
            }
        },
        componenet: {},
      created(){
            this.shopping.push(this.$router.history.current.params.xinxi)
      },
      destroyed(){
          console.log('组件被销毁了')
      }
    }
</script>
