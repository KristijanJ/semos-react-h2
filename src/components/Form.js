import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

const genres = [
  {
    value: "Male",
    label: "Male"
  },
  {
    value: "Female",
    label: "Female"
  },
  {
    value: "Other",
    label: "Other"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%"
    }
  },
  form: {
    width: "50%",
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto"
  },
  button: {
    margin: theme.spacing(1),
    width: "100%"
  }
}));

function Form(props) {
  const classes = useStyles();
  return (
    <div className={classes.form}>
      <form
        className={classes.root}
        onSubmit={props.handleSubmit}
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          name="firstName"
          onChange={props.handleInputChange}
          value={props.values.firstName}
          required
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          name="lastName"
          onChange={props.handleInputChange}
          value={props.values.lastName}
          required
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          type="email"
          onChange={props.handleInputChange}
          value={props.values.email}
          required
        />
        <TextField
          id="outlined-basic"
          label="Gender"
          variant="outlined"
          select
          name="gender"
          onChange={props.handleInputChange}
          value={props.values.gender}
          required
        >
          {genres.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-basic"
          label="Bio"
          variant="outlined"
          multiline
          name="bio"
          onChange={props.handleInputChange}
          value={props.values.bio}
          required
        />
        <Button 
          type="submit" 
          className={classes.button} 
          variant="contained"
          color="primary"
        >
          Register User
        </Button>
      </form>
    </div>
  );
}

export default Form;
