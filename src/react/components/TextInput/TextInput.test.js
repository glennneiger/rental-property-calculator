import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import TextInput from '.';

describe('<TextInput />', () => {
  let wrapper;

  it('has proper styling when width is specified', () => {
    const mockWidth = 40;
    const mockProps = {
      width: mockWidth
    };
    wrapper = shallow(
      <TextInput { ...mockProps }/>
    );

    expect(wrapper.find('input').prop('style')).to.deep.equal({ width: mockWidth });
  });
  it('has proper styling when width is not specified', () => {
    wrapper = shallow(
      <TextInput />
    );

    expect(wrapper.find('input').prop('style')).to.deep.equal({ width: null });
  });
  it('properly passes native props to input', () => {
    const mockHeight = 50;
    const mockProps = {
      height: mockHeight
    };
    wrapper = shallow(<TextInput { ...mockProps }/>);

    expect(wrapper.find('input').prop('height')).to.equal(mockHeight);
  });
});