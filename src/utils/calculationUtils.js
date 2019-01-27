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

export function makeValidGrowthRate(growthRate) {
  return growthRate
    ? parseFloat(growthRate, NUMBER_SYSTEM_DECIMAL)
    : 0;
}

export function getCompoundedValue(initialValue, annualGrowthRate, years) {
  const validatedAnnualGrowthRate = makeValidGrowthRate(annualGrowthRate);
  return initialValue * Math.pow(1 + (validatedAnnualGrowthRate / 100), years);
}

export function calculatePercentOfPropertyValueMonthly(percent, propertyValue) {
  if (!percent || !propertyValue) {
    return 0;
  }
  return percent * propertyValue / (100 * MONTHS_PER_YEAR);
}

export function calculatePercentOfRentalIncomeMonthly(percent, monthlyRentalIncome) {
  if (!percent || !monthlyRentalIncome) {
    return 0;
  }
  return percent * monthlyRentalIncome / 100;
}

export function calculateInitialMonthlyIncome(monthlyIncome) {
  if (!monthlyIncome) {
    return 0;
  }
  const initialMonthlyIncome = incomeInputProps.reduce((total, current) => {
    const income = monthlyIncome.inputs[current.inputId];
    return total + +income;
  }, 0);

  return parseFloat(initialMonthlyIncome, NUMBER_SYSTEM_DECIMAL);
}

export function calculateInitialYearlyIncome(monthlyIncome) {
  if (!monthlyIncome) {
    return 0;
  }
  return calculateInitialMonthlyIncome(monthlyIncome) * MONTHS_PER_YEAR;
}

export function calculateIncomeForYear(year, monthlyIncome, annualIncomeGrowth) {
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
}

export function calculateInitialMonthlyConstantExpenses(monthlyExpenses) {
  if (!monthlyExpenses) {
    return 0;
  }
  const constantExpensesForYear = expensesInputProps
    .reduce((total, current) => {
      let expense = monthlyExpenses.inputs[current.inputId];
      if (current.percentOfRent || current.percentOfPropertyValue) {
        expense = 0;
      }
      return total + +expense;
    }, 0);

  return parseFloat(constantExpensesForYear, NUMBER_SYSTEM_DECIMAL);
}

export function calculateInitialYearlyConstantExpenses(monthlyExpenses) {
  return calculateInitialMonthlyConstantExpenses(monthlyExpenses) * MONTHS_PER_YEAR;
}

export function calculateConstantExpensesForYear(
  annualConstantExpensesGrowth,
  monthlyExpenses,
  year
) {
  const initialConstantExpenses = calculateInitialYearlyConstantExpenses(
    monthlyExpenses
  );
  const constantExpensesForYear = getCompoundedValue(
    initialConstantExpenses,
    annualConstantExpensesGrowth,
    year
  );
  return constantExpensesForYear;
}

export function calculatePropertyValueForYear(
  initialPropertyValue,
  annualPVGrowth,
  year
) {
  return getCompoundedValue(
    initialPropertyValue,
    annualPVGrowth,
    year
  );
}

export function calculateInitialYearlyRentalIncome(monthlyIncome) {
  return monthlyIncome.inputs[INPUT_ID_RENTAL_INCOME] * MONTHS_PER_YEAR;
}

export function calculateWholeYearRentalIncomeForYear(
  year,
  monthlyIncome,
  annualIncomeGrowth
) {
  let yearlyRentalIncome = calculateInitialYearlyRentalIncome(monthlyIncome);
  return getCompoundedValue(
    yearlyRentalIncome,
    annualIncomeGrowth,
    year
  );
}

export function calculateMonthlyRentalIncomeForYear(
  year,
  monthlyIncome,
  annualIncomeGrowth
) {
  let yearRentalIncome = calculateWholeYearRentalIncomeForYear(
    year,
    monthlyIncome,
    annualIncomeGrowth
  );
  return yearRentalIncome / MONTHS_PER_YEAR;
}

export function calculatePercentageExpensesForYear(
  annualIncomeGrowth,
  annualPVGrowth,
  monthlyIncome,
  monthlyExpenses,
  initialPropertyValue,
  year
) {
  const percentageExpensesForMonth = expensesInputProps
    .reduce((total, current) => {
      let expense = 0;
      if (current.percentOfRent) {
        expense = calculatePercentOfRentalIncomeMonthly(
          monthlyExpenses.inputs[current.inputId],
          calculateMonthlyRentalIncomeForYear(
            year,
            monthlyIncome,
            annualIncomeGrowth
          )
        );
      } else if (current.percentOfPropertyValue) {
        expense = calculatePercentOfPropertyValueMonthly(
          monthlyExpenses.inputs[current.inputId],
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
}

export function calculateExpensesForYear(constantExpenses, percentageExpenses) {
  return constantExpenses + percentageExpenses;
}

export function calculateYearCashFlow(incomeForYear, expensesForYear) {
  return incomeForYear - expensesForYear;
}

export function calculateCashOnCashReturn(cashFlow, totalInvestment) {
  if (Math.abs(cashFlow) < ZERO_THRESHOLD) {
    return 0;
  }

  return Math.abs(totalInvestment) < ZERO_THRESHOLD
    ? Number.POSITIVE_INFINITY
    : (cashFlow / totalInvestment * 100);
}

export function calculateInitialInvestment(
  downPayment,
  repairCosts,
  closingCosts,
  otherCosts
) {
  return +downPayment + +repairCosts + +closingCosts + +otherCosts;
}

export function calculateInitialEquity(
  downPayment,
  afterRepairValue,
  purchasePrice
) {
  if (afterRepairValue === 0) {
    return 0;
  }
  if (purchasePrice === 0) {
    return afterRepairValue;
  }
  return +downPayment + (+afterRepairValue - +purchasePrice);
}

export function calculateInitialYearlyMortgage(monthlyExpenses) {
  return monthlyExpenses
    ? monthlyExpenses.inputs[INPUT_ID_MORTGAGE] * MONTHS_PER_YEAR
    : 0;
}

export function calculateMortgageForYear(
  annualConstantExpensesGrowth,
  monthlyExpenses,
  year
) {
  const yearlyMortgage = calculateInitialYearlyMortgage(monthlyExpenses);
  return getCompoundedValue(
    yearlyMortgage,
    annualConstantExpensesGrowth,
    year
  );
}

// https://www.mtgprofessor.com/formulas.htm
export function calculateMonthlyMortgagePayment(
  amortizationPeriod,
  interestRate,
  loanAmount
) {
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
}

export function calculateEquityForYear(
  initialEquity,
  propertyValueForYear,
  initialPropertyValue,
  loanAmount,
  remainingBalance
) {
  const equityIncrease = propertyValueForYear - initialPropertyValue;
  const loanPayDown = loanAmount - remainingBalance;
  return initialEquity + equityIncrease + loanPayDown;
}

export function calculateLoanBalanceForYearNoInterest(
  initialLoanAmount,
  amortizationPeriod,
  year
) {
  if (amortizationPeriod === 0) {
    return 0;
  }
  const yearlyPayment = initialLoanAmount / amortizationPeriod;
  return initialLoanAmount - (year * yearlyPayment);
}

// https://www.mtgprofessor.com/formulas.htm
export function calculateRemainingLoanBalanceForYear(
  initialLoanAmount,
  interestRate,
  amortizationPeriod,
  year
) {
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
}

export function calculateReturnOnEquityForYear(cashFlowForYear, equityForYear) {
  if (Math.abs(cashFlowForYear) < ZERO_THRESHOLD) {
    return 0;
  }
  return (Math.abs(equityForYear) < ZERO_THRESHOLD)
    ? Number.POSITIVE_INFINITY
    : (cashFlowForYear / equityForYear) * 100;
}

export function calculateReturnOnInvestmentForYear(
  cashFlowForYear,
  equityGainedForYear,
  initialInvestment
) {
  if (cashFlowForYear === 0 && equityGainedForYear === 0) {
    return 0;
  }
  return initialInvestment === 0
    ? Number.POSITIVE_INFINITY
    : ((cashFlowForYear + equityGainedForYear) / initialInvestment) * 100;
}

/**
 * Formats server data so that it matches the Redux store state shape.
 * @param {Object} serverCalc - calculation data object from the server
 * @returns {Object} - 'calculator' portion of application state
 */
export function formatServerCalculationForClient(serverCalc) {
  const clientCalc = {};
  for (const sectionName in serverCalc) {
    if (serverCalc.hasOwnProperty(sectionName)) {
      const section = serverCalc[sectionName];
      clientCalc[sectionName] = {
        inputs: section.inputs,
        notes: {
          text: section.notes,
          editorCollapsed: !section.notes
        }
      };
    }
  }
  return clientCalc;
}

/**
 * Formats client data calculation data so that it is ready to send to the server.
 * @param {Object} clientCalc - 'calculator' portion of the in-memory Redux store
 *    state
 * @returns {Object} - calculation object expected by server
 */
export function formatClientCalculationForServer(clientCalc) {
  const serverCalc = {};
  for (const sectionName in clientCalc) {
    if (clientCalc.hasOwnProperty(sectionName)) {
      const section = clientCalc[sectionName];
      serverCalc[sectionName] = {
        inputs: {},
        notes: section.notes.text
      };
      const formattedInputs = serverCalc[sectionName].inputs;
      const { inputs } = section;

      for (const inputName in inputs) {
        if (inputs.hasOwnProperty(inputName)) {
          const inputValue = section.inputs[inputName];
          formattedInputs[inputName] = inputValue;
        }
      }
    }
  }
  return serverCalc;
}