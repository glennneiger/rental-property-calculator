import {
  INPUT_ID_MORTGAGE,
  INPUT_ID_RENTAL_INCOME,
  MONTHS_PER_YEAR,
  NUMBER_SYSTEM_DECIMAL,
  ZERO_THRESHOLD
} from '../constants';
import {
  expensesInputProps,
  incomeInputProps
} from '../react/components/Calculator/childProps';

export const makeValidGrowthRate = growthRate => (
  growthRate
    ? parseFloat(growthRate, NUMBER_SYSTEM_DECIMAL)
    : 0
);

export const getCompoundedValue = (initialValue, annualGrowthRate, years) => {
  const validatedAnnualGrowthRate = makeValidGrowthRate(annualGrowthRate);
  return initialValue * Math.pow(1 + (validatedAnnualGrowthRate / 100), years);
};

export const calculatePercentOfPropertyValueMonthly = (
  percent,
  propertyValue
) => {
  if (!percent || !propertyValue) {
    return 0;
  }
  return percent * propertyValue / (100 * MONTHS_PER_YEAR);
};

export const calculatePercentOfRentalIncomeMonthly = (
  percent,
  monthlyRentalIncome
) => {
  if (!percent || !monthlyRentalIncome) {
    return 0;
  }
  return percent * monthlyRentalIncome / 100;
};

export const calculateInitialMonthlyIncome = monthlyIncome => {
  if (!monthlyIncome) {
    return 0;
  }
  const initialMonthlyIncome = incomeInputProps.reduce((total, current) => {
    const income = monthlyIncome[current.inputId];
    return total + +income;
  }, 0);
  return parseFloat(initialMonthlyIncome, NUMBER_SYSTEM_DECIMAL);
};

export const calculateInitialYearlyIncome = monthlyIncome => {
  if (!monthlyIncome) {
    return 0;
  }
  return calculateInitialMonthlyIncome(monthlyIncome) * MONTHS_PER_YEAR;
};

export const calculateIncomeForYear = (
  year,
  monthlyIncome,
  annualIncomeGrowth
) => {
  let incomeForYear = calculateInitialYearlyIncome(monthlyIncome);
  if (year === 0 || !annualIncomeGrowth) {
    return incomeForYear;
  }
  if (!year || !monthlyIncome || !annualIncomeGrowth) {
    return 0;
  }
  incomeForYear = getCompoundedValue(
    incomeForYear,
    annualIncomeGrowth,
    year
  );
  return incomeForYear;
};

export const calculateInitialMonthlyConstantExpenses = monthlyExpenses => {
  if (!monthlyExpenses) {
    return 0;
  }
  const constantExpensesForYear = expensesInputProps
    .reduce((total, current) => {
      let expense = monthlyExpenses[current.inputId];
      if (current.percentOfRent || current.percentOfPropertyValue) {
        expense = 0;
      }
      return total + +expense;
    }, 0);
  return parseFloat(constantExpensesForYear, NUMBER_SYSTEM_DECIMAL);
};

export const calculateInitialYearlyConstantExpenses = monthlyExpenses =>
  calculateInitialMonthlyConstantExpenses(
    monthlyExpenses
  ) * MONTHS_PER_YEAR;

export const calculateConstantExpensesForYear = (
  annualConstantExpensesGrowth,
  monthlyExpenses,
  year
) => {
  const initialConstantExpenses = calculateInitialYearlyConstantExpenses(
    monthlyExpenses
  );
  const constantExpensesForYear = getCompoundedValue(
    initialConstantExpenses,
    annualConstantExpensesGrowth,
    year
  );
  return constantExpensesForYear;
};

export const calculatePropertyValueForYear = (
  initialPropertyValue,
  annualPVGrowth,
  year
) => {
  return getCompoundedValue(
    initialPropertyValue,
    annualPVGrowth,
    year
  );
};

export const calculateInitialYearlyRentalIncome = monthlyIncome =>
  monthlyIncome[INPUT_ID_RENTAL_INCOME] * MONTHS_PER_YEAR;

export const calculateWholeYearRentalIncomeForYear = (
  year,
  monthlyIncome,
  annualIncomeGrowth
) => {
  let yearlyRentalIncome = calculateInitialYearlyRentalIncome(monthlyIncome);
  return getCompoundedValue(
    yearlyRentalIncome,
    annualIncomeGrowth,
    year
  );
};

export const calculateMonthlyRentalIncomeForYear = (
  year,
  monthlyIncome,
  annualIncomeGrowth
) => {
  let yearRentalIncome = calculateWholeYearRentalIncomeForYear(
    year,
    monthlyIncome,
    annualIncomeGrowth
  );
  return yearRentalIncome / MONTHS_PER_YEAR;
};

export const calculatePercentageExpensesForYear = (
  annualIncomeGrowth,
  annualPVGrowth,
  monthlyIncome,
  monthlyExpenses,
  initialPropertyValue,
  year
) => {
  const percentageExpensesForMonth = expensesInputProps
    .reduce((total, current) => {
      let expense = 0;
      if (current.percentOfRent) {
        expense = calculatePercentOfRentalIncomeMonthly(
          monthlyExpenses[current.inputId],
          calculateMonthlyRentalIncomeForYear(
            year,
            monthlyIncome,
            annualIncomeGrowth
          )
        );
      } else if (current.percentOfPropertyValue) {
        expense = calculatePercentOfPropertyValueMonthly(
          monthlyExpenses[current.inputId],
          calculatePropertyValueForYear(
            initialPropertyValue,
            annualPVGrowth,
            year
          )
        );
      }
      return total + +expense;
    }, 0);
  return percentageExpensesForMonth * MONTHS_PER_YEAR;
};

export const calculateExpensesForYear = (
  constantExpenses,
  percentageExpenses
) =>
  constantExpenses + percentageExpenses;

export const calculateYearCashFlow = (incomeForYear, expensesForYear) =>
  incomeForYear - expensesForYear;

export const calculateCashOnCashReturn = (cashFlow, totalInvestment) => {
  if (Math.abs(cashFlow) < ZERO_THRESHOLD) {
    return 0;
  }
  return (Math.abs(totalInvestment) < ZERO_THRESHOLD)
    ? Number.POSITIVE_INFINITY
    : (cashFlow / totalInvestment * 100);
};

export const calculateInitialInvestment = (
  downPayment,
  repairCosts,
  closingCosts,
  otherCosts
) =>
  +downPayment + +repairCosts + +closingCosts + +otherCosts;

export const calculateInitialEquity = (
  downPayment,
  afterRepairValue,
  purchasePrice
) => {
  if (afterRepairValue === 0) {
    return 0;
  }
  if (purchasePrice === 0) {
    return afterRepairValue;
  }
  return +downPayment + (+afterRepairValue - +purchasePrice);
};

export const calculateInitialYearlyMortgage = monthlyExpenses => {
  return monthlyExpenses
    ? monthlyExpenses[INPUT_ID_MORTGAGE] * MONTHS_PER_YEAR
    : 0;
};

export const calculateMortgageForYear = (
  annualConstantExpensesGrowth,
  monthlyExpenses,
  year
) => {
  const yearlyMortgage = calculateInitialYearlyMortgage(monthlyExpenses);
  return getCompoundedValue(
    yearlyMortgage,
    annualConstantExpensesGrowth,
    year
  );
};

// https://www.mtgprofessor.com/formulas.htm
export const calculateMonthlyMortgagePayment = (
  amortizationPeriod,
  interestRate,
  loanAmount
) => {
  if (!amortizationPeriod) {
    return 0;
  }
  const amMonths = amortizationPeriod * MONTHS_PER_YEAR;
  if (!interestRate) {
    return loanAmount / amMonths;
  }
  const monthlyInterestRate = interestRate / (MONTHS_PER_YEAR * 100);
  const interestFactor = Math.pow(1 + monthlyInterestRate, amMonths);
  return (loanAmount * interestFactor * monthlyInterestRate)
    / (interestFactor - 1);
};

export const calculateEquityForYear = (
  initialEquity,
  propertyValueForYear,
  initialPropertyValue,
  loanAmount,
  remainingBalance
) =>
  initialEquity + (propertyValueForYear - initialPropertyValue)
    + (loanAmount - remainingBalance);

export const calculateLoanBalanceForYearNoInterest = (
  initialLoanAmount,
  amortizationPeriod,
  year
) => {
  if (amortizationPeriod === 0) {
    return 0;
  }
  const yearlyPayment = initialLoanAmount / amortizationPeriod;
  return initialLoanAmount - (year * yearlyPayment);
};

// https://www.mtgprofessor.com/formulas.htm
export const calculateRemainingLoanBalanceForYear = (
  initialLoanAmount,
  interestRate,
  amortizationPeriod,
  year
) => {
  if (amortizationPeriod === 0) {
    return 0;
  }
  if (interestRate === 0) {
    return calculateLoanBalanceForYearNoInterest(
      initialLoanAmount,
      amortizationPeriod,
      year
    );
  }
  const amMonths = amortizationPeriod * MONTHS_PER_YEAR;
  const months = year * MONTHS_PER_YEAR;
  const monthlyInterestRate = interestRate / (MONTHS_PER_YEAR * 100);
  const interestFactorTotal = Math.pow(1 + monthlyInterestRate, amMonths);
  const interestFactorForYear = Math.pow(1 + monthlyInterestRate, months);
  return (initialLoanAmount * (interestFactorTotal - interestFactorForYear))
    / (interestFactorTotal - 1);
};

export const calculateReturnOnEquityForYear = (
  cashFlowForYear,
  equityForYear
) => {
  if (Math.abs(cashFlowForYear) < ZERO_THRESHOLD) {
    return 0;
  }
  return (Math.abs(equityForYear) < ZERO_THRESHOLD)
    ? Number.POSITIVE_INFINITY
    : (cashFlowForYear / equityForYear) * 100;
};

export const calculateReturnOnInvestmentForYear = (
  cashFlowForYear,
  equityGainedForYear,
  initialInvestment
) => {
  if (cashFlowForYear === 0 && equityGainedForYear === 0) {
    return 0;
  }
  return initialInvestment === 0
    ? Number.POSITIVE_INFINITY
    : ((cashFlowForYear + equityGainedForYear) / initialInvestment) * 100;
};