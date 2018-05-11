import { expect } from 'chai'

import {
  calculateCashOnCashReturn,
  calculateConstantExpensesForYear,
  calculateEquityForYear,
  calculateExpensesForYear,
  calculateIncomeForYear,
  calculateInitialEquity,
  calculateInitialInvestment,
  calculateInitialMonthlyConstantExpenses,
  calculateInitialMonthlyIncome,
  calculateInitialYearlyConstantExpenses,
  calculateInitialYearlyIncome,
  calculateInitialYearlyMortgage,
  calculateInitialYearlyRentalIncome,
  calculateMonthlyMortgagePayment,
  calculateMonthlyRentalIncomeForYear,
  calculateMortgageForYear,
  calculatePercentageExpensesForYear,
  calculatePercentOfPropertyValueMonthly,
  calculatePercentOfRentalIncomeMonthly,
  calculatePropertyValueForYear,
  calculateRemainingLoanBalanceForYear,
  calculateWholeYearRentalIncomeForYear,
  calculateYearCashFlow,
  getCompoundedValue,
  makeValidGrowthRate
} from '../../src/utils/calculationUtils'
import {
  INPUT_ID_CAP_EX,
  INPUT_ID_ELECTRICITY,
  INPUT_ID_GARBAGE,
  INPUT_ID_HOA,
  INPUT_ID_INSURANCE,
  INPUT_ID_MANAGEMENT,
  INPUT_ID_MORTGAGE,
  INPUT_ID_OTHER_EXPENSES,
  INPUT_ID_OTHER_INCOME,
  INPUT_ID_PRIVATE_MORTGAGE_INSURANCE,
  INPUT_ID_PROPERTY_TAX,
  INPUT_ID_RENTAL_INCOME,
  INPUT_ID_REPAIRS_AND_MAINTENANCE,
  INPUT_ID_VACANCY,
  INPUT_ID_WATER_AND_SEWER
} from '../../src/constants'

const DEFAULT_MONTHLY_INCOME = {
  [INPUT_ID_RENTAL_INCOME]: 1800,
  [INPUT_ID_OTHER_INCOME]: 150
}

// constant: sum is 1250
const DEFAULT_MONTHLY_EXPENSES = {
  [INPUT_ID_MORTGAGE]: 800,
  [INPUT_ID_ELECTRICITY]: 50,
  [INPUT_ID_WATER_AND_SEWER]: 50,
  [INPUT_ID_PRIVATE_MORTGAGE_INSURANCE]: 80,
  [INPUT_ID_GARBAGE]: 50,
  [INPUT_ID_HOA]: 100,
  [INPUT_ID_INSURANCE]: 100,
  [INPUT_ID_PROPERTY_TAX]: 1, // percent of property value
  [INPUT_ID_VACANCY]: 5, // percent of rental income
  [INPUT_ID_REPAIRS_AND_MAINTENANCE]: 5, // percent of rental income
  [INPUT_ID_CAP_EX]: 5, // percent of rental income
  [INPUT_ID_MANAGEMENT]: 5, // percent of rental income
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
      monthlyIncome = Object.assign({}, DEFAULT_MONTHLY_INCOME)
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
  describe('calculateInitialMonthlyConstantExpenses', () => {
    let monthlyExpenses
    beforeEach(() => {
      monthlyExpenses = DEFAULT_MONTHLY_EXPENSES
    })
    it('returns proper value when given positive inputs', () => {
      expect(calculateInitialMonthlyConstantExpenses(monthlyExpenses))
        .to
        .equal(1250)
    })
    it('returns 0 value when monthlyExpenses is null', () => {
      expect(calculateInitialMonthlyConstantExpenses(null))
        .to
        .equal(0)
    })
    it('returns 0 value when monthlyExpenses is undefined', () => {
      expect(calculateInitialMonthlyConstantExpenses(undefined))
        .to
        .equal(0)
    })
  })
  describe('calculateInitialYearlyConstantExpenses', () => {
    let monthlyExpenses
    beforeEach(() => {
      monthlyExpenses = DEFAULT_MONTHLY_EXPENSES
    })
    it('returns proper value when given positive inputs', () => {
      expect(calculateInitialYearlyConstantExpenses(monthlyExpenses))
        .to
        .equal(15000)
    })
    it('returns 0 value when monthlyExpenses is null', () => {
      expect(calculateInitialYearlyConstantExpenses(null))
        .to
        .equal(0)
    })
    it('returns 0 value when monthlyExpenses is undefined', () => {
      expect(calculateInitialYearlyConstantExpenses(undefined))
        .to
        .equal(0)
    })
  })
  describe('calculateConstantExpensesForYear', () => {
    const ANNUAL_CONSTANT_EXPENSES_GROWTH = 2
    const YEAR = 20
    let monthlyExpenses
    beforeEach(() => {
      monthlyExpenses = DEFAULT_MONTHLY_EXPENSES
    })
    it('returns proper value when given positive inputs', () => {
      expect(calculateConstantExpensesForYear(
        ANNUAL_CONSTANT_EXPENSES_GROWTH,
        monthlyExpenses,
        YEAR
      )).to
        .be
        .closeTo(22289.21, 0.01)
    })
    it('returns proper value when annualConstantExpensesGrowth is 0', () => {
      expect(calculateConstantExpensesForYear(
        0,
        monthlyExpenses,
        YEAR
      )).to
        .equal(15000)
    })
    it('returns proper value when year is 0', () => {
      expect(calculateConstantExpensesForYear(
        ANNUAL_CONSTANT_EXPENSES_GROWTH,
        monthlyExpenses,
        0
      )).to
        .equal(15000)
    })
    it('returns proper value when monthlyExpenses is 0', () => {
      expect(calculateConstantExpensesForYear(
        ANNUAL_CONSTANT_EXPENSES_GROWTH,
        0,
        YEAR
      )).to
        .equal(0)
    })
  })
  describe('calculatePropertyValueForYear', () => {
    it('returns proper value when given positive inputs', () => {
      expect(calculatePropertyValueForYear(
        100000,
        2,
        20
      )).to
        .be
        .closeTo(148594.74, 0.01)
    })
    it('returns proper value when initialPropertyValue is 0', () => {
      expect(calculatePropertyValueForYear(
        0,
        2,
        20
      )).to
        .equal(0)
    })
    it('returns proper value when annualPVGrowth is 0', () => {
      expect(calculatePropertyValueForYear(
        100000,
        0,
        20
      )).to
        .equal(100000)
    })
    it('returns proper value when year is 0', () => {
      expect(calculatePropertyValueForYear(
        100000,
        2,
        0
      )).to
        .equal(100000)
    })
  })
  describe('calculateInitialYearlyRentalIncome', () => {
    let monthlyIncome
    beforeEach(() => {
      monthlyIncome = Object.assign({}, DEFAULT_MONTHLY_INCOME)
    })
    it('returns proper value when given positive inputs', () => {
      expect(calculateInitialYearlyRentalIncome(monthlyIncome))
        .to
        .equal(21600)
    })
    it('returns proper value when rental income is 0', () => {
      monthlyIncome[INPUT_ID_RENTAL_INCOME] = 0
      expect(calculateInitialYearlyRentalIncome(monthlyIncome))
        .to
        .equal(0)
    })
    it('returns proper value when other income is 0', () => {
      monthlyIncome[INPUT_ID_OTHER_INCOME] = 0
      expect(calculateInitialYearlyRentalIncome(monthlyIncome))
        .to
        .equal(21600)
    })
  })
  describe('calculateWholeYearRentalIncomeForYear', () => {
    let monthlyIncome
    beforeEach(() => {
      monthlyIncome = Object.assign({}, DEFAULT_MONTHLY_INCOME)
    })
    it('returns proper value when given positive inputs', () => {
      expect(calculateWholeYearRentalIncomeForYear(20, monthlyIncome, 2))
        .to
        .be
        .closeTo(32096.46, 0.01)
    })
    it('returns proper value when year is 0', () => {
      expect(calculateWholeYearRentalIncomeForYear(0, monthlyIncome, 2))
        .to
        .equal(21600)
    })
    it('returns proper value when rental income is 0', () => {
      monthlyIncome[INPUT_ID_RENTAL_INCOME] = 0
      expect(calculateWholeYearRentalIncomeForYear(20, monthlyIncome, 2))
        .to
        .equal(0)
    })
    it('returns proper value when other income is 0', () => {
      monthlyIncome[INPUT_ID_OTHER_INCOME] = 0
      expect(calculateWholeYearRentalIncomeForYear(20, monthlyIncome, 2))
        .to
        .be
        .closeTo(32096.46, 0.01)
    })
    it('returns proper value when annualIncomeGrowth is 0', () => {
      expect(calculateWholeYearRentalIncomeForYear(20, monthlyIncome, 0))
        .to
        .equal(21600)
    })
  })
  describe('calculateMonthlyRentalIncomeForYear', () => {
    let monthlyIncome
    beforeEach(() => {
      monthlyIncome = Object.assign({}, DEFAULT_MONTHLY_INCOME)
    })
    it('returns proper value when given positive inputs', () => {
      expect(calculateMonthlyRentalIncomeForYear(20, monthlyIncome, 2))
        .to
        .be
        .closeTo(2674.71, 0.01)
    })
    it('returns proper value when year is 0', () => {
      expect(calculateMonthlyRentalIncomeForYear(0, monthlyIncome, 2))
        .to
        .equal(1800)
    })
    it('returns proper value when rental income is 0', () => {
      monthlyIncome[INPUT_ID_RENTAL_INCOME] = 0
      expect(calculateMonthlyRentalIncomeForYear(20, monthlyIncome, 2))
        .to
        .equal(0)
    })
    it('returns proper value when other income is 0', () => {
      monthlyIncome[INPUT_ID_OTHER_INCOME] = 0
      expect(calculateMonthlyRentalIncomeForYear(20, monthlyIncome, 2))
        .to
        .be
        .closeTo(2674.71, 0.01)
    })
    it('returns proper value when annualIncomeGrowth is 0', () => {
      expect(calculateMonthlyRentalIncomeForYear(20, monthlyIncome, 0))
        .to
        .equal(1800)
    })
  })
  describe('calculatePercentageExpensesForYear', () => {
    let monthlyIncome
    let monthlyExpenses
    beforeEach(() => {
      monthlyIncome = Object.assign({}, DEFAULT_MONTHLY_INCOME)
      monthlyExpenses = Object.assign({}, DEFAULT_MONTHLY_EXPENSES)
    })
    it('returns proper value when given positive inputs', () => {
      expect(calculatePercentageExpensesForYear(
        2,
        3,
        monthlyIncome,
        monthlyExpenses,
        100000,
        20
      )).to
        .be
        .closeTo(8225.40, 0.01)
    })
    it('returns proper value when annualIncomeGrowth is 0', () => {
      expect(calculatePercentageExpensesForYear(
        0,
        3,
        monthlyIncome,
        monthlyExpenses,
        100000,
        20
      )).to
        .be
        .closeTo(6126.11, 0.01)
    })
    it('returns proper value when annualPVGrowth is 0', () => {
      expect(calculatePercentageExpensesForYear(
        2,
        0,
        monthlyIncome,
        monthlyExpenses,
        100000,
        20
      )).to
        .be
        .closeTo(7419.29, 0.01)
    })
    it('returns proper value when monthlyIncome is 0', () => {
      expect(calculatePercentageExpensesForYear(
        2,
        3,
        0,
        monthlyExpenses,
        100000,
        20
      )).to
        .be
        .closeTo(1806.11, 0.01)
    })
    it('returns proper value when monthlyExpenses is 0', () => {
      expect(calculatePercentageExpensesForYear(
        2,
        3,
        monthlyIncome,
        0,
        100000,
        20
      )).to
        .equal(0)
    })
    it('returns proper value when initialPropertyValue is 0', () => {
      expect(calculatePercentageExpensesForYear(
        2,
        3,
        monthlyIncome,
        monthlyExpenses,
        0,
        20
      )).to
        .be
        .closeTo(6419.29, 0.01)
    })
    it('returns proper value when year is 0', () => {
      expect(calculatePercentageExpensesForYear(
        2,
        3,
        monthlyIncome,
        monthlyExpenses,
        100000,
        0
      )).to
        .equal(5320)
    })
  })
  describe('calculateExpensesForYear', () => {
    it('returns proper value when given positive inputs', () => {
      expect(calculateExpensesForYear(22289.21, 8225.40))
        .to
        .be
        .closeTo(30514.61, 0.01)
    })
    it('returns proper value when constantExpenses is 0', () => {
      expect(calculateExpensesForYear(0, 8225.40))
        .to
        .be
        .closeTo(8225.40, 0.01)
    })
    it('returns proper value when percentageExpenses is 0', () => {
      expect(calculateExpensesForYear(22289.21, 0))
        .to
        .be
        .closeTo(22289.21, 0.01)
    })
  })
  describe('calculateYearCashFlow', () => {
    it('returns proper value when given positive inputs', () => {
      expect(calculateYearCashFlow(20000.64, 15000.78))
        .to
        .be
        .closeTo(4999.86, 0.01)
    })
    it('returns proper value when incomeForYear is 0', () => {
      expect(calculateYearCashFlow(0, 15000.78))
        .to
        .be
        .closeTo(-15000.78, 0.01)
    })
    it('returns proper value when expensesForYear is 0', () => {
      expect(calculateYearCashFlow(20000.64, 0))
        .to
        .be
        .closeTo(20000.64, 0.01)
    })
  })
  describe('calculateCashOnCashReturn', () => {
    it('returns proper value when given positive inputs', () => {
      expect(calculateCashOnCashReturn(1603.54, 42000.62))
        .to
        .be
        .closeTo(3.82, 0.01)
    })
    it('returns proper value when cashFlow is negative', () => {
      expect(calculateCashOnCashReturn(-1603.54, 42000.62))
        .to
        .be
        .closeTo(-3.82, 0.01)
    })
    it('returns proper value when cashFlow is 0', () => {
      expect(calculateCashOnCashReturn(0, 42000.62))
        .to
        .equal(0)
    })
    it('returns proper value when totalInvestment is 0', () => {
      expect(calculateCashOnCashReturn(1603.54, 0))
        .to
        .equal(Number.POSITIVE_INFINITY)
    })
  })
  describe('calculateInitialInvestment', () => {
    it('returns proper value when given positive inputs', () => {
      expect(calculateInitialInvestment(20000, 20000, 3000, 250))
        .to
        .equal(43250)
    })
    it('returns proper value when downPayment is 0', () => {
      expect(calculateInitialInvestment(0, 20000, 3000, 250))
        .to
        .equal(23250)
    })
    it('returns proper value when repairCosts is 0', () => {
      expect(calculateInitialInvestment(20000, 0, 3000, 250))
        .to
        .equal(23250)
    })
    it('returns proper value when closingCosts is 0', () => {
      expect(calculateInitialInvestment(20000, 20000, 0, 250))
        .to
        .equal(40250)
    })
    it('returns proper value when otherCosts is 0', () => {
      expect(calculateInitialInvestment(20000, 20000, 3000, 0))
        .to
        .equal(43000)
    })
  })
  describe('calculateInitialEquity', () => {
    it('returns proper value when given positive inputs', () => {
      expect(calculateInitialEquity(21600, 90000, 72000))
        .to
        .equal(39600)
    })
    it('returns proper value when downPayment is 0', () => {
      expect(calculateInitialEquity(0, 90000, 72000))
        .to
        .equal(18000)
    })
    it('returns proper value when afterRepairValue is 0', () => {
      expect(calculateInitialEquity(21600, 0, 72000))
        .to
        .equal(0)
    })
    it('returns proper value when purchasePrice is 0', () => {
      expect(calculateInitialEquity(21600, 90000, 0))
        .to
        .equal(90000)
    })
    it('returns proper value when downPayment and purchasePrice are 0', () => {
      expect(calculateInitialEquity(0, 90000, 0))
        .to
        .equal(90000)
    })
  })
  describe('calculateInitialYearlyMortgage', () => {
    let monthlyExpenses
    beforeEach(() => {
      monthlyExpenses = Object.assign({}, DEFAULT_MONTHLY_EXPENSES)
    })
    it('returns proper value when given numbers', () => {
      expect(calculateInitialYearlyMortgage(monthlyExpenses))
        .to
        .equal(9600)
    })
    it('returns proper value when given numeric string', () => {
      monthlyExpenses[INPUT_ID_MORTGAGE] = '800'
      expect(calculateInitialYearlyMortgage(monthlyExpenses))
        .to
        .equal(9600)
    })
    it('returns 0 if monthlyExpenses is null', () => {
      expect(calculateInitialYearlyMortgage(null))
        .to
        .equal(0)
    })
    it('returns 0 if monthlyExpenses is undefined', () => {
      expect(calculateInitialYearlyMortgage(undefined))
        .to
        .equal(0)
    })
  })
  describe('calculateMortgageForYear', () => {
    const ANNUAL_CONSTANT_EXPENSES_GROWTH = 5
    const ANNUAL_CONSTANT_EXPENSES_GROWTH_STRING = '5'
    const YEAR = 20
    const YEAR_STRING = '20'
    let monthlyExpenses
    beforeEach(() => {
      monthlyExpenses = Object.assign({}, DEFAULT_MONTHLY_EXPENSES)
    })
    it('returns proper value when given positive numbers', () => {
      expect(calculateMortgageForYear(
        ANNUAL_CONSTANT_EXPENSES_GROWTH,
        monthlyExpenses,
        YEAR
      )).to
        .be
        .closeTo(25471.66, 0.01)
    })
    it('returns proper value when given numeric strings', () => {
      monthlyExpenses[INPUT_ID_MORTGAGE] = '800'
      expect(calculateMortgageForYear(
        ANNUAL_CONSTANT_EXPENSES_GROWTH_STRING,
        monthlyExpenses,
        YEAR_STRING
      )).to
        .be
        .closeTo(25471.66, 0.01)
    })
    it('returns proper value when constant expenses growth is 0', () => {
      expect(calculateMortgageForYear(
        0,
        monthlyExpenses,
        YEAR
      )).to
        .equal(9600)
    })
    it('returns proper value when monthlyExpenses is null', () => {
      expect(calculateMortgageForYear(
        ANNUAL_CONSTANT_EXPENSES_GROWTH,
        null,
        YEAR
      )).to
        .equal(0)
    })
    it('returns proper value when monthlyExpenses is undefined', () => {
      expect(calculateMortgageForYear(
        ANNUAL_CONSTANT_EXPENSES_GROWTH,
        undefined,
        YEAR
      )).to
        .equal(0)
    })
    it('returns proper value when year is 0', () => {
      expect(calculateMortgageForYear(
        ANNUAL_CONSTANT_EXPENSES_GROWTH,
        monthlyExpenses,
        0
      )).to
        .equal(9600)
    })
  })
  describe('calculateMonthlyMortgagePayment', () => {
    it('returns proper value when given positive numbers', () => {
      expect(calculateMonthlyMortgagePayment(25, 5.5, 80000))
        .to
        .be
        .closeTo(491.27, 0.01)
    })
  })
  describe('calculateEquityForYear', () => {
    const INITIAL_EQUITY = 60000
    const PROPERTY_VALUE_FOR_YEAR = 208032.64
    const INITIAL_PROPERTY_VALUE = 140000
    const INITIAL_LOAN_AMOUNT = 80000
    const REMAINING_LOAN_BALANCE = 27607.16
    it('returns proper value when given positive numbers', () => {
      expect(calculateEquityForYear(
        INITIAL_EQUITY,
        PROPERTY_VALUE_FOR_YEAR,
        INITIAL_PROPERTY_VALUE,
        INITIAL_LOAN_AMOUNT,
        REMAINING_LOAN_BALANCE
      )).to
        .be
        .closeTo(180425.48, 0.01)
    })
    it('returns proper value when initial equity is 0', () => {
      expect(calculateEquityForYear(
        0,
        PROPERTY_VALUE_FOR_YEAR,
        INITIAL_PROPERTY_VALUE,
        INITIAL_LOAN_AMOUNT,
        REMAINING_LOAN_BALANCE
      )).to
        .be
        .closeTo(120425.48, 0.01)
    })
    it('returns proper value when property value for year is 0', () => {
      expect(calculateEquityForYear(
        INITIAL_EQUITY,
        0,
        INITIAL_PROPERTY_VALUE,
        INITIAL_LOAN_AMOUNT,
        REMAINING_LOAN_BALANCE
      )).to
        .be
        .closeTo(-27607.16, 0.01)
    })
    it('returns proper value when initial property value is 0', () => {
      expect(calculateEquityForYear(
        INITIAL_EQUITY,
        PROPERTY_VALUE_FOR_YEAR,
        0,
        INITIAL_LOAN_AMOUNT,
        REMAINING_LOAN_BALANCE
      )).to
        .be
        .closeTo(320425.48, 0.01)
    })
    it('returns proper value when initial loan amount is 0', () => {
      expect(calculateEquityForYear(
        INITIAL_EQUITY,
        PROPERTY_VALUE_FOR_YEAR,
        INITIAL_PROPERTY_VALUE,
        0,
        REMAINING_LOAN_BALANCE
      )).to
        .be
        .closeTo(100425.48, 0.01)
    })
    it('returns proper value when remaining loan balance is 0', () => {
      expect(calculateEquityForYear(
        INITIAL_EQUITY,
        PROPERTY_VALUE_FOR_YEAR,
        INITIAL_PROPERTY_VALUE,
        INITIAL_LOAN_AMOUNT,
        0
      )).to
        .be
        .closeTo(208032.64, 0.01)
    })
  })
  describe('calculateRemainingLoanBalanceForYear', () => {
    const INITIAL_LOAN_AMOUNT = 80000
    const INTEREST_RATE = 6.5
    const AMORTIZATION_PERIOD = 25
    const YEAR = 20
    it('returns proper value when given positive numbers', () => {
      expect(calculateRemainingLoanBalanceForYear(
        INITIAL_LOAN_AMOUNT,
        INTEREST_RATE,
        AMORTIZATION_PERIOD,
        YEAR
      )).to
        .be
        .closeTo(27607.16, 0.01)
    })
    it('returns proper value when initial loan is 0', () => {
      expect(calculateRemainingLoanBalanceForYear(
        0,
        INTEREST_RATE,
        AMORTIZATION_PERIOD,
        YEAR
      )).to
        .equal(0)
    })
    it('returns proper value when interest rate is 0', () => {
      expect(calculateRemainingLoanBalanceForYear(
        INITIAL_LOAN_AMOUNT,
        0,
        AMORTIZATION_PERIOD,
        YEAR
      )).to
        .equal(0)
    })
    it('returns proper value when amortization period is 0', () => {
      expect(calculateRemainingLoanBalanceForYear(
        INITIAL_LOAN_AMOUNT,
        INTEREST_RATE,
        0,
        YEAR
      )).to
        .equal(0)
    })
    it('returns proper value when year is 0', () => {
      expect(calculateRemainingLoanBalanceForYear(
        INITIAL_LOAN_AMOUNT,
        INTEREST_RATE,
        AMORTIZATION_PERIOD,
        0
      )).to
        .equal(INITIAL_LOAN_AMOUNT)
    })
  })
})