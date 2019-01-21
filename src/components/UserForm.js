import React, { Component } from "react";

import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

class UserForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    occupation: "",
    bio: "",
    email: "",
    // by default step 1
    step: 1
  };

  //  next  step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  //  prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //  handle fields change

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, email, lastName, bio, occupation } = this.state;
    // to render value in the input
    const values = { firstName, email, lastName, bio, occupation };
    switch (step) {
      default:
      case 1:
        return (
          <FormUserDetails
            //  will take in param - props ( attribute to component)
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;

      // default;
    }
  }
}

export default UserForm;
