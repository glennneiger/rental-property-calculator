import React from 'react';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';
import renderer from 'react-test-renderer';

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
    const handleLoginClickSpy = jest.spyOn(
      GuestSidebar.prototype,
      'handleLoginClick'
    ).mockImplementation();

    const component = shallow(<GuestSidebar />);

    component.find('BlueButton').at(0).simulate('click');

    expect(handleLoginClickSpy).toHaveBeenCalledTimes(1);

    handleLoginClickSpy.mockRestore();
  });

  it('calls correct function when Register BlueButton is clicked', () => {
    const handleRegisterClickSpy = jest.spyOn(
      GuestSidebar.prototype,
      'handleRegisterClick'
    ).mockImplementation();

    const component = shallow(<GuestSidebar />);

    component.find('BlueButton').at(1).simulate('click');

    expect(handleRegisterClickSpy).toHaveBeenCalledTimes(1);

    handleRegisterClickSpy.mockRestore();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<GuestSidebar />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});