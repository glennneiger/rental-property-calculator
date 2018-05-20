import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

import './loginPage.css'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      redirectAfterLogin: false
    }
  }
  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    })
  }
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
  }
  render() {
    if (this.state.redirectAfterLogin) {
      return <Redirect to='/' />
    }
    return (
      <div className='loginPage'>
        <form onSubmit={this.handleSubmit}>
          <div className='loginForm'>
            <label htmlFor='email'>Email</label>
            <input type='text'
              name='email'
              placeholder={'Enter Email'}
              value={this.state.email}
              onChange={this.handleEmailChange} />
            <label htmlFor='password'>Password</label>
            <input type='password'
              name='password'
              placeholder={'Enter Password'}
              value={this.state.password}
              onChange={this.handlePasswordChange} />
            <button>Login</button>
          </div>
        </form>
      </div>
    )
  }
}

LoginPage.propTypes = {
  handleLogin: PropTypes.func.isRequired
}

export default LoginPage