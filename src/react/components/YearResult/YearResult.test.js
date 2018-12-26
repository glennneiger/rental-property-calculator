import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import YearResult from './YearResult';

describe('<YearResult />', () => {
  let wrapper;
  const mockYear = 2;

  it('has proper className for styling', () => {
    wrapper = shallow(<YearResult result={{}} year={mockYear} />);

    expect(wrapper).to.have.className('yearResult');
  });
  it('renders proper title including year', () => {
    wrapper = shallow(<YearResult result={{}} year={mockYear} />);

    expect(wrapper.find('h3').first().text()).to.equal(`Year ${mockYear}`);
  });
});
// TODO: DisplayEntry content prop is undefined
// Committed all changes, figure this out next.
// Then write more tests