import { expect } from 'chai'

import {
  getCompoundedValue
} from '../src/utils'

const getCompoundedValueTest = () => {
  describe('getCompoundedValue', () => {
    it('should get proper value if given positive inputs', () => {
      expect(getCompoundedValue(100000, 5, 20))
        .to
        .equal(265330)
    })
    it('should get proper value if given 0', () => {
      expect(getCompoundedValue(0, 5, 20))
        .to
        .equal(0)
    })
  })
}

getCompoundedValueTest()