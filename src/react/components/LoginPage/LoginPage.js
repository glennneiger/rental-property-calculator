import React, { Component } from 'react'
import axios from 'axios'
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
    axios.post('http://localhost:3001/api/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then(() => {
        this.props.handleLogin()
        this.setState({
          redirectAfterLogin: true
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    if (this.state.redirectAfterLogin) {
      return <Redirect to='/' />
    }
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