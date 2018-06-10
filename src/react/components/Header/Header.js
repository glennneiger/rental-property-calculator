import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import css from './header.css'
import BlueButton from '../BlueButton'

class Header extends Component {
  onLoginClick = () => {
    this.props.history.push('/login')
  }
  onRegisterClick = () => {
    this.props.history.push('/register')
  }
  render() {
    return (
      <header className={css.header}>
        <Link to='/'><span>Rental Property Calculator</span></Link>
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