import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';

import Calculator from '../Calculator';
import Sidebar from '../Sidebar';
import css from './calculatorPage.css';
import { SIDEBAR_MAX_SCREEN_WIDTH } from '../../../constants';

class CalculatorPage extends Component {
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
        <ToastContainer />
      </div>
    );
  }
}

CalculatorPage.propTypes = {
  screenWidth: PropTypes.number.isRequired,
  sidebarVisible: PropTypes.bool.isRequired
};

export default CalculatorPage;