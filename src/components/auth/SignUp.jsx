import React from 'react';
import { connect } from 'react-redux';
import { signUpWithEmail } from '../../redux/actions/userActions';
import FormInput from '../formInput/FormInput';
import CustomButton from '../buttons/CustomButton';

import './signUp.scss';

class SignUp extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.props.signUpWithEmail(email, password, displayName);
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do no have a account</h2>
        <span>Sign up with your email and password</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            name='displayName'
            type='type'
            handleChange={this.handleChange}
            value={displayName}
            label='Displayname'
            required
          />
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={email}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            name='confirmPassword'
            type='password'
            value={confirmPassword}
            handleChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign Up </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { signUpWithEmail })(SignUp);
