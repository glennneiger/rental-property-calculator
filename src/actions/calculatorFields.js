import {
  CLEAR_ALL_FIELDS,
  SET_NOTES_CONTENT,
  TOGGLE_NOTES_EDITOR_COLLAPSED,
  UPDATE_INPUT
} from './constants';

export function updateInput(value, section, inputId) {
  return {
    type: UPDATE_INPUT,
    payload: {
      value,
      section,
      inputId
    }
  };
}

export function clearAllCalculatorFields() {
  return {
    type: CLEAR_ALL_FIELDS
  };
}

export function setNotesContent(text, section) {
  return {
    type: SET_NOTES_CONTENT,
    payload: {
      section,
      text
    }
  };
}

export function toggleNotesEditorCollapsed(section) {
  return {
    type: TOGGLE_NOTES_EDITOR_COLLAPSED,
    payload: {
      section
    }
  };
}