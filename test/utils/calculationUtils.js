import { expect } from 'chai'

import {
  getCompoundedValue,
  makeValidGrowthRate,
  calculatePercentOfPropertyValueMonthly,
  calculatePercentOfRentalIncomeMonthly,
  calculateInitialMonthlyIncome,
  calculateInitialYearlyIncome,
  calculateIncomeForYear,
  calculateInitialMonthlyConstantExpenses
} from '../../src/utils/calculationUtils'
import {
  INPUT_ID_RENTAL_INCOME,
  INPUT_ID_OTHER_INCOME,
  INPUT_ID_WATER_AND_SEWER,
  INPUT_ID_MORTGAGE,
  INPUT_ID_ELECTRICITY,
  INPUT_ID_PRIVATE_MORTGAGE_INSURANCE,
  INPUT_ID_GARBAGE,
  INPUT_ID_HOA,
  INPUT_ID_INSURANCE,
  INPUT_ID_PROPERTY_TAX,
  INPUT_ID_VACANCY,
  INPUT_ID_REPAIRS_AND_MAINTENANCE,
  INPUT_ID_CAP_EX,
  INPUT_ID_MANAGEMENT,
  INPUT_ID_OTHER_EXPENSES
} from '../../src/constants'

const DEFAULT_MONTHLY_INCOME = {
  [INPUT_ID_RENTAL_INCOME]: 1800,
  [INPUT_ID_OTHER_INCOME]: 150
}

const DEFAULT_MONTHLY_EXPENSES = {
  [INPUT_ID_MORTGAGE]: 800,
  [INPUT_ID_ELECTRICITY]: 50,
  [INPUT_ID_WATER_AND_SEWER]: 50,
  [INPUT_ID_PRIVATE_MORTGAGE_INSURANCE]: 80,
  [INPUT_ID_GARBAGE]: 50,
  [INPUT_ID_HOA]: 0,
  [INPUT_ID_INSURANCE]: 100,
  [INPUT_ID_PROPERTY_TAX]: 1,
  [INPUT_ID_VACANCY]: 5,
  [INPUT_ID_REPAIRS_AND_MAINTENANCE]: 5,
  [INPUT_ID_CAP_EX]: 5,
  [INPUT_ID_MANAGEMENT]: 5,
  [INPUT_ID_OTHER_EXPENSES]: 20
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
    let monthlyIncome
    beforeEach(() => {
      monthlyIncome = DEFAULT_MONTHLY_INCOME
    })
    it('returns proper value when given positive inputs', () => {
      expect(calculateInitialMonthlyIncome(monthlyIncome))
        .to
        .equal(1950)
    })
    it('returns proper value when given numeric strings', () => {
      monthlyIncome[INPUT_ID_RENTAL_INCOME] = '1800'
      monthlyIncome[INPUT_ID_OTHER_INCOME] = '150'
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
    let monthlyIncome
    beforeEach(() => {
      monthlyIncome = DEFAULT_MONTHLY_INCOME
    })
    it('returns proper value when given positive inputs', () => {
      expect(calculateInitialYearlyIncome(monthlyIncome))
        .to
        .equal(23400)
    })
    it('returns proper value when given numeric strings', () => {
      monthlyIncome[INPUT_ID_RENTAL_INCOME] = '1800'
      monthlyIncome[INPUT_ID_OTHER_INCOME] = '150'
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
    const YEAR = 20
    const ANNUAL_INCOME_GROWTH = 5
    const ANSWER_INCOME_FOR_YEAR = 62087.17
    const PRECISION = 0.01
    const YEAR_STRING = '20'
    const ANNUAL_INCOME_GROWTH_STRING = '5'
    let monthlyIncome
    beforeEach(() => {
      monthlyIncome = DEFAULT_MONTHLY_INCOME
    })
    it('returns proper value when given positive inputs', () => {
      expect(calculateIncomeForYear(YEAR, monthlyIncome, ANNUAL_INCOME_GROWTH))
        .to
        .be
        .closeTo(ANSWER_INCOME_FOR_YEAR, PRECISION)
    })
    it('returns proper value when given numeric strings', () => {
      monthlyIncome[INPUT_ID_RENTAL_INCOME] = '1800'
      monthlyIncome[INPUT_ID_OTHER_INCOME] = '150'
      expect(calculateIncomeForYear(
        YEAR_STRING,
        monthlyIncome,
        ANNUAL_INCOME_GROWTH_STRING
      )).to
        .be
        .closeTo(ANSWER_INCOME_FOR_YEAR, PRECISION)
    })
    it('returns proper value when year is 0', () => {
      expect(calculateIncomeForYear(0, monthlyIncome, ANNUAL_INCOME_GROWTH))
        .to
        .equal(23400)
    })
    it('returns proper value when monthlyIncome is 0', () => {
      expect(calculateIncomeForYear(YEAR, 0, ANNUAL_INCOME_GROWTH))
        .to
        .equal(0)
    })
    it('returns proper value when annualIncomeGrowth is 0', () => {
      expect(calculateIncomeForYear(YEAR, monthlyIncome, 0))
        .to
        .equal(23400)
    })
    it('returns 0 if year is null', () => {
      expect(calculateIncomeForYear(null, monthlyIncome, ANNUAL_INCOME_GROWTH))
        .to
        .equal(0)
    })
    it('returns 0 if year is undefined', () => {
      expect(calculateIncomeForYear(
        undefined,
        monthlyIncome,
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
      expect(calculateIncomeForYear(YEAR, monthlyIncome, null))
        .to
        .equal(0)
    })
    it('returns 0 if annualIncomeGrowth is undefined', () => {
      expect(calculateIncomeForYear(YEAR, monthlyIncome, undefined))
        .to
        .equal(0)
    })
  })
  // describe('calculateInitialMonthlyConstantExpenses', () => {
  //   let monthlyExpenses
  //   beforeEach(() => {
  //     monthlyExpenses = DEFAULT_MONTHLY_EXPENSES
  //   })
  //   it('returns proper value when given positive inputs', () => {
  //     expect(calculateInitialMonthlyConstantExpenses(
  //       YEAR,
  //       MONTHLY_INCOME,
  //       ANNUAL_INCOME_GROWTH
  //     )).to
  //       .be
  //       .closeTo(ANSWER, PRECISION)
  //   })
  // })
})