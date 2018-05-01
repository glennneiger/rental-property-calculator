import React, { Component } from 'react'

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
      </div>
    )
  }
}

export default App
