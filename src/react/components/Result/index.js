import { connect } from 'react-redux';

import Result from './Result';
import {
  calculateInitialEquity as calculateInitialEquityUtil,
  calculateInitialInvestment as calculateInitialInvestmentUtil
} from '../../../utils/calculationUtils';
import {
  INPUT_ID_AFTER_REPAIR_VALUE,
  INPUT_ID_CLOSING_COSTS,
  INPUT_ID_DOWN_PAYMENT,
  INPUT_ID_OTHER_INITIAL_COSTS,
  INPUT_ID_PURCHASE_PRICE,
  INPUT_ID_REPAIR_COSTS,
  TITLE_INITIAL_PURCHASE
} from '../../../constants';

/* Initial equity = down payment + after repair value + purchase price */
const calculateInitialEquity = state => {
  const calculatorFields = state.calculator;
  const { inputs } = calculatorFields[TITLE_INITIAL_PURCHASE];

  const downPayment = inputs[INPUT_ID_DOWN_PAYMENT];
  const afterRepairValue = inputs[INPUT_ID_AFTER_REPAIR_VALUE];
  const purchasePrice = inputs[INPUT_ID_PURCHASE_PRICE];

  return calculateInitialEquityUtil(
    downPayment,
    afterRepairValue,
    purchasePrice
  );
};

/* Initial investment =
 * down payment + repair costs + closing costs + other initial costs
 */
const calculateInitialInvestment = state => {
  const calculatorFields = state.calculator;
  const { inputs } = calculatorFields[TITLE_INITIAL_PURCHASE];

  const downPayment = inputs[INPUT_ID_DOWN_PAYMENT];

  const repairCosts = inputs[INPUT_ID_REPAIR_COSTS];
  const closingCosts = inputs[INPUT_ID_CLOSING_COSTS];
  const otherCosts = inputs[INPUT_ID_OTHER_INITIAL_COSTS];

  return calculateInitialInvestmentUtil(
    downPayment,
    repairCosts,
    closingCosts,
    otherCosts
  );
};

const mapStateToProps = state => ({
  initialEquity: calculateInitialEquity(state),
  initialInvestment: calculateInitialInvestment(state)
});

export default connect(
  mapStateToProps
)(Result);