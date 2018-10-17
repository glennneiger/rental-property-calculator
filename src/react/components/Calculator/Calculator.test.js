import React from 'react';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';
import ShallowRenderer from 'react-test-renderer/shallow';
import { inputSectionData } from './childProps';

import Calculator from './Calculator';

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

  it('renders CalculatorInputSections', () => {
    const wrapper = shallow(<Calculator />);

    chaiExpect(wrapper.find('CalculatorInputSection'))
      .to.have.length(inputSectionData.length);
  });
});