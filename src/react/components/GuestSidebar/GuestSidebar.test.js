import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import GuestSidebar from './GuestSidebar';

describe('<GuestSidebar />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<GuestSidebar />);
  });

  test('container has proper className for styling', () => {
    expect(wrapper).to.have.className('guestSidebar');
  });

  it('renders 2 BlueButtons', () => {
    expect(wrapper.find('BlueButton')).to.have.length(2);
  });

  it('renders 2 paragraphs', () => {
    expect(wrapper.find('p')).to.have.length(2);
  });

  it('has the Login button as the first BlueButton', () => {
    expect(wrapper.find('BlueButton').at(0).prop('children'))
      .to.equal('Login');
  });

  it('has the Register button as the second BlueButton', () => {
    expect(wrapper.find('BlueButton').at(1).prop('children'))
      .to.equal('Register');
  });
});