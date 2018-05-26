import React from 'react'
import PropTypes from 'prop-types'

import './sidebar.css'
import GuestSidebar from '../GuestSidebar'
import UserSidebar from '../UserSidebar'

const Sidebar = ({
  auth
}) => {
  return (
    <div className='sidebar'>
      { auth.isAuthenticated
        ? <UserSidebar />
        : <GuestSidebar />
      }
    </div>
  )
}

Sidebar.propTypes = {
  auth: PropTypes.object.isRequired
}

export default Sidebar