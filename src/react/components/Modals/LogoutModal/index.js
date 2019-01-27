import { connect } from 'react-redux';

import LogoutModal from './LogoutModal';
import { hideModal } from '../../../../actions/modal';
import { logoutUser } from '../../../../actions/auth';
import {
  clearAllCalculatorFields
} from '../../../../actions/calculatorFields';

const mapDispatchToProps = dispatch => ({
  clearAllCalculatorFields: () => {
    dispatch(clearAllCalculatorFields());
  },
  hideModal: () => {
    dispatch(hideModal());
  },
  logoutUser: () => {
    dispatch(logoutUser());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(LogoutModal);