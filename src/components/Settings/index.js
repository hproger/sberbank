import React from "react";
import {Grid, List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { setSettings } from "../../redux/actions";

const useStyles = makeStyles(theme => ({
  listItemText: {
    marginRight: '15px'
  }
}));

function Settings({dispatch, settings}) {
  const classes = useStyles();
  const localSettings = [...settings];
  const handleChange = code => event => {
    localSettings.forEach(setting => {
      if (code === setting.code) {
        setting.isActive = event.target.checked;
      }
    });
    dispatch(setSettings(localSettings));
  };
  return (
    <Grid container item xs={12}>
      <List dense={true}>
        {localSettings.map(({code, name, isActive}) => (
          <ListItem key={code}>
            <ListItemText
              primary={name}
              className={classes.listItemText}
            />
            <ListItemSecondaryAction>
              <Checkbox
                onChange={handleChange(code)}
                checked={isActive}
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
const mapStateToProps = state => ({
  settings: state.settings
});
export default connect(mapStateToProps)(Settings);