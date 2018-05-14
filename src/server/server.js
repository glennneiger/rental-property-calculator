import express from 'express'
import mongoose from 'mongoose'

import apiRouter from './api'
import config from './config'
import { User } from './schemas'

const app = express()
mongoose.connect('mongodb://localhost/3001')
const db = mongoose.connection

app.use('/api', apiRouter)

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to mongoose')
  const greg = new User({
    email: 'dardis.greg@gmail.com',
    username: 'gdardis',
    password: 'password123',
    passwordConf: 'password123'
  })
  console.log('Greg email:', greg.email)
  console.log('Greg username:', greg.username)
  console.log('Greg password:', greg.password)
  console.log('Greg passwordConf:', greg.passwordConf)
})

/* Catch 404 and forward to error handler */
app.use((req, res, next) => {
  const err = new Error('File not found')
  err.status = 404
  next(err)
})

/*
 * Error handler.
 * Define as the last app.use callback
 */
app.use((err, req, res) => {
  res.status(err.status || 500)
  res.json('error', {
    message: err.message,
    error: {}
  })
})

app.listen(config.port, () => {
  console.log(`App is listening on port ${ config.port }`)
})