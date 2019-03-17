import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaBars, FaWindowClose } from 'react-icons/fa';

const css = require('./header.css');
import HeaderAuthInfo from '../HeaderAuthInfo';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPath: this.props.location.pathname
    };
  }
  componentWillMount = () => {
    this.unlisten = this.props.history.listen(location => {
      this.setState({
        currentPath: location.pathname
      });
    });
  }
  componentWillUnmount = () => {
    this.unlisten();
  }
  getToggleSidebarIcon = () => {
    if (this.state.currentPath === '/') {
      return (this.props.sidebarVisible
        ? <FaWindowClose
          className={css.sidebarToggler}
          onClick={this.handleToggleSidebarClick}
        />
        : <FaBars
          className={css.sidebarToggler}
          onClick={this.handleToggleSidebarClick}
        />);
    }
    return null;
  }
  handleToggleSidebarClick = () => {
    this.props.sidebarVisible
      ? this.props.hideSidebar()
      : this.props.showSidebar();
  }
  render() {
    const title = (this.props.screenWidth > 420)
      ? 'Rental Property Calculator'
      : 'Calculator';

    return (
      <header className={css.header}>
        {this.getToggleSidebarIcon()}
        <Link to='/'>
          <span className={css.title}>
            {title}
          </span>
        </Link>
        <HeaderAuthInfo />
      </header>
    );
  }
}

// Header.propTypes = {
//   hideSidebar: PropTypes.func.isRequired,
//   history: PropTypes.object,
//   location: PropTypes.object.isRequired,
//   screenWidth: PropTypes.number.isRequired,
//   showSidebar: PropTypes.func.isRequired,
//   sidebarVisible: PropTypes.bool.isRequired
// };

export default Header;