import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import css from '../modal.css';
import BlueButton from '../../BlueButton';

class LogoutModal extends Component {
  handleLogoutClick = () => {
    this.props.clearAllCalculatorFields();
    this.props.logoutUser();
    this.props.hideModal();
  }
  handleCancelClick = () => {
    this.props.hideModal();
  }
  render() {
    return (
      <Modal
        isOpen={true}
        className={css.modal}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={this.props.hideModal}
      >
        <p>
          Are you sure you want to log out?
        </p>
        <div className={css.buttons}>
          <BlueButton onClick={this.handleLogoutClick}>Logout</BlueButton>
          <BlueButton onClick={this.handleCancelClick}>Cancel</BlueButton>
        </div>
      </Modal>
    );
  }
}

LogoutModal.propTypes = {
  clearAllCalculatorFields: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired
};

export default LogoutModal;