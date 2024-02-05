import common from "@/services/common";
import DB from '@/store/db/db';
import fake from "../db/fake";

export default {
  state: {
    roles: fake.roles
  },
  getters: {
    getRoles(state){
      return state.roles
    }
  },
  mutations: {
    setRole(state,payload){
      state.roles = state.roles.map(role => {
        if(role.id === payload.editedRole.id)
          return common.copyObject(payload.editedRole);
        return role;
      });
    },
    addRole(state,payload){
      //TODO Временно генерим id -> потом будем генерить в базе
      let id = state.roles.length > 0 ? state.roles[state.roles.length-1].id + 1 : 1;
      state.roles.push({
        id: payload.id,
        name: payload.name??'',
        description: payload.description??''
      })
    },
    removeRole(state, payload){
      state.roles = state.roles.filter(role => {
        return role.id !== payload.id;
      });
    },
    addTaskRoleToRole(state, payload){
      let role_id = payload.newTaskRole.role_id
      state.roles = state.roles.map(role => {
        if(role.id == role_id){
          let taskRoles = role.task_roles;
          let newTaskRole = payload.rootState.task_roles.task_roles.filter(role => role.id == payload.newTaskRole.task_role_id)[0];
          if(taskRoles.filter(item => item.id == newTaskRole.id).length > 0) return role
          taskRoles.push(newTaskRole);
          return {
            ...role,
            task_roles: taskRoles
          }
        }
        return role;
      })
    },
    removeTaskRoleFromRole(state, payload){
      let role_id = payload.taskRole.role_id
      state.roles = state.roles.map(role => {
        if(role.id == role_id){
          let taskRoles = role.task_roles;
          let taskRoleId = payload.rootState.task_roles.task_roles.filter(role => role.id == payload.taskRole.task_role_id)[0].id;
          taskRoles = taskRoles.filter(item => item.id != taskRoleId)
          return {
            ...role,
            task_roles: taskRoles
          }
        }
        return role;
      })
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
    addTaskRoleToRole({commit, rootState}, newTaskRole){
      commit('addTaskRoleToRole', {rootState: rootState,newTaskRole: newTaskRole});
    },
    removeTaskRoleFromRole({commit, rootState}, taskRole){
      commit('removeTaskRoleFromRole', {rootState: rootState,taskRole: taskRole});
    },
    async getRolesFromDB({commit}){
      let roles = await DB.getRoles();
      for(let role of roles.data){
        //let photoURL = URL.createObjectURL(user.photo);
        //TODO photo
        commit('addRole',{
          id: role.id,
          name: role.name,
          description: role.description,
        })
      }
    },
    async addNewRole({commit}, newRole){
      let role = await DB.storeRole({
        ...newRole
      });
      commit('addRole',{
        id: role.id,
        name: role.name,
        description: role.description
      })
    }
  },

}
