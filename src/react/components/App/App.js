import React, { Component } from 'react'
import './app.css'

import InputSection from '../InputSection'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <InputSection title='General Info'>
          Neighborhood: <textarea />
        </InputSection>
      </div>
    )
  }
}

export default App
