import React from "react";
import { Grid } from "@material-ui/core";

class CurrentUserPreview extends React.Component {
  render() {
    return (
      <div className="current-user-preview-container">
        <Grid container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <div className="current-user-preview-element">
            <h2>First Name</h2>
            <p className="current-user-p">{this.props.currentUser.firstName}</p>
          </div>
          <div className="current-user-preview-element">
            <h2>Last Name</h2>
            <p className="current-user-p">{this.props.currentUser.lastName}</p>
          </div>
          <div className="current-user-preview-element">
            <h2>Gender</h2>
            <p className="current-user-p">{this.props.currentUser.gender}</p>
          </div>
          <div className="current-user-preview-element">
            <h2>Email</h2>
            <p className="current-user-p">{this.props.currentUser.email}</p>
          </div>
          <div className="current-user-preview-element">
            <h2>Bio</h2>
            <p className="current-user-p textarea-p">
              {this.props.currentUser.bio}
            </p>
          </div>
        </Grid>
      </div>
    );
  }
}

export default CurrentUserPreview;
