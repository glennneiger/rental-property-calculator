import reducer, {
  getInitialState,
  calculatorSectionNotes as sectionNotesReducer
} from './calculator';
import * as actionTypes from '../actions/constants';

describe('calculator reducer and sub-reducers', () => {
  const mockSectionName = 'Initial Purchase';
  const mockSectionNotesContent = 'Way too expensive! :O';

  describe('calculator reducer', () => {
    it('should return the initial state', () => {
      const initialState = getInitialState();
      expect(reducer(undefined, {})).toEqual(initialState);
    });
  });
  describe('calculatorSectionNotes reducer', () => {
    it('should handle TOGGLE_NOTES_EDITOR_COLLAPSED', () => {
      const stateBefore = Object.freeze({
        text: '',
        editorCollapsed: true
      });
      const stateAfterToggle1 = sectionNotesReducer(stateBefore, {
        type: actionTypes.TOGGLE_NOTES_EDITOR_COLLAPSED,
        payload: {
          section: mockSectionName
        }
      });
      const stateAfterToggle2 = sectionNotesReducer(stateAfterToggle1, {
        type: actionTypes.TOGGLE_NOTES_EDITOR_COLLAPSED,
        payload: {
          section: mockSectionName
        }
      });

      expect(stateAfterToggle1).toEqual({
        ...stateBefore,
        editorCollapsed: false
      });
      expect(stateAfterToggle2).toEqual({
        ...stateBefore,
        editorCollapsed: true
      });
    });
    it('should handle SET_NOTES_CONTENT', () => {
      const stateBefore = Object.freeze({
        text: '',
        editorCollapsed: false
      });
      const stateAfter = sectionNotesReducer(stateBefore, {
        type: actionTypes.SET_NOTES_CONTENT,
        payload: {
          text: mockSectionNotesContent
        }
      });

      expect(stateAfter).toEqual({
        ...stateBefore,
        text: mockSectionNotesContent
      });
    });
  });
});