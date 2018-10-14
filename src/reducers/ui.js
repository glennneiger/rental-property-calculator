import {
  SCREEN_WIDTH_RESIZE
} from '../actions/constants';

const initialState = {
  screenWidth: typeof window === 'object' ? window.innerWidth : null
};

const ui = (state = initialState, action) => {
  switch (action.type) {
  case SCREEN_WIDTH_RESIZE:
    return Object.assign({}, state, {
      screenWidth: action.screenWidth
    });
  default:
    return state;
  }
};

export default ui;