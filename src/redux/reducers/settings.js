import { SET_SETTINGS } from "../actionTypes";

const initialState = [
  {code: 'lastName', name: 'Фамилия', isActive: true},
  {code: 'firstName', name: 'Имя', isActive: false},
  {code: 'patronymic', name: 'Отчество', isActive: false},
  {code: 'birthday', name: 'Дата рождения', isActive: false},
  {code: 'personNumber', name: 'Табельный номер', isActive: false},
  {code: 'position', name: 'Должность', isActive: true},
  {code: 'subdivision', name: 'Подразделение', isActive: false},
];
const settings = (state = initialState, action) => {
  switch (action.type) {
    case SET_SETTINGS: {
      return [
        ...action.payload
      ];
    }
    default:
      return state;
  }
};

export default settings;