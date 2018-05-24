import React, { Component } from 'react'
import classNames from 'classnames'
import axios from 'axios'

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
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('/api/users/login', user)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }))
  }
  render() {
    const { errors } = this.state
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

export default LoginPage