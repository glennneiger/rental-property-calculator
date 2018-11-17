import { expect as chaiExpect } from 'chai';

import { mapStateToProps } from '.';
import {
  INPUT_ID_CITY,
  INPUT_ID_COUNTRY,
  INPUT_ID_NEIGHBORHOOD,
  INPUT_ID_POSTAL_OR_ZIP_CODE,
  INPUT_ID_PROVINCE_OR_STATE,
  INPUT_ID_SQUARE_FEET,
  INPUT_ID_STREET_ADDRESS,
  INPUT_ID_UNIT_NUMBER,
  TITLE_GENERAL_INFO
} from '../../../constants';

describe('mapStateToProps', () => {
  it('properly maps state to props', () => {
    const mockCalculator = {
      [TITLE_GENERAL_INFO]: {
        [INPUT_ID_NEIGHBORHOOD]: 'Fake Neighborhood',
        [INPUT_ID_STREET_ADDRESS]: '123 Fake Street',
        [INPUT_ID_UNIT_NUMBER]: '456',
        [INPUT_ID_CITY]: 'Fake City',
        [INPUT_ID_PROVINCE_OR_STATE]: 'Fake State',
        [INPUT_ID_COUNTRY]: 'Fake Country',
        [INPUT_ID_POSTAL_OR_ZIP_CODE]: 'Fake ZIP Code',
        [INPUT_ID_SQUARE_FEET]: '500'
      }
    };

    const mockCalculationList = [{
      id: '5be9c3c220ecbe130c079019',
      title: 'fake title'
    }];

    const mockChangesMade = false;
    const mockTitle = '123 Fake St - Fake Neighborhood';

    const mockState = {
      calculator: mockCalculator,
      calculationList: mockCalculationList,
      currentCalculation: {
        changesMade: mockChangesMade,
        title: mockTitle
      }
    };

    chaiExpect(mapStateToProps(mockState))
      .to.deep.equal({
        calculation: mockCalculator,
        calculationList: mockCalculationList,
        changesMade: mockChangesMade,
        currentTitle: mockTitle
      });
  });
});