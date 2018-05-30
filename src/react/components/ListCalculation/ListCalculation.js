import React from 'react'
import PropTypes from 'prop-types'

import './listCalculation.css'

const ListCalculation = ({
  title
}) => (
  <div className='listCalculation'>
    {title}
  </div>
)

ListCalculation.propTypes = {
  title: PropTypes.string.isRequired
}

export default ListCalculation