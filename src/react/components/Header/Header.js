import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import FaBars from 'react-icons/lib/fa/bars'

import css from './header.css'
import BlueButton from '../BlueButton'

class Header extends Component {
  handleToggleMenuClick = () => {
    console.log('menu clicked')
  }
  onLoginClick = () => {
    this.props.history.push('/login')
  }
  onRegisterClick = () => {
    this.props.history.push('/register')
  }
  render() {
    return (
      <header className={css.header}>
        <FaBars
          className={css.menuToggler}
          onClick={this.handleToggleMenuClick}
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
  history: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired
}

export default Header