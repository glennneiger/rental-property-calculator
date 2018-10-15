import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Calculator from '../Calculator';
import Sidebar from '../Sidebar';
import css from './calculatorPage.css';

class CalculatorPage extends Component {
  render() {
    return (
      <div className={css.calculatorPage}>
        {this.props.sidebarVisible
          ? <Sidebar />
          : null
        }
        {this.props.screenWidth < 600 && this.props.sidebarVisible
          ? null
          : <Calculator />
        }
      </div>
    );
  }
}

CalculatorPage.propTypes = {
  screenWidth: PropTypes.number.isRequired,
  sidebarVisible: PropTypes.bool.isRequired
};

export default CalculatorPage;