import React from "react";
import {SignInSignUpPageContainer} from "./signInSingUpPage.styles";
import SignIn from "./signIn.component";
import SignUp from "./signUp.component";

const SignInAndSignupPage = () => (
  <SignInSignUpPageContainer>
    <SignIn />
    <SignUp />
  </SignInSignUpPageContainer>
);
export default SignInAndSignupPage;
