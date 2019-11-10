import React from "react";
import {Grid, Table, TableHead, TableRow, TableCell, TableBody, Paper} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { format } from 'date-fns'

const useStyles = makeStyles(theme => ({
  listUsers: {
    maxWidth: 960
  },
  tableHead: {
    fontWeight: '700'
  },
  rowUser: {
    cursor: 'pointer'
  }
}));


function ListUsers({ users, openEditor, settings }) {
  const classes = useStyles();
  const activeSettings = settings.filter(setting => setting.isActive);
  return (
    <Grid item className={classes.listUsers}>
      <Paper>
        <Table size="small">
          <TableHead>
            <TableRow>
              {activeSettings.map(({code, name}) => (
                <TableCell key={code} className={classes.tableHead}>{name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow hover className={classes.rowUser} key={user.id} onClick={() => openEditor(true, user)}>
                {activeSettings.map(({code}) => (
                  <TableCell key={code}>{
                    code === 'birthday'
                      ? format(user[code], 'dd.MM.yyyy')
                      : user[code]
                  }</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Grid>
  );
}

const mapStateToProps = state => ({
  settings: state.settings
});

export default connect(mapStateToProps)(ListUsers);