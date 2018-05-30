import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Infinite from 'react-infinite'

import ListCalculation from '../ListCalculation'
import './userSidebar.css'

class UserSidebar extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getAllCalculations()
  }
  render() {
    return (
      <div className='userSidebar'>
        <button onClick={ this.props.logoutUser }>Logout</button>
        <Infinite className='infinite' containerHeight={200} elementHeight={20}>
          <ListCalculation
            id='ID from get all calculations request'
            title='hello'/>
        </Infinite>
      </div>
    )
  }
}

UserSidebar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  getAllCalculations: PropTypes.func.isRequired
}

export default UserSidebar