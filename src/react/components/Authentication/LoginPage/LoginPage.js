import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AuthInput from '../AuthInput';
import css from '../authentication.css';
import BlueButton from '../../BlueButton';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      authErrors: {}
    };
  }
  componentDidMount = () => {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
    this.props.clearAuthErrors();
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  }
  render() {
    const { authErrors } = this.props;
    return (
      <div className={css.authenticationPage}>
        <form onSubmit={this.handleSubmit}>
          <div className={css.authenticationForm}>
            <h1>Login</h1>
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
            <BlueButton>Login</BlueButton>
            <p>Don't have an account? <Link to={'/register'}>Register</Link></p>
          </div>
        </form>

      </div>
    );
  }
}

LoginPage.propTypes = {
  auth: PropTypes.object.isRequired,
  clearAuthErrors: PropTypes.func.isRequired,
  authErrors: PropTypes.object.isRequired,
  history: PropTypes.object,
  loginUser: PropTypes.func.isRequired
};

export default LoginPage;