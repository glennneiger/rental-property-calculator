import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import CalculatorInputSection from '.'

describe('<CalculatorInputSection />', () => {
  let wrapper
  const mockChildren = 'Calculator input section children'
  const mockTitle = 'Monthly Income'
  const baseProps = {
    children: mockChildren,
    title: mockTitle
  }

  beforeAll(() => {
    wrapper = shallow(<CalculatorInputSection { ...baseProps } />)
  })

  it('renders one h2 containing the title prop', () => {
    const headers = wrapper.find('h2')

    expect(headers).to.have.length(1)
    expect(headers).to.have.text(mockTitle)
  })
  it('renders one div containing the children prop', () => {
    const childDiv = wrapper.children().find('div')

    expect(childDiv).to.have.length(1)
    expect(childDiv).to.have.text(mockChildren)
  })
  test('container div has correct className for styling', () => {
    expect(wrapper).to.have.className('calculatorInputSection')
  })
  test('inputs div has correct className for styling', () => {
    expect(wrapper.children().find('div')).to.have.className('inputs')
  })
})