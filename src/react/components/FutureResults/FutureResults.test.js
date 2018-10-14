import React from 'react';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';
import ShallowRenderer from 'react-test-renderer/shallow';

import FutureResults from './FutureResults';

describe('<FutureResults />', () => {
  let wrapper;
  const mockYearsForResults = [1, 5, 10, 15, 20, 25, 26];

  beforeAll(() => {
    wrapper = shallow(
      <FutureResults yearsForResults={mockYearsForResults} />
    );
  });

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <FutureResults yearsForResults={mockYearsForResults} />
    );

    const tree = renderer.getRenderOutput();

    expect(tree).toMatchSnapshot();
  });

  test('component has correct className for styling', () => {
    chaiExpect(wrapper).to.have.className('futureResults');
  });
});