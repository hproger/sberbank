import { ADD_USER } from "../actionTypes";

const initialState = [
  {
    id: 1,
    lastName: 'Малкович',
    firstName: 'Иван',
    patronymic: 'Сергеевич',
    birthday: new Date(),
    personNumber: '1',
    position: 'Менеджер',
    subdivision: 'Руководство'
  },
  {
    id: 2,
    lastName: 'Шестаковский',
    firstName: 'Сергей',
    patronymic: 'Петрович',
    birthday: new Date(),
    personNumber: '2',
    position: 'СЕО',
    subdivision: 'Руководство'
  },
  {
    id: 3,
    lastName: 'Иванчук',
    firstName: 'Генадий',
    patronymic: 'Михайлович',
    birthday: new Date(),
    personNumber: '3',
    position: 'Frontend-разработчик',
    subdivision: 'Отдел разработки'
  },
  {
    id: 4,
    lastName: 'Григорович',
    firstName: 'Евгений',
    patronymic: 'Васильевич',
    birthday: new Date(),
    personNumber: '4',
    position: 'Backend-разработчик',
    subdivision: 'Отдел разработки'
  }
];
const users = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return [
        ...state,
        {
          ...action.payload
        }
      ];
    }
    default:
      return state;
  }
};

export default users;