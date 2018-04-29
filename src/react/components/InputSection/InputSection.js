import React from 'react'
import './inputSection.css'

const InputSection = ({
  children,
  title
}) => (
  <div className='InputSection' >
    <h2>{ title }</h2>
    { children }
  </div>
)

export default InputSection