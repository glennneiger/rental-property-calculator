import React from 'react'
import PropTypes from 'prop-types'

import './header.css'
import BlueButton from '../BlueButton'

const Header = ({
  isAuthenticated,
  logoutUser
}) => {
  return (
    <header className='header'>
      <span>Rental Property Calculator</span>
      <div className='authButtons'>
        {isAuthenticated
          ? <BlueButton onClick={logoutUser}>Logout</BlueButton>
          : <p>LOGIN</p>}
      </div>
    </header>
  )
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired
}

export default Header