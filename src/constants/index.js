export const CALCULATOR_INPUT_WIDTH_DEFAULT = 160;

// TODO: generate content for the rest of the input descriptions
// Initial Costs
export const INPUT_DESCRIPTION_DOWN_PAYMENT =
  'Initial payment towards the purchase price';
export const INPUT_DESCRIPTION_LOAN_AMOUNT =
  'Purchase price minus down payment; ' +
  'the amount of money borrowed to buy the property';
export const INPUT_DESCRIPTION_PURCHASE_PRICE =
  'Full purchase price of the property';
export const INPUT_DESCRIPTION_INTEREST_RATE =
  'Annual interest rate of your mortgage loan';
export const INPUT_DESCRIPTION_AMORTIZATION_PERIOD =
  'Length of time it will take to pay off the entire mortgage';
export const INPUT_DESCRIPTION_AFTER_REPAIR_VALUE =
  'The market value of the property after you have purchased it and made ' +
  'any initial repairs';
export const INPUT_DESCRIPTION_REPAIR_COSTS =
  'The price of any initial repairs to the property immediately after purchase';
export const INPUT_DESCRIPTION_CLOSING_COSTS =
  'Various costs to finish the purchase transaction; Lawyer fees, inspections, ' +
  'appraisals, PMI, title insurance, title search, etc.';
export const INPUT_DESCRIPTION_OTHER_INITIAL_COSTS =
  'Any costs that don\'t fall in another category that are incurred when ' +
  'acquiring the property';

// Income
export const INPUT_DESCRIPTION_RENTAL_INCOME =
  'Monthly gross rental income collected from tenants';
export const INPUT_DESCRIPTION_OTHER_INCOME =
  'Monthly gross income from other sources related to the property; ' +
  'Laundry, parking, etc.';

export const INPUT_ID_AFTER_REPAIR_VALUE = 'afterRepairValueInput';
export const INPUT_ID_AMORTIZATION_PERIOD = 'amortizationPeriodInput';
export const INPUT_ID_ANNUAL_CONSTANT_EXPENSES_GROWTH =
  'annualExpensesGrowthInput';
export const INPUT_ID_ANNUAL_INCOME_GROWTH = 'annualIncomeGrowthInput';
export const INPUT_ID_CAP_EX = 'capExInput';
export const INPUT_ID_CITY = 'cityInput';
export const INPUT_ID_CLOSING_COSTS = 'closingCostsInput';
export const INPUT_ID_COUNTRY = 'countryInput';
export const INPUT_ID_DOWN_PAYMENT = 'downPaymentInput';
export const INPUT_ID_ELECTRICITY = 'electricityInput';
export const INPUT_ID_GARBAGE = 'garbageInput';
export const INPUT_ID_HOA = 'hoaInput';
export const INPUT_ID_INSURANCE = 'insuranceInput';
export const INPUT_ID_INTEREST_RATE = 'interestRateInput';
export const INPUT_ID_LOAN_AMOUNT = 'loanAmountInput';
export const INPUT_ID_MANAGEMENT = 'managementInput';
export const INPUT_ID_MORTGAGE = 'mortgageInput';
export const INPUT_ID_NEIGHBORHOOD = 'neighborhoodInput';
export const INPUT_ID_OTHER_EXPENSES = 'otherExpensesInput';
export const INPUT_ID_OTHER_INCOME = 'otherIncomeInput';
export const INPUT_ID_OTHER_INITIAL_COSTS = 'otherInitialCostsInput';
export const INPUT_ID_POSTAL_OR_ZIP_CODE = 'postalOrZipCodeInput';
export const INPUT_ID_PRIVATE_MORTGAGE_INSURANCE =
  'privateMortgageInsuranceInput';
export const INPUT_ID_PROPERTY_TAX = 'propertyTaxInput';
export const INPUT_ID_PROPERTY_VALUE_GROWTH = 'propertyValueGrowthInput';
export const INPUT_ID_PROVINCE_OR_STATE = 'provinceOrStateInput';
export const INPUT_ID_PURCHASE_PRICE = 'purchasePriceInput';
export const INPUT_ID_RENTAL_INCOME = 'rentalIncomeInput';
export const INPUT_ID_REPAIR_COSTS = 'repairCostsInput';
export const INPUT_ID_REPAIRS_AND_MAINTENANCE = 'r&mInput';
export const INPUT_ID_SQUARE_FEET = 'squareFeetInput';
export const INPUT_ID_STREET_ADDRESS = 'streetAddressInput';
export const INPUT_ID_UNIT_NUMBER = 'unitNumberInput';
export const INPUT_ID_VACANCY = 'vacancyInput';
export const INPUT_ID_WATER_AND_SEWER = 'waterAndSewerInput';

export const INTERVAL_YEAR_RESULTS = 5;

export const LABEL_AFTER_REPAIR_VALUE = 'After Repair Value';
export const LABEL_AMORTIZATION_PERIOD = 'Amortization Period (years)';
export const LABEL_CAP_EX = 'Cap. Ex. (%)';
export const LABEL_CITY = 'City';
export const LABEL_CLOSING_COSTS = 'Closing Costs';
export const LABEL_CONSTANT_EXPENSES_GROWTH =
  'Annual Constant Expenses Growth (%)';
export const LABEL_COUNTRY = 'Country';
export const LABEL_DOWN_PAYMENT = 'Down Payment';
export const LABEL_ELECTRICITY = 'Electricity';
export const LABEL_GARBAGE = 'Garbage';
export const LABEL_HOA = 'HOA Fees';
export const LABEL_INCOME_GROWTH = 'Annual Income Growth (%)';
export const LABEL_INSURANCE = 'Insurance';
export const LABEL_INTEREST_RATE = 'Interest Rate (%)';
export const LABEL_LOAN_AMOUNT = 'Loan Amount';
export const LABEL_MANAGEMENT = 'Management (%)';
export const LABEL_MORTGAGE = 'Mortgage';
export const LABEL_NEIGHBORHOOD = 'Neighborhood';
export const LABEL_OTHER_EXPENSES = 'Other Expenses';
export const LABEL_OTHER_INCOME = 'Other Income';
export const LABEL_OTHER_INITIAL_COSTS = 'Other Initial Costs';
export const LABEL_POSTAL_OR_ZIP_CODE = 'Postal/Zip Code';
export const LABEL_PRIVATE_MORTGAGE_INSURANCE = 'Private Mortgage Insurance';
export const LABEL_PROPERTY_TAX = 'Property Tax (%)';
export const LABEL_PROPERTY_VALUE_GROWTH = 'Annual Property Value Growth (%)';
export const LABEL_PROVINCE_OR_STATE = 'Province/State';
export const LABEL_PURCHASE_PRICE = 'Purchase Price';
export const LABEL_RENTAL_INCOME = 'Rental Income';
export const LABEL_REPAIR_COSTS = 'Repair Costs';
export const LABEL_REPAIRS_AND_MAINTENANCE = 'Repairs & Maintenance (%)';
export const LABEL_SQUARE_FEET = 'Square Feet';
export const LABEL_STREET_ADDRESS = 'Street Address';
export const LABEL_UNIT_NUMBER = 'Unit Number';
export const LABEL_VACANCY = 'Vacancy (%)';
export const LABEL_WATER_AND_SEWER = 'Water and Sewer';

export const MILLISECONDS_PER_SECOND = 1000;

export const MODAL_CONFIRM_DELETE_CALCULATION =
  'MODAL_CONFIRM_DELETE_CALCULATION';
export const MODAL_CONFIRM_LOGOUT = 'MODAL_CONFIRM_LOGOUT';
export const MODAL_SAVE_AS = 'MODAL_SAVE_AS';
export const MODAL_SAVE_CHANGES = 'MODAL_SAVE_CHANGES';

export const MODEL_CALCULATIONS = 'calculations';
export const MODEL_PROFILE = 'profile';
export const MODEL_USERS = 'users';

export const MONTHS_PER_YEAR = 12;

/**
 * Needs to equal css variable --notesEditorTransitionLength.
 * Unfortunately it needs to be defined in 2 places (JS and CSS)
 * because of how react-transition-group works.
 */
export const NOTES_EDITOR_TRANSITION_LENGTH = 150;

export const NUMBER_PRECISION_DISPLAY = 2;
export const NUMBER_SYSTEM_DECIMAL = 10;

export const SALT_ROUNDS = 10;

/**
 * Max width at which the Sidebar is rendered side-by-side with
 * the Calculator. Below this, if the Sidebar is showing, it takes
 * up the whole screen (the Calculator is not rendered).
 */
export const SIDEBAR_MAX_SCREEN_WIDTH = 600;

export const TITLE_FUTURE_PROJECTIONS = 'Future Projections';
export const TITLE_GENERAL_INFO = 'General Info';
export const TITLE_INITIAL_PURCHASE = 'Initial Purchase';
export const TITLE_MONTHLY_INCOME = 'Monthly Income';
export const TITLE_MONTHLY_EXPENSES = 'Monthly Expenses';

export const ZERO_THRESHOLD = 0.00001;
