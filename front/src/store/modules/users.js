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
        roles: [
          {
            id: 1,
            name: 'basic'
          },
          {
            id: 2,
            name: 'analys'
          }
        ],
        task_roles: [
          {
            id: 1,
            name: 'Analytics - Main'
          }
        ]
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
    }
  },

}
