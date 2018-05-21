import express from 'express'
import mongoose from 'mongoose'
import passport from 'passport'

import Profile from '../../models/Profile'
import User from '../../models/User'

const router = express.Router()

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => {
  return res.json({
    msg: 'Profile Works'
  })
})

// @route   GET api/profile
// @desc    Get current user's profile
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    let errors = {}
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noProfile = 'No profile exists for this user'
          return res.status(404).json(errors)
        }
        return res.json(profile)
      })
      .catch(err => res.status(404).json(err))
  }
)

module.exports = router