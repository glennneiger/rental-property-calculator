import React from 'react';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';

import CalculatorPage from './CalculatorPage';
import Sidebar from '../Sidebar';

describe('<CalculatorPage />', () => {
  const mockWideScreenWidth = 1920;
  const mockNarrowScreenWidth = 500;

  it('has proper className for styling', () => {
    const wrapper = shallow(<CalculatorPage sidebarVisible={true} />);

    chaiExpect(wrapper).to.have.className('calculatorPage');
  });

  it('renders Sidebar when sidebarVisible is true', () => {
    const wrapper = shallow(
      <CalculatorPage screenWidth={mockWideScreenWidth} sidebarVisible={true} />
    );

    chaiExpect(wrapper.find(Sidebar)).to.have.length(1);
  });

  it('renders no Sidebar when sidebarVisible is false', () => {
    const wrapper = shallow(
      <CalculatorPage screenWidth={mockWideScreenWidth} sidebarVisible={false} />
    );

    chaiExpect(wrapper.find(Sidebar)).to.have.length(0);
  });

  it('renders Calculator when screenWidth is more than sidebar max', () => {
    const wrapper = shallow(
      <CalculatorPage screenWidth={mockWideScreenWidth} sidebarVisible={true} />
    );

    chaiExpect(wrapper.find('Calculator')).to.have.length(1);
  });

  it('does not render Calculator when screenWidth is less than' +
    ' sidebar max and sidebar is showing', () => {
    const wrapper = shallow(
      <CalculatorPage screenWidth={mockNarrowScreenWidth} sidebarVisible={true} />
    );

    chaiExpect(wrapper.find('Calculator')).to.have.length(0);
  });
});