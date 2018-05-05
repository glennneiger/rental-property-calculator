import { expect } from 'chai'

import {
  getCompoundedValue,
  makeValidGrowthRate
} from '../../src/utils/calculationUtils'

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