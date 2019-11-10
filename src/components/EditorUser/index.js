import React from "react";
import {Grid} from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

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
];
const subdivisions = [
  'Отдел качества',
  'Отдел разработки',
  'Отдел тестирования',
  'Руководство',
];

function EditorUser(props) {
  const classes = useStyles();
  const isReadonly = props.mode === 'view';
  return (
    <Grid item xs={8}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          patronymic: '',
          birthday: new Date(),
          personNumber: '',
          position: '',
          subdivision: ''
        }}
        onSubmit= {values => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          setFieldValue
          }) => (
          <form onSubmit={handleSubmit}>
            <Grid container alignItems="flex-end">
              <FormControl className={classes.formControl} disabled={isReadonly}>
                <InputLabel htmlFor="lastName">Фамилия</InputLabel>
                <Input id="lastName" name="lastName" value={values.lastName} onChange={handleChange} />
              </FormControl>
              <FormControl className={classes.formControl} disabled={isReadonly}>
                <InputLabel htmlFor="firstName">Имя</InputLabel>
                <Input id="firstName" name="firstName" value={values.firstName} onChange={handleChange} />
              </FormControl>
              <FormControl className={classes.formControl} disabled={isReadonly}>
                <InputLabel htmlFor="patronymic">Отчество</InputLabel>
                <Input id="patronymic" name="patronymic" value={values.patronymic} onChange={handleChange} />
              </FormControl>
            </Grid>
            <Grid container alignItems="flex-end">
              <FormControl className={classes.formControl}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    id="birthday"
                    label="Дата рождения"
                    format="dd.MM.yyyy"
                    value={values.birthday}
                    disabled={isReadonly}
                    onChange={val => {
                      setFieldValue('birthday', val);
                    }}
                  />
                </MuiPickersUtilsProvider>
              </FormControl>
              <FormControl className={classes.formControl} disabled={isReadonly}>
                <InputLabel htmlFor="personNumber">Табельный номер</InputLabel>
                <Input id="personNumber" name="personNumber" value={values.personNumber} onChange={handleChange} />
              </FormControl>
              <FormControl className={classes.formControl} disabled={isReadonly}>
                <InputLabel id="position">Должность</InputLabel>
                <Select
                  labelId="position"
                  id="position"
                  value={values.position}
                  onChange={item => {
                    setFieldValue('position', item.target.value);
                  }}
                >
                  {positions.map(name => (
                    <MenuItem key={name} value={name}>{name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl className={classes.formControl} disabled={isReadonly}>
                <InputLabel id="subdivision">Подразделение</InputLabel>
                <Select
                  labelId="subdivision"
                  id="subdivision"
                  value={values.subdivision}
                  onChange={item => {
                    setFieldValue('subdivision', item.target.value);
                  }}
                >
                  {subdivisions.map(name => (
                    <MenuItem key={name} value={name}>{name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {!isReadonly && (
              <Grid container spacing={2} alignItems="flex-end">
                <FormControl className={classes.formControl}>
                  <Button variant="contained" size="small" className={classes.saveAdd}>Сохранить и добавить еще</Button>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <Button variant="contained" size="small" className={classes.saveBack}>Сохранить и вернуться в список</Button>
                </FormControl>
              </Grid>
            )}
          </form>
        )}
      </Formik>
    </Grid>
  );
}

export default EditorUser;