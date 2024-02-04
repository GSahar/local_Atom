import common from "@/services/common"

export default {
  state: {
    users: [
      {
        id: 1,
        lastName: 'Иванов',
        firstName: 'Иван',
        secondName: 'Иванович',
        place: 'Отдел технического анализа',
        job: 'Аналитик',
        photo: '',
        roles: [],
        task_roles: []
      },
      {
        id: 2,
        lastName: 'Афонина',
        firstName: 'Антонина',
        secondName: 'Семеновна',
        place: 'Бухгалтерия',
        job: 'Бухгалтер',
        photo: '',
        roles: [],
        task_roles: []
      },
      {
        id: 3,
        lastName: 'Петрова',
        firstName: 'Ольга',
        secondName: 'Ивановна',
        place: 'Отдел технического контроля',
        job: 'Контроллер',
        photo: '',
        roles: [],
        task_roles: []
      }
    ]
  },
  getters: {
    getUsers(state){
      return state.users
    }
  },
  mutations: {
    setUser(state,payload){
      state.users = state.users.map(user => {
        if(user.id === payload.editedUser.id)
          return common.copyObject(payload.editedUser);
        return user;
      });
    },
    addUser(state){
      //TODO Временно генерим id -> потом будем генерить в базе
      let id = state.users.length > 0 ? state.users[state.users.length-1].id + 1 : 1;
      state.users.push({
        id: id,
        lastName: '',
        firstName: '',
        secondName: '',
        place: '',
        job: ''
      })
    },
    removeUser(state, payload){
      state.users = state.users.filter(user => {
        return user.id !== payload.id;
      });
    },
    addRoleToUser(state, payload){
      state.users = state.users.map(user => {
        let roles = user.roles;
        if(user.id == payload.userId && !roles.find(role => role.id == payload.roleId)){
          roles.push(payload.rootState.roles.roles.find(role => role.id == payload.roleId));
        }
        return {
          ...user,
          roles: roles
        }
      })
    },
    addTaskRoleToUser(state, payload){
      state.users = state.users.map(user => {
        let taskRoles = user.task_roles;
        if(user.id == payload.userId && !taskRoles.find(task_role => task_role.id == payload.taskRoleId)){
          taskRoles.push(payload.rootState.task_roles.task_roles.find(task_role => task_role.id == payload.taskRoleId));
        }
        return {
          ...user,
          task_roles: taskRoles
        }
      })
    },
    removeRoleFromUser(state, payload){
      state.users = state.users.map(user => {
        let roles = user.roles;
        if(user.id == payload.userId){
          roles = roles.filter(role => role.id != payload.roleId);
        }
        return {
          ...user,
          roles: roles
        }
      })
    },
    removeTaskRoleFromUser(state, payload){
      state.users = state.users.map(user => {
        let taskRoles = user.task_roles;
        if(user.id == payload.userId){
          taskRoles = taskRoles.filter(task_role => task_role.id != payload.taskRoleId);
        }
        return {
          ...user,
          task_roles: taskRoles
        }
      })
    }
  },
  actions: {
    setUser({commit}, editedUser){
      //TODO изменение в базе
      commit('setUser', editedUser);
    },
    addUser({commit}){
      //TODO вставка пользователя в базу
      commit('addUser');
    },
    removeUser({commit},id){
      //TODO удаление из базы
      commit('removeUser',{
        id: id
      });
    },
    addRoleToUser({commit, rootState}, newRole){
      commit('addRoleToUser',{
        rootState: rootState,
        userId: newRole.userId,
        roleId: newRole.roleId
      })
    },
    addTaskRoleToUser({commit, rootState}, newTaskRole){
      commit('addTaskRoleToUser',{
        rootState: rootState,
        userId: newTaskRole.userId,
        taskRoleId: newTaskRole.taskRoleId
      })
    },
    removeRoleFromUser({commit}, role){
      commit('removeRoleFromUser', role)
    },
    removeTaskRoleFromUser({commit}, taskRole){
      commit('removeTaskRoleFromUser', taskRole)
    }
  },

}
