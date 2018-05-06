import { expect } from 'chai'

import {
  getCompoundedValue,
  makeValidGrowthRate,
  calculatePercentOfPropertyValueMonthly,
  calculatePercentOfRentalIncomeMonthly,
  calculateInitialMonthlyIncome,
  calculateInitialYearlyIncome,
  calculateIncomeForYear
} from '../../src/utils/calculationUtils'
import {
  INPUT_ID_RENTAL_INCOME,
  INPUT_ID_OTHER_INCOME
} from '../../src/constants'

const createNewMonthlyIncome = (rentalIncome, otherIncome) => {
  return {
    [INPUT_ID_RENTAL_INCOME]: rentalIncome,
    [INPUT_ID_OTHER_INCOME]: otherIncome
  }
}

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
        .be
        .closeTo(265329.77, 0.01)
    })
    it('returns proper value when given negative annualGrowthRate', () => {
      expect(getCompoundedValue(100000, -5, 20))
        .to
        .be
        .closeTo(35848.59, 0.01)
    })
    it('returns proper value when given numeric strings', () => {
      expect(getCompoundedValue('100000', '5', '20'))
        .to
        .be
        .closeTo(265329.77, 0.01)
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
  describe('calculatePercentOfRentalIncomeMonthly', () => {
    it('returns proper value when given positive inputs', () => {
      expect(calculatePercentOfRentalIncomeMonthly(5, 1800))
        .to
        .equal(90)
    })
    it('returns proper value when given numeric strings', () => {
      expect(calculatePercentOfRentalIncomeMonthly('5', '1800'))
        .to
        .equal(90)
    })
    it('returns 0 if percent is null', () => {
      expect(calculatePercentOfRentalIncomeMonthly(null, 1800))
        .to
        .equal(0)
    })
    it('returns 0 if propertyValue is null', () => {
      expect(calculatePercentOfRentalIncomeMonthly(5, null))
        .to
        .equal(0)
    })
    it('returns 0 if percent is undefined', () => {
      expect(calculatePercentOfRentalIncomeMonthly(undefined, 1800))
        .to
        .equal(0)
    })
    it('returns 0 if propertyValue is undefined', () => {
      expect(calculatePercentOfRentalIncomeMonthly(5, undefined))
        .to
        .equal(0)
    })
  })
  describe('calculateInitialMonthlyIncome', () => {
    const POSITIVE_RENTAL_INCOME = 1800
    const POSITIVE_OTHER_INCOME = 150
    it('returns proper value when given positive inputs', () => {
      const monthlyIncome = createNewMonthlyIncome(
        POSITIVE_RENTAL_INCOME,
        POSITIVE_OTHER_INCOME
      )
      expect(calculateInitialMonthlyIncome(monthlyIncome))
        .to
        .equal(1950)
    })
    it('returns proper value when given numeric strings', () => {
      const monthlyIncome = createNewMonthlyIncome(
        '1800',
        '150'
      )
      expect(calculateInitialMonthlyIncome(monthlyIncome))
        .to
        .equal(1950)
    })
    it('returns 0 if monthlyIncome is null', () => {
      expect(calculateInitialMonthlyIncome(null))
        .to
        .equal(0)
    })
    it('returns 0 if monthlyIncome is undefined', () => {
      expect(calculateInitialMonthlyIncome(undefined))
        .to
        .equal(0)
    })
  })
  describe('calculateInitialYearlyIncome', () => {
    const POSITIVE_RENTAL_INCOME = 1800
    const POSITIVE_OTHER_INCOME = 150
    it('returns proper value when given positive inputs', () => {
      const monthlyIncome = createNewMonthlyIncome(
        POSITIVE_RENTAL_INCOME,
        POSITIVE_OTHER_INCOME
      )
      expect(calculateInitialYearlyIncome(monthlyIncome))
        .to
        .equal(23400)
    })
    it('returns proper value when given numeric strings', () => {
      const monthlyIncome = createNewMonthlyIncome(
        '1800',
        '150'
      )
      expect(calculateInitialYearlyIncome(monthlyIncome))
        .to
        .equal(23400)
    })
    it('returns 0 if monthlyIncome is null', () => {
      expect(calculateInitialYearlyIncome(null))
        .to
        .equal(0)
    })
    it('returns 0 if monthlyIncome is undefined', () => {
      expect(calculateInitialYearlyIncome(undefined))
        .to
        .equal(0)
    })
  })
  describe('calculateIncomeForYear', () => {
    const POSITIVE_RENTAL_INCOME = 1800
    const POSITIVE_OTHER_INCOME = 150
    const POSITIVE_RENTAL_INCOME_STRING = '1800'
    const POSITIVE_OTHER_INCOME_STRING = '150'
    const YEAR = 20
    const ANNUAL_INCOME_GROWTH = 5
    const ANSWER = 62087.17
    const PRECISION = 0.01
    const YEAR_STRING = '20'
    const ANNUAL_INCOME_GROWTH_STRING = '5'
    const MONTHLY_INCOME = createNewMonthlyIncome(
      POSITIVE_RENTAL_INCOME,
      POSITIVE_OTHER_INCOME
    )
    const MONTHLY_INCOME_STRINGS = createNewMonthlyIncome(
      POSITIVE_RENTAL_INCOME_STRING,
      POSITIVE_OTHER_INCOME_STRING
    )
    it('returns proper value when given positive inputs', () => {
      expect(calculateIncomeForYear(YEAR, MONTHLY_INCOME, ANNUAL_INCOME_GROWTH))
        .to
        .be
        .closeTo(ANSWER, PRECISION)
    })
    it('returns proper value when given numeric strings', () => {
      expect(calculateIncomeForYear(
        YEAR_STRING,
        MONTHLY_INCOME_STRINGS,
        ANNUAL_INCOME_GROWTH_STRING
      )).to
        .be
        .closeTo(ANSWER, PRECISION)
    })
    it('returns 0 if year is null', () => {
      expect(calculateIncomeForYear(null, MONTHLY_INCOME, ANNUAL_INCOME_GROWTH))
        .to
        .equal(0)
    })
    it('returns 0 if year is undefined', () => {
      expect(calculateIncomeForYear(
        undefined,
        MONTHLY_INCOME,
        ANNUAL_INCOME_GROWTH
      )).to
        .equal(0)
    })
    it('returns 0 if monthlyIncome is null', () => {
      expect(calculateIncomeForYear(YEAR, null, ANNUAL_INCOME_GROWTH))
        .to
        .equal(0)
    })
    it('returns 0 if monthlyIncome is undefined', () => {
      expect(calculateIncomeForYear(YEAR, undefined, ANNUAL_INCOME_GROWTH))
        .to
        .equal(0)
    })
    it('returns 0 if annualIncomeGrowth is null', () => {
      expect(calculateIncomeForYear(YEAR, MONTHLY_INCOME, null))
        .to
        .equal(0)
    })
    it('returns 0 if annualIncomeGrowth is undefined', () => {
      expect(calculateIncomeForYear(YEAR, MONTHLY_INCOME, undefined))
        .to
        .equal(0)
    })
  })
})