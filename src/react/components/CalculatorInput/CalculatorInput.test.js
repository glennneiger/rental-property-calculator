import React from 'react';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';

import CalculatorInput from './CalculatorInput';

describe('<CalculatorInput />', () => {
  const mockLabel = 'Purchase Price';
  const mockContent = 100000;
  const mockInputId = '1';
  const baseProps = {
    content: mockContent,
    inputId: mockInputId,
    inputType: 'number',
    label: mockLabel,
    section: 'Initial Purchase',
    setChangesMade: jest.fn(),
    sidebarVisible: true,
    textInputWidth: 200,
    updateInput: jest.fn()
  };

  it('has proper className for styling with sidebar visible', () => {
    const wrapper = shallow(<CalculatorInput { ...baseProps } />);

    chaiExpect(wrapper)
      .to.have.className('calculatorInput calculatorInputWithSidebar');
  });

  it('has proper className for styling with sidebar not visible', () => {
    const mockProps = { ...baseProps, sidebarVisible: false };
    const wrapper = shallow(<CalculatorInput { ...mockProps } />);

    chaiExpect(wrapper)
      .to.have.className('calculatorInput calculatorInputNoSidebar');
  });

  it('renders a label for the given input', () => {
    const wrapper = shallow(<CalculatorInput { ...baseProps } />);

    chaiExpect(wrapper.find('label')).to.have.length(1);
    chaiExpect(wrapper.find('label').at(0).prop('htmlFor'))
      .to.equal(mockInputId);
  });

  it('has the correct text in the label', () => {
    const wrapper = shallow(<CalculatorInput { ...baseProps } />);

    chaiExpect(wrapper.find('label').at(0).text()).to.equal(mockLabel);
  });

  it('renders a TextInput', () => {
    const wrapper = shallow(<CalculatorInput { ...baseProps } />);

    chaiExpect(wrapper.find('TextInput')).to.have.length(1);
  });
});