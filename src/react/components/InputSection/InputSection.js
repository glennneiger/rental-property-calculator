import React from 'react'
import PropTypes from 'prop-types'

import './inputSection.css'

const InputSection = ({
  children,
  title
}) => (
  <div className='inputSection' >
    <h2>{ title }</h2>
    <div className='inputs'>
      { children }
    </div>
  </div>
)

InputSection.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string.isRequired
}

export default InputSection