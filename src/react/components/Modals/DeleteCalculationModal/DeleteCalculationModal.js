import * as React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const css = require('../modal.css');
import BlueButton from '../../BlueButton';

class DeleteCalculationModal extends React.Component {
  handleDeleteClick = () => {
    const {
      clearAllCalculatorFields,
      currentlySelectedId,
      deleteCalculationWithId,
      hideModal,
      idToDelete,
      setChangesMade,
      setCurrentTitle
    } = this.props;

    if (idToDelete === currentlySelectedId) {
      setChangesMade(false);
      setCurrentTitle(null);
      clearAllCalculatorFields();
    }
    deleteCalculationWithId(idToDelete);
    hideModal();
  }
  handleKeepClick = () => {
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
          Are you sure you want to delete "{this.props.titleToDelete}"?
        </p>
        <div className={css.buttons}>
          <BlueButton onClick={this.handleDeleteClick}>Delete</BlueButton>
          <BlueButton onClick={this.handleKeepClick}>Keep</BlueButton>
        </div>
      </Modal>
    );
  }
}

// DeleteCalculationModal.propTypes = {
//   clearAllCalculatorFields: PropTypes.func.isRequired,
//   currentlySelectedId: PropTypes.string,
//   deleteCalculationWithId: PropTypes.func.isRequired,
//   hideModal: PropTypes.func.isRequired,
//   idToDelete: PropTypes.string.isRequired,
//   setChangesMade: PropTypes.func.isRequired,
//   setCurrentTitle: PropTypes.func.isRequired,
//   titleToDelete: PropTypes.string.isRequired
// };

export default DeleteCalculationModal;