import React, { Component } from "react";
import FormInput from "../../input-form/form-input.component";
import CustomButton from "../../custom-button/custom-button.component";
import {SignInContainer, ButtonsContainer} from "./signInComponent.styles.jsx";

import { auth, signInWithGoogle } from "../../utils/firebase.utils";
class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<SignInContainer>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						label="Password"
						required
					/>
					<ButtonsContainer>
						<CustomButton type="submit" value="Submit form">
							Sign in
						</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</ButtonsContainer>
				</form>
			</SignInContainer>
		);
	}
}

export default SignIn;
