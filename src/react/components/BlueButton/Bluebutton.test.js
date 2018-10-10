import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import BlueButton from '.'

describe('<BlueButton />', () => {
  let wrapper
  const exampleChild = 'CLICK ME'

  beforeEach(() => {
    wrapper = shallow(<BlueButton children={ exampleChild }/>)
  })

  it('has correct className for styling', () => {
    expect(wrapper).to.have.className('blueButton')
  })

  it('has children props as children of the button', () => {
    expect(wrapper.find('button').prop('children')).to.equal(exampleChild)
  })
})