import { connect } from 'react-redux';

import YearResult from './YearResult';
import * as calculationUtils from '../../../utils/calculationUtils';
import * as selectors from '../../../selectors';

function calculatePercentageExpensesForYear(state, year) {
  const annualIncomeGrowth = selectors.getAnnualIncomeGrowth(state);
  const annualPVGrowth = selectors.getAnnualPropertyValueGrowth(state);
  const monthlyIncome = selectors.getMonthlyIncome(state);
  const monthlyExpenses = selectors.getMonthlyExpenses(state);
  const propertyValue = selectors.getAfterRepairValue(state);

  return calculationUtils.calculatePercentageExpensesForYear(
    annualIncomeGrowth,
    annualPVGrowth,
    monthlyIncome,
    monthlyExpenses,
    propertyValue,
    year
  );
}

function calculateConstantExpensesForYear(state, year) {
  const monthlyExpenses = selectors.getMonthlyExpenses(state);
  const annualConstantExpensesGrowth = selectors.getAnnualConstantExpensesGrowth(
    state
  );

  return calculationUtils.calculateConstantExpensesForYear(
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
  return calculationUtils.calculateExpensesForYear(
    constantExpensesForYear,
    percentageExpensesForYear
  );
}

function calculateIncomeForYear(state, year) {
  const monthlyIncome = selectors.getMonthlyIncome(state);
  const annualIncomeGrowth = selectors.getAnnualIncomeGrowth(state);

  return calculationUtils.calculateIncomeForYear(
    year,
    monthlyIncome,
    annualIncomeGrowth
  );
}

function calculateMortgageForYear(state, year) {
  const annualConstantExpensesGrowth = selectors.getAnnualConstantExpensesGrowth(
    state
  );
  const monthlyExpenses = selectors.getMonthlyExpenses(state);

  return calculationUtils.calculateMortgageForYear(
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

  let yearCashFlow = calculationUtils.calculateYearCashFlow(
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
  const repairCosts = selectors.getRepairCosts(state);
  const closingCosts = selectors.getClosingCosts(state);
  const otherCosts = selectors.getOtherInitialCosts(state);

  return calculationUtils.calculateInitialInvestment(
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

  return calculationUtils.calculateCashOnCashReturn(
    yearCashFlow,
    initialInvestment
  );
}

function calculatePropertyValueForYear(state, year) {
  const propertyValue = selectors.getAfterRepairValue(state);
  const annualPVGrowth = selectors.getAnnualPropertyValueGrowth(state);

  return calculationUtils.calculatePropertyValueForYear(
    propertyValue,
    annualPVGrowth,
    year
  );
}

function calculateRemainingLoanBalanceForYear(state, year) {
  const initialLoanAmount = selectors.getInitialLoanAmount(state);
  const interestRate = selectors.getInterestRate(state);
  const amortizationPeriod = selectors.getAmortizationPeriod(state);

  return calculationUtils.calculateRemainingLoanBalanceForYear(
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
  const purchasePrice = selectors.getInitialPurchasePrice(state);

  return calculationUtils.calculateInitialEquity(
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
  const loanAmount = selectors.getInitialLoanAmount(state);
  const remainingBalance = calculateRemainingLoanBalanceForYear(state, year);

  return calculationUtils.calculateEquityForYear(
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

  return calculationUtils.calculateReturnOnEquityForYear(
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

  return calculationUtils.calculateReturnOnInvestmentForYear(
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