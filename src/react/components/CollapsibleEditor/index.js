import { connect } from 'react-redux';

import CollapsibleEditor from './CollapsibleEditor';

export const mapStateToProps = state => ({
  width: state.ui.screenWidth
});

export default connect(mapStateToProps)(CollapsibleEditor);