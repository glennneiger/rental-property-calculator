import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import FaBars from 'react-icons/lib/fa/bars'

import css from './header.css'
import BlueButton from '../BlueButton'

class Header extends Component {
  handleToggleSidebarClick = () => {
    this.props.sidebarVisible
      ? this.props.hideSidebar()
      : this.props.showSidebar()
  }
  onLoginClick = () => {
    this.props.history.push('/login')
  }
  onRegisterClick = () => {
    this.props.history.push('/register')
  }
  // render different icon depending on if sidebarVisible is true or false
  render() {
    return (
      <header className={css.header}>
        <FaBars
          className={css.sidebarToggler}
          onClick={this.handleToggleSidebarClick}
        />
        <Link to='/'>Rental Property Calculator</Link>
        <div className={css.authButtons}>
          {this.props.isAuthenticated
            ? <BlueButton onClick={this.props.logoutUser}>Logout</BlueButton>
            : <div>
              <BlueButton id={css.loginButton}
                onClick={this.onLoginClick}>Login</BlueButton>
              <BlueButton
                onClick={this.onRegisterClick}>Register</BlueButton>
            </div>}
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  hideSidebar: PropTypes.func.isRequired,
  history: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired,
  showSidebar: PropTypes.func.isRequired,
  sidebarVisible: PropTypes.bool.isRequired
}

export default Header