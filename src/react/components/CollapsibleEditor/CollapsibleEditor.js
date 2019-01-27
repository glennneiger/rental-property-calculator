import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import css from './collapsibleEditor.css';
import { NOTES_EDITOR_TRANSITION_LENGTH } from '../../../constants';

/**
 * Breakpoints for toolbar responsiveness. These were found experimentally,
 * by measuring dimensions in the DOM.
 *
 * 3 breakpoints correspond to 4 size windows. Bigger width -> more toolbar options.
 *
 * * Large:       > toolbarMaxWidths.medium
 * * Medium:      > toolbarMaxWidths.small && <= toolbarMaxWidths.medium
 * * Small:       > toolbarMaxWidths.extraSmall && <= toolbarMaxWidths.small
 * * X Small:     <= toolbarMaxWidths.extraSmall
 *
 */
export const toolbarMaxWidths = {
  medium: 470,
  small: 350,
  extraSmall: 308
};

export const toolbarOptions = {
  textStyle: ['bold', 'italic', 'underline'],
  lists: [{ list: 'ordered' }, { list: 'bullet' }],
  clean: ['clean'],
  link: ['link'],
  headers: [{ header: [1, 2, 3, false] }]
};

const baseToolbar = [
  toolbarOptions.textStyle,
  toolbarOptions.lists
];

export const getToolbar = (width) => {
  if (width > toolbarMaxWidths.medium) {
    return [
      toolbarOptions.headers,
      ...baseToolbar,
      toolbarOptions.clean,
      toolbarOptions.link
    ];
  }
  if (width > toolbarMaxWidths.small) {
    return [
      ...baseToolbar,
      toolbarOptions.clean,
      toolbarOptions.link
    ];
  }
  if (width > toolbarMaxWidths.extraSmall) {
    return [
      ...baseToolbar,
      toolbarOptions.clean
    ];
  }
  return baseToolbar;
};

const CollapsibleEditor = ({
  content,
  handleChange,
  isCollapsed,
  width
}) => {
  return <TransitionGroup> {
    isCollapsed
      ? null
      : <CSSTransition
        key='notesEditor'
        timeout={NOTES_EDITOR_TRANSITION_LENGTH}
        classNames='expandCollapseNotesEditorAnimation'>
        <ReactQuill theme='snow'
          className={css.editor}
          value={content}
          modules={{
            toolbar: getToolbar(width)
          }}
          onChange={handleChange} />
      </CSSTransition>
  }</TransitionGroup>;
};

CollapsibleEditor.propTypes = {
  content: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired
};

export default CollapsibleEditor;