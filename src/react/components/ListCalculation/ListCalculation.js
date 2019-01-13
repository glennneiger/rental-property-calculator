import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import classNames from 'classnames';

import {
  MODAL_CONFIRM_DELETE_CALCULATION,
  MODAL_SAVE_CHANGES
} from '../../../constants';
import css from './listCalculation.css';

class ListCalculation extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    if (this.props.changesMade) {
      this.props.showModal(MODAL_SAVE_CHANGES, {
        currentTitle: this.props.currentTitle,
        idToGet: this.props.id,
        calculationToSave: this.props.calculation
      });
    } else {
      this.props.getCalculationById(this.props.id);
    }
  }
  handleTrashIconClick = event => {
    event.stopPropagation();
    this.props.showModal(MODAL_CONFIRM_DELETE_CALCULATION, {
      titleToDelete: this.props.title,
      idToDelete: this.props.id
    });
  }
  render() {
    const { currentTitle, title } = this.props;
    const selected = (currentTitle === title) ? true : false;
    return (
      <li
        onClick={this.handleClick}
        className={classNames({
          [css.listCalculation]: true,
          [css.isSelected]: selected
        })}>
        <span>{this.props.title}</span>
        <FaTrash
          className={css.trashIcon}
          onClick={this.handleTrashIconClick}
        />
      </li>
    );
  }
}

ListCalculation.propTypes = {
  calculation: PropTypes.object,
  changesMade: PropTypes.bool.isRequired,
  currentTitle: PropTypes.string,
  getCalculationById: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default ListCalculation;