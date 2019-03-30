import { connect } from 'react-redux';

import YearResult from './YearResult';
import {
  calculateCashOnCashReturn as calculateCashOnCashReturnUtil,
  calculateConstantExpensesForYear as calculateConstantExpensesForYearUtil,
  calculateEquityForYear as calculateEquityForYearUtil,
  calculateExpensesForYear as calculateExpensesForYearUtil,
  calculateIncomeForYear as calculateIncomeForYearUtil,
  calculateInitialEquity as calculateInitialEquityUtil,
  calculateInitialInvestment as calculateInitialInvestmentUtil,
  calculateMortgageForYear as calculateMortgageForYearUtil,
  calculatePercentageExpensesForYear as calculatePercentageExpensesForYearUtil,
  calculatePropertyValueForYear as calculatePropertyValueForYearUtil,
  calculateRemainingLoanBalanceForYear as calculateRemainingLoanBalanceForYearUtil,
  calculateReturnOnEquityForYear as calculateReturnOnEquityForYearUtil,
  calculateReturnOnInvestmentForYear as calculateReturnOnInvestmentForYearUtil,
  calculateYearCashFlow as calculateYearCashFlowUtil
} from '../../../utils/calculationUtils';
import {
  getClosingCosts,
  getInitialLoanAmount,
  getInitialPurchasePrice,
  getInterestRate,
  getMonthlyExpenses,
  getMonthlyIncome,
  getOtherInitialCosts,
  getRepairCosts
} from '../../../utils/stateGetters';
import * as selectors from '../../../utils/selectors';

function calculatePercentageExpensesForYear(state, year) {
  const annualIncomeGrowth = selectors.getAnnualIncomeGrowth(state);
  const annualPVGrowth = selectors.getAnnualPropertyValueGrowth(state);
  const monthlyIncome = getMonthlyIncome(state);
  const monthlyExpenses = getMonthlyExpenses(state);
  const propertyValue = selectors.getAfterRepairValue(state);

  return calculatePercentageExpensesForYearUtil(
    annualIncomeGrowth,
    annualPVGrowth,
    monthlyIncome,
    monthlyExpenses,
    propertyValue,
    year
  );
}

function calculateConstantExpensesForYear(state, year) {
  const monthlyExpenses = getMonthlyExpenses(state);
  const annualConstantExpensesGrowth = selectors.getAnnualConstantExpensesGrowth(
    state
  );

  return calculateConstantExpensesForYearUtil(
    annualConstantExpensesGrowth,
    monthlyExpenses,
    year
  );
}

function calculateExpensesForYear(state, year) {
  const percentageExpensesForYear = calculatePercentageExpensesForYear(
    state,
    year
  );
  const constantExpensesForYear = calculateConstantExpensesForYear(
    state,
    year
  );
  return calculateExpensesForYearUtil(
    constantExpensesForYear,
    percentageExpensesForYear
  );
}

function calculateIncomeForYear(state, year) {
  const monthlyIncome = getMonthlyIncome(state);
  const annualIncomeGrowth = selectors.getAnnualIncomeGrowth(state);

  return calculateIncomeForYearUtil(
    year,
    monthlyIncome,
    annualIncomeGrowth
  );
}

function calculateMortgageForYear(state, year) {
  const annualConstantExpensesGrowth = selectors.getAnnualConstantExpensesGrowth(
    state
  );
  const monthlyExpenses = getMonthlyExpenses(state);

  return calculateMortgageForYearUtil(
    annualConstantExpensesGrowth,
    monthlyExpenses,
    year
  );
}

/* Cash flow = Income - Expenses */
function calculateCashFlowForYear(state, year) {
  const amortizationPeriod = selectors.getAmortizationPeriod(state);
  const incomeForYear = calculateIncomeForYear(state, year);
  const expensesForYear = calculateExpensesForYear(state, year);

  let yearCashFlow = calculateYearCashFlowUtil(
    incomeForYear,
    expensesForYear
  );
  if (year > amortizationPeriod) {
    yearCashFlow += calculateMortgageForYear(state, year);
  }
  return yearCashFlow;
}

/* Initial investment =
  down payment + repair costs + closing costs + other initial costs */
function calculateInitialInvestment(state) {
  const downPayment = selectors.getDownPayment(state);
  const repairCosts = getRepairCosts(state);
  const closingCosts = getClosingCosts(state);
  const otherCosts = getOtherInitialCosts(state);

  return calculateInitialInvestmentUtil(
    downPayment,
    repairCosts,
    closingCosts,
    otherCosts
  );
}

/* Cash on cash return = (cash flow / initialInvestment) * 100% */
function calculateCashOnCashReturnForYear(state, year) {
  const yearCashFlow = calculateCashFlowForYear(state, year);
  const initialInvestment = calculateInitialInvestment(state);

  return calculateCashOnCashReturnUtil(
    yearCashFlow,
    initialInvestment
  );
}

function calculatePropertyValueForYear(state, year) {
  const propertyValue = selectors.getAfterRepairValue(state);
  const annualPVGrowth = selectors.getAnnualPropertyValueGrowth(state);

  return calculatePropertyValueForYearUtil(
    propertyValue,
    annualPVGrowth,
    year
  );
}

function calculateRemainingLoanBalanceForYear(state, year) {
  const initialLoanAmount = getInitialLoanAmount(state);
  const interestRate = getInterestRate(state);
  const amortizationPeriod = selectors.getAmortizationPeriod(state);

  return calculateRemainingLoanBalanceForYearUtil(
    initialLoanAmount,
    interestRate,
    amortizationPeriod,
    year
  );
}

/* Initial equity = down payment + after repair value + purchase price */
function calculateInitialEquity(state) {
  const downPayment = selectors.getDownPayment(state);
  const afterRepairValue = selectors.getAfterRepairValue(state);
  const purchasePrice = getInitialPurchasePrice(state);

  return calculateInitialEquityUtil(
    downPayment,
    afterRepairValue,
    purchasePrice
  );
}

function calculateEquityForYear(state, year) {
  const initialEquity = calculateInitialEquity(state);
  const amortizationPeriod = selectors.getAmortizationPeriod(state);
  if (year === 0) {
    return initialEquity;
  }
  if (year >= amortizationPeriod) {
    return calculatePropertyValueForYear(state, year);
  }
  const propertyValueForYear = calculatePropertyValueForYear(state, year);
  const initialPropertyValue = selectors.getAfterRepairValue(state);
  const loanAmount = getInitialLoanAmount(state);
  const remainingBalance = calculateRemainingLoanBalanceForYear(state, year);

  return calculateEquityForYearUtil(
    initialEquity,
    propertyValueForYear,
    initialPropertyValue,
    loanAmount,
    remainingBalance
  );
}

function calculateReturnOnEquityForYear(state, year) {
  const cashFlowForYear = calculateCashFlowForYear(state, year);
  const equityForYear = calculateEquityForYear(state, year);

  return calculateReturnOnEquityForYearUtil(
    cashFlowForYear,
    equityForYear
  );
}

function calculateReturnOnInvestmentForYear(state, year) {
  const cashFlowForYear = parseFloat(calculateCashFlowForYear(state, year));
  const equityCurrentYear = parseFloat(calculateEquityForYear(state, year));
  const equityPreviousYear = parseFloat(calculateEquityForYear(state, year - 1));
  const equityGainedForYear = equityCurrentYear - equityPreviousYear;
  const initialInvestment = parseFloat(calculateInitialInvestment(state));

  return calculateReturnOnInvestmentForYearUtil(
    cashFlowForYear,
    equityGainedForYear,
    initialInvestment
  );
}

function mapStateToProps(state, ownProps) {
  const year = ownProps.year;
  return {
    displayEntries: [
      {
        title: 'Cash Flow',
        content: calculateCashFlowForYear(state, year),
        prefix: '$',
        suffix: ''
      },
      {
        title: 'Cash on Cash Return',
        content: calculateCashOnCashReturnForYear(state, year),
        prefix: '',
        suffix: '%'
      },
      {
        title: 'Property Value',
        content: calculatePropertyValueForYear(state, year),
        prefix: '$',
        suffix: ''
      },
      {
        title: 'Equity',
        content: calculateEquityForYear(state, year),
        prefix: '$',
        suffix: ''
      },
      {
        title: 'Return on Equity',
        content: calculateReturnOnEquityForYear(state, year),
        prefix: '',
        suffix: '%'
      },
      {
        title: 'Return on Investment',
        content: calculateReturnOnInvestmentForYear(state, year),
        prefix: '',
        suffix: '%'
      }
    ]
  };
}

export default connect(
  mapStateToProps
)(YearResult);