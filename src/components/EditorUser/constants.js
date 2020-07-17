export const positions = ['Менеджер', 'СЕО', 'Frontend-разработчик', 'Backend-разработчик', 'Тим-лид'];
export const subdivisions = ['Отдел качества', 'Отдел разработки', 'Отдел тестирования', 'Руководство'];

export const validateSchema = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.patronymic) {
    errors.patronymic = 'Required';
  }
  if (!values.personNumber) {
    errors.personNumber = 'Required';
  } else if (values.personNumber < 1) {
    errors.personNumber = 'Incorrect number';
  }
  if (!values.position) {
    errors.position = 'Required';
  }
  if (!values.subdivision) {
    errors.subdivision = 'Required';
  }

  return errors;
};

export const initialStateUser = {
  firstName: '',
  lastName: '',
  patronymic: '',
  birthday: new Date(),
  personNumber: '',
  position: '',
  subdivision: '',
};
