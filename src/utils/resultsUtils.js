import {
  INTERVAL_YEAR_RESULTS
} from '../constants';

export const getYearsForResults = amortizationPeriod => {
  let yearsToShowResults = [1];
  for (
    let i = INTERVAL_YEAR_RESULTS;
    i <= amortizationPeriod;
    i = i + INTERVAL_YEAR_RESULTS
  ) {
    yearsToShowResults.push(i);
  }
  /* To show the year after amortization period, when debt is paid off */
  if (amortizationPeriod) {
    yearsToShowResults.push(+amortizationPeriod + 1);
  }
  return yearsToShowResults;
};