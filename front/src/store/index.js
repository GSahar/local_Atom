import { createStore } from 'vuex'
import drawer from './modules/drawer'
import users from './modules/users'

export default createStore({
  modules: {
    drawer,
    users
  }
})
