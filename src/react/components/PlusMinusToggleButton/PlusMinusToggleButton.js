import React from 'react';
import PropTypes from 'prop-types';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import css from './plusMinusToggleButton.css';
import { NOTES_EDITOR_TRANSITION_LENGTH } from '../../../constants';

const PlusMinusToggleButton = ({ handleClick, isCollapsed }) => (
  <TransitionGroup onClick={handleClick}> {
    isCollapsed
      ? <CSSTransition key='plus'
        timeout={NOTES_EDITOR_TRANSITION_LENGTH}
        classNames='expandNotesEditorButtonAnimation'>
        <FaPlusSquare className={css.expandCollapseIcon} />
      </CSSTransition >
      : <CSSTransition key='minus'
        timeout={NOTES_EDITOR_TRANSITION_LENGTH}
        classNames='collapseNotesEditorButtonAnimation'>
        <FaMinusSquare className={css.expandCollapseIcon} />
      </CSSTransition>
  }</TransitionGroup>
);

PlusMinusToggleButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool.isRequired
};

export default PlusMinusToggleButton;