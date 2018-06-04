import React from 'react'

import Result from '../Result'
import CalculatorInputSection from '../CalculatorInputSection'
import CalculatorInput from '../CalculatorInput'
import {
  inputSectionData
} from './childProps'
import './calculator.css'

const Calculator = () => {
  return (
    <div className='calculator'>
      {inputSectionData.map((section, index) => (
        <div key={section.title}>
          <CalculatorInputSection
            title={section.title}>
            {section.childProps.map(props => (
              <CalculatorInput
                key={props.inputId}
                {...props}
                section={section.title}
              />
            ))}
          </CalculatorInputSection>
          {
            index !== section.childProps.length - 1
              ? <div className='divider' />
              : null
          }
        </div>
      ))}
      <Result />
    </div>
  )
}

export default Calculator