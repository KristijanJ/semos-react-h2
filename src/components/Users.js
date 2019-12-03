import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import User from './User';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

function Users(props) {
  const classes = useStyles();

  if (props.users.length > 0) {
    return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Gender</TableCell>
            <TableCell align="left">Bio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.map(user => (
            <User key={user.email} user={user} />
          ))}
        </TableBody>
      </Table>
    </Paper>
    )
  } else {
    return <></>
  }
}

export default Users;