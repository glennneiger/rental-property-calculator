import React, { Component } from 'react'

import Result from '../Result'
import CalculateButton from '../CalculateButton'
import InputSection from '../InputSection'
import Input from '../Input'
import { inputSectionData } from './childProps'
import './app.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputContent: this.getInputState()
    }
  }
  calculateResult = () => {

  }
  getInvestmentAfterYears = years => {
    // down payment + repair cost + closing costs = total investment
    // const inputContent = this.state.inputContent
    // TODO: somehow map this to childprops initial purchase so if it changes it still works
    // const downPayment = inputContent['']
    // let investment = downPayment
    // if (years === 0) {
    //   return investment;
    // }
    // return investment + 5
  }
  handleKeyDown = (event, section, inputId) => {
    const inputContent = this.state.inputContent
    inputContent[section][inputId] = event.target.value
    this.forceUpdate()
  }
  getInputState = () => {
    let inputContent = {}
    inputSectionData.forEach(inputSection => {
      const section = inputSection.title
      inputSection.childProps.forEach(props => {
        const input = props.inputId
        if (!inputContent[section]) {
          inputContent[section] = {}
        }
        inputContent[section][input] = ''
      })
    })
    return inputContent
  }
  render() {
    return (
      <div className='app'>
        { inputSectionData.map(section => (
          <InputSection key={ section.title }
            title={ section.title }>
            { section.childProps.map(props => (
              <Input
                content={ this.state.inputContent[section.title][props.inputId] }
                key={ props.inputId }
                { ...props }
                handleKeyDown={ this.handleKeyDown }
                section={ section.title }/>
            )) }
          </InputSection>
        )) }
        <CalculateButton handleClick={ this.calculateResult } />
        <Result getInvestmentAfterYears={ this.getInvestmentAfterYears }/>
      </div>
    )
  }
}

export default App
