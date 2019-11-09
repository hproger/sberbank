import React from "react";
import {Grid} from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
  },
}));

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
            </Grid>
            {!isReadonly && (
              <Grid container spacing={2} alignItems="flex-end">
                <Button variant="contained" size="small">Сохранить и добавить еще</Button>
                <Button variant="contained" size="small">Сохранить и вернуться в список</Button>
              </Grid>
            )}
          </form>
        )}
      </Formik>
    </Grid>
  );
}

export default EditorUser;