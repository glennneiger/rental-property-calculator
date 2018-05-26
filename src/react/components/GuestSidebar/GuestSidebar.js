import React from 'react'
import { Link } from 'react-router-dom'

import './guestSidebar.css'

const GuestSidebar = ({}) => {
  return (
    <div className='guestSidebar'>
      <p><Link to={'/login'}>Login</Link> or <Link to={'/register'}>
        Register</Link> to save your analysis</p>
    </div>
  )
}

export default GuestSidebar