import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import AuthInput from '../AuthInput'
import '../authentication.css'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
  }
  componentDidMount = () => {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/')
    }
    this.props.clearErrors()
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/')
    }
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()

    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(userData)
  }
  render() {
    const { errors } = this.props
    return (
      <div className='authenticationPage'>
        <form onSubmit={this.handleSubmit}>
          <div className='authenticationForm'>
            <h1>Login</h1>
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
            <button>Login</button>
            <p>Don't have an account? <Link to={'/register'}>Register</Link></p>
          </div>
        </form>

      </div>
    )
  }
}

LoginPage.propTypes = {
  auth: PropTypes.object.isRequired,
  clearErrors: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  history: PropTypes.object,
  loginUser: PropTypes.func.isRequired
}

export default LoginPage