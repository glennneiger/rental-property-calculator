import mongoose from 'mongoose'
const Schema = mongoose.Schema

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
  MODEL_CALCULATIONS,
  TITLE_FUTURE_PROJECTIONS,
  TITLE_GENERAL_INFO,
  TITLE_INITIAL_PURCHASE,
  TITLE_MONTHLY_EXPENSES,
  TITLE_MONTHLY_INCOME
} from '../../constants'

const CalculationSchema = new Schema({
  [TITLE_GENERAL_INFO]: {
    [INPUT_ID_NEIGHBORHOOD]: {
      type: String
    },
    [INPUT_ID_STREET_ADDRESS]: {
      type: String
    },
    [INPUT_ID_UNIT_NUMBER]: {
      type: String
    },
    [INPUT_ID_CITY]: {
      type: String
    },
    [INPUT_ID_PROVINCE_OR_STATE]: {
      type: String
    },
    [INPUT_ID_COUNTRY]: {
      type: String
    },
    [INPUT_ID_POSTAL_OR_ZIP_CODE]: {
      type: String
    },
    [INPUT_ID_SQUARE_FEET]: {
      type: String
    }
  },
  [TITLE_INITIAL_PURCHASE]: {
    [INPUT_ID_PURCHASE_PRICE]: {
      type: String
    },
    [INPUT_ID_DOWN_PAYMENT]: {
      type: String
    },
    [INPUT_ID_LOAN_AMOUNT]: {
      type: String
    },
    [INPUT_ID_INTEREST_RATE]: {
      type: String
    },
    [INPUT_ID_AMORTIZATION_PERIOD]: {
      type: String
    },
    [INPUT_ID_AFTER_REPAIR_VALUE]: {
      type: String
    },
    [INPUT_ID_REPAIR_COSTS]: {
      type: String
    },
    [INPUT_ID_CLOSING_COSTS]: {
      type: String
    },
    [INPUT_ID_OTHER_INITIAL_COSTS]: {
      type: String
    }
  },
  [TITLE_MONTHLY_INCOME]: {
    [INPUT_ID_RENTAL_INCOME]: {
      type: String
    },
    [INPUT_ID_OTHER_INCOME]: {
      type: String
    }
  },
  [TITLE_MONTHLY_EXPENSES]: {
    [INPUT_ID_MORTGAGE]: {
      type: String
    },
    [INPUT_ID_ELECTRICITY]: {
      type: String
    },
    [INPUT_ID_WATER_AND_SEWER]: {
      type: String
    },
    [INPUT_ID_PRIVATE_MORTGAGE_INSURANCE]: {
      type: String
    },
    [INPUT_ID_GARBAGE]: {
      type: String
    },
    [INPUT_ID_HOA]: {
      type: String
    },
    [INPUT_ID_INSURANCE]: {
      type: String
    },
    [INPUT_ID_PROPERTY_TAX]: {
      type: String
    },
    [INPUT_ID_VACANCY]: {
      type: String
    },
    [INPUT_ID_REPAIRS_AND_MAINTENANCE]: {
      type: String
    },
    [INPUT_ID_CAP_EX]: {
      type: String
    },
    [INPUT_ID_MANAGEMENT]: {
      type: String
    },
    [INPUT_ID_OTHER_EXPENSES]: {
      type: String
    }
  },
  [TITLE_FUTURE_PROJECTIONS]: {
    [INPUT_ID_PROPERTY_VALUE_GROWTH]: {
      type: String
    },
    [INPUT_ID_ANNUAL_INCOME_GROWTH]: {
      type: String
    },
    [INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH]: {
      type: String
    }
  }
})

export default mongoose.model(MODEL_CALCULATIONS, CalculationSchema)