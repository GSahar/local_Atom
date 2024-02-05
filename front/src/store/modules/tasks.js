import common from "@/services/common";
import DB from '@/store/db/db';
import fake from '../db/fake';

export default {
  state: {
    tasks: fake.tasks
  },
  getters: {
    getTasks(state){
      return state.tasks;
    },
    getTask: (state) => (taskId) => {
      return state.tasks.filter(task => task.id == taskId)[0]
    }

  },
  mutations: {
    setTask(state,payload){
      state.tasks = state.tasks.map(task => {
        if(task.id === payload.editedTask.id)
          return common.copyObject(payload.editedTask);
        return task;
      });
    },
    addTask(state,payload){
      state.tasks.push({
        id: payload.id,
        name: payload.name??'',
        roles: []
      })
    },
    removeTask(state, payload){
      state.tasks = state.tasks.filter(task => {
        return task.id !== payload.id;
      });
    },
    addRoleToTask(state, payload){
      state
        .tasks[payload.newTaskRole.task_id]
        .roles
        .push(state.task_roles[payload.newTaskRole.task_role_id]);
    }
  },
  actions: {
    setTask({commit}, editedTask){
      //TODO изменение в базе
      commit('setTask', editedTask);
    },
    addTask({commit},data){
      //TODO вставка пользователя в базу
      commit('addTask',data);
    },
    removeTask({commit},id){
      //TODO удаление из базы
      commit('removeTask',{
        id: id
      });
    },
    addRoleToTask({commit}, newTaskRole){
      commit('addRoleToTask', newTaskRole);
    },
    async getTasksFromDB({commit}){
      let tasks = await DB.getTasks();
      for(let task of tasks.data){
        //let photoURL = URL.createObjectURL(user.photo);
        //TODO photo
        commit('addTask',{
          id: task.id,
          name: task.title,
          description: task.description,
          roles: []
        })
      }
    },
    async addNewTask({commit}, newTask){
      let task = await DB.storeTask({
        ...newTask
      });
      commit('addTask',{
        id: task.id,
        name: task.title,
        description: task.description,
        task_roles: []
      })
    }
  },

}
