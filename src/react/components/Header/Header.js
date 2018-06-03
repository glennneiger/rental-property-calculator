import React from 'react'
import PropTypes from 'prop-types'

import './header.css'

const Header = ({
  isAuthenticated
}) => {
  return (
    <header className='header'>
      <span>Rental Property Calculator</span>
      {isAuthenticated}
    </header>
  )
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

export default Header