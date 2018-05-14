import express from 'express'

import { User } from './models'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('working')
})

router.post('/', (req, res, next) => {
  // if (req.body.password !== req.body.passwordConf) {
  //   const err = new Error('Passwords do not match.')
  //   err.status = 400
  //   res.send('passwords don\'t match')
  //   return next(err)
  // }

  const userData = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    passwordConf: req.body.passwordConf
  }
  User.create(userData).then(user => {
    res.send(user)
  }).catch(next)
})

// router.get('/profile', (req, res, next) => {
//   User.findById(req.session.userId)
//     .exec((error, user) => {
//       if (error) {
//         return next(error)
//       }
//       if (user === null) {
//         const err = new Error('Not authorized to view this profile.')
//         err.status = 400
//         return next(err)
//       }
//       return res.send(
//         '<h1>Name: </h1>' + user.username +
//         '<h2>Mail: </h2>' + user.email +
//         '<br><a type="button" href="/logout">Logout</a>'
//       )
//     })
// })

export default router