import React from 'react';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';

import CalculatorPage from './CalculatorPage';

describe('<CalculatorPage />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<CalculatorPage />);
  });

  it('has proper className for styling', () => {
    chaiExpect(wrapper).to.have.className('calculatorPage');
  });
});