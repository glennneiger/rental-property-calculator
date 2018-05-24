import Validator from 'validator'
import { isEmpty } from '../../utils/validationUtils'

export const validateProfileInput = data => {
  let errors = {}

  data.handle = !isEmpty(data.handle) ? data.handle : ''

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'Handle must be between 2 and 40 characters'
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Handle field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}