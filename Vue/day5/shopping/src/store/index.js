import Vue from 'vue'
import Vuex from 'vuex'
import Shopping from './module/ShoppingModule'

Vue.use(Vuex)

export default new Vuex.Store({
  module:{
    shopping:Shopping
  }
})
