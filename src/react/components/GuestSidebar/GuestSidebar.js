import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './guestSidebar.css';
import BlueButton from '../BlueButton';

class GuestSidebar extends Component {
  constructor(props) {
    super(props);
    this.onLoginClick = this.onLoginClick.bind(this);
    this.onRegisterClick = this.onRegisterClick.bind(this);
  }

  onLoginClick() {
    this.props.history.push('/login');
  }

  onRegisterClick() {
    this.props.history.push('/register');
  }

  render() {
    return (
      <div className={css.guestSidebar}>
        <BlueButton onClick={this.onLoginClick}>Login</BlueButton>
        <p>or</p>
        <BlueButton onClick={this.onRegisterClick}>Register</BlueButton>
        <p>to save your analysis</p>
      </div>
    );
  }
}

GuestSidebar.propTypes = {
  history: PropTypes.object
};

export default GuestSidebar;