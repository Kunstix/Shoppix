import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUpWithEmail } from '../../redux/actions/userActions';
import FormInput from '../formInput/FormInput';
import CustomButton from '../buttons/CustomButton';

import './signUp.scss';

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.props.signUpWithEmail(email, password, displayName);
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials(...userCredentials, { [name]: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do no have a account</h2>
      <span>Sign up with your email and password</span>

      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          name='displayName'
          type='type'
          handleChange={handleChange}
          value={displayName}
          label='Displayname'
          required
        />
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
        <FormInput
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          handleChange={handleChange}
          label='Confirm Password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'> Sign Up </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { signUpWithEmail })(SignUp);
