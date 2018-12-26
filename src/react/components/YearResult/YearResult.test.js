import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import YearResult from './YearResult';

describe('<YearResult />', () => {
  let wrapper;

  it('has proper className for styling', () => {
    wrapper = shallow(<YearResult result={{}} year={0} />);

    expect(wrapper).to.have.className('yearResult');
  });
});