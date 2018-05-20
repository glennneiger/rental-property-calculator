import express from 'express'

const router = express.Router()

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => {
  return res.json({
    msg: 'Profile Works'
  })
})

module.exports = router