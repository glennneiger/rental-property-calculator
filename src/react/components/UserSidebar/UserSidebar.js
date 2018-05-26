import React from 'react'
import PropTypes from 'prop-types'

import './userSidebar.css'

const UserSidebar = ({
  logoutUser
}) => {
  return (
    <div className='userSidebar'>
      <button onClick={ logoutUser }>Logout</button>
    </div>
  )
}

UserSidebar.propTypes = {
  logoutUser: PropTypes.func.isRequired
}

export default UserSidebar