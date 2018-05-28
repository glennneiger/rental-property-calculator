import express from 'express'
import passport from 'passport'

import User from '../../models/User'
import Calculation from '../../models/Calculation'
import {
  TITLE_GENERAL_INFO,
  INPUT_ID_NEIGHBORHOOD,
  INPUT_ID_STREET_ADDRESS,
  INPUT_ID_UNIT_NUMBER,
  INPUT_ID_CITY,
  INPUT_ID_PROVINCE_OR_STATE,
  INPUT_ID_COUNTRY,
  INPUT_ID_POSTAL_OR_ZIP_CODE,
  INPUT_ID_SQUARE_FEET,
  TITLE_INITIAL_PURCHASE,
  INPUT_ID_PURCHASE_PRICE,
  INPUT_ID_DOWN_PAYMENT,
  INPUT_ID_LOAN_AMOUNT,
  INPUT_ID_INTEREST_RATE,
  INPUT_ID_AMORTIZATION_PERIOD,
  INPUT_ID_AFTER_REPAIR_VALUE,
  INPUT_ID_REPAIR_COSTS,
  INPUT_ID_CLOSING_COSTS,
  INPUT_ID_OTHER_INITIAL_COSTS,
  TITLE_MONTHLY_INCOME,
  TITLE_MONTHLY_EXPENSES,
  INPUT_ID_RENTAL_INCOME,
  INPUT_ID_OTHER_INCOME,
  INPUT_ID_MORTGAGE,
  INPUT_ID_ELECTRICITY,
  INPUT_ID_WATER_AND_SEWER,
  INPUT_ID_PRIVATE_MORTGAGE_INSURANCE,
  INPUT_ID_GARBAGE,
  INPUT_ID_HOA,
  INPUT_ID_INSURANCE,
  INPUT_ID_PROPERTY_TAX,
  INPUT_ID_VACANCY,
  INPUT_ID_REPAIRS_AND_MAINTENANCE,
  INPUT_ID_CAP_EX,
  INPUT_ID_MANAGEMENT,
  INPUT_ID_OTHER_EXPENSES,
  TITLE_FUTURE_PROJECTIONS,
  INPUT_ID_PROPERTY_VALUE_GROWTH,
  INPUT_ID_ANNUAL_INCOME_GROWTH,
  INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH
} from '../../../constants'

const router = express.Router()

// @route   POST api/calculation/save
// @desc    Save calculation
// @access  Private
router.post(
  '/save',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newCalculation = {
      title: req.body.title,
      user: req.user.id
    }
    const bodyCalc = req.body.calculation
    const newCalc = newCalculation.calculation
    const bodyGeneralInfo = bodyCalc[TITLE_GENERAL_INFO]
    const newGeneralInfo = newCalc[TITLE_GENERAL_INFO]
    const bodyInitialPurchase = bodyCalc[TITLE_INITIAL_PURCHASE]
    const newInitialPurchase = newCalc[TITLE_INITIAL_PURCHASE]
    const bodyMonthlyIncome = bodyCalc[TITLE_MONTHLY_INCOME]
    const newMonthlyIncome = newCalc[TITLE_MONTHLY_INCOME]
    const bodyMonthlyExpenses = bodyCalc[TITLE_MONTHLY_EXPENSES]
    const newMonthlyExpenses = newCalc[TITLE_MONTHLY_EXPENSES]
    const bodyFutureProjections = bodyCalc[TITLE_FUTURE_PROJECTIONS]
    const newFutureProjections = newCalc[TITLE_FUTURE_PROJECTIONS]

    // TODO: DRY
    if (bodyGeneralInfo[INPUT_ID_NEIGHBORHOOD]) {
      newGeneralInfo[INPUT_ID_NEIGHBORHOOD]
        = bodyGeneralInfo[INPUT_ID_NEIGHBORHOOD]
    }
    if (bodyGeneralInfo[INPUT_ID_STREET_ADDRESS]) {
      newGeneralInfo[INPUT_ID_STREET_ADDRESS]
        = bodyGeneralInfo[INPUT_ID_STREET_ADDRESS]
    }
    if (bodyGeneralInfo[INPUT_ID_UNIT_NUMBER]) {
      newGeneralInfo[INPUT_ID_UNIT_NUMBER]
        = bodyGeneralInfo[INPUT_ID_UNIT_NUMBER]
    }
    if (bodyGeneralInfo[INPUT_ID_CITY]) {
      newGeneralInfo[INPUT_ID_CITY]
        = bodyGeneralInfo[INPUT_ID_CITY]
    }
    if (bodyGeneralInfo[INPUT_ID_PROVINCE_OR_STATE]) {
      newGeneralInfo[INPUT_ID_PROVINCE_OR_STATE]
        = bodyGeneralInfo[INPUT_ID_PROVINCE_OR_STATE]
    }
    if (bodyGeneralInfo[INPUT_ID_COUNTRY]) {
      newGeneralInfo[INPUT_ID_COUNTRY]
        = bodyGeneralInfo[INPUT_ID_COUNTRY]
    }
    if (bodyGeneralInfo[INPUT_ID_POSTAL_OR_ZIP_CODE]) {
      newGeneralInfo[INPUT_ID_POSTAL_OR_ZIP_CODE]
        = bodyGeneralInfo[INPUT_ID_POSTAL_OR_ZIP_CODE]
    }
    if (bodyGeneralInfo[INPUT_ID_SQUARE_FEET]) {
      newGeneralInfo[INPUT_ID_SQUARE_FEET]
        = bodyGeneralInfo[INPUT_ID_SQUARE_FEET]
    }

    if (bodyInitialPurchase[INPUT_ID_PURCHASE_PRICE]) {
      newInitialPurchase[INPUT_ID_PURCHASE_PRICE]
        = bodyInitialPurchase[INPUT_ID_PURCHASE_PRICE]
    }
    if (bodyInitialPurchase[INPUT_ID_DOWN_PAYMENT]) {
      newInitialPurchase[INPUT_ID_DOWN_PAYMENT]
        = bodyInitialPurchase[INPUT_ID_DOWN_PAYMENT]
    }
    if (bodyInitialPurchase[INPUT_ID_LOAN_AMOUNT]) {
      newInitialPurchase[INPUT_ID_LOAN_AMOUNT]
        = bodyInitialPurchase[INPUT_ID_LOAN_AMOUNT]
    }
    if (bodyInitialPurchase[INPUT_ID_INTEREST_RATE]) {
      newInitialPurchase[INPUT_ID_INTEREST_RATE]
        = bodyInitialPurchase[INPUT_ID_INTEREST_RATE]
    }
    if (bodyInitialPurchase[INPUT_ID_AMORTIZATION_PERIOD]) {
      newInitialPurchase[INPUT_ID_AMORTIZATION_PERIOD]
        = bodyInitialPurchase[INPUT_ID_AMORTIZATION_PERIOD]
    }
    if (bodyInitialPurchase[INPUT_ID_AFTER_REPAIR_VALUE]) {
      newInitialPurchase[INPUT_ID_AFTER_REPAIR_VALUE]
        = bodyInitialPurchase[INPUT_ID_AFTER_REPAIR_VALUE]
    }
    if (bodyInitialPurchase[INPUT_ID_REPAIR_COSTS]) {
      newInitialPurchase[INPUT_ID_REPAIR_COSTS]
        = bodyInitialPurchase[INPUT_ID_REPAIR_COSTS]
    }
    if (bodyInitialPurchase[INPUT_ID_CLOSING_COSTS]) {
      newInitialPurchase[INPUT_ID_CLOSING_COSTS]
        = bodyInitialPurchase[INPUT_ID_CLOSING_COSTS]
    }
    if (bodyInitialPurchase[INPUT_ID_OTHER_INITIAL_COSTS]) {
      newInitialPurchase[INPUT_ID_OTHER_INITIAL_COSTS]
        = bodyInitialPurchase[INPUT_ID_OTHER_INITIAL_COSTS]
    }

    if (bodyMonthlyIncome[INPUT_ID_RENTAL_INCOME]) {
      newMonthlyIncome[INPUT_ID_RENTAL_INCOME]
        = bodyMonthlyIncome[INPUT_ID_RENTAL_INCOME]
    }
    if (bodyMonthlyIncome[INPUT_ID_OTHER_INCOME]) {
      newMonthlyIncome[INPUT_ID_OTHER_INCOME]
        = bodyMonthlyIncome[INPUT_ID_OTHER_INCOME]
    }

    if (bodyMonthlyExpenses[INPUT_ID_MORTGAGE]) {
      newMonthlyExpenses[INPUT_ID_MORTGAGE]
        = bodyMonthlyExpenses[INPUT_ID_MORTGAGE]
    }
    if (bodyMonthlyExpenses[INPUT_ID_ELECTRICITY]) {
      newMonthlyExpenses[INPUT_ID_ELECTRICITY]
        = bodyMonthlyExpenses[INPUT_ID_ELECTRICITY]
    }
    if (bodyMonthlyExpenses[INPUT_ID_WATER_AND_SEWER]) {
      newMonthlyExpenses[INPUT_ID_WATER_AND_SEWER]
        = bodyMonthlyExpenses[INPUT_ID_WATER_AND_SEWER]
    }
    if (bodyMonthlyExpenses[INPUT_ID_PRIVATE_MORTGAGE_INSURANCE]) {
      newMonthlyExpenses[INPUT_ID_PRIVATE_MORTGAGE_INSURANCE]
        = bodyMonthlyExpenses[INPUT_ID_PRIVATE_MORTGAGE_INSURANCE]
    }
    if (bodyMonthlyExpenses[INPUT_ID_GARBAGE]) {
      newMonthlyExpenses[INPUT_ID_GARBAGE]
        = bodyMonthlyExpenses[INPUT_ID_GARBAGE]
    }
    if (bodyMonthlyExpenses[INPUT_ID_HOA]) {
      newMonthlyExpenses[INPUT_ID_HOA]
        = bodyMonthlyExpenses[INPUT_ID_HOA]
    }
    if (bodyMonthlyExpenses[INPUT_ID_INSURANCE]) {
      newMonthlyExpenses[INPUT_ID_INSURANCE]
        = bodyMonthlyExpenses[INPUT_ID_INSURANCE]
    }
    if (bodyMonthlyExpenses[INPUT_ID_PROPERTY_TAX]) {
      newMonthlyExpenses[INPUT_ID_PROPERTY_TAX]
        = bodyMonthlyExpenses[INPUT_ID_PROPERTY_TAX]
    }
    if (bodyMonthlyExpenses[INPUT_ID_VACANCY]) {
      newMonthlyExpenses[INPUT_ID_VACANCY]
        = bodyMonthlyExpenses[INPUT_ID_VACANCY]
    }
    if (bodyMonthlyExpenses[INPUT_ID_REPAIRS_AND_MAINTENANCE]) {
      newMonthlyExpenses[INPUT_ID_REPAIRS_AND_MAINTENANCE]
        = bodyMonthlyExpenses[INPUT_ID_REPAIRS_AND_MAINTENANCE]
    }
    if (bodyMonthlyExpenses[INPUT_ID_CAP_EX]) {
      newMonthlyExpenses[INPUT_ID_CAP_EX]
        = bodyMonthlyExpenses[INPUT_ID_CAP_EX]
    }
    if (bodyMonthlyExpenses[INPUT_ID_MANAGEMENT]) {
      newMonthlyExpenses[INPUT_ID_MANAGEMENT]
        = bodyMonthlyExpenses[INPUT_ID_MANAGEMENT]
    }
    if (bodyMonthlyExpenses[INPUT_ID_OTHER_EXPENSES]) {
      newMonthlyExpenses[INPUT_ID_OTHER_EXPENSES]
        = bodyMonthlyExpenses[INPUT_ID_OTHER_EXPENSES]
    }

    if (bodyFutureProjections[INPUT_ID_PROPERTY_VALUE_GROWTH]) {
      newFutureProjections[INPUT_ID_PROPERTY_VALUE_GROWTH]
        = bodyFutureProjections[INPUT_ID_PROPERTY_VALUE_GROWTH]
    }
    if (bodyFutureProjections[INPUT_ID_ANNUAL_INCOME_GROWTH]) {
      newFutureProjections[INPUT_ID_ANNUAL_INCOME_GROWTH]
        = bodyFutureProjections[INPUT_ID_ANNUAL_INCOME_GROWTH]
    }
    if (bodyFutureProjections[INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH]) {
      newFutureProjections[INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH]
        = bodyFutureProjections[INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH]
    }

    Calculation.find({
      user: req.user.id,
      title: req.body.title
    }).then(calculation => {
      if (calculation) {
        Calculation.findOneAndUpdate(
          {
            user: req.user.id,
            title: req.body.title
          },
          { $set: newCalculation },
          { new: true }
        ).then(updatedCalculation => res.json(updatedCalculation))
      } else {
        new Calculation(newCalculation).save()
          .then(savedCalc => res.json(savedCalc))
          .catch(err1 => console.log(err1))
      }
    }).catch(err2 => console.log(err2))
  }
)

// @route   GET api/calculation/:calculation_id
// @desc    Get calculation by id
// @access  Private
router.get(
  '/:calculation_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Calculation.findById(req.params.calculation_id)
      .then(calculation => {
        if (calculation.user.toString() !== req.user.id) {
          return res.status(401).json({ notauthorized: 'User not authorized'})
        }
        return res.json(calculation)
      })
      .catch(err => console.log(err))
  }
)

// @route   GET api/calculation/all
// @desc    Get all calculations for User
// @access  Private
router.get(
  '/all',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Calculation.find({ user: req.user.id })
      .then(calculations => res.json(calculations))
      .catch(err => console.log(err))
  }
)

module.exports = router