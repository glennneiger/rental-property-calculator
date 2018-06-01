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
  handleSaveClick = () => {
    if (!this.props.isSaved) {
      this.handleSaveAsClick()
    } else {
      console.log('save click')
    }
  }
  handleSaveAsClick = () => {
    const title = prompt('Enter a title for your calculation')
    this.props.saveCalculation(title, this.props.calculation)
  }
  render() {
    const { logoutUser, calculationList } = this.props
    return (
      <div className='userSidebar'>
        <button onClick={logoutUser}>Logout</button>
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
        <button onClick={this.handleSaveClick}>Save</button>
        <button onClick={this.handleSaveAsClick}>Save As...</button>
      </div>
    )
  }
}

UserSidebar.propTypes = {
  calculation: PropTypes.object.isRequired,
  calculationList: PropTypes.array.isRequired,
  getAllCalculations: PropTypes.func.isRequired,
  isSaved: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired,
  saveCalculation: PropTypes.func.isRequired
}

export default UserSidebar