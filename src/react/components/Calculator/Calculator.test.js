import React from 'react';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';
import ShallowRenderer from 'react-test-renderer/shallow';

import * as childProps from './childProps';
import CalculatorInputSection from '../CalculatorInputSection';
import CalculatorInput from '../CalculatorInput';
import Calculator from './Calculator';
import Result from '../Result';

const originalInputSectionData = childProps.inputSectionData;

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

describe('<Calculator />', () => {
  it('has proper className for styling', () => {
    const wrapper = shallow(<Calculator sidebarVisible={false} />);

    chaiExpect(wrapper).to.have.className('calculator');
  });

  it('has proper styling when sidebar is visible', () => {
    const wrapper = shallow(<Calculator sidebarVisible={true} />);

    chaiExpect(wrapper).to.have.className('calculator calculatorWithSidebar');
  });

  it('renders properly with current inputSectionData', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Calculator sidebarVisible={true} />);

    const tree = renderer.getRenderOutput();

    expect(tree).toMatchSnapshot();
  });

  it('renders the correct number of CalculatorInputSections', () => {
    const wrapper = shallow(<Calculator sidebarVisible={true} />);

    chaiExpect(wrapper.find(CalculatorInputSection))
      .to.have.length(childProps.inputSectionData.length);
  });

  it('renders correct number of CalculatorInputs', () => {
    childProps.inputSectionData = [
      {
        title: mockTitle,
        childProps: mockInputProps
      }
    ];

    const wrapper = shallow(<Calculator sidebarVisible={true} />);

    chaiExpect(wrapper.find(CalculatorInput))
      .to.have.length(mockInputProps.length);

    childProps.inputSectionData = originalInputSectionData;
  });

  it('renders Result component', () => {
    const wrapper = shallow(<Calculator sidebarVisible={true} />);

    chaiExpect(wrapper.find(Result)).to.have.length(1);
  });

  it('it renders dividers', () => {
    childProps.inputSectionData = [
      {
        title: mockTitle,
        childProps: mockInputProps
      }
    ];

    const wrapper = shallow(<Calculator sidebarVisible={true} />);

    chaiExpect(wrapper.contains(<div className='divider' />))
      .to.equal(true);

    childProps.inputSectionData = originalInputSectionData;
  });
});