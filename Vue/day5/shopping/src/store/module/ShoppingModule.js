import * as types from '../types'
const state = {
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
  car:[]
}
const actions = {
  //在actions里面 类似我们control，在这里对传递过来的参数进行修改
  //在这里可以使用一步的方法
  [types.ACTION_ADD_SHOPPINGCAR](context,shopping){
    if(state.car.length==0){
      shopping.num = 1
      context.commit(types.MUTATIONS_ADD_SHOPPINGCAR,shopping)
      console.log('数组为空的时候')
    }else{
    //  定义一个变量装状态
      var forState = false
      //将对象转换成字符串
      var myshopping = JSON.stringify(shopping)
      myshopping = myshopping.substring(0,myshopping.length-1)
      for(let key of state.car){
        console.log(JSON.stringify(key).indexOf(myshopping))
        if(!JSON.stringify(key).indexOf(myshopping)){
        //  不一样的情况
          forState = true
          key.num++
        //  跳出循环
          break
        }
      }
      if(!forState){
        context.commit(types.MUTATIONS_ADD_SHOPPINGCAR,shopping)
      }
    }

  }
}
const mutations = {
//类似于数据持久层  只对state进行修改  并且mutations里面的函数不能是异步函数
  [types.MUTATIONS_ADD_SHOPPINGCAR](state,shopping){
    state.car.push(shopping)
  }
}
export default {
  state,
  actions,
  mutations
}
