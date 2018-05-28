import React from 'react'

import Result from '../Result'
import InputSection from '../InputSection'
import Input from '../Input'
import {
  inputSectionData
} from './childProps'
import './calculator.css'

const Calculator = () => {
  return (
    <div className='calculator'>
      {inputSectionData.map(section => (
        <InputSection key={section.title}
          title={section.title}>
          {section.childProps.map(props => (
            <Input
              key={props.inputId}
              {...props}
              section={section.title}
            />
          ))}
        </InputSection>
      ))}
      <Result />
    </div>
  )
}

export default Calculator