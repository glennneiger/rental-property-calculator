import React from 'react'

import css from './textInput.css'

const TextInput = props =>
  <input className={css.textInput} {...props} />

export default TextInput