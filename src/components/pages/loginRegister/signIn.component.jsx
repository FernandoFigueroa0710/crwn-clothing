import React, { Component } from "react";
import FormInput from "../../utils/form-input.component";
import CustomButton from "../../utils/custom-button.component";

import { signInWithGoogle } from "../../utils/firebase.utils";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    event.preventDefault();
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Signin with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="Email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="Password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <CustomButton type="submit" value="Submit form">
            Signin
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} isgooglesignin="true">
            Signin with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
