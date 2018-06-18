import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import FaBars from 'react-icons/lib/fa/bars'
import FaClose from 'react-icons/lib/fa/close'

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
  render() {
    const title = (this.props.screenWidth > 420)
      ? 'Rental Property Calculator'
      : 'Calculator'
    return (
      <header className={css.header}>
        {this.props.sidebarVisible
          ? <FaClose
            className={css.sidebarToggler}
            onClick={this.handleToggleSidebarClick}
          />
          : <FaBars
            className={css.sidebarToggler}
            onClick={this.handleToggleSidebarClick}
          />
        }
        <Link to='/'>{title}</Link>
        <div className={css.authButtons}>
          {this.props.isAuthenticated
            ? <BlueButton onClick={this.props.logoutUser}>Logout</BlueButton>
            : <div>
              <BlueButton id={css.loginButton}
                onClick={this.onLoginClick}>Login</BlueButton>
              <BlueButton
                onClick={this.onRegisterClick}>Register</BlueButton>
            </div>
          }
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
  screenWidth: PropTypes.number.isRequired,
  showSidebar: PropTypes.func.isRequired,
  sidebarVisible: PropTypes.bool.isRequired
}

export default Header