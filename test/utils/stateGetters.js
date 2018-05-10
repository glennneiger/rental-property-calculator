import { expect } from 'chai'

import {
  getAfterRepairValue,
  getAmortizationPeriod,
  getAnnualConstantExpensesGrowth,
  getAnnualIncomeGrowth,
  getAnnualPropertyValueGrowth,
  getClosingCosts,
  getDownPayment,
  getInitialLoanAmount,
  getInterestRate,
  getMonthlyMortgage,
  getOtherInitialCosts,
  getPurchasePrice,
  getRepairCosts
} from '../../src/utils/stateGetters'
import {
  INPUT_ID_AFTER_REPAIR_VALUE,
  INPUT_ID_AMORTIZATION_PERIOD,
  INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH,
  INPUT_ID_ANNUAL_INCOME_GROWTH,
  INPUT_ID_CAP_EX,
  INPUT_ID_CITY,
  INPUT_ID_CLOSING_COSTS,
  INPUT_ID_COUNTRY,
  INPUT_ID_DOWN_PAYMENT,
  INPUT_ID_ELECTRICITY,
  INPUT_ID_GARBAGE,
  INPUT_ID_HOA,
  INPUT_ID_INSURANCE,
  INPUT_ID_INTEREST_RATE,
  INPUT_ID_LOAN_AMOUNT,
  INPUT_ID_MANAGEMENT,
  INPUT_ID_MORTGAGE,
  INPUT_ID_NEIGHBORHOOD,
  INPUT_ID_OTHER_EXPENSES,
  INPUT_ID_OTHER_INCOME,
  INPUT_ID_OTHER_INITIAL_COSTS,
  INPUT_ID_POSTAL_OR_ZIP_CODE,
  INPUT_ID_PRIVATE_MORTGAGE_INSURANCE,
  INPUT_ID_PROPERTY_TAX,
  INPUT_ID_PROPERTY_VALUE_GROWTH,
  INPUT_ID_PROVINCE_OR_STATE,
  INPUT_ID_PURCHASE_PRICE,
  INPUT_ID_RENTAL_INCOME,
  INPUT_ID_REPAIR_COSTS,
  INPUT_ID_REPAIRS_AND_MAINTENANCE,
  INPUT_ID_SQUARE_FEET,
  INPUT_ID_STREET_ADDRESS,
  INPUT_ID_UNIT_NUMBER,
  INPUT_ID_VACANCY,
  INPUT_ID_WATER_AND_SEWER,
  TITLE_FUTURE_PROJECTIONS,
  TITLE_GENERAL_INFO,
  TITLE_INITIAL_PURCHASE,
  TITLE_MONTHLY_EXPENSES,
  TITLE_MONTHLY_INCOME
} from '../../src/constants'

const AFTER_REPAIR_VALUE = 140000.25
const AFTER_REPAIR_VALUE_STRING = '140000.25'
const AMORTIZATION_PERIOD = 25
const AMORTIZATION_PERIOD_STRING = '25'
const ANNUAL_CONSTANT_EXPENSES_GROWTH = 3.25
const ANNUAL_CONSTANT_EXPENSES_GROWTH_STRING = '3.25'
const ANNUAL_INCOME_GROWTH = 2.25
const ANNUAL_INCOME_GROWTH_STRING = '2.25'
const ANNUAL_PROPERTY_VALUE_GROWTH = 1.25
const ANNUAL_PROPERTY_VALUE_GROWTH_STRING = '1.25'
const CLOSING_COSTS = 3000.25
const CLOSING_COSTS_STRING = '3000.25'
const DOWN_PAYMENT = 20000.25
const DOWN_PAYMENT_STRING = '20000.25'
const INITIAL_LOAN_AMOUNT = 80000.25
const INITIAL_LOAN_AMOUNT_STRING = '80000.25'
const INTEREST_RATE = 6.25
const INTEREST_RATE_STRING = '6.25'
const MONTHLY_MORTGAGE = 800.25
const MONTHLY_MORTGAGE_STRING = '800.25'
const OTHER_INITIAL_COSTS = 250.25
const OTHER_INITIAL_COSTS_STRING = '250.25'
const PURCHASE_PRICE = 100000.25
const PURCHASE_PRICE_STRING = '100000.25'
const REPAIR_COSTS = 25000.25
const REPAIR_COSTS_STRING = '25000.25'

const DEFAULT_INPUT_CONTENT = {
  [TITLE_GENERAL_INFO]: {
    [INPUT_ID_NEIGHBORHOOD]: 'A Neighborhood',
    [INPUT_ID_STREET_ADDRESS]: '1090 Real Street',
    [INPUT_ID_UNIT_NUMBER]: '1204',
    [INPUT_ID_CITY]: 'Seattle',
    [INPUT_ID_PROVINCE_OR_STATE]: 'Washington',
    [INPUT_ID_COUNTRY]: 'United States',
    [INPUT_ID_POSTAL_OR_ZIP_CODE]: 'T6G 1S9',
    [INPUT_ID_SQUARE_FEET]: '1200'
  },
  [TITLE_INITIAL_PURCHASE]: {
    [INPUT_ID_PURCHASE_PRICE]: PURCHASE_PRICE_STRING,
    [INPUT_ID_DOWN_PAYMENT]: DOWN_PAYMENT_STRING,
    [INPUT_ID_LOAN_AMOUNT]: INITIAL_LOAN_AMOUNT_STRING,
    [INPUT_ID_INTEREST_RATE]: INTEREST_RATE_STRING,
    [INPUT_ID_AMORTIZATION_PERIOD]: AMORTIZATION_PERIOD_STRING,
    [INPUT_ID_AFTER_REPAIR_VALUE]: AFTER_REPAIR_VALUE_STRING,
    [INPUT_ID_REPAIR_COSTS]: REPAIR_COSTS_STRING,
    [INPUT_ID_CLOSING_COSTS]: CLOSING_COSTS_STRING,
    [INPUT_ID_OTHER_INITIAL_COSTS]: OTHER_INITIAL_COSTS_STRING
  },
  [TITLE_MONTHLY_INCOME]: {
    [INPUT_ID_RENTAL_INCOME]: '1800.25',
    [INPUT_ID_OTHER_INCOME]: '250.25'
  },
  [TITLE_MONTHLY_EXPENSES]: {
    [INPUT_ID_MORTGAGE]: MONTHLY_MORTGAGE_STRING,
    [INPUT_ID_ELECTRICITY]: '25.25',
    [INPUT_ID_WATER_AND_SEWER]: '50.25',
    [INPUT_ID_PRIVATE_MORTGAGE_INSURANCE]: '75.25',
    [INPUT_ID_GARBAGE]: '100.25',
    [INPUT_ID_HOA]: '0.25',
    [INPUT_ID_INSURANCE]: '125.25',
    [INPUT_ID_PROPERTY_TAX]: '1.25',
    [INPUT_ID_VACANCY]: '2.25',
    [INPUT_ID_REPAIRS_AND_MAINTENANCE]: '3.25',
    [INPUT_ID_CAP_EX]: '4.25',
    [INPUT_ID_MANAGEMENT]: '5.25',
    [INPUT_ID_OTHER_EXPENSES]: '6.25'
  },
  [TITLE_FUTURE_PROJECTIONS]: {
    [INPUT_ID_PROPERTY_VALUE_GROWTH]: ANNUAL_PROPERTY_VALUE_GROWTH_STRING,
    [INPUT_ID_ANNUAL_INCOME_GROWTH]: ANNUAL_INCOME_GROWTH_STRING,
    [INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH]:
      ANNUAL_CONSTANT_EXPENSES_GROWTH_STRING
  }
}

describe('utils/stateGetters', () => {
  let inputContent
  beforeEach(() => {
    inputContent = Object.assign({}, DEFAULT_INPUT_CONTENT)
  })
  describe('getAnnualConstantExpensesGrowth', () => {
    it('returns proper value', () => {
      expect(getAnnualConstantExpensesGrowth(inputContent))
        .to
        .equal(ANNUAL_CONSTANT_EXPENSES_GROWTH)
    })
    it('returns 0 if annual constant expenses growth is undefined', () => {
      inputContent[TITLE_FUTURE_PROJECTIONS]
        [INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH] = undefined
      expect(getAnnualConstantExpensesGrowth(inputContent))
        .to
        .equal(0)
    })
  })
  describe('getAfterRepairValue', () => {
    it('returns proper value', () => {
      expect(getAfterRepairValue(inputContent))
        .to
        .equal(AFTER_REPAIR_VALUE)
    })
    it('returns 0 if after repair value is undefined', () => {
      inputContent[TITLE_INITIAL_PURCHASE]
        [INPUT_ID_AFTER_REPAIR_VALUE] = undefined
      expect(getAfterRepairValue(inputContent))
        .to
        .equal(0)
    })
  })
  describe('getAnnualPropertyValueGrowth', () => {
    it('returns proper value', () => {
      expect(getAnnualPropertyValueGrowth(inputContent))
        .to
        .equal(ANNUAL_PROPERTY_VALUE_GROWTH)
    })
    it('returns 0 if annual property value growth is undefined', () => {
      inputContent[TITLE_FUTURE_PROJECTIONS]
        [INPUT_ID_PROPERTY_VALUE_GROWTH] = undefined
      expect(getAnnualPropertyValueGrowth(inputContent))
        .to
        .equal(0)
    })
  })
  describe('getAnnualIncomeGrowth', () => {
    it('returns proper value', () => {
      expect(getAnnualIncomeGrowth(inputContent))
        .to
        .equal(ANNUAL_INCOME_GROWTH)
    })
    it('returns 0 if annual income growth is undefined', () => {
      inputContent[TITLE_FUTURE_PROJECTIONS]
        [INPUT_ID_ANNUAL_INCOME_GROWTH] = undefined
      expect(getAnnualIncomeGrowth(inputContent))
        .to
        .equal(0)
    })
  })
  describe('getAmortizationPeriod', () => {
    it('returns proper value', () => {
      expect(getAmortizationPeriod(inputContent))
        .to
        .equal(AMORTIZATION_PERIOD)
    })
    it('returns 0 if amortization period is undefined', () => {
      inputContent[TITLE_INITIAL_PURCHASE]
        [INPUT_ID_AMORTIZATION_PERIOD] = undefined
      expect(getAmortizationPeriod(inputContent))
        .to
        .equal(0)
    })
  })
  describe('getDownPayment', () => {
    it('returns proper value', () => {
      expect(getDownPayment(inputContent))
        .to
        .equal(DOWN_PAYMENT)
    })
    it('returns 0 if down payment is undefined', () => {
      inputContent[TITLE_INITIAL_PURCHASE]
        [INPUT_ID_DOWN_PAYMENT] = undefined
      expect(getDownPayment(inputContent))
        .to
        .equal(0)
    })
  })
  describe('getRepairCosts', () => {
    it('returns proper value', () => {
      expect(getRepairCosts(inputContent))
        .to
        .equal(REPAIR_COSTS)
    })
    it('returns 0 if repair costs are undefined', () => {
      inputContent[TITLE_INITIAL_PURCHASE]
        [INPUT_ID_REPAIR_COSTS] = undefined
      expect(getRepairCosts(inputContent))
        .to
        .equal(0)
    })
  })
  describe('getClosingCosts', () => {
    it('returns proper value', () => {
      expect(getClosingCosts(inputContent))
        .to
        .equal(CLOSING_COSTS)
    })
    it('returns 0 if closing costs are undefined', () => {
      inputContent[TITLE_INITIAL_PURCHASE]
        [INPUT_ID_CLOSING_COSTS] = undefined
      expect(getClosingCosts(inputContent))
        .to
        .equal(0)
    })
  })
  describe('getOtherInitialCosts', () => {
    it('returns proper value', () => {
      expect(getOtherInitialCosts(inputContent))
        .to
        .equal(OTHER_INITIAL_COSTS)
    })
    it('returns 0 if other initial costs are undefined', () => {
      inputContent[TITLE_INITIAL_PURCHASE]
        [INPUT_ID_OTHER_INITIAL_COSTS] = undefined
      expect(getOtherInitialCosts(inputContent))
        .to
        .equal(0)
    })
  })
  describe('getPurchasePrice', () => {
    it('returns proper value', () => {
      expect(getPurchasePrice(inputContent))
        .to
        .equal(PURCHASE_PRICE)
    })
    it('returns 0 if purchase price is undefined', () => {
      inputContent[TITLE_INITIAL_PURCHASE]
        [INPUT_ID_PURCHASE_PRICE] = undefined
      expect(getPurchasePrice(inputContent))
        .to
        .equal(0)
    })
  })
  describe('getMonthlyMortgage', () => {
    it('returns proper value', () => {
      expect(getMonthlyMortgage(inputContent))
        .to
        .equal(MONTHLY_MORTGAGE)
    })
    it('returns 0 if monthly mortgage is undefined', () => {
      inputContent[TITLE_MONTHLY_EXPENSES]
        [INPUT_ID_MORTGAGE] = undefined
      expect(getMonthlyMortgage(inputContent))
        .to
        .equal(0)
    })
  })
  describe('getInterestRate', () => {
    it('returns proper value', () => {
      expect(getInterestRate(inputContent))
        .to
        .equal(INTEREST_RATE)
    })
    it('returns 0 if interest rate is undefined', () => {
      inputContent[TITLE_INITIAL_PURCHASE]
        [INPUT_ID_INTEREST_RATE] = undefined
      expect(getInterestRate(inputContent))
        .to
        .equal(0)
    })
  })
  describe('getInitialLoanAmount', () => {
    it('returns proper value', () => {
      expect(getInitialLoanAmount(inputContent))
        .to
        .equal(INITIAL_LOAN_AMOUNT)
    })
    it('returns 0 if initial loan amount is undefined', () => {
      inputContent[TITLE_INITIAL_PURCHASE]
        [INPUT_ID_LOAN_AMOUNT] = undefined
      expect(getInitialLoanAmount(inputContent))
        .to
        .equal(0)
    })
  })
})