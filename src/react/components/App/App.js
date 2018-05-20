import React, { Component } from 'react'

import CalculatorPage from '../CalculatorPage'
import LoginPage from '../LoginPage'
import PropsRoute from '../PropsRoute'

import './app.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }
  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }
  render() {
    return (
      <div className='app'>
        {<PropsRoute exact path='/'
          component={CalculatorPage}
          isLoggedIn={this.state.isLoggedIn} />}
        {<PropsRoute exact path='/login'
          component={LoginPage}
          handleLogin={this.handleLogin} />}
      </div>
    )
  }
}

export default App