import React from 'react'
import PropTypes from 'prop-types'

const SaveChangesModal = ({
  currentTitle,
  id,
  calculation,
  getCalculationById,
  hideModal,
  saveCalculation
}) => (
  <div className='saveChangesModal'>
    <p>
      You have unsaved changes to "{ currentTitle }".
      Would you like to save?
    </p>
    <button onClick={() => {
      let title = currentTitle
      if (!currentTitle) {
        title = prompt('Enter a title for your calculation')
      }
      saveCalculation(title, calculation)
      getCalculationById(id)
      hideModal()
    }}>
      Save
    </button>
    <button onClick={() => {
      getCalculationById(id)
      hideModal()
    }}>
      Don't Save
    </button>
    <button onClick={() => hideModal()}>
      Cancel
    </button>
  </div>
)

SaveChangesModal.propTypes = {
  calculation: PropTypes.object.isRequired,
  currentTitle: PropTypes.string,
  getCalculationById: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  saveCalculation: PropTypes.func.isRequired
}

export default SaveChangesModal