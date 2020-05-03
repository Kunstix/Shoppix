import React from 'react';

import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';

import { SignInAndSignUpContainer } from './signInAndSignUp.styles';

const SignInAndSignUp = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};

export default SignInAndSignUp;
