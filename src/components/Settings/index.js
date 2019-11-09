import React from "react";
import {Grid, List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox} from "@material-ui/core";

const listField = [
  'Фамилия',
  'Имя',
  'Отчество',
  'Дата рождения',
  'Табельный номер',
  'Должность',
  'Подразделение',
];

function Settings() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = name => event => {
    setChecked(event.target.checked);
  };
  return (
    <Grid container item xs={12}>
      <List dense={true}>
        {listField.map(name => (
          <ListItem>
            <ListItemText
              primary={name}
            />
            <ListItemSecondaryAction>
              <Checkbox
                checked={checked}
                onChange={handleChange('checked')}
                value="checked"
                color="primary"
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}

export default Settings;