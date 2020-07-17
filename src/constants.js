import { routes } from "./routes";
import { MainPage, Settings, EditorUser } from './components';

export const pages = [
  { id: 1, name: 'Список сотрудников', route: routes.MAIN, component: MainPage },
  { id: 2, name: 'Добавить запись', route: routes.ADD_USER, component: EditorUser },
  { id: 3, name: 'Настройки', route: routes.SETTINGS, component: Settings },
];

export const initialStateUsers = [
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

export const initialStateSettings = [
  {code: 'lastName', name: 'Фамилия', isActive: true},
  {code: 'firstName', name: 'Имя', isActive: false},
  {code: 'patronymic', name: 'Отчество', isActive: false},
  {code: 'birthday', name: 'Дата рождения', isActive: false},
  {code: 'personNumber', name: 'Табельный номер', isActive: false},
  {code: 'position', name: 'Должность', isActive: true},
  {code: 'subdivision', name: 'Подразделение', isActive: false},
];


