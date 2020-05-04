import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  signInWithEmail,
  signInWithGoogle
} from '../../redux/actions/userActions';
import FormInput from '../formInput/FormInput';
import CustomButton from '../buttons/CustomButton';

import {
  SignInContainer,
  SignInTitle,
  ButtonsContainer
} from './signIn.styles';

const SignIn = ({ signInWithGoogle, signInWithEmail }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  const handleSubmit = event => {
    event.preventDefault();
    signInWithEmail(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  // const { email, password } = this.state;
  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <ButtonsContainer>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default connect(null, { signInWithEmail, signInWithGoogle })(SignIn);
