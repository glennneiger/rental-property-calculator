import React from 'react';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';

import GuestSidebar from './GuestSidebar';

describe('<GuestSidebar />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<GuestSidebar />);
  });

  test('container has proper className for styling', () => {
    chaiExpect(wrapper).to.have.className('guestSidebar');
  });

  it('renders 2 BlueButtons', () => {
    chaiExpect(wrapper.find('BlueButton')).to.have.length(2);
  });

  it('renders 2 paragraphs', () => {
    chaiExpect(wrapper.find('p')).to.have.length(2);
  });

  it('has the Login button as the first BlueButton', () => {
    chaiExpect(wrapper.find('BlueButton').at(0).prop('children'))
      .to.equal('Login');
  });

  it('has the Register button as the second BlueButton', () => {
    chaiExpect(wrapper.find('BlueButton').at(1).prop('children'))
      .to.equal('Register');
  });

  it('calls correct function when Login BlueButton is clicked', () => {
    const onLoginClickSpy = jest.spyOn(GuestSidebar.prototype, 'onLoginClick')
      .mockImplementation();

    const component = shallow(<GuestSidebar />);

    component.find('BlueButton').at(0).simulate('click');

    expect(onLoginClickSpy).toHaveBeenCalledTimes(1);

    onLoginClickSpy.mockRestore();
  });
});