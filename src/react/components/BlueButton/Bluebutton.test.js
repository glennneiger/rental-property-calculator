import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import BlueButton from '.';

describe('<BlueButton />', () => {
  let wrapper;
  const exampleChild = 'CLICK ME';
  const exampleButtonName = 'my button';

  beforeEach(() => {
    wrapper = shallow(
      <BlueButton name={ exampleButtonName } children={ exampleChild }/>
    );
  });

  it('has children props as children of the button', () => {
    expect(wrapper.find('button').prop('children')).to.equal(exampleChild);
  });

  it('correctly passes native props to html button', () => {
    expect(wrapper.find('button').prop('name')).to.equal(exampleButtonName);
  });
});