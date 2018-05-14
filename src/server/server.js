import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import apiRouter from './api'
import config from './config'
import { User } from './models'

const app = express()
mongoose.connect(`mongodb://localhost/${ config.port }`)
const db = mongoose.connection

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to mongoose')
})

app.use('/api', apiRouter)

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