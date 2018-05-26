import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AuthInput from '../AuthInput'
import '../authentication.css'

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
  componentDidMount = () => {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/')
    }
    this.props.clearErrors()
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
    this.props.registerUser(newUser, this.props.history)
  }
  render() {
    const { errors } = this.props
    return (
      <div className='authenticationPage'>
        <form onSubmit={this.handleSubmit}>
          <div className='authenticationForm'>
            <AuthInput
              error={errors.name}
              handleChange={this.handleChange}
              label='Name'
              name='name'
              placeholder='Enter Your Name'
              value={this.state.name}
            />
            <AuthInput
              error={errors.email}
              handleChange={this.handleChange}
              label='Email'
              name='email'
              placeholder='Enter Email'
              value={this.state.email}
            />
            <AuthInput
              error={errors.password}
              handleChange={this.handleChange}
              label='Password'
              name='password'
              placeholder='Enter Password'
              type='password'
              value={this.state.password}
            />
            <AuthInput
              error={errors.password2}
              handleChange={this.handleChange}
              label='Confirm Password'
              name='password2'
              placeholder='Confirm Password'
              type='password'
              value={this.state.password2}
            />
            <button>Register</button>
          </div>
        </form>
      </div>
    )
  }
}

RegisterPage.propTypes = {
  auth: PropTypes.object.isRequired,
  clearErrors: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  history: PropTypes.object,
  registerUser: PropTypes.func.isRequired
}

export default RegisterPage