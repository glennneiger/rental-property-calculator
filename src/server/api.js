import express from 'express'

import { User } from './models'

const router = express.Router()

router.get('/', (req, res) => {
  return res.send('root')
})

router.post('/register', (req, res, next) => {
  if (req.body.password !== req.body.passwordConf) {
    const err = new Error('Passwords do not match.')
    err.status = 400
    res.send('passwords don\'t match')
    return next(err)
  }

  const userData = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  }
  User.create(userData).then(user => {
    req.session.userId = user._id
    return res.redirect('profile')
  }).catch(next)
})

router.post('/login', (req, res, next) => {
  if (req.body.email && req.body.password) {
    User.authenticateLogin(req.body.email, req.body.password, (error, user) => {
      if (error || !user) {
        const err = new Error('Wrong email or password')
        err.status = 401
        return next(err)
      }
      req.session.userId = user._id
      return res.redirect('profile')
    })
  } else {
    const err = new Error('Missing email or password')
    err.status = 400
    return next(err)
  }
})

router.get('/profile', (req, res, next) => {
  return res.send('GET profile')
})

router.get('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        return next(err)
      }
      return res.send('logged out')
    })
  }
})

router.post('/profile', (req, res, next) => {
  return res.send('POST profile')
})

export default router