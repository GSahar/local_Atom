

export default {
  state: {
    drawerState: true
  },
  getters: {
    getDrawerState(state){
      return state.drawerState
    }
  },
  mutations: {
    toggleState(state, value){
      state.drawerState = !state.drawerState
    }
  },
  actions: {
   toggleDrawerState(ctx){
    ctx.commit('toggleState','')
   }
  },

}
