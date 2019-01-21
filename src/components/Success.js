import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank you for reaching out</h1>
          <p>We will get back to you soon with further informations.</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
