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
  calculateRemainingLoanBalanceForYear
  as calculateRemainingLoanBalanceForYearUtil,
  calculateReturnOnEquityForYear as calculateReturnOnEquityForYearUtil,
  calculateReturnOnInvestmentForYear as calculateReturnOnInvestmentForYearUtil,
  calculateYearCashFlow as calculateYearCashFlowUtil
} from '../../../utils/calculationUtils';
import {
  getAfterRepairValue,
  getAmortizationPeriod,
  getAnnualConstantExpensesGrowth,
  getAnnualIncomeGrowth,
  getAnnualPropertyValueGrowth,
  getClosingCosts,
  getDownPayment,
  getInitialLoanAmount,
  getInitialPurchasePrice,
  getInterestRate,
  getMonthlyExpenses,
  getMonthlyIncome,
  getOtherInitialCosts,
  getRepairCosts
} from '../../../utils/stateGetters';

const calculatePercentageExpensesForYear = (state, year) => {
  const annualIncomeGrowth = getAnnualIncomeGrowth(state);
  const annualPVGrowth = getAnnualPropertyValueGrowth(state);
  const monthlyIncome = getMonthlyIncome(state);
  const monthlyExpenses = getMonthlyExpenses(state);
  const propertyValue = getAfterRepairValue(state);

  return calculatePercentageExpensesForYearUtil(
    annualIncomeGrowth,
    annualPVGrowth,
    monthlyIncome,
    monthlyExpenses,
    propertyValue,
    year
  );
};

const calculateConstantExpensesForYear = (state, year) => {
  const monthlyExpenses = getMonthlyExpenses(state);
  const annualConstantExpensesGrowth = getAnnualConstantExpensesGrowth(state);

  return calculateConstantExpensesForYearUtil(
    annualConstantExpensesGrowth,
    monthlyExpenses,
    year
  );
};

const calculateExpensesForYear = (state, year) => {
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
};

const calculateIncomeForYear = (state, year) => {
  const monthlyIncome = getMonthlyIncome(state);
  const annualIncomeGrowth = getAnnualIncomeGrowth(state);

  return calculateIncomeForYearUtil(
    year,
    monthlyIncome,
    annualIncomeGrowth
  );
};

const calculateMortgageForYear = (state, year) => {
  const annualConstantExpensesGrowth = getAnnualConstantExpensesGrowth(state);
  const monthlyExpenses = getMonthlyExpenses(state);

  return calculateMortgageForYearUtil(
    annualConstantExpensesGrowth,
    monthlyExpenses,
    year
  );
};

/* Cash flow = Income - Expenses */
const calculateCashFlowForYear = (state, year) => {
  const amortizationPeriod = getAmortizationPeriod(state);
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
};

/* Initial investment =
  down payment + repair costs + closing costs + other initial costs */
const calculateInitialInvestment = state => {
  const downPayment = getDownPayment(state);
  const repairCosts = getRepairCosts(state);
  const closingCosts = getClosingCosts(state);
  const otherCosts = getOtherInitialCosts(state);

  return calculateInitialInvestmentUtil(
    downPayment,
    repairCosts,
    closingCosts,
    otherCosts
  );
};

/* Cash on cash return = (cash flow / initialInvestment) * 100% */
const calculateCashOnCashReturnForYear = (state, year) => {
  const yearCashFlow = calculateCashFlowForYear(state, year);
  const initialInvestment = calculateInitialInvestment(state);

  return calculateCashOnCashReturnUtil(
    yearCashFlow,
    initialInvestment
  );
};

const calculatePropertyValueForYear = (state, year) => {
  const propertyValue = getAfterRepairValue(state);
  const annualPVGrowth = getAnnualPropertyValueGrowth(state);

  return calculatePropertyValueForYearUtil(
    propertyValue,
    annualPVGrowth,
    year
  );
};

const calculateRemainingLoanBalanceForYear = (state, year) => {
  const initialLoanAmount = getInitialLoanAmount(state);
  const interestRate = getInterestRate(state);
  const amortizationPeriod = getAmortizationPeriod(state);

  return calculateRemainingLoanBalanceForYearUtil(
    initialLoanAmount,
    interestRate,
    amortizationPeriod,
    year
  );
};

/* Initial equity = down payment + after repair value + purchase price */
const calculateInitialEquity = state => {
  const downPayment = getDownPayment(state);
  const afterRepairValue = getAfterRepairValue(state);
  const purchasePrice = getInitialPurchasePrice(state);

  return calculateInitialEquityUtil(
    downPayment,
    afterRepairValue,
    purchasePrice
  );
};

const calculateEquityForYear = (state, year) => {
  const initialEquity = calculateInitialEquity(state);
  const amortizationPeriod = getAmortizationPeriod(state);
  if (year === 0) {
    return initialEquity;
  }
  if (year >= amortizationPeriod) {
    return calculatePropertyValueForYear(state, year);
  }
  const propertyValueForYear = calculatePropertyValueForYear(state, year);
  const initialPropertyValue = getAfterRepairValue(state);
  const loanAmount = getInitialLoanAmount(state);
  const remainingBalance = calculateRemainingLoanBalanceForYear(state, year);

  return calculateEquityForYearUtil(
    initialEquity,
    propertyValueForYear,
    initialPropertyValue,
    loanAmount,
    remainingBalance
  );
};

const calculateReturnOnEquityForYear = (state, year) => {
  const cashFlowForYear = calculateCashFlowForYear(state, year);
  const equityForYear = calculateEquityForYear(state, year);

  return calculateReturnOnEquityForYearUtil(
    cashFlowForYear,
    equityForYear
  );
};

const calculateReturnOnInvestmentForYear = (state, year) => {
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
};

const mapStateToProps = (state, ownProps) => {
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
};

export default connect(
  mapStateToProps
)(YearResult);