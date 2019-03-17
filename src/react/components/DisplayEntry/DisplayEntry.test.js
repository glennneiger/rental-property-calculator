import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import DisplayEntry from '.';
import { NUMBER_PRECISION_DISPLAY } from '../../../constants';

describe('<DisplayEntry />', () => {
  const mockContent = 40000.2534;
  const mockContentFormatted = mockContent.toFixed(NUMBER_PRECISION_DISPLAY);
  const mockPrefix = '$';
  const mockSuffix = '';
  const mockTitle = 'Cash Flow';

  const baseProps = {
    content: mockContent,
    prefix: mockPrefix,
    suffix: mockSuffix,
    title: mockTitle
  };

  const wrapper = shallow(<DisplayEntry {...baseProps} />);
  it('renders DisplayEntry as expected', () => {
    expect(wrapper.find('p').prop('children')).to.equal(
      `${mockTitle}: ${mockPrefix}${mockContentFormatted}${mockSuffix}`
    );
  });
});