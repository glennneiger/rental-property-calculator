import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

export const getCalculator = state => state.calculator;

// eslint-disable-next-line max-len
// https://github.com/reduxjs/reselect/blob/master/README.md#q-how-do-i-create-a-selector-that-takes-an-argument
export const calculatorFieldsSelectorFactory = createSelector(
  getCalculator,
  calculator => memoize(
    (sectionId, inputId, parseFunc = parseFloat) => {
      const section = calculator[sectionId];
      const inputVal = section.inputs[inputId];

      return inputVal
        ? parseFunc(inputVal)
        : 0;
    }, (...args) => {
      const [sectionId, inputId] = args;
      const cacheKey = sectionId + '-' + inputId;
      return cacheKey;
    }
  )
);

export const calculatorSectionsSelectorFactory = createSelector(
  getCalculator,
  calculator => memoize(
    sectionId => calculator[sectionId]
  )
);