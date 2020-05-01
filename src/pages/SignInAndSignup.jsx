import React from 'react';

import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';

import './signInAndSignup.scss';

const SignInAndSignUp = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
