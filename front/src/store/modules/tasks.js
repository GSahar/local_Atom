import common from "@/services/common"

export default {
  state: {
    tasks: [
      {
        id: 1,
        name: '1С Бухгалтерия'
      },
      {
        id: 2,
        name: 'Личный кабинет'
      }
    ]
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
    addTask(state){
      //TODO Временно генерим id -> потом будем генерить в базе
      let id = state.tasks.length > 0 ? state.tasks[state.tasks.length-1].id + 1 : 1;
      state.tasks.push({
        id: id,
        name: '',
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
    addTask({commit}){
      //TODO вставка пользователя в базу
      commit('addTask');
    },
    removeTask({commit},id){
      //TODO удаление из базы
      commit('removeTask',{
        id: id
      });
    },
    addRoleToTask({commit}, newTaskRole){
      commit('addRoleToTask', newTaskRole);
    }
  },

}