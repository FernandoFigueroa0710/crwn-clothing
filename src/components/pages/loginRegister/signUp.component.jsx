import React, { Component } from "react";

import FormInput from "../../input-form/form-input.component";
import CustomButton from "../../custom-button/custom-button.component";
import {SignUpContainer, TitleContainer} from "./signUpComponent.styles";

import { auth, createUserProfileDocument } from "../../utils/firebase.utils";
class SignUp extends Component {
	constructor() {
		super();
		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: ""
		};
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert("Passwords do not match!");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: ""
			});
		} catch (error) {
			console.error(error);
		}
	};
	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<SignUpContainer>
				<TitleContainer className="title">I do not have an account</TitleContainer>
				<span>Sign up with your name, email and password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						name="displayName"
						type="text"
						value={displayName}
						handleChange={this.handleChange}
						label="Display name"
						required
					/>
					<FormInput
						name="email"
						type="email"
						value={email}
						handleChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						name="password"
						type="password"
						value={password}
						handleChange={this.handleChange}
						label="Password"
						required
					/>
					<FormInput
						name="confirmPassword"
						type="password"
						value={confirmPassword}
						handleChange={this.handleChange}
						label="Confirm Password"
						required
					/>
					<CustomButton onClick={this.handleSubmit} type="submit">
						Sign up
					</CustomButton>
				</form>
			</SignUpContainer>
		);
	}
}
export default SignUp;
