import React from 'react'
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

export default InputSection