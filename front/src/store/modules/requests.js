import common from "@/services/common";
import DB from '@/store/db/db';
import fake from "../db/fake";

export default {
  state: {
    requests: fake.requests
  },
  getters: {
    getRequests(state){
      return state.requests
    },
    getRequestsByUser: (state) => (userId) => {
      return state.requests.filter(request => request.user_id == userId);
    },
    getRequestsByStatus: (state) => (status) => {
      return state.requests.filter(request => request.status == status);
    }
  },
  mutations: {
    setRequest(state,payload){
      state.requests = state.requests.map(request => {
        if(request.id === payload.editedrequest.id)
          return common.copyObject({...payload.editedrequest, password: ''});
        return request;
      });
    },
    addRequest(state,payload){
      //TODO Временно генерим id -> потом будем генерить в базе
      let id = state.requests.length > 0 ? state.requests[state.requests.length-1].id + 1 : 1;
      state.requests.push({
        id: payload.id,
        task_id: payload.task_id,
        user_id: payload.user_id,
        status: payload.status,
        comment: payload.comment
      })
    },
    removeRequest(state, payload){
      state.requests = state.requests.filter(request => {
        return request.id !== payload.id;
      });
    },
    addRoleToRequest(state, payload){
      state.requests = state.requests.map(request => {
        let roles = request.roles;
        if(request.id == payload.requestId && !roles.find(role => role.id == payload.roleId)){
          roles.push(payload.rootState.roles.roles.find(role => role.id == payload.roleId));
        }
        return {
          ...request,
          roles: roles
        }
      })
    },
  },
  actions: {
    setRequest({commit}, editedrequest){
      //TODO изменение в базе
      commit('setrequest', editedrequest);
    },
    addRequest({commit},request){
      //TODO вставка пользователя в базу
      commit('addRequest',request);
    },
    removeRequest({commit},id){
      //TODO удаление из базы
      commit('removerequest',{
        id: id
      });
    },
    async getRequestsFromDB({commit}){
      let requests = await DB.getRequests();
      for(let request of requests.data){
        commit('addRequest',{
          id: request.id,
          task_id: request.task_id,
          user_id: request.user_id,
          status: request.status
        });
      }
    },
    async addNewRequest({commit}, newrequest){
      let request = await DB.storeRequest({
        ...newrequest
      });
      commit('addRequest',{
        id: request.id,
        task_id: request.task_id,
        user_id: request.user.id,
        status: request.status
      });
    }
  },

}
