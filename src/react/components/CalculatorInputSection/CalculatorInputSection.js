import * as React from 'react';
import PropTypes from 'prop-types';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';

import * as css from './calculatorInputSection.css';
const css = require('./calculatorInputSection.css');
import { LABEL_NOTES } from '../../../constants/userFacingStrings';
import CollapsibleEditor from '../CollapsibleEditor';
import PlusMinusToggleButton from '../PlusMinusToggleButton';

class CalculatorInputSection extends React.Component {
  constructor(props) {
    super(props);
    this.handleExpandCollapseNotesClicked = this.handleExpandCollapseNotesClicked
      .bind(this);
    this.handleNotesEditorTextChange = this.handleNotesEditorTextChange
      .bind(this);
  }

  handleExpandCollapseNotesClicked() {
    const { title: section, toggleNotesEditorCollapsed } = this.props;
    toggleNotesEditorCollapsed(section);
  }

  handleNotesEditorTextChange(text) {
    const { title: section, setNotesContent, setChangesMade } = this.props;
    setNotesContent(text, section);
    setChangesMade(true);
  }

  getNotesEditorExpandCollapseIcon() {
    return this.props.notesEditorCollapsed
      ? <FaPlusSquare className={css.expandCollapseIcon} key='plus' />
      : <FaMinusSquare className={css.expandCollapseIcon} key='minus' />;
  }

  render() {
    const {
      children,
      notesEditorCollapsed,
      notesText,
      title
    } = this.props;
    return <div className={css.calculatorInputSection}>
      <h2>{title}</h2>
      <div className={css.inputs}>
        {children}
      </div>
      <div className={css.sectionNotes}>
        <div className={css.sectionNotesTitleContainer}>
          <h3 className={css.sectionNotesTitle}>{LABEL_NOTES}</h3>
          <PlusMinusToggleButton isCollapsed={notesEditorCollapsed}
            handleClick={this.handleExpandCollapseNotesClicked}
          />
        </div>
        <CollapsibleEditor isCollapsed={notesEditorCollapsed}
          content={notesText}
          handleChange={this.handleNotesEditorTextChange} />
      </div>
    </div>;
  }
}

// CalculatorInputSection.propTypes = {
//   children: PropTypes.array,
//   notesEditorCollapsed: PropTypes.bool.isRequired,
//   notesText: PropTypes.string.isRequired,
//   setChangesMade: PropTypes.func.isRequired,
//   setNotesContent: PropTypes.func.isRequired,
//   title: PropTypes.string.isRequired,
//   toggleNotesEditorCollapsed: PropTypes.func.isRequired
// };

export default CalculatorInputSection;