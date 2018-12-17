import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import {
  hideSidebar,
  showSidebar
} from '../../../actions/sidebarVisible';


const mapStateToProps = state => ({
  screenWidth: state.ui.screenWidth,
  sidebarVisible: state.sidebarVisible
});

const mapDispatchToProps = dispatch => ({
  hideSidebar: () => {
    dispatch(hideSidebar());
  },
  showSidebar: () => {
    dispatch(showSidebar());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));