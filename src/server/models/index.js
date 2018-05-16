import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

import {
  SALT_ROUNDS
} from '../../constants'

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email field is required'],
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'Username field is required'],
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password field is required']
  }
})

/* Authenticate user login */
userSchema.statics.authenticateLogin = (email, password, callback) => {
  User.findOne({ email: email })
    .exec((err, user) => {
      if (err || !user) {
        return callback(err)
      }
      bcrypt.compare(password, user.password, (error, result) => {
        if (result) {
          return callback(null, user)
        }
        return callback()
      })
    })
}

/* Can't use arrow function (gives wrong "this" context) */
userSchema.pre('save', function (next) {
  const user = this
  bcrypt.hash(user.password, SALT_ROUNDS, (err, hash) => {
    if (err) {
      return next(err)
    }
    user.password = hash
    return next()
  })
})

export const User = mongoose.model('User', userSchema)