const fake = {
  tasks: [
    {
      id: 1,
      name: '1C Бухгалтерия',
      type: 1,
      mnemocode: '1CBUH',
      condifence_mark: 2,
      description: 'Описание системы'
    },
    {
      id: 2,
      name: 'Личный кабинет',
      type: 1,
      mnemocode: 'PERSCAB',
      condifence_mark: 1,
      description: 'Личный кабинет сотрудника'
    },
    {
      id: 3,
      name: 'IDM - Сотрудник',
      type: 1,
      mnemocode: '1CBUH',
      condifence_mark: 2,
      description: 'Доступ к системе IDM в роли сотрудника'
    },
    {
      id: 4,
      name: 'IDM - Администратор',
      type: 1,
      mnemocode: 'PERSCAB',
      condifence_mark: 2,
      description: 'Доступ к системе IDM в роли администратора'
    },
    {
      id: 5,
      name: 'IDM - Менеджер',
      type: 1,
      mnemocode: 'PERSCAB',
      condifence_mark: 2,
      description: 'Доступ к системе IDM в роли менеджера'
    }
  ],
  task_types: [
    {
      id: 1,
      name: 'WEB-приложение'
    },
    {
      id: 2,
      name: 'Файл'
    },
    {
      id: 3,
      name: 'Исполняемый файл'
    }
  ],
  roles: [
    {
      id: 1,
      name: 'Общая',
      description: 'Роль для всех сотрудников',
      tasks: [
        {
          id: 2,
          name: 'Личный кабинет',
          type: 1,
          mnemocode: 'PERSCAB',
          condifence_mark: 1,
          description: 'Личный кабинет сотрудника'
        },
        {
          id: 3,
          name: 'IDM - Сотрудник',
          type: 1,
          mnemocode: '1CBUH',
          condifence_mark: 2,
          description: 'Доступ к системе IDM в роли сотрудника'
        }
      ]
    },
    {
      id: 2,
      name: 'Руководитель',
      description: 'Роль для руководителей',
      tasks: [
        {
          id: 5,
          name: 'IDM - Менеджер',
          type: 1,
          mnemocode: 'PERSCAB',
          condifence_mark: 2,
          description: 'Доступ к системе IDM в роли менеджера'
        }
      ]
    },
    {
      id: 3,
      name: 'Бухгалтер',
      description: 'Роль для всех сотрудников бухгалтерии',
      tasks: [
        {
          id: 1,
          name: '1C Бухгалтерия',
          type: 1,
          mnemocode: '1CBUH',
          condifence_mark: 2,
          description: 'Описание системы'
        }
      ]
    }
  ],
  users: [
    {
      id: 1,
      lastName: 'Иванов',
      firstName: 'Иван',
      secondName: 'Петрович',
      place: 'Отдел аналитики',
      job: 'Главный аналитик',
      photo: null,
      email: 'ivanov@test.org',
      password: '',
      roles: [
        {
          id: 1,
          name: 'Общая',
          description: 'Роль для всех сотрудников',
          tasks: [
            {
              id: 2,
              name: 'Личный кабинет',
              type: 1,
              mnemocode: 'PERSCAB',
              condifence_mark: 1,
              description: 'Личный кабинет сотрудника'
            },
            {
              id: 3,
              name: 'IDM - Сотрудник',
              type: 1,
              mnemocode: '1CBUH',
              condifence_mark: 2,
              description: 'Доступ к системе IDM в роли сотрудника'
            }
          ]
        },
        {
          id: 2,
          name: 'Руководитель',
          description: 'Роль для руководителей',
          tasks: [
            {
              id: 5,
              name: 'IDM - Менеджер',
              type: 1,
              mnemocode: 'PERSCAB',
              condifence_mark: 2,
              description: 'Доступ к системе IDM в роли менеджера'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      lastName: 'Петрова',
      firstName: 'Серафима',
      secondName: 'Олеговна',
      place: 'Буххгалтерия',
      job: 'Бухгалтер',
      photo: null,
      email: 'petrova@test.org',
      password: '',
      roles: [
        {
          id: 1,
          name: 'Общая',
          description: 'Роль для всех сотрудников',
          tasks: [
            {
              id: 2,
              name: 'Личный кабинет',
              type: 1,
              mnemocode: 'PERSCAB',
              condifence_mark: 1,
              description: 'Личный кабинет сотрудника'
            },
            {
              id: 3,
              name: 'IDM - Сотрудник',
              type: 1,
              mnemocode: '1CBUH',
              condifence_mark: 2,
              description: 'Доступ к системе IDM в роли сотрудника'
            }
          ]
        },
        {
          id: 3,
          name: 'Бухгалтер',
          description: 'Роль для всех сотрудников бухгалтерии',
          tasks: [
            {
              id: 1,
              name: '1C Бухгалтерия',
              type: 1,
              mnemocode: '1CBUH',
              condifence_mark: 2,
              description: 'Описание системы'
            }
          ]
        }
      ]
    }
  ]
};

export default fake;
