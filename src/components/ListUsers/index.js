import React from "react";
import {Grid, Table, TableHead, TableRow, TableCell, TableBody, Paper} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  tableHead: {
    fontWeight: '700'
  }
}));


function ListUsers({ users }) {
  const classes = useStyles();
  return (
    <Grid item xs={4}>
      <Paper>
        <Table size="small">
          <TableHead>
            <TableRow>
                <TableCell className={classes.tableHead}>Фамилия</TableCell>
                <TableCell className={classes.tableHead}>Должность</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.lastName}>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.position}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Grid>
  );
}

export default ListUsers;