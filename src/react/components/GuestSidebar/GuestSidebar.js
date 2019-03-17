import * as React from 'react';
import PropTypes from 'prop-types';

const css = require('./guestSidebar.css');
import BlueButton from '../BlueButton';

class GuestSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
  }

  handleLoginClick() {
    this.props.history.push('/login');
  }

  handleRegisterClick() {
    this.props.history.push('/register');
  }

  render() {
    return (
      <div className={css.guestSidebar}>
        <BlueButton onClick={this.handleLoginClick}>Login</BlueButton>
        <p>or</p>
        <BlueButton onClick={this.handleRegisterClick}>Register</BlueButton>
        <p>to save your analysis</p>
      </div>
    );
  }
}

// GuestSidebar.propTypes = {
//   history: PropTypes.object
// };

export default GuestSidebar;