import Vue from 'vue'
import Vuex from 'vuex'

import todo from './module-example/todo'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      todo
    },

    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
