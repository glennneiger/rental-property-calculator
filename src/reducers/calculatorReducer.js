import {
  UPDATE_INPUT
} from '../actions/constants'
import {
  inputSectionData
} from '../react/components/Calculator/childProps'

const getInitialState = () => {
  let initialState = {}
  inputSectionData.forEach(inputSection => {
    const section = inputSection.title
    inputSection.childProps.forEach(props => {
      const input = props.inputId
      if (!initialState[section]) {
        initialState[section] = {}
      }
      initialState[section][input] = ''
    })
  })
  return initialState
}

/*
 * Reducer that handles a single calculator section
 */
const calculatorSection = (state, action) => {
  switch (action.type) {
  case UPDATE_INPUT:
    return {
      ...state,
      [action.payload.inputId]: action.payload.value
    }
  default:
    return state
  }
}

const calculatorReducer = (state = getInitialState(), action) => {
  switch (action.type) {
  case UPDATE_INPUT:
    return {
      ...state,
      [action.payload.section]: calculatorSection(
        state[action.payload.section],
        action
      )
    }
  default:
    return state
  }
}

export default calculatorReducer