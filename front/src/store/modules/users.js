
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

  },
  actions: {

  },

}
