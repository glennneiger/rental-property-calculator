import React, { Component } from 'react'

import CalculatorPage from '../CalculatorPage'
import LoginPage from '../LoginPage'
import PropsRoute from '../PropsRoute'

import './app.css'

class App extends Component {
  render() {
    return (
      <div className='app'>
        { <PropsRoute exact path='/'
          component={ CalculatorPage }
          isLoggedIn={ false } /> }
        { <PropsRoute exact path='/login'
          component={ LoginPage } /> }
      </div>
    )
  }
}

export default App