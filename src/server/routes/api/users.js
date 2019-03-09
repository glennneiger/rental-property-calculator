import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import passport from 'passport'

const keys = require('../../config/keys')
import User from '../../models/User'
import { validateRegisterInput } from '../../validation/register'
import { validateLoginInput } from '../../validation/login'

const router = express.Router()

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => {
  return res.json({
    msg: 'Users Works'
  })
})

// @route   POST api/users/register
// @desc    Register new User
// @access  Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        errors.email = 'Email already exists.'
        return res.status(400).json(errors)
      }

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })

      bcrypt.genSalt(10, (err1, salt) => {
        bcrypt.hash(newUser.password, salt, (err2, hash) => {
          if (err2) {
            throw err2
          }
          newUser.password = hash
          newUser.save()
            .then(savedUser => res.json(savedUser))
            .catch(err3 => console.log(err3))
        })
      })
    })
})

// @route   POST api/users/login
// @desc    Login User / Returning JWT
// @access  Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        errors.email = 'No user exists for that email'
        return res.status(404).json(errors)
      }

      bcrypt.compare(req.body.password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,
              name: user.name
            }
            jwt.sign(
              payload,
              keys.secretOrKey,
              (err, token) => {
                return res.json({
                  success: true,
                  token: 'Bearer ' + token
                })
              }
            )
          } else {
            errors.password = 'The password entered is incorrect.'
            return res.status(400).json(errors)
          }
        })
    })
    .catch(err => console.log(err))
})

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    })
  }
)

module.exports = router