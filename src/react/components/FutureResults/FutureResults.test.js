import React from 'react';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';
import ShallowRenderer from 'react-test-renderer/shallow';

import FutureResults from './FutureResults';

describe('<FutureResults />', () => {
  const mockSingleYearForResult = [1];
  const mockYearsForResults = [1, 5, 10, 15, 20, 25, 26];
  const mockYearsForResultsLength = mockYearsForResults.length;

  it('renders correctly with more than 1 year for result', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <FutureResults yearsForResults={mockYearsForResults} />
    );

    const tree = renderer.getRenderOutput();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a single year for result', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <FutureResults yearsForResults={mockSingleYearForResult} />
    );

    const tree = renderer.getRenderOutput();

    expect(tree).toMatchSnapshot();
  });

  it('has correct className for styling', () => {
    const wrapper = shallow(
      <FutureResults yearsForResults={mockYearsForResults} />
    );

    chaiExpect(wrapper).to.have.className('futureResults');
  });

  it('renders a year result for each member of yearsForResults', () => {
    const wrapper = shallow(
      <FutureResults yearsForResults={mockYearsForResults} />
    );

    chaiExpect(wrapper.find('p')).to.have.length(0);
    chaiExpect(wrapper.children())
      .to.have.length(mockYearsForResultsLength);
  });

  it('renders a single child paragraph if only given 1 year for result', () => {
    const wrapper = shallow(
      <FutureResults yearsForResults={mockSingleYearForResult} />
    );

    chaiExpect(wrapper.find('p')).to.have.length(1);
    chaiExpect(wrapper.children()).to.have.length(1);
  });

  it('has proper className for styling on single child paragraph', () => {
    const wrapper = shallow(
      <FutureResults yearsForResults={mockSingleYearForResult} />
    );

    chaiExpect(wrapper.find('p').at(0)).to.have.className('enterAmortization');
  });
});