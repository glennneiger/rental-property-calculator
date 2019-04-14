import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';

import Calculator from '../Calculator';
import Sidebar from '../Sidebar';
import css from './calculatorPage.css';
import { SIDEBAR_MAX_SCREEN_WIDTH } from '../../../constants';

class CalculatorPage extends Component {
  componentDidMount() {
    window.addEventListener('beforeunload', this.handleUnload);
  }
  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleUnload);
  }
  handleUnload = e => {
    if (this.props.changesMade) {
      e.preventDefault();
      e.returnValue = null;
    }
  }
  render() {
    return (
      <div className={css.calculatorPage}>
        {this.props.sidebarVisible
          ? <Sidebar />
          : null
        }
        {this.props.screenWidth < SIDEBAR_MAX_SCREEN_WIDTH
          && this.props.sidebarVisible
          ? null
          : <Calculator />
        }
        <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGHT} />
      </div>
    );
  }
}

CalculatorPage.propTypes = {
  changesMade: PropTypes.bool.isRequired,
  screenWidth: PropTypes.number.isRequired,
  sidebarVisible: PropTypes.bool.isRequired
};

export default CalculatorPage;