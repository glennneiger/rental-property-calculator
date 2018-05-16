import React from 'react'
import PropTypes from 'prop-types'

import './sidebar.css'
import GuestSidebar from '../GuestSidebar'
import UserSidebar from '../UserSidebar'

const Sidebar = ({
  isLoggedIn
}) => {
  return (
    <div className='sidebar'>
      { isLoggedIn
        ? <UserSidebar />
        : <GuestSidebar />
      }
    </div>
  )
}

Sidebar.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default Sidebar