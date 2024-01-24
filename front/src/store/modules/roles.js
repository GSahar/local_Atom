import common from "@/services/common"

export default {
  state: {
    roles: [
      {
        id: 1,
        name: 'Общая',
        task_roles: [
          {
            id: 3,
            name: 'Личный кабинет - Main'
          }
        ]
      },
      {
        id: 2,
        name: 'Бухгалтер',
        task_roles: []
      },
      {
        id: 3,
        name: 'Аналитик',
        task_roles: []
      }
    ]
  },
  getters: {
    getRoles(state){
      return state.roles
    }
  },
  mutations: {
    setRole(state,payload){
      state.roles = state.roles.map(role => {
        console.log(payload);
        if(role.id === payload.editedRole.id)
          return common.copyObject(payload.editedRole);
        return role;
      });
    },
    addRole(state){
      //TODO Временно генерим id -> потом будем генерить в базе
      let id = state.roles[state.roles.length-1].id + 1
      state.roles.push({
        id: id,
        name: ''
      })
    },
    removeRole(state, payload){
      state.roles = state.roles.filter(role => {
        return role.id !== payload.id;
      });
    },
    addTaskRoleToRole(state, payload){
      state
        .roles[payload.newTaskRole.role_id]
        .task_roles
        .push(state.task_roles[payload.newTaskRole.task_role_id]);
    }
  },
  actions: {
    setRole({commit}, editedRole){
      //TODO изменение в базе
      commit('setRole', editedRole);
    },
    addRole({commit}){
      //TODO вставка пользователя в базу
      commit('addRole');
    },
    removeRole({commit},id){
      //TODO удаление из базы
      commit('removeRole',{
        id: id
      });
    },
    addTaskRoleToRole({commit}, newTaskRole){
      commit('addTaskRoleToRole', newTaskRole);
    }
  },

}
