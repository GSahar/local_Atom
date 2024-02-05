import { createStore } from 'vuex';
import drawer from './modules/drawer';
import users from './modules/users';
import roles from './modules/roles';
import tasks from './modules/tasks';
import requests from './modules/requests';
import auth from './modules/auth';
import task_types from './modules/task_types';

export default createStore({
  modules: {
    drawer,
    users,
    roles,
    tasks,
    requests,
    auth,
    task_types
  }
})
