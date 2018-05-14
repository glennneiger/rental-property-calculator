import mongoose from 'mongoose'

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
  },
  passwordConf: {
    type: String,
    required: [true, 'Passwordcomf field is required']
  }
})

export const User = mongoose.model('User', userSchema)