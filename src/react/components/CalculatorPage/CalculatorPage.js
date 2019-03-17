import * as React from 'react';
import PropTypes from 'prop-types';

import Calculator from '../Calculator';
import Sidebar from '../Sidebar';
const css = require('./calculatorPage.css');
import { SIDEBAR_MAX_SCREEN_WIDTH } from '../../../constants';

class CalculatorPage extends React.Component {
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
      </div>
    );
  }
}

// CalculatorPage.propTypes = {
//   screenWidth: PropTypes.number.isRequired,
//   sidebarVisible: PropTypes.bool.isRequired
// };

export default CalculatorPage;