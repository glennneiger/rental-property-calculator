import {
  ExtractJwt,
  Strategy as JwtStrategy
} from 'passport-jwt'
import mongoose from 'mongoose'
import keys from './keys'
import { MODEL_USERS } from '../../constants'

const User = mongoose.model(MODEL_USERS)

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.secretOrKey
}

module.exports = passport => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        if (user) {
          return done(null, user)
        }
        return done(null, false)
      })
      .catch(err => console.log(err))
  }))
}