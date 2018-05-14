import express from 'express'

import apiRouter from './api'
import config from './config'

const app = express()

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