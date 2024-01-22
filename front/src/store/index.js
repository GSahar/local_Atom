import { createStore } from 'vuex'
import drawer from './modules/drawer'
import users from './modules/users'
import roles from './modules/roles'

export default createStore({
  modules: {
    drawer,
    users,
    roles
  }
})
