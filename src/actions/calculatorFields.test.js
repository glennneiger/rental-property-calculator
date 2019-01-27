import * as actions from './calculatorFields';
import * as actionTypes from './constants';

describe('calculatorFields actions', () => {
  const mockSectionInputValue = 10000000;
  const mockSectionName = 'Initial Purchase';
  const mockSectionInputId = 'purchasePriceInput';
  const mockSectionNotesContent = 'Way too expensive! :O';

  it('should create an action to update an input\'s value', () => {
    const expectedAction = {
      type: actionTypes.UPDATE_INPUT,
      payload: {
        value: mockSectionInputValue,
        section: mockSectionName,
        inputId: mockSectionInputId
      }
    };
    expect(actions.updateInput(
      mockSectionInputValue,
      mockSectionName,
      mockSectionInputId
    )).toEqual(expectedAction);
  });
  it('should create an action to clear all calculator fields', () => {
    const expectedAction = {
      type: actionTypes.CLEAR_ALL_FIELDS
    };
    expect(actions.clearAllCalculatorFields()).toEqual(expectedAction);
  });
  it('should create an action to set the section notes content', () => {
    const expectedAction = {
      type: actionTypes.SET_NOTES_CONTENT,
      payload: {
        section: mockSectionName,
        text: mockSectionNotesContent
      }
    };
    expect(actions.setNotesContent(
      mockSectionNotesContent,
      mockSectionName
    )).toEqual(expectedAction);
  });
  it('should create an action to toggle section notes editor collapsed', () => {
    const expectedAction = {
      type: actionTypes.TOGGLE_NOTES_EDITOR_COLLAPSED,
      payload: {
        section: mockSectionName
      }
    };
    expect(actions.toggleNotesEditorCollapsed(
      mockSectionName
    )).toEqual(expectedAction);
  });
});