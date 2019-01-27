import {
  CLEAR_ALL_FIELDS,
  LOAD_CALCULATION,
  SET_NOTES_CONTENT,
  TOGGLE_NOTES_EDITOR_COLLAPSED,
  UPDATE_INPUT
} from '../actions/constants';
import {
  inputSectionData
} from '../react/components/Calculator/childProps';

export function getInitialState() {
  let initialState = {};
  inputSectionData.forEach(inputSection => {
    const section = inputSection.title;
    inputSection.childProps.forEach(props => {
      const input = props.inputId;
      if (!initialState[section]) {
        initialState[section] = {
          notes: {
            text: '',
            editorCollapsed: true
          },
          inputs: {}
        };
      }
      initialState[section].inputs[input] = '';
    });
  });
  return initialState;
}

export function calculatorSectionNotes(state, action) {
  switch (action.type) {
  case TOGGLE_NOTES_EDITOR_COLLAPSED:
    return {
      ...state,
      editorCollapsed: !state.editorCollapsed
    };
  case SET_NOTES_CONTENT:
    return {
      ...state,
      text: action.payload.text
    };
  default:
    return state;
  }
}

/*
 * Reducer that handles a single calculator section
 */
function calculatorSection(state, action) {
  switch (action.type) {
  case SET_NOTES_CONTENT:
  case TOGGLE_NOTES_EDITOR_COLLAPSED:
    return {
      ...state,
      notes: calculatorSectionNotes(state.notes, action)
    };
  case UPDATE_INPUT:
    return {
      ...state,
      inputs: {
        ...state.inputs,
        [action.payload.inputId]: action.payload.value
      }
    };
  default:
    return state;
  }
}

function calculator(state = getInitialState(), action) {
  switch (action.type) {
  case UPDATE_INPUT:
  case SET_NOTES_CONTENT:
  case TOGGLE_NOTES_EDITOR_COLLAPSED:
    return {
      ...state,
      [action.payload.section]: calculatorSection(
        state[action.payload.section],
        action
      )
    };
  case LOAD_CALCULATION:
    return action.payload;
  case CLEAR_ALL_FIELDS:
    return getInitialState();
  default:
    return state;
  }
}

export default calculator;