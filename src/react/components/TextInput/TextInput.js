import React from 'react'
import PropTypes from 'prop-types'

import css from './textInput.css'

const DEFAULT_WIDTH = 160

const TextInput = props => {
  const width = props.width ? props.width : DEFAULT_WIDTH
  return (
    <input className={css.textInput} {...props} style={{ width }} />
  )
}

TextInput.propTypes = {
  width: PropTypes.number
}
export default TextInput