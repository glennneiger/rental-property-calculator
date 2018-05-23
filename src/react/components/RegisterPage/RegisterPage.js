import React, { Component } from 'react'

import './registerPage.css'

class RegisterPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: ''
    }
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    console.log(newUser)
  }
  render() {
    return (
      <div className='registerPage'>
        <form onSubmit={this.handleSubmit}>
          <div className='registerForm'>
            <label htmlFor='name'>Name</label>
            <input type='text'
              name='name'
              placeholder={'Enter Your Name'}
              value={this.state.name}
              onChange={this.handleChange} />
            <label htmlFor='email'>Email</label>
            <input type='text'
              name='email'
              placeholder={'Enter Email'}
              value={this.state.email}
              onChange={this.handleChange} />
            <label htmlFor='password'>Password</label>
            <input type='password'
              name='password'
              placeholder={'Enter Password'}
              value={this.state.password}
              onChange={this.handleChange} />
            <label htmlFor='password2'>Confirm Password</label>
            <input type='password'
              name='password2'
              placeholder={'Confirm Password'}
              value={this.state.password2}
              onChange={this.handleChange} />
            <button>Register</button>
          </div>
        </form>
      </div>
    )
  }
}

export default RegisterPage