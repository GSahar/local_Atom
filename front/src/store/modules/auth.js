import common from "@/services/common";
import DB from '@/store/db/db';

export default {
  state: {
    auth: {}
  },
  getters: {
    getAuth(state){
      return state.auth;
    }
  },
  mutations: {
    setAuth(state,payload){
      state.auth = payload;
    },

  },
  actions: {
    //TODO переделать логин
    login({commit, rootState}, payload){
      if(!payload.email) return false;
      let user = rootState.users.users.find(user => user.email == payload.email && user.password == (payload.password??''));
      if(user){
        commit('setAuth',user);
        return true;
      }
      return false;
    }
  },

}
