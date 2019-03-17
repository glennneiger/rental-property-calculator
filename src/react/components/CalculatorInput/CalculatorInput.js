import * as React from 'react';
import * as classNames from 'classnames';
import { FaInfoCircle } from 'react-icons/fa';
import * as OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import * as Tooltip from 'react-bootstrap/lib/Tooltip';

const css = require('./calculatorInput.css');
import TextInput from '../TextInput';
import { INPUT_ID_AMORTIZATION_PERIOD } from '../../../constants';

class CalculatorInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {
      inputId,
      inputType,
      section,
      setChangesMade,
      updateInput
    } = this.props;

    const value = event.target.value;
    if (inputType === 'number' && !value.match(/^\d*\.?\d{0,2}$/)) {
      return;
    }
    if (inputId === INPUT_ID_AMORTIZATION_PERIOD && value.length > 3) {
      return;
    }
    updateInput(value, section, inputId);
    setChangesMade(true);
  }

  render() {
    const {
      content,
      inputDescription,
      inputId,
      label,
      sidebarVisible,
      textInputWidth
    } = this.props;
    return (
      <div className={classNames({
        [css.calculatorInput]: true,
        [css.calculatorInputNoSidebar]: !sidebarVisible,
        [css.calculatorInputWithSidebar]: sidebarVisible
      })}>
        <div className={css.labelInfoContainer}>
          <label htmlFor={inputId}>{label}</label>
          {inputDescription
            ? <OverlayTrigger overlay={
              <Tooltip id={content}>
                {inputDescription}
              </Tooltip>
            }
            placement='top'>
              <FaInfoCircle className={css.inputDescriptionInfoIcon} />
            </OverlayTrigger>
            : null}
        </div>
        <TextInput type={'text'}
          id={inputId}
          style={{ width: textInputWidth }}
          value={content}
          onChange={this.handleChange}
          width={textInputWidth}
        />
      </div>
    );
  }
}

// CalculatorInput.propTypes = {
//   content: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number
//   ]).isRequired,
//   inputDescription: PropTypes.string,
//   inputId: PropTypes.string.isRequired,
//   inputType: PropTypes.string,
//   label: PropTypes.string.isRequired,
//   section: PropTypes.string.isRequired,
//   setChangesMade: PropTypes.func.isRequired,
//   sidebarVisible: PropTypes.bool.isRequired,
//   textInputWidth: PropTypes.number,
//   updateInput: PropTypes.func.isRequired
// };

export default CalculatorInput;