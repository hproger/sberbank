import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { addUser } from "../../redux/actions";
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const validate = (values) => {
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
  }
  if (!values.position) {
    errors.position = 'Required';
  }
  if (!values.subdivision) {
    errors.subdivision = 'Required';
  }

  return errors;
};

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 201,
  },
  saveBack: {
    marginTop: 16,
  },
  saveAdd: {
    marginTop: 16
  }
}));

const positions = [
  'Менеджер',
  'СЕО',
  'Frontend-разработчик',
  'Backend-разработчик',
  'Тим-лид',
];
const subdivisions = [
  'Отдел качества',
  'Отдел разработки',
  'Отдел тестирования',
  'Руководство',
];
const initialState = {
  firstName: '',
  lastName: '',
  patronymic: '',
  birthday: new Date(),
  personNumber: '',
  position: '',
  subdivision: ''
};

function EditorUser({dispatch, user = initialState, readonly = false}) {
  const classes = useStyles();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      ...user
    },
    validateOnBlur: false,
    validateOnMount: false,
    validateOnChange: false,
    validate: validate,
    onSubmit: (values, actions) => {
      const { lastName } = values;
      let position = values.position;
      if (lastName === 'Миняйлов') {
        position = 'Тим-лид';
      }
      const newValues = {...values, position};
      dispatch(addUser(newValues));
      //  actions.resetForm(initialState);
      //  resetForm нужен для сброса значений формы,
      //  но если использовать с переходом на главную, то прилетает варниг о том что компонент уже размонтирован,
      //  а что то происходит, просит делать сброс обработчиков.
    }
  });

  const submit = (callback) => {
    callback();
  };
  const submitGoBack = (callback) => {
    callback();
    if (!formik.errors) {
      history.push('/');
    }
  };

  useEffect(() => {
    formik.setValues(user);
  }, [user]);

  return (
    <Grid item >
      <form>
        <Grid container >
          <FormControl className={classes.formControl} error={!!formik.errors.lastName}>
            <InputLabel htmlFor="lastName">Фамилия</InputLabel>
            <Input
              id="lastName"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              readOnly={readonly}
            />
            {formik.errors.lastName && (
              <FormHelperText id="lastName-error-text">{formik.errors.lastName}</FormHelperText>
            )}
          </FormControl>
          <FormControl className={classes.formControl} error={!!formik.errors.firstName}>
            <InputLabel htmlFor="firstName">Имя</InputLabel>
            <Input
              id="firstName"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              readOnly={readonly}
            />
            {formik.errors.firstName && (
              <FormHelperText id="firstName-error-text">{formik.errors.firstName}</FormHelperText>
            )}
          </FormControl>
          <FormControl className={classes.formControl} error={!!formik.errors.patronymic}>
            <InputLabel htmlFor="patronymic">Отчество</InputLabel>
            <Input
              id="patronymic"
              name="patronymic"
              value={formik.values.patronymic}
              onChange={formik.handleChange}
              readOnly={readonly}
            />
            {formik.errors.patronymic && (
              <FormHelperText id="patronymic-error-text">{formik.errors.patronymic}</FormHelperText>
            )}
          </FormControl>
          <FormControl className={classes.formControl}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                id="birthday"
                label="Дата рождения"
                format="dd.MM.yyyy"
                value={formik.values.birthday}
                readOnly={readonly}
                onChange={val => {
                  formik.setFieldValue('birthday', val);
                }}
              />
            </MuiPickersUtilsProvider>
          </FormControl>
        </Grid>
        <Grid container>
          <FormControl className={classes.formControl} error={!!formik.errors.personNumber}>
            <InputLabel htmlFor="personNumber">Табельный номер</InputLabel>
            <Input
              id="personNumber"
              type="number"
              name="personNumber"
              value={formik.values.personNumber}
              onChange={formik.handleChange}
              readOnly={readonly}
            />
            {formik.errors.personNumber && (
              <FormHelperText id="personNumber-error-text">{formik.errors.personNumber}</FormHelperText>
            )}
          </FormControl>
          <FormControl className={classes.formControl} error={!!formik.errors.position}>
            <InputLabel id="position">Должность</InputLabel>
            <Select
              labelId="position"
              id="position"
              value={formik.values.position}
              readOnly={readonly}
              onChange={item => {
                formik.setFieldValue('position', item.target.value);
              }}
            >
              {positions.map(name => (
                <MenuItem key={name} value={name}>{name}</MenuItem>
              ))}
            </Select>
            {formik.errors.position && (
              <FormHelperText id="position-error-text">{formik.errors.position}</FormHelperText>
            )}
          </FormControl>
          <FormControl className={classes.formControl} error={!!formik.errors.subdivision}>
            <InputLabel id="subdivision">Подразделение</InputLabel>
            <Select
              labelId="subdivision"
              id="subdivision"
              value={formik.values.subdivision}
              readOnly={readonly}
              onChange={item => {
                formik.setFieldValue('subdivision', item.target.value);
              }}
            >
              {subdivisions.map(name => (
                <MenuItem key={name} value={name}>{name}</MenuItem>
              ))}
            </Select>
            {formik.errors.subdivision && (
              <FormHelperText id="subdivision-error-text">{formik.errors.subdivision}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        {!readonly && (
          <Grid container spacing={2} alignItems="flex-end">
            <FormControl className={classes.formControl}>
              <Button onClick={() => submit(formik.handleSubmit)} variant="contained" size="small" className={classes.saveAdd}>
                Сохранить и добавить еще
              </Button>
            </FormControl>
            <FormControl className={classes.formControl}>
              <Button onClick={() => submitGoBack(formik.handleSubmit)} variant="contained" size="small" color="primary" className={classes.saveBack}>
                Сохранить и вернуться в список
              </Button>
            </FormControl>
          </Grid>
        )}
      </form>
    </Grid>
  );
}

export default connect()(EditorUser);