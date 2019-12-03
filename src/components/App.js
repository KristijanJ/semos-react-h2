import React, { useState } from "react";
import Form from "./Form";
import Users from "./Users";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "../styles/global.css";

const useStyles = makeStyles({
  mainContainer: {
    maxWidth: 1000,
    margin: "auto",
    display: "flex",
    flexDirection: "column"
  },
  sampleData: {
    alignSelf: "center",
    marginTop: 20
  }
});

const sampleUsers = [
  {
    firstName: "Kristijan",
    lastName: "Jovanovski",
    email: "kristijan.j92@gmail.com",
    gender: "Male",
    bio: "Hi, I am learning React."
  },
  {
    firstName: "Goce",
    lastName: "Delchev",
    email: "never-north@mk.com",
    gender: "Male",
    bio: "What did I fight for?"
  },
  {
    firstName: "Dobrinka",
    lastName: "Gjurovska",
    email: "dagjure@gmail.com",
    gender: "Female",
    bio: "I am a crazy person!"
  }
];

function App() {
  const classes = useStyles();

  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    bio: ""
  });

  const handleInputChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    let usersNew = users;
    usersNew.push(newUser);

    setUsers(usersNew);

    setNewUser({
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      bio: ""
    });
  };

  const loadSampleData = () => {
    setUsers(sampleUsers);
  };

  return (
    <div className={classes.mainContainer}>
      <Form
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        values={newUser}
      />
      <Users users={users} />
      <Button
        className={classes.sampleData}
        type="submit"
        variant="contained"
        color="primary"
        onClick={loadSampleData}
      >
        Load Sample Data
      </Button>
    </div>
  );
}

export default App;
