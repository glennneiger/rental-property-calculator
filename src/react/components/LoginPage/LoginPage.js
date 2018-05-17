import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import './loginPage.css'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
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
    axios.post('http://localhost:3001/api/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        if (response) {
          this.props.handleLogin()
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    return (
      <div className='loginPage'>
        <div className='loginForm'>
          <form onSubmit={ this.handleSubmit }>
            <input type='text'
              name='email'
              placeholder={ 'email'}
              value={ this.state.email }
              onChange={ this.handleEmailChange } />
            <input type='text'
              name='password'
              placeholder={ 'password'}
              value={ this.state.password }
              onChange={ this.handlePasswordChange } />
            <button>Login</button>
          </form>
        </div>
      </div>
    )
  }
}

LoginPage.propTypes = {
  handleLogin: PropTypes.func.isRequired
}

export default LoginPage