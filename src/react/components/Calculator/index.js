import { connect } from 'react-redux';

import Calculator from './Calculator';

const mapStateToProps = state => ({
  sidebarVisible: state.sidebarVisible
});

export default connect(mapStateToProps)(Calculator);