import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import CalculatorPage from '../CalculatorPage'
import LoginPage from '../Authentication/LoginPage'
import RegisterPage from '../Authentication/RegisterPage'

import './app.css'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Route exact path='/' component={CalculatorPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/register' component={RegisterPage} />
      </div>
    )
  }
}

export default App