import express from 'express'
import mongoose from 'mongoose'
import passport from 'passport'

import Profile from '../../models/Profile'
import User from '../../models/User'
import { validateProfileInput } from '../../validation/profile'

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
    const errors = {}
    Profile.findOne({ user: req.user.id })
      .populate('user', ['name', 'date'])
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

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body)

    if (!isValid) {
      return res.status(400).json(errors)
    }

    const profileFields = {}
    profileFields.user = req.user.id
    if (req.body.handle) {
      profileFields.handle = req.body.handle
    }

    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (profile) {
          // Update if already exists
          Profile.findOneAndUpdate(
            { user: req.user.id },
            { $set: profileFields },
            { new: true }
          ).then(updatedProfile => res.json(updatedProfile))
        } else {
          // Create profile for user
          Profile.findOne({ handle: profileFields.handle })
            .then(profileWithHandle => {
              if (profileWithHandle) {
                errors.handle = 'That handle is taken.'
                return res.status(400).json(errors)
              }

              new Profile(profileFields).save().then(newProfile => {
                return res.json(newProfile)
              })
            })
        }
      })
  }
)

module.exports = router