import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import BlueButton from '../BlueButton';
import css from './headerAuthInfo.css';
import { MODAL_CONFIRM_LOGOUT } from '../../../constants';

class NameAndAuthButtons extends Component {
  handleLogoutClick = () => {
    this.props.showModal(MODAL_CONFIRM_LOGOUT);
  }
  handleLoginClick = () => {
    this.props.history.push('/login');
  }
  handleRegisterClick = () => {
    this.props.history.push('/register');
  }

  render() {
    return (
      <div className={css.headerAuthInfo}>
        {this.props.isAuthenticated
          ? <div className={css.userInfo}>
            <i className={classNames(
              'fa fa-user-circle-o',
              css.userImage
            )} />
            <p>{this.props.username}</p>
          </div>
          : null
        }
        <div className={css.authButtons}>
          {this.props.isAuthenticated
            ? <BlueButton onClick={this.handleLogoutClick}>Logout</BlueButton>
            : <div>
              <BlueButton id={css.loginButton}
                onClick={this.handleLoginClick}>Login</BlueButton>
              <BlueButton
                onClick={this.handleRegisterClick}>Register</BlueButton>
            </div>
          }
        </div>
      </div>
    );
  }
}

NameAndAuthButtons.propTypes = {
  history: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  username: PropTypes.string
};

export default NameAndAuthButtons;