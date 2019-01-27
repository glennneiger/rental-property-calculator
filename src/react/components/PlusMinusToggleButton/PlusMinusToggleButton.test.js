import React from 'react';
import { shallow } from 'enzyme';

import PlusMinusToggleButton from './PlusMinusToggleButton';

describe('<PlusMinusToggleButton />', () => {
  it('renders expand button when isCollapsed is true', () => {
    const props = {
      isCollapsed: true,
      handleClick: jest.fn()
    };
    const wrapper = shallow(<PlusMinusToggleButton {...props} />);

    expect(wrapper.find('FaPlusSquare')).toHaveLength(1);
    expect(wrapper.find('FaMinusSquare')).toHaveLength(0);
  });
  it('renders collapse button when isCollapsed is false', () => {
    const props = {
      isCollapsed: false,
      handleClick: jest.fn()
    };
    const wrapper = shallow(<PlusMinusToggleButton {...props} />);

    expect(wrapper.find('FaPlusSquare')).toHaveLength(0);
    expect(wrapper.find('FaMinusSquare')).toHaveLength(1);
  });
  it('handles collapse button clicked', () => {
    const mockHandleClick = jest.fn();
    const props = {
      isCollapsed: false,
      handleClick: mockHandleClick
    };
    const wrapper = shallow(<PlusMinusToggleButton {...props} />);

    wrapper.simulate('click');

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });
  it('handles expand button clicked', () => {
    const mockHandleClick = jest.fn();
    const props = {
      isCollapsed: true,
      handleClick: mockHandleClick
    };
    const wrapper = shallow(<PlusMinusToggleButton {...props} />);

    wrapper.simulate('click');

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });
});