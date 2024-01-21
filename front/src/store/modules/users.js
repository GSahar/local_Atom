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
        job: 'Аналитик'
      },
      {
        id: 2,
        lastName: 'Афонина',
        firstName: 'Антонина',
        secondName: 'Семеновна',
        place: 'Бухгалтерия',
        job: 'Бухгалтер'
      },
      {
        id: 3,
        lastName: 'Петрова',
        firstName: 'Ольга',
        secondName: 'Ивановна',
        place: 'Отдел технического контроля',
        job: 'Контроллер'
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
      let id = state.users[state.users.length-1].id + 1
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
