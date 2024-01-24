import { createStore } from 'vuex'
import drawer from './modules/drawer'
import users from './modules/users'
import roles from './modules/roles'
import tasks from './modules/tasks'

export default createStore({
  modules: {
    drawer,
    users,
    roles,
    tasks
  }
})
