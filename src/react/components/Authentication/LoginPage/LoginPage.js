import React, { Component } from 'react'
import classNames from 'classnames'
import axios from 'axios'
import PropTypes from 'prop-types'

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
            <label htmlFor='email'>Email</label>
            <input type='text'
              name='email'
              placeholder={'Enter Email'}
              value={this.state.email}
              onChange={this.handleChange}
              className={classNames({
                isInvalid: errors.email
              })} />
            {
              errors.email &&
                (<div className='invalidMessage'>{errors.email}</div>)
            }
            <label htmlFor='password'>Password</label>
            <input type='password'
              name='password'
              placeholder={'Enter Password'}
              value={this.state.password}
              onChange={this.handleChange}
              className={classNames({
                isInvalid: errors.password
              })} />
            {
              errors.password &&
                (<div className='invalidMessage'>{errors.password}</div>)
            }
            <button>Login</button>
          </div>
        </form>
      </div>
    )
  }
}

LoginPage.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  history: PropTypes.object,
  loginUser: PropTypes.func.isRequired
}

export default LoginPage