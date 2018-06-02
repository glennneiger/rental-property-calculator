import React from 'react'
import PropTypes from 'prop-types'

import './blueButton.css'

const BlueButton = props =>
  <button className='blueButton' {...props}>
    {props.children}
  </button>

BlueButton.propTypes = {
  children: PropTypes.string
}

export default BlueButton