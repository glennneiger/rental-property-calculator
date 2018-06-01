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
    const { logoutUser, calculationList } = this.props
    return (
      <div className='userSidebar'>
        <button onClick={ logoutUser }>Logout</button>
        {calculationList.length !== 0
          ? <Infinite
            className='infinite'
            containerHeight={200}
            elementHeight={20}
          >
            {calculationList.map(calculation => (
              <ListCalculation
                key={calculation.id}
                id={calculation.id}
                title={calculation.title}
              />
            ))}
          </Infinite>
          : <div>No calculations to display</div>}
      </div>
    )
  }
}

UserSidebar.propTypes = {
  calculationList: PropTypes.array.isRequired,
  logoutUser: PropTypes.func.isRequired,
  getAllCalculations: PropTypes.func.isRequired
}

export default UserSidebar