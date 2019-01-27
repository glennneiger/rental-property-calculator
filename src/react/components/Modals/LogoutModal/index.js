import { connect } from 'react-redux';

import LogoutModal from './LogoutModal';
import { hideModal } from '../../../../actions/modal';
import { logoutUser } from '../../../../actions/auth';
import {
  clearAllCalculatorFields
} from '../../../../actions/calculatorFields';

const actions = {
  clearAllCalculatorFields,
  hideModal,
  logoutUser
};

export default connect(
  null,
  actions
)(LogoutModal);