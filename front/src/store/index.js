import { createStore } from 'vuex';
import drawer from './modules/drawer';
import users from './modules/users';
import roles from './modules/roles';
import tasks from './modules/tasks';
import task_roles from './modules/task_roles';
import requests from './modules/requests';
import auth from './modules/auth';

export default createStore({
  modules: {
    drawer,
    users,
    roles,
    tasks,
    task_roles,
    requests,
    auth
  }
})
