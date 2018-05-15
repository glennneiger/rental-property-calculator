import express from 'express'

import { User } from './models'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('working')
})

router.post('/', (req, res, next) => {
  if (req.body.password !== req.body.passwordConf) {
    const err = new Error('Passwords do not match.')
    err.status = 400
    res.send('passwords don\'t match')
    return next(err)
  }

  const userData = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    passwordConf: req.body.passwordConf
  }
  User.create(userData).then(user => {
    console.log('called')
    res.send(user)
  }).catch(next)
})

router.get('/profile', (req, res, next) => {
  return res.send('GET profile')
})

router.post('/profile', (req, res, next) => {
  return res.send('POST profile')
})

export default router