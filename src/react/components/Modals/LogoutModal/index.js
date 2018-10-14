import { connect } from 'react-redux';

import LogoutModal from './LogoutModal';
import { hideModal } from '../../../../actions/modal';
import { logoutUser } from '../../../../actions/auth';

const mapDispatchToProps = dispatch => ({
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