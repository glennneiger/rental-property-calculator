import mongoose from 'mongoose';
const Schema = mongoose.Schema;

import { MODEL_CALCULATIONS, MODEL_USERS } from '../../constants';

const CalculationSectionSchema = new Schema({
  inputs: {
    type: Map,
    of: String
  },
  notes: String
});

const CalculationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: MODEL_USERS
  },
  title: {
    type: String,
    required: true
  },
  calculation: {
    type: Map,
    of: CalculationSectionSchema
  }
});

export default mongoose.model(MODEL_CALCULATIONS, CalculationSchema);