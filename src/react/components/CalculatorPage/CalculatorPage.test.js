import React from 'react';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';

import CalculatorPage from './CalculatorPage';
import Sidebar from '../Sidebar';

describe('<CalculatorPage />', () => {
  it('has proper className for styling', () => {
    const wrapper = shallow(<CalculatorPage sidebarVisible={true} />);

    chaiExpect(wrapper).to.have.className('calculatorPage');
  });

  it('renders Sidebar when sidebarVisible is true', () => {
    const wrapper = shallow(
      <CalculatorPage screenWidth={700} sidebarVisible={true} />
    );

    chaiExpect(wrapper.find(Sidebar)).to.have.length(1);
  });
});