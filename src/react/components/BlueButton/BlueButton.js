import React from 'react'
import PropTypes from 'prop-types'

import css from './blueButton.css'

const BlueButton = props =>
  <button className={css.blueButton} {...props}>
    {props.children}
  </button>

BlueButton.propTypes = {
  children: PropTypes.string
}

export default BlueButton