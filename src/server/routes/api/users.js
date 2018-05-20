import express from 'express'
import bcrypt from 'bcryptjs'

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

module.exports = router