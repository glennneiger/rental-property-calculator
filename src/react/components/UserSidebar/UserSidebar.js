import React from 'react'
import PropTypes from 'prop-types'
import Infinite from 'react-infinite'

import ListCalculation from '../ListCalculation'
import './userSidebar.css'

const UserSidebar = ({
  logoutUser
}) => {
  return (
    <div className='userSidebar'>
      <button onClick={ logoutUser }>Logout</button>
      <Infinite className='infinite' containerHeight={200} elementHeight={20}>
        <ListCalculation
          id='ID from get all calculations request'
          title='hello'/>
      </Infinite>
    </div>
  )
}

UserSidebar.propTypes = {
  logoutUser: PropTypes.func.isRequired
}

export default UserSidebar