import common from "@/services/common";
import DB from '@/store/db/db';
import fake from "../db/fake";

export default {
  state: {
    users: fake.users
  },
  getters: {
    getUsers(state){
      return state.users
    },
    getUser: (state) => (userId) => {
      return state.users.find(user => user.id == userId);
    },
    getUserTasks: (state) => (userId) => {
      console.log(state.users);
      let roles = state.users.find(user => user.id == userId)?.roles??[];
      let tasks = Array.from(new Set(roles.map(role => role.tasks))).flat()
      return tasks;
    }
  },
  mutations: {
    setUser(state,payload){
      state.users = state.users.map(user => {
        if(user.id === payload.editedUser.id)
          return common.copyObject({...payload.editedUser, password: ''});
        return user;
      });
    },
    addUser(state,payload){
      //TODO Временно генерим id -> потом будем генерить в базе
      let id = state.users.length > 0 ? state.users[state.users.length-1].id + 1 : 1;
      state.users.push({
        C
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
    addUser({commit},user){
      //TODO вставка пользователя в базу
      commit('addUser',user);
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
    },
    async getUsersFromDB({commit}){
      let users = await DB.getUsers();
      for(let user of users.data){
        //let photoURL = URL.createObjectURL(user.photo);
        //TODO photo
        commit('addUser',{
          id: user.id,
          lastName: user.lastName??'Не указана',
          firstName: user.name??'Не указано',
          secondName: user.secondName??'Не указано',
          place: user.place??'Не указано',
          job: user.job??'Не указано',
          photo: null,
          email: user.email??'Не указан',
          password: '',
          roles: []
        })
      }
    },
    async addNewUser({commit}, newUser){
      let user = await DB.storeUser({
        ...newUser
      });
      commit('addUser',{
        id: user.id,
        lastName: user.lastName??'Не указана',
        firstName: user.name??'Не указано',
        secondName: user.secondName??'Не указано',
        place: user.place??'Не указано',
        job: user.job??'Не указано',
        photo: null,
        email: user.email??'Не указан',
        password: '',
        roles: []
      });
    }
  },

}
