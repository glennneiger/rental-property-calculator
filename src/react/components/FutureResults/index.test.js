import { expect as chaiExpect } from 'chai';

import { mapStateToProps } from '.';
import * as resultsUtils from '../../../utils/resultsUtils';
import {
  INPUT_ID_AMORTIZATION_PERIOD,
  TITLE_INITIAL_PURCHASE
} from '../../../constants';

describe('mapStateToProps', () => {
  it('properly maps state to props', () => {
    const mockYearsForResults = [1, 5, 10, 15, 20, 25];
    const mockState = {
      calculator: {
        [TITLE_INITIAL_PURCHASE]: {
          notes: {},
          inputs: {
            [INPUT_ID_AMORTIZATION_PERIOD]: mockYearsForResults
          }
        }
      }
    };

    const mockProps = {
      yearsForResults: mockYearsForResults
    };

    resultsUtils.getYearsForResults = jest.fn()
      .mockReturnValue(mockYearsForResults);

    chaiExpect(mapStateToProps(mockState))
      .to.deep.equal(mockProps);

    resultsUtils.getYearsForResults.mockReset();
  });
});