import React from 'react'
import PropTypes from 'prop-types'

import css from './sidebar.css'
import GuestSidebar from '../GuestSidebar'
import UserSidebar from '../UserSidebar'

const Sidebar = ({
  auth
}) => {
  return (
    <div className={css.sidebar}>
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