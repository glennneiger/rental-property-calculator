import { connect } from 'react-redux';

import LoginPage from './LoginPage';
import {
  clearAuthErrors,
  loginUser
} from '../../../../actions/auth';

const mapStateToProps = state => ({
  auth: state.auth,
  authErrors: state.authErrors
});

const mapDispatchToProps = dispatch => ({
  clearAuthErrors: () => {
    dispatch(clearAuthErrors());
  },
  loginUser: userData => {
    dispatch(loginUser(userData));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);