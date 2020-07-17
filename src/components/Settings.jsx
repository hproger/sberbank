import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox } from '@material-ui/core';
import { setSettings } from '../redux/actions';
import { useStyles } from '../hooks';
import { settingsSelector } from '../selectors';

const Settings = () => {
  const style = useStyles();
  const settings = useSelector(settingsSelector);
  const dispatch = useDispatch();

  const handleChange = (code) => (event) => {
    dispatch(
      setSettings(
        settings.map((setting) => (code === setting.code ? { ...setting, isActive: event.target.checked } : setting))
      )
    );
  };

  return (
    <Grid container item xs={12}>
      <List dense={true}>
        {settings.map(({ code, name, isActive }) => (
          <ListItem key={code}>
            <ListItemText primary={name} className={style.listItemText} />
            <ListItemSecondaryAction>
              <Checkbox onChange={handleChange(code)} checked={isActive} color="primary" name={code} />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default Settings;
