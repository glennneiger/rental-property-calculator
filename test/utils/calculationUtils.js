import { expect } from 'chai'

const add = (a, b) => {
  return a + b
}

describe('test', () => {
  it('adds two plus 2', () => {
    expect(add(2, 2)).to.equal(4)
  })
})