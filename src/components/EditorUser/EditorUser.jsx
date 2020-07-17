import React, { useEffect, useRef } from 'react';
import { Grid, FormControl, Input, InputLabel, Button, Select, MenuItem, FormHelperText } from '@material-ui/core';
import { Formik } from 'formik';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addUser } from '../../redux/actions';
import { useStyles } from '../../hooks';
import { validateSchema, initialStateUser, positions, subdivisions } from './constants';

const EditorUser = ({ user = initialStateUser, readonly = false }) => {
  const formik = useRef(null);
  const saveToBack = useRef(false);
  const dispatch = useDispatch();
  const style = useStyles();
  const history = useHistory();

  const submitGoBack = () => {
    if (Object.keys(formik.current.errors).length === 0) {
      saveToBack.current = true;
      formik.current.handleSubmit();
    }
  };

  useEffect(() => {
    formik.current.setValues(user);
  }, [formik, user]);

  return (
    <Formik
      initialValues={user}
      onSubmit={(values, actions) => {
        dispatch(addUser(values));
        actions.resetForm(initialStateUser);
        if (saveToBack.current) {
          history.push('/');
        }
      }}
      validate={validateSchema}
      validateOnBlur={false}
      validateOnChange={false}
      validateOnMount={false}
      innerRef={formik}
    >
      {({ errors, values, handleChange, setFieldValue, handleSubmit }) => (
        <Grid item>
          <form>
            <Grid container spacing={2}>
              <Grid item>
                <FormControl className={style.formControl} error={!!errors.lastName}>
                  <InputLabel htmlFor="lastName">Фамилия</InputLabel>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    readOnly={readonly}
                  />
                  {errors.lastName && <FormHelperText id="lastName-error-text">{errors.lastName}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl className={style.formControl} error={!!errors.firstName}>
                  <InputLabel htmlFor="firstName">Имя</InputLabel>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    readOnly={readonly}
                  />
                  {errors.firstName && <FormHelperText id="firstName-error-text">{errors.firstName}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl className={style.formControl} error={!!errors.patronymic}>
                  <InputLabel htmlFor="patronymic">Отчество</InputLabel>
                  <Input
                    id="patronymic"
                    name="patronymic"
                    value={values.patronymic}
                    onChange={handleChange}
                    readOnly={readonly}
                  />
                  {errors.patronymic && <FormHelperText id="patronymic-error-text">{errors.patronymic}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl className={style.formControl}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                      id="birthday"
                      label="Дата рождения"
                      format="dd.MM.yyyy"
                      value={values.birthday}
                      readOnly={readonly}
                      onChange={(val) => {
                        setFieldValue('birthday', val);
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item>
                <FormControl className={style.formControl} error={!!errors.personNumber}>
                  <InputLabel htmlFor="personNumber">Табельный номер</InputLabel>
                  <Input
                    id="personNumber"
                    type="number"
                    name="personNumber"
                    value={values.personNumber}
                    onChange={handleChange}
                    readOnly={readonly}
                  />
                  {errors.personNumber && (
                    <FormHelperText id="personNumber-error-text">{errors.personNumber}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl className={style.formControl} error={!!errors.position}>
                  <InputLabel id="position">Должность</InputLabel>
                  <Select
                    labelId="position"
                    id="position"
                    value={values.position}
                    readOnly={readonly}
                    onChange={(item) => {
                      setFieldValue('position', item.target.value);
                    }}
                  >
                    {positions.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.position && <FormHelperText id="position-error-text">{errors.position}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl className={style.formControl} error={!!errors.subdivision}>
                  <InputLabel id="subdivision">Подразделение</InputLabel>
                  <Select
                    labelId="subdivision"
                    id="subdivision"
                    value={values.subdivision}
                    readOnly={readonly}
                    onChange={(item) => {
                      setFieldValue('subdivision', item.target.value);
                    }}
                  >
                    {subdivisions.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.subdivision && (
                    <FormHelperText id="subdivision-error-text">{errors.subdivision}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
            {!readonly && (
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item>
                  <FormControl className={style.formControl}>
                    <Button onClick={handleSubmit} variant="contained" size="small" className={style.saveAdd}>
                      Сохранить
                    </Button>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl className={style.formControl}>
                    <Button
                      onClick={submitGoBack}
                      variant="contained"
                      size="small"
                      color="primary"
                      className={style.saveBack}
                    >
                      Сохранить и вернуться в список
                    </Button>
                  </FormControl>
                </Grid>
              </Grid>
            )}
          </form>
        </Grid>
      )}
    </Formik>
  );
};

export default EditorUser;
