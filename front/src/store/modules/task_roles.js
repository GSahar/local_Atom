import common from "@/services/common"

export default {
  state: {
    task_roles: [
      {
        id: 1,
        task_id: 1,
        name: 'Main',
      },
      {
        id: 2,
        task_id: 1,
        name: 'ASD',
      },
      {
        id: 3,
        task_id: 2,
        name: 'ASF',
      },
      {
        id: 4,
        task_id: 2,
        name: 'Main',
      },
      {
        id: 5,
        task_id: 2,
        name: 'Main',
      },
      {
        id: 6,
        task_id: 1,
        name: 'Main',
      },
      {
        id: 7,
        task_id: 1,
        name: 'ASD',
      },
      {
        id: 8,
        task_id: 2,
        name: 'ASF',
      },
      {
        id: 9,
        task_id: 2,
        name: 'Main',
      },
      {
        id: 10,
        task_id: 2,
        name: 'Main',
      },
      {
        id: 11,
        task_id: 1,
        name: 'Main',
      },
      {
        id: 12,
        task_id: 1,
        name: 'ASD',
      },
      {
        id: 13,
        task_id: 2,
        name: 'ASF',
      },
      {
        id: 14,
        task_id: 2,
        name: 'Main',
      },
      {
        id: 15,
        task_id: 2,
        name: 'Main',
      },
      {
        id: 16,
        task_id: 1,
        name: 'Main',
      },
      {
        id: 17,
        task_id: 1,
        name: 'ASD',
      },
      {
        id: 18,
        task_id: 2,
        name: 'ASF',
      },
      {
        id: 19,
        task_id: 2,
        name: 'Main',
      },
      {
        id: 20,
        task_id: 2,
        name: 'Main',
      },
      {
        id: 21,
        task_id: 1,
        name: 'Main',
      },
      {
        id: 22,
        task_id: 1,
        name: 'ASD',
      },
      {
        id: 23,
        task_id: 2,
        name: 'ASF',
      },
      {
        id: 24,
        task_id: 2,
        name: 'Main',
      },
      {
        id: 25,
        task_id: 2,
        name: 'Main',
      },
      {
        id: 26,
        task_id: 2,
        name: 'Main',
      }
    ]
  },
  getters: {
    getTaskRoles: (state) => (task_id) => {
      return state.task_roles.filter(task_role => task_role.task_id == task_id);
    },
    getTaskRole: (state) => (id) => {
      return state.task_roles.find(role => role.id == id);
    }
  },
  mutations: {
    setTaskRole(state,payload){
      state.task_roles = state.task_roles.map(task_role => {
        if(task_role.id === payload.id)
        {
          return common.copyObject(payload);
        }
        return task_role;
      });
    },
    addTaskRole(state,payload){
      //TODO Временно генерим id -> потом будем генерить в базе
      let id = state.task_roles.length > 0 ? state.task_roles[state.task_roles.length-1].id + 1 : 1;
      state.task_roles.push({
        id: id,
        task_id: payload.task_id,
        name: ''
      })
    },
    removeTaskRole(state, payload){
      state.task_roles = state.task_roles.filter(task_role => {
        return task_role.id !== payload.id;
      });
    }
  },
  actions: {
    setTaskRole({commit}, editedTaskRole){
      //TODO изменение в базе
      commit('setTaskRole', editedTaskRole);
    },
    addTaskRole({commit},task_id){
      //TODO вставка пользователя в базу
      commit('addTaskRole',task_id);
    },
    removeTaskRole({commit},id){
      //TODO удаление из базы
      commit('removeTaskRole',{
        id: id
      });
    }
  },

}
