import React from 'react';
import { shallow } from 'enzyme';

import CalculatorInputSection from './CalculatorInputSection';
import CollapsibleEditor from '../CollapsibleEditor';

describe('<CalculatorInputSection />', () => {
  const mockChildren = ['Calculator input section children'];
  const mockTitle = 'Monthly Income';
  const mockSetChangesMade = jest.fn();
  const mockSetNotesContent = jest.fn();
  const mockToggleNotesEditorCollapsed = jest.fn();
  const baseProps = {
    children: mockChildren,
    notesEditorCollapsed: true,
    notesText: '',
    setChangesMade: mockSetChangesMade,
    setNotesContent: mockSetNotesContent,
    title: mockTitle,
    toggleNotesEditorCollapsed: mockToggleNotesEditorCollapsed
  };

  it('has the correct className for styling', () => {
    const wrapper = shallow(<CalculatorInputSection {...baseProps} />);

    expect(wrapper.hasClass('calculatorInputSection')).toBeTruthy();
  });
  it('renders the title in an h2', () => {
    const wrapper = shallow(<CalculatorInputSection {...baseProps} />);
    const headers = wrapper.find('h2');

    expect(headers).toHaveLength(1);
    expect(headers.text()).toBe(mockTitle);
  });
  it('renders the child inputs in a div', () => {
    const wrapper = shallow(<CalculatorInputSection {...baseProps} />);
    const childDiv = wrapper.find('div.inputs');

    expect(childDiv).toHaveLength(1);
    expect(childDiv.text()).toBe(mockChildren.toString());
  });
  it('contains an editor for taking notes', () => {
    const wrapper = shallow(<CalculatorInputSection {...baseProps} />);

    expect(wrapper.find(CollapsibleEditor)).toHaveLength(1);
  });
  it('contains a button to toggle the notes editor visibility', () => {
    const wrapper = shallow(<CalculatorInputSection {...baseProps} />);

    expect(wrapper.find('PlusMinusToggleButton')).toHaveLength(1);
  });
  test('handleExpandCollapseNotesClicked calls toggleNotesEditorCollapsed', () => {
    const wrapper = shallow(<CalculatorInputSection {...baseProps} />);
    wrapper.instance().handleExpandCollapseNotesClicked();

    expect(mockToggleNotesEditorCollapsed).toHaveBeenCalledWith(baseProps.title);

    mockToggleNotesEditorCollapsed.mockClear();
  });
  test('handleNotesEditorTextChange calls setNotesContent', () => {
    const wrapper = shallow(<CalculatorInputSection {...baseProps} />);
    const mockText = 'Notes about stuff';
    wrapper.instance().handleNotesEditorTextChange(mockText);

    expect(mockSetNotesContent).toHaveBeenCalledWith(mockText, mockTitle);

    mockSetNotesContent.mockClear();
  });
  test('handleNotesEditorTextChange calls setChangesMade', () => {
    const wrapper = shallow(<CalculatorInputSection {...baseProps} />);
    const mockText = 'Notes about stuff';
    wrapper.instance().handleNotesEditorTextChange(mockText);

    expect(mockSetChangesMade).toHaveBeenCalledWith(true);

    mockSetChangesMade.mockClear();
  });
  test('getNotesEditorExpandCollapseIcon returns plus when editor collapsed', () => {
    const props = {
      ...baseProps,
      notesEditorCollapsed: true
    };
    const wrapper = shallow(<CalculatorInputSection {...props} />);
    const icon = wrapper.instance().getNotesEditorExpandCollapseIcon();

    expect(icon.type.displayName).toBe('FaPlusSquare');
  });
  test('getNotesEditorExpandCollapseIcon returns minus when editor expanded', () => {
    const props = {
      ...baseProps,
      notesEditorCollapsed: false
    };
    const wrapper = shallow(<CalculatorInputSection {...props} />);
    const icon = wrapper.instance().getNotesEditorExpandCollapseIcon();

    expect(icon.type.displayName).toBe('FaMinusSquare');
  });
});