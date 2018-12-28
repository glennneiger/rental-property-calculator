import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import YearResult from './YearResult';

describe('<YearResult />', () => {
  let wrapper;
  const mockYear = 2;
  const mockDisplayEntries = [
    {
      title: 'Return on Equity',
      content: 10,
      prefix: '',
      suffix: '%'
    },
    {
      title: 'Return on Investment',
      content: 22,
      prefix: '',
      suffix: '%'
    }
  ];

  it('has proper className for styling', () => {
    wrapper = shallow(<YearResult displayEntries={[]} year={mockYear} />);

    expect(wrapper).to.have.className('yearResult');
  });
  it('renders proper title including year', () => {
    wrapper = shallow(<YearResult displayEntries={[]} year={mockYear} />);

    expect(wrapper.find('h3').first().text()).to.equal(`Year ${mockYear}`);
  });
  it('renders no display entries if given an empty array', () => {
    wrapper = shallow(
      <YearResult displayEntries={[]} year={mockYear} />
    );

    expect(wrapper.find('DisplayEntry')).to.have.length(0);
  });
  it('properly renders display entries', () => {
    wrapper = shallow(
      <YearResult displayEntries={mockDisplayEntries} year={mockYear}/>
    );

    expect(wrapper.find('DisplayEntry')).to.have.length(2);
  });
});