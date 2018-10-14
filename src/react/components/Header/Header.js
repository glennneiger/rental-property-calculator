import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FaBars from 'react-icons/lib/fa/bars';
import FaClose from 'react-icons/lib/fa/close';
import classNames from 'classnames';

import css from './header.css';
import BlueButton from '../BlueButton';
import { MODAL_CONFIRM_LOGOUT } from '../../../constants';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPath: this.props.location.pathname
    };
  }
  componentWillMount = () => {
    this.unlisten = this.props.history.listen(location => {
      this.setState({
        currentPath: location.pathname
      });
    });
  }
  componentWillUnmount = () => {
    this.unlisten();
  }
  getToggleSidebarIcon = () => {
    if (this.state.currentPath === '/') {
      return (this.props.sidebarVisible
        ? <FaClose
          className={css.sidebarToggler}
          onClick={this.handleToggleSidebarClick}
        />
        : <FaBars
          className={css.sidebarToggler}
          onClick={this.handleToggleSidebarClick}
        />);
    }
    return null;
  }
  handleToggleSidebarClick = () => {
    this.props.sidebarVisible
      ? this.props.hideSidebar()
      : this.props.showSidebar();
  }
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
    const title = (this.props.screenWidth > 420)
      ? 'Rental Property Calculator'
      : 'Calculator';

    return (
      <header className={css.header}>
        {this.getToggleSidebarIcon()}
        <Link to='/'>
          <span className={css.title}>
            {title}
          </span>
        </Link>
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
      </header>
    );
  }
}

Header.propTypes = {
  hideSidebar: PropTypes.func.isRequired,
  history: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  username: PropTypes.string,
  screenWidth: PropTypes.number.isRequired,
  showModal: PropTypes.func.isRequired,
  showSidebar: PropTypes.func.isRequired,
  sidebarVisible: PropTypes.bool.isRequired
};

export default Header;