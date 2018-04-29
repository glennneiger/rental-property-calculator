import React, { Component } from 'react'

import InputSection from '../InputSection'
import Input from '../Input'
import { inputSectionData } from './childProps'
import './app.css'

class App extends Component {
  render() {
    return (
      <div className='app'>
        { inputSectionData.map(data => (
          <InputSection title={ data.title }>
            { data.childProps.map(props => (
              <Input key={ props.inputId } { ...props }/>
            )) }
          </InputSection>
        )) }
      </div>
    )
  }
}

export default App
