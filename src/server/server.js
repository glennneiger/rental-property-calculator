import express from 'express'
import mongoose from 'mongoose'

const users = require('./routes/api/users.js')
const profile = require('./routes/api/profile.js')

const app = express()

const db = require('./config/keys.js').mongoURI

mongoose.connect(db)
  .then(() => console.log('Mongoose connected to MongoDB'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  return res.send('Hello World')
})

app.use('/api/users', users)
app.use('/api/profile', profile)

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})