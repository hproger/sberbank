import React from 'react';
import { Grid, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { useStyles } from '../hooks';
import { usersSelector, settingsSelector } from '../selectors';

const ListUsers = ({ openEditor }) => {
  const users = useSelector(usersSelector);
  const settings = useSelector(settingsSelector);
  const style = useStyles();
  const activeSettings = settings.filter((setting) => setting.isActive);

  return (
    <Grid item className={style.listUsers}>
      <Paper>
        <Table size="small">
          <TableHead>
            <TableRow>
              {activeSettings.map(({ code, name }) => (
                <TableCell key={code} className={style.tableHead}>
                  {name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className={style.rowUser} onClick={() => openEditor(user)} hover>
                {activeSettings.map(({ code }) => (
                  <TableCell key={code}>
                    {code === 'birthday' ? format(user[code], 'dd.MM.yyyy') : user[code]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Grid>
  );
};

export default ListUsers;
