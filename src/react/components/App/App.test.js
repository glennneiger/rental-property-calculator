import * as React from 'react';
import { expect as chaiExpect } from 'chai';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from './App';
import Header from '../Header';

describe('<App />', () => {
  let componentDidMountMock;

  beforeAll(() => {
    componentDidMountMock = jest.spyOn(
      App.prototype,
      'componentDidMount'
    ).mockImplementation();
  });

  afterAll(() => {
    componentDidMountMock.mockRestore();
  });

  it('has proper className for styling', () => {
    const wrapper = shallow(<App />);

    chaiExpect(wrapper).to.have.className('app');
  });

  it('has proper id', () => {
    const wrapper = shallow(<App />);

    chaiExpect(wrapper).to.have.id('app');
  });

  it('should have three routes', () => {
    const wrapper = shallow(<App />);

    chaiExpect(wrapper.find('Route')).to.have.length(3);
  });

  it('renders a header component', () => {
    const wrapper = shallow(<App />);

    chaiExpect(wrapper.find(Header)).to.have.length(1);
  });

  it('renders properly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);

    const tree = renderer.getRenderOutput();

    expect(tree).toMatchSnapshot();
  });
});