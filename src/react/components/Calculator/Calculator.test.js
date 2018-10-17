import React from 'react';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';
import ShallowRenderer from 'react-test-renderer/shallow';
import * as childProps from './childProps';
import CalculatorInput from '../CalculatorInput';

import Calculator from './Calculator';

const originalInputSectionData = childProps.inputSectionData;

describe('<Calculator />', () => {
  it('has proper className for styling', () => {
    const wrapper = shallow(<Calculator />);

    chaiExpect(wrapper).to.have.className('calculator');
  });

  it('renders properly with current inputSectionData', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Calculator />);

    const tree = renderer.getRenderOutput();

    expect(tree).toMatchSnapshot();
  });

  it('renders the correct number of CalculatorInputSections', () => {
    const wrapper = shallow(<Calculator />);

    chaiExpect(wrapper.find('CalculatorInputSection'))
      .to.have.length(childProps.inputSectionData.length);
  });

  it('renders correct number of CalculatorInputs', () => {
    const mockTitle = 'General Info';
    const mockInputProps = [
      {
        inputId: 1,
        inputType: 'text',
        label: 'Neighborhood',
        textInputWidth: 200
      },
      {
        inputId: 2,
        inputType: 'text',
        label: 'Street Address',
        textInputWidth: 210
      }
    ];

    childProps.inputSectionData = [
      {
        title: mockTitle,
        childProps: mockInputProps
      }
    ];

    const wrapper = shallow(<Calculator />);

    chaiExpect(wrapper.find(CalculatorInput))
      .to.have.length(mockInputProps.length);

    childProps.inputSectionData = originalInputSectionData;
  });
});