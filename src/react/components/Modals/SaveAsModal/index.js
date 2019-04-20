import { connect } from 'react-redux';

import {
  getCalculationById,
  saveCalculation
} from '../../../../actions/calculationList';
import { hideModal } from '../../../../actions/modal';
import SaveAsModal from './SaveAsModal';
import {
  clearAllCalculatorFields
} from '../../../../actions/calculatorFields';
import {
  clearSaveCalculationErrors
} from '../../../../actions/currentCalculation';

const mapDispatchToProps = dispatch => ({
  clearAllCalculatorFields: () => {
    dispatch(clearAllCalculatorFields());
  },
  clearSaveCalculationErrors: () => {
    dispatch(clearSaveCalculationErrors());
  },
  getCalculationById: idToGet => {
    dispatch(getCalculationById(idToGet));
  },
  hideModal: () => {
    dispatch(hideModal());
  },
  saveCalculation: (
    title,
    calculationToSave,
    changesMade, setTitle,
    newCurrentTitle
  ) => {
    dispatch(saveCalculation(
      title,
      calculationToSave,
      changesMade,
      setTitle,
      newCurrentTitle
    ));
  }
});

const mapStateToProps = state => ({
  errors: state.currentCalculation.saveCalculationErrors
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveAsModal);