import React from 'react'
import PropTypes from 'prop-types'

const SaveChangesModal = ({
  currentTitle,
  idToGet,
  calculation,
  getCalculationById,
  hideModal,
  saveCalculation
}) => (
  <div className='saveChangesModal'>
    {currentTitle ?
      <p>
        You have unsaved changes to "{ currentTitle }".
        Would you like to save?
      </p> :
      <p>You have unsaved changes.
        Would you like to save these as a new calculation?
      </p>
    }
    <button onClick={() => {
      let title = currentTitle
      if (!currentTitle) {
        title = prompt('Enter a title for your calculation')
      }
      saveCalculation(title, calculation)
      getCalculationById(idToGet)
      hideModal()
    }}>
      Save
    </button>
    <button onClick={() => {
      getCalculationById(idToGet)
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
  idToGet: PropTypes.string.isRequired,
  saveCalculation: PropTypes.func.isRequired
}

export default SaveChangesModal