import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import apiRouter from './api'
import config from './config'
import { User } from './models'

const app = express()
mongoose.connect('mongodb://localhost/testDB')
const db = mongoose.connection
mongoose.Promise = global.Promise

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to mongoose')
})

app.use('/api', apiRouter)

/*
 * Error handler.
 * Define as the last app.use callback
 */
app.use((err, req, res, next) => {
  res.status(err.status || 400)
  res.send({ error: err.message })
})

app.listen(config.port, () => {
  console.log(`App is listening on port ${ config.port }`)
})