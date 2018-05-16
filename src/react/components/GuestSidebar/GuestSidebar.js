import React from 'react'
import { Link } from 'react-router-dom'

import './guestSidebar.css'

const GuestSidebar = ({}) => {
  return (
    <div className='guestSidebar'>
      <Link to={ '/login' }>Login</Link>
      <p> to save your analysis</p>
    </div>
  )
}

export default GuestSidebar

// todo login route not rendering different page