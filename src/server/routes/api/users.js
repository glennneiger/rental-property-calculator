import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const keys = require('../../config/keys')
import { User } from '../../models/User'

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
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: 'Email already exists.' })
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

  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ email: 'No user exists for that email.' })
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
              keys.secret,
              { expiresIn: 3600 },
              (err, token) => {
                return res.json({
                  success: true,
                  token: 'Bearer ' + token
                })
              }
            )
          } else {
            return res.status(400).json({
              password: 'The password entered is incorrect.'
            })
          }
        })
    })
    .catch(err => console.log(err))
})

module.exports = router