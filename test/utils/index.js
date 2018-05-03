import { expect } from 'chai'

import {
  getCompoundedValue,
  getPercentOfPropertyValueMonthly,
  getPercentOfRentalIncomeMonthly
} from '../../src/utils'

export const getCompoundedValueTest = () => {
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
    it('should get proper value if given negative initialValue', () => {
      expect(getCompoundedValue(-100000, 5, 20))
        .to
        .equal(-265330)
    })
    it('should get proper value if given negative annual growth rate', () => {
      expect(getCompoundedValue(100000, -5, 20))
        .to
        .equal(35849)
    })
    it('should get proper value if given negative years', () => {
      expect(getCompoundedValue(100000, 5, -20))
        .to
        .equal(37689)
    })
    it('should throw an error if initialValue is a string', () => {
      expect(() => {
        getCompoundedValue('h100000', 5, -20)
      }).to
        .throw()
    })
    it('should throw an error if initialValue is a boolean', () => {
      expect(() => {
        getCompoundedValue(true, 5, -20)
      }).to
        .throw()
    })
    it('should throw an error if initialValue is an object', () => {
      expect(() => {
        getCompoundedValue({}, 5, -20)
      }).to
        .throw()
    })
    it('should throw an error if initialValue is an array', () => {
      expect(() => {
        getCompoundedValue([], 5, -20)
      }).to
        .throw()
    })
    it('should throw an error if initialValue is null', () => {
      expect(() => {
        getCompoundedValue(null, 5, -20)
      }).to
        .throw()
    })
    it('should throw an error if initialValue is a function', () => {
      expect(() => {
        getCompoundedValue(() => console.log('function'), 5, -20)
      }).to
        .throw()
    })
    it('should throw an error if annualGrowthRate is a string', () => {
      expect(() => {
        getCompoundedValue(100000, '5h', -20)
      }).to
        .throw()
    })
    it('should throw an error if annualGrowthRate is a boolean', () => {
      expect(() => {
        getCompoundedValue(100000, true, -20)
      }).to
        .throw()
    })
    it('should throw an error if annualGrowthRate is an object', () => {
      expect(() => {
        getCompoundedValue(100000, {}, -20)
      }).to
        .throw()
    })
    it('should throw an error if annualGrowthRate is an array', () => {
      expect(() => {
        getCompoundedValue(100000, [], -20)
      }).to
        .throw()
    })
    it('should throw an error if annualGrowthRate is null', () => {
      expect(() => {
        getCompoundedValue(100000, null, -20)
      }).to
        .throw()
    })
    it('should throw an error if annualGrowthRate is a function', () => {
      expect(() => {
        getCompoundedValue(100000, () => console.log('function'), -20)
      }).to
        .throw()
    })
    it('should throw an error if years is a string', () => {
      expect(() => {
        getCompoundedValue(100000, 5, 'h20h')
      }).to
        .throw()
    })
    it('should throw an error if years is a boolean', () => {
      expect(() => {
        getCompoundedValue(100000, 5, true)
      }).to
        .throw()
    })
    it('should throw an error if years is an object', () => {
      expect(() => {
        getCompoundedValue(100000, 5, {})
      }).to
        .throw()
    })
    it('should throw an error if years is an array', () => {
      expect(() => {
        getCompoundedValue(100000, 5, [])
      }).to
        .throw()
    })
    it('should throw an error if years is null', () => {
      expect(() => {
        getCompoundedValue(100000, 5, null)
      }).to
        .throw()
    })
    it('should throw an error if years is a function', () => {
      expect(() => {
        getCompoundedValue(100000, 5, () => console.log('function'))
      }).to
        .throw()
    })
  })
}

export const getPercentOfPropertyValueMonthlyTest = () => {
  describe('getPercentOfPropertyValueMonthly', () => {
    it('should get proper value if given positive inputs', () => {
      expect(getPercentOfPropertyValueMonthly(5, 100000))
        .to
        .equal(416.67)
    })
    it('should get proper value if percent is 0', () => {
      expect(getPercentOfPropertyValueMonthly(0, 100000))
        .to
        .equal(0)
    })
    it('should get proper value if propertyValue is 0', () => {
      expect(getPercentOfPropertyValueMonthly(5, 0))
        .to
        .equal(0)
    })
    it('should return 0 if given a negative percent', () => {
      expect(getPercentOfPropertyValueMonthly(-5, 100000))
        .to
        .equal(0)
    })
    it('should return 0 if given a negative property value', () => {
      expect(getPercentOfPropertyValueMonthly(5, -100000))
        .to
        .equal(0)
    })
    it('should throw an error if percent is a non-numeric string', () => {
      expect(() => {
        getPercentOfPropertyValueMonthly('h5', 100000)
      }).to
        .throw()
    })
    it('should throw an error if percent is a boolean', () => {
      expect(() => {
        getPercentOfPropertyValueMonthly(true, 100000)
      }).to
        .throw()
    })
    it('should throw an error if percent is an object', () => {
      expect(() => {
        getPercentOfPropertyValueMonthly({}, 100000)
      }).to
        .throw()
    })
    it('should throw an error if percent is an array', () => {
      expect(() => {
        getPercentOfPropertyValueMonthly([], 100000)
      }).to
        .throw()
    })
    it('should throw an error if percent is null', () => {
      expect(() => {
        getPercentOfPropertyValueMonthly(null, 100000)
      }).to
        .throw()
    })
    it('should throw an error if percent is a function', () => {
      expect(() => {
        getPercentOfPropertyValueMonthly(() => console.log('function'), 100000)
      }).to
        .throw()
    })
    it('should throw an error if propertyValue is a non-numeric string', () => {
      expect(() => {
        getPercentOfPropertyValueMonthly(5, '100000h')
      }).to
        .throw()
    })
    it('should throw an error if propertyValue is a boolean', () => {
      expect(() => {
        getPercentOfPropertyValueMonthly(5, true)
      }).to
        .throw()
    })
    it('should throw an error if propertyValue is an object', () => {
      expect(() => {
        getPercentOfPropertyValueMonthly(5, {})
      }).to
        .throw()
    })
    it('should throw an error if propertyValue is an array', () => {
      expect(() => {
        getPercentOfPropertyValueMonthly(5, [])
      }).to
        .throw()
    })
    it('should throw an error if propertyValue is null', () => {
      expect(() => {
        getPercentOfPropertyValueMonthly(5, null)
      }).to
        .throw()
    })
    it('should throw an error if propertyValue is a function', () => {
      expect(() => {
        getPercentOfPropertyValueMonthly(5, () => console.log('function'))
      }).to
        .throw()
    })
  })
}

export const getPercentOfRentalIncomeMonthlyTest = () => {
  describe('getPercentOfPropertyValueMonthly', () => {
    it('should get proper value if given positive inputs', () => {
      expect(getPercentOfRentalIncomeMonthly(5, 2000))
        .to
        .equal(100)
    })
    it('should get proper value if percent is 0', () => {
      expect(getPercentOfRentalIncomeMonthly(0, 2000))
        .to
        .equal(0)
    })
    it('should get proper value if propertyValue is 0', () => {
      expect(getPercentOfRentalIncomeMonthly(5, 0))
        .to
        .equal(0)
    })
    it('should return 0 if given a negative percent', () => {
      expect(getPercentOfRentalIncomeMonthly(-5, 2000))
        .to
        .equal(0)
    })
    it('should return 0 if given a negative property value', () => {
      expect(getPercentOfRentalIncomeMonthly(5, -2000))
        .to
        .equal(0)
    })
    it('should throw an error if percent is a non-numeric string', () => {
      expect(() => {
        getPercentOfRentalIncomeMonthly('h5', 2000)
      }).to
        .throw()
    })
    it('should throw an error if percent is a boolean', () => {
      expect(() => {
        getPercentOfRentalIncomeMonthly(true, 2000)
      }).to
        .throw()
    })
    it('should throw an error if percent is an object', () => {
      expect(() => {
        getPercentOfRentalIncomeMonthly({}, 2000)
      }).to
        .throw()
    })
    it('should throw an error if percent is an array', () => {
      expect(() => {
        getPercentOfRentalIncomeMonthly([], 2000)
      }).to
        .throw()
    })
    it('should throw an error if percent is null', () => {
      expect(() => {
        getPercentOfRentalIncomeMonthly(null, 2000)
      }).to
        .throw()
    })
    it('should throw an error if percent is a function', () => {
      expect(() => {
        getPercentOfRentalIncomeMonthly(() => console.log('function'), 100000)
      }).to
        .throw()
    })
    it('should throw an error if monthlyRentalIncome is a non-numeric string', () => {
      expect(() => {
        getPercentOfRentalIncomeMonthly(5, '2000h')
      }).to
        .throw()
    })
    it('should throw an error if monthlyRentalIncome is a boolean', () => {
      expect(() => {
        getPercentOfRentalIncomeMonthly(5, true)
      }).to
        .throw()
    })
    it('should throw an error if monthlyRentalIncome is an object', () => {
      expect(() => {
        getPercentOfRentalIncomeMonthly(5, {})
      }).to
        .throw()
    })
    it('should throw an error if monthlyRentalIncome is an array', () => {
      expect(() => {
        getPercentOfRentalIncomeMonthly(5, [])
      }).to
        .throw()
    })
    it('should throw an error if monthlyRentalIncome is null', () => {
      expect(() => {
        getPercentOfRentalIncomeMonthly(5, null)
      }).to
        .throw()
    })
    it('should throw an error if monthlyRentalIncome is a function', () => {
      expect(() => {
        getPercentOfRentalIncomeMonthly(5, () => console.log('function'))
      }).to
        .throw()
    })
  })
}