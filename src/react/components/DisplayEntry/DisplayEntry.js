import React from 'react'
import PropTypes from 'prop-types'

import './displayEntry.css'
import {
  NUMBER_PRECISION_DISPLAY
} from '../../../constants'

const DisplayEntry = ({
  content,
  prefix,
  suffix,
  title
}) => (
  <p>
    {`${title}:
    ${prefix}${content.toFixed(NUMBER_PRECISION_DISPLAY)}${suffix}`
    }
  </p>
)

DisplayEntry.propTypes = {
  content: PropTypes.number.isRequired,
  prefix: PropTypes.string.isRequired,
  suffix: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default DisplayEntry