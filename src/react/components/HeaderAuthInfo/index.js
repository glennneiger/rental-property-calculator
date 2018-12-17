import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HeaderAuthInfo from './HeaderAuthInfo';
import { logoutUser } from '../../../actions/auth';
import { showModal } from '../../../actions/modal';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  username: state.auth.user.name
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => {
    dispatch(logoutUser());
  },
  showModal: (modalType, modalProps) => {
    dispatch(showModal(modalType, modalProps));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HeaderAuthInfo));