import React from 'react';
import { expect as chaiExpect } from 'chai';
import { shallow } from 'enzyme';

import App from './App';
import ModalRoot from '../Modals/ModalRoot/ModalRoot';

jest.mock('react-modal');

describe('<App />', () => {
  let componentDidMountMock;

  beforeAll(() => {
    componentDidMountMock = jest.spyOn(
      App.prototype,
      'componentDidMount'
    ).mockImplementation();
  });

  afterAll(() => {
    componentDidMountMock.mockRestore();
  });

  it('has proper className for styling', () => {
    const wrapper = shallow(<App />);

    chaiExpect(wrapper).to.have.className('app');
  });

  it('has proper id', () => {
    const wrapper = shallow(<App />);

    chaiExpect(wrapper).to.have.id('app');
  });

  it('should have three routes', () => {
    const wrapper = shallow(<App />);

    chaiExpect(wrapper.find('Route')).to.have.length(3);
  });
});