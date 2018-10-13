import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import CalculatorInputSection from '.'

describe('<CalculatorInputSection />', () => {
  const mockChildren = 'Calculator input section children'
  const mockTitle = 'Monthly Income'
  const baseProps = {
    children: mockChildren,
    title: mockTitle
  }

  const wrapper = shallow(<CalculatorInputSection { ...baseProps } />)

  it('renders one h2 containing the title prop', () => {
    expect(wrapper.find('h2')).to.have.length(1)
    expect(wrapper.find('h2').prop('children')).to.equal(mockTitle)
  })
})