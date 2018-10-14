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
});