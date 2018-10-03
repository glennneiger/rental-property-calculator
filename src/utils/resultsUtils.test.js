import { expect } from 'chai'

import {
  getYearsForResults
} from './resultsUtils'

describe('utils/resultsUtils', () => {
  describe('getYearsForResults', () => {
    it('returns proper array when given a number not divisible by 5', () => {
      expect(getYearsForResults(23))
        .to
        .deep
        .equal([1, 5, 10, 15, 20, 24])
    })
    it('returns proper array when given a number divisible by 5', () => {
      expect(getYearsForResults(25))
        .to
        .deep
        .equal([1, 5, 10, 15, 20, 25, 26])
    })
    it('returns proper array when given 0', () => {
      expect(getYearsForResults(0))
        .to
        .deep
        .equal([1])
    })
    it('returns proper array when given the empty string', () => {
      expect(getYearsForResults(''))
        .to
        .deep
        .equal([1])
    })
  })
})