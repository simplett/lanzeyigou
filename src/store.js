import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state={
  userinfo:{}
}
console.log(state.userinfo);
const mutations={
  SAVE_USERINFO(state,userinfo)
  {
    state.userinfo=userinfo;
    localStorage.setItem("userinfo",值)
  }
}
export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
