import React from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function User ({ user }) {
  return (
    <TableRow key={user.email}>
      <TableCell align="left">{user.firstName}</TableCell>
      <TableCell align="left">{user.lastName}</TableCell>
      <TableCell align="left">{user.email}</TableCell>
      <TableCell align="left">{user.gender}</TableCell>
      <TableCell align="left">{user.bio}</TableCell>
    </TableRow>
  );
}

export default User;
