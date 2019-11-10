import React from "react";
import {Grid, List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  listItemText: {
    marginRight: '15px'
  }
}));

const listField = [
  {code: 'lastName', name: 'Фамилия'},
  {code: 'firstName', name: 'Имя'},
  {code: 'patronymic', name: 'Отчество'},
  {code: 'birthday', name: 'Дата рождения'},
  {code: 'personNumber', name: 'Табельный номер'},
  {code: 'position', name: 'Должность'},
  {code: 'subdivision', name: 'Подразделение'},
];

function Settings() {
  const [state, setState] = React.useState({
    lastName: false,
    firstName: false,
    patronymic: false,
    birthday: false,
    personNumber: false,
    position: false,
    subdivision: false,
  });
  const classes = useStyles();
  const handleChange = name => event => {
    setState({[name]: event.target.checked});
  };
  return (
    <Grid container item xs={12}>
      <List dense={true}>
        {listField.map(({code, name}) => (
          <ListItem key={code}>
            <ListItemText
              primary={name}
              className={classes.listItemText}
            />
            <ListItemSecondaryAction>
              <Checkbox
                onChange={handleChange(code)}
                value={state[code]}
                color="primary"
                name={code}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}

export default Settings;