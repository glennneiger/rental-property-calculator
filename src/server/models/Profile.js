import mongoose from 'mongoose';
const Schema = mongoose.Schema;

import {
  MODEL_PROFILE,
  MODEL_USERS
} from '../../constants';

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: MODEL_USERS
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model(MODEL_PROFILE, ProfileSchema);