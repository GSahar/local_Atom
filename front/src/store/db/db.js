import {Axios} from "axios";

const axios = new Axios;
const REST_API_URL = 'http://localhost:8000/api';

class DB{
  //Users
  static getUsers(){
    return axios.get(REST_API_URL + '/users');
  }

  static storeUser(user){
    return axios.post(REST_API_URL + '/users');
  }

  static updateUser(user){
    return axios.put(REST_API_URL + '/users/' + user.id);
  }

  static deleteUser(userId){
    return axios.delete(REST_API_URL + '/users/' + userId);
  }

  //Roles
  static getRoles(){
    return axios.get(REST_API_URL + '/roles');
  }

  static storeRole(role){
    return axios.post(REST_API_URL + '/roles');
  }

  static updateRole(role){
    return axios.put(REST_API_URL + '/roles/' + role.id);
  }

  static deleteRole(roleId){
    return axios.delete(REST_API_URL + '/roles/' + roleId);
  }

  //Tasks
  static getTasks(){
    return axios.get(REST_API_URL + '/tasks');
  }

  static storeTask(task){
    return axios.post(REST_API_URL + '/tasks');
  }

  static updateTask(task){
    return axios.put(REST_API_URL + '/tasks/' + task.id);
  }

  static deleteTask(taskId){
    return axios.delete(REST_API_URL + '/tasks/' + taskId);
  }

  //Requests
  static getRequests(){
    return axios.get(REST_API_URL + '/requests');
  }

  static storeRequest(request){
    return axios.post(REST_API_URL + '/requests');
  }

  static updateRequest(request){
    return axios.put(REST_API_URL + '/requests/' + request.id);
  }

  static deleteRequest(requestId){
    return axios.delete(REST_API_URL + '/requests/' + requestId);
  }
}

export default DB;
