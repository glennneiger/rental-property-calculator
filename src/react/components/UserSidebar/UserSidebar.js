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
    console.log(calculationList.length)
    if (calculationList === undefined || calculationList.length === 0) {
      <button onClick={ logoutUser }>Logout</button>
      return <div>Loading...</div>
    }
    return (
      <div className='userSidebar'>
        <button onClick={ logoutUser }>Logout</button>
        <Infinite
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
        }

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