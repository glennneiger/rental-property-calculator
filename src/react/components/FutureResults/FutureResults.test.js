import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import FutureResults from './FutureResults';

describe('<FutureResults />', () => {
  let wrapper;
  const mockYearsForResults = [1, 5, 10, 15, 20, 25, 26];

  beforeAll(() => {
    wrapper = shallow(
      <FutureResults yearsForResults={mockYearsForResults} />
    );
  });

  test('component has correct className for styling', () => {
    expect(wrapper).to.have.className('futureResults');
  });
});