import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import RegisterPage from './RegisterPage';
import {
  clearAuthErrors,
  registerUser
} from '../../../../actions/auth';

const mapStateToProps = state => ({
  auth: state.auth,
  authErrors: state.authErrors
});

const mapDispatchToProps = dispatch => ({
  clearAuthErrors: () => {
    dispatch(clearAuthErrors());
  },
  registerUser: (userData, history) => {
    dispatch(registerUser(userData, history));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RegisterPage));