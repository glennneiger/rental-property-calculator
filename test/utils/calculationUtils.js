import { expect } from 'chai'

import {
  getCompoundedValue,
  makeValidGrowthRate,
  calculatePercentOfPropertyValueMonthly
} from '../../src/utils/calculationUtils'

describe('utils/calculationUtils', () => {
  describe('makeValidGrowthRate', () => {
    it('returns proper value when given a number', () => {
      expect(makeValidGrowthRate(5))
        .to
        .equal(5)
    })
    it('returns proper value when given a numeric string', () => {
      expect(makeValidGrowthRate('5'))
        .to
        .equal(5)
    })
    it('returns 0 when given null', () => {
      expect(makeValidGrowthRate(null))
        .to
        .equal(0)
    })
    it('returns 0 when given undefined', () => {
      expect(makeValidGrowthRate(undefined))
        .to
        .equal(0)
    })
  })
  describe('getCompoundedValue', () => {
    it('returns proper value when given positive inputs', () => {
      expect(getCompoundedValue(100000, 5, 20))
        .to
        .equal(265330)
    })
    it('returns proper value when given negative annualGrowthRate', () => {
      expect(getCompoundedValue(100000, -5, 20))
        .to
        .equal(35849)
    })
    it('returns proper value when given numeric strings', () => {
      expect(getCompoundedValue('100000', '5', '20'))
        .to
        .equal(265330)
    })
  })
  describe('calculatePercentOfPropertyValueMonthly', () => {
    it('returns proper value when given positive inputs', () => {
      expect(calculatePercentOfPropertyValueMonthly(1, 100000))
        .to
        .be
        .closeTo(83.33, 0.01)
    })
    it('returns proper value when given numeric strings', () => {
      expect(calculatePercentOfPropertyValueMonthly('1', '100000'))
        .to
        .be
        .closeTo(83.33, 0.01)
    })
    it('returns 0 if percent is null', () => {
      expect(calculatePercentOfPropertyValueMonthly(null, 100000))
        .to
        .equal(0)
    })
    it('returns 0 if propertyValue is null', () => {
      expect(calculatePercentOfPropertyValueMonthly(1, null))
        .to
        .equal(0)
    })
    it('returns 0 if percent is undefined', () => {
      expect(calculatePercentOfPropertyValueMonthly(undefined, 100000))
        .to
        .equal(0)
    })
    it('returns 0 if propertyValue is undefined', () => {
      expect(calculatePercentOfPropertyValueMonthly(1, undefined))
        .to
        .equal(0)
    })
  })
})