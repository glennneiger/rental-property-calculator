import * as React from 'react';
import { Route } from 'react-router-dom';
import * as jwtDecode from 'jwt-decode';
import * as Modal from 'react-modal';

import Header from '../Header';
import ModalRoot from '../Modals/ModalRoot';
import CalculatorPage from '../CalculatorPage';
import LoginPage from '../Authentication/LoginPage';
import RegisterPage from '../Authentication/RegisterPage';
import { setAuthToken } from '../../../utils/authUtils';
import store from '../../../store';
const css = require('./app.css');
import {
  logoutUser,
  setCurrentUser
} from '../../../actions/auth';
import {
  MILLISECONDS_PER_SECOND
} from '../../../constants';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decodedToken = jwtDecode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decodedToken));
  const currentTime = Date.now / MILLISECONDS_PER_SECOND;
  if (decodedToken.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}

class App extends React.Component {
  componentDidMount() {
    Modal.setAppElement('#app');
  }
  render() {
    return (
      <div className={css.app} id='app'>
        <ModalRoot />
        <Header />
        <Route exact path='/' component={CalculatorPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/register' component={RegisterPage} />
      </div>
    );
  }
}

export default App;