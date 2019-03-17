import * as React from 'react';
import { shallow } from 'enzyme';

import CollapsibleEditor, {
  toolbarOptions,
  toolbarMaxWidths,
  getToolbar
} from './CollapsibleEditor';

describe('<CollapsibleEditor />', () => {
  const baseProps = {
    isCollapsed: true,
    handleChange: jest.fn(),
    content: '',
    width: 1200
  };
  it('shows editor when isCollapsed prop is false', () => {
    const props = {
      ...baseProps,
      isCollapsed: false
    };
    const wrapper = shallow(<CollapsibleEditor {...props} />);

    expect(wrapper.find('.editor')).toHaveLength(1);
  });
  it('hides editor when isCollapsed prop is true', () => {
    const props = {
      ...baseProps,
      isCollapsed: true
    };
    const wrapper = shallow(<CollapsibleEditor {...props} />);

    expect(wrapper.find('.editor')).toHaveLength(0);
  });
});

describe('getToolbar', () => {
  it('has correct elements when width > medium', () => {
    const expected = [
      toolbarOptions.headers,
      toolbarOptions.textStyle,
      toolbarOptions.lists,
      toolbarOptions.clean,
      toolbarOptions.link
    ];
    expect(getToolbar(toolbarMaxWidths.medium + 1)).toEqual(expected);
  });
  it('has correct elements when width == medium', () => {
    const expected = [
      toolbarOptions.textStyle,
      toolbarOptions.lists,
      toolbarOptions.clean,
      toolbarOptions.link
    ];
    expect(getToolbar(toolbarMaxWidths.medium)).toEqual(expected);
  });
  it('has correct elements when width > small', () => {
    const expected = [
      toolbarOptions.textStyle,
      toolbarOptions.lists,
      toolbarOptions.clean,
      toolbarOptions.link
    ];
    expect(getToolbar(toolbarMaxWidths.small + 1)).toEqual(expected);
  });
  it('has correct elements when width == small', () => {
    const expected = [
      toolbarOptions.textStyle,
      toolbarOptions.lists,
      toolbarOptions.clean
    ];
    expect(getToolbar(toolbarMaxWidths.small)).toEqual(expected);
  });
  it('has correct elements when width > extraSmall', () => {
    const expected = [
      toolbarOptions.textStyle,
      toolbarOptions.lists,
      toolbarOptions.clean
    ];
    expect(getToolbar(toolbarMaxWidths.extraSmall + 1)).toEqual(expected);
  });
  it('has correct elements when width == extraSmall', () => {
    const expected = [
      toolbarOptions.textStyle,
      toolbarOptions.lists
    ];
    expect(getToolbar(toolbarMaxWidths.extraSmall)).toEqual(expected);
  });
  it('has correct elements when width < extraSmall', () => {
    const expected = [
      toolbarOptions.textStyle,
      toolbarOptions.lists
    ];
    expect(getToolbar(toolbarMaxWidths.extraSmall)).toEqual(expected);
  });
});