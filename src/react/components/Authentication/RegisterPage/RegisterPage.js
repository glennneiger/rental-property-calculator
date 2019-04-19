import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AuthInput from '../AuthInput';
import css from '../authentication.css';
import BlueButton from '../../BlueButton';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: ''
    };
  }
  componentDidMount = () => {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
    this.props.clearAuthErrors();
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  }
  render() {
    const { authErrors } = this.props;
    return (
      <div className={css.authenticationPage}>
        <form onSubmit={this.handleSubmit}>
          <div className={css.authenticationForm}>
            <h1>Register</h1>
            <AuthInput
              error={authErrors.name}
              handleChange={this.handleChange}
              label='Name'
              name='name'
              placeholder='Enter Your Name'
              value={this.state.name}
            />
            <AuthInput
              error={authErrors.email}
              handleChange={this.handleChange}
              label='Email'
              name='email'
              placeholder='Enter Email'
              value={this.state.email}
            />
            <AuthInput
              error={authErrors.password}
              handleChange={this.handleChange}
              label='Password'
              name='password'
              placeholder='Enter Password'
              type='password'
              value={this.state.password}
            />
            <AuthInput
              error={authErrors.password2}
              handleChange={this.handleChange}
              label='Confirm Password'
              name='password2'
              placeholder='Confirm Password'
              type='password'
              value={this.state.password2}
            />
            <BlueButton>Register</BlueButton>
            <p>Already have an account? <Link to={'/login'}>Login</Link></p>
          </div>
        </form>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  auth: PropTypes.object.isRequired,
  clearAuthErrors: PropTypes.func.isRequired,
  authErrors: PropTypes.object.isRequired,
  history: PropTypes.object,
  registerUser: PropTypes.func.isRequired
};

export default RegisterPage;