import React from 'react'
import PropTypes from 'prop-types'

const SaveChangesModal = ({
  currentTitle,
  hideModal,
  saveCalculation
}) => (
  <div className='saveChangesModal'>
    <p>
      You have unsaved changes to "{ currentTitle }".
      Would you like to save?
    </p>
    <button onClick={() => {
      saveCalculation()
      hideModal()
    }}>
      Save
    </button>
    <button onClick={() => hideModal()}>
      Don't Save
    </button>
    <button onClick={() => hideModal()}>
      Cancel
    </button>
  </div>
)

SaveChangesModal.propTypes = {
  currentTitle: PropTypes.string,
  hideModal: PropTypes.func.isRequired,
  saveCalculation: PropTypes.func.isRequired
}

export default SaveChangesModal