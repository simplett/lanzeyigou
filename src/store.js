import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state={
  userinfo:{uname:"132111321"}
}
console.log(state.userinfo);
const mutations={
  SAVE_USERINFO(state,data)
  {
    //把用户信息存入本地存储
    localStorage.setItem("userinfo",data);

    let localuserinfo=localStorage.getItem("userinfo");
    state.userinfo=localuserinfo;
    
    console.log("函数被触发");
    console.log(state.userinfo)
  }
}
export default new Vuex.Store({
  state,
  mutations
})
