import React, { Component } from 'react'

import './registerPage.css'

class RegisterPage extends Component {
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
  }
  render() {
    return (
      <div className='registerPage'>
        <form onSubmit={this.handleSubmit}>
          <div className='registerForm'>
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
            <button>Register</button>
          </div>
        </form>
      </div>
    )
  }
}

export default RegisterPage