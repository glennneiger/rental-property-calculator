import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import '../authentication.css'

class RegisterPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }
    this.props.registerUser(newUser)
    // axios.post('/api/users/register', newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err => this.setState({ errors: err.response.data }))
  }
  render() {
    const { errors } = this.state
    return (
      <div className='authenticationPage'>
        <form onSubmit={this.handleSubmit}>
          <div className='authenticationForm'>
            <label htmlFor='name'>Name</label>
            <input type='text'
              name='name'
              placeholder={'Enter Your Name'}
              value={this.state.name}
              onChange={this.handleChange}
              className={classNames({
                isInvalid: errors.name
              })} />
            {
              errors.name &&
                (<div className='invalidMessage'>{errors.name}</div>)
            }
            <label htmlFor='email'>Email</label>
            <input type='text'
              name='email'
              placeholder={'Enter Email'}
              value={this.state.email}
              onChange={this.handleChange}
              className={classNames({
                isInvalid: errors.name
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
                isInvalid: errors.name
              })} />
            {
              errors.password &&
                (<div className='invalidMessage'>{errors.password}</div>)
            }
            <label htmlFor='password2'>Confirm Password</label>
            <input type='password'
              name='password2'
              placeholder={'Confirm Password'}
              value={this.state.password2}
              onChange={this.handleChange}
              className={classNames({
                isInvalid: errors.name
              })} />
            {
              errors.password2 &&
                (<div className='invalidMessage'>{errors.password2}</div>)
            }
            <button>Register</button>
          </div>
        </form>
      </div>
    )
  }
}

RegisterPage.propTypes = {
  registerUser: PropTypes.func.isRequired
}

export default RegisterPage