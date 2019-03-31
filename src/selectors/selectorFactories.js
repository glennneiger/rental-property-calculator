import { createSelector } from 'reselect';

export const getCalculator = state => state.calculator;

export const calculatorFieldsSelectorFactory = (
  sectionId,
  inputId,
  parseFunc = parseFloat
) => createSelector(
  getCalculator,
  calculator => {
    const section = calculator[sectionId];
    const inputVal = section.inputs[inputId];

    return inputVal
      ? parseFunc(inputVal)
      : 0;
  }
);

export const calculatorSectionsSelectorFactory = sectionId => createSelector(
  getCalculator,
  calculator => calculator[sectionId]
);