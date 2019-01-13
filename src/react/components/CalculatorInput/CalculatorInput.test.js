import React from 'react';
import { shallow } from 'enzyme';
import { expect as chaiExpect } from 'chai';

import CalculatorInput from './CalculatorInput';
import { INPUT_ID_AMORTIZATION_PERIOD } from '../../../constants';

const mockLabel = 'Purchase Price';
const mockContent = 100000;
const mockInputId = '1';
const mockInputDescription = 'How much it cost';

const baseProps = {
  content: mockContent,
  inputId: mockInputId,
  inputType: 'number',
  label: mockLabel,
  section: 'Initial Purchase',
  setChangesMade: jest.fn(),
  sidebarVisible: true,
  textInputWidth: 200,
  updateInput: jest.fn()
};

describe('<CalculatorInput />', () => {
  it('has proper className for styling with sidebar visible', () => {
    const wrapper = shallow(<CalculatorInput {...baseProps} />);

    chaiExpect(wrapper)
      .to.have.className('calculatorInput calculatorInputWithSidebar');
  });

  it('has proper className for styling with sidebar not visible', () => {
    const mockProps = { ...baseProps, sidebarVisible: false };
    const wrapper = shallow(<CalculatorInput {...mockProps} />);

    chaiExpect(wrapper)
      .to.have.className('calculatorInput calculatorInputNoSidebar');
  });

  it('renders a label for the given input', () => {
    const wrapper = shallow(<CalculatorInput {...baseProps} />);

    chaiExpect(wrapper.find('label')).to.have.length(1);
    chaiExpect(wrapper.find('label').at(0).prop('htmlFor'))
      .to.equal(mockInputId);
  });

  it('has the correct text in the label', () => {
    const wrapper = shallow(<CalculatorInput {...baseProps} />);

    chaiExpect(wrapper.find('label').at(0).text()).to.equal(mockLabel);
  });

  it('renders a TextInput', () => {
    const wrapper = shallow(<CalculatorInput {...baseProps} />);

    chaiExpect(wrapper.find('TextInput')).to.have.length(1);
  });

  it('has an input description when one is provided through props', () => {
    const props = {
      ...baseProps,
      inputDescription: mockInputDescription
    };
    const wrapper = shallow(<CalculatorInput {...props} />);
    const mouseHoverDetectionRegion = wrapper.find('OverlayTrigger');
    const infoIcon = mouseHoverDetectionRegion.find('FaInfoCircle');
    const inputDescriptionTooltip = mouseHoverDetectionRegion.prop('overlay');

    chaiExpect(mouseHoverDetectionRegion).to.have.length(1);
    chaiExpect(infoIcon).to.have.length(1);
    chaiExpect(inputDescriptionTooltip.type.name).to.equal('Tooltip');
    chaiExpect(inputDescriptionTooltip.props.children)
      .to.equal(mockInputDescription);
  });

  it('does not render an info icon when no input description provided', () => {
    const wrapper = shallow(<CalculatorInput {...baseProps} />);

    chaiExpect(wrapper.find('FontAwesomeIcon')).to.have.length(0);
  });
});

describe('handleChange', () => {
  it('executes to the end given proper parameters', () => {
    const mockSetChangesMade = jest.fn();
    const mockUpdateInput = jest.fn();

    const mockProps = {
      ...baseProps,
      setChangesMade: mockSetChangesMade,
      updateInput: mockUpdateInput
    };

    const wrapper = shallow(<CalculatorInput {...mockProps} />);
    const mockEvent = {
      target: {
        value: '1'
      }
    };
    wrapper.instance().handleChange(mockEvent);

    expect(mockSetChangesMade).toHaveBeenCalledTimes(1);
    expect(mockUpdateInput).toHaveBeenCalledTimes(1);
  });

  it('returns early given a non number for a number input', () => {
    const mockSetChangesMade = jest.fn();
    const mockUpdateInput = jest.fn();

    const mockProps = {
      ...baseProps,
      setChangesMade: mockSetChangesMade,
      updateInput: mockUpdateInput
    };

    const wrapper = shallow(<CalculatorInput {...mockProps} />);
    const mockEvent = {
      target: {
        value: 'b'
      }
    };
    wrapper.instance().handleChange(mockEvent);

    expect(mockSetChangesMade).toHaveBeenCalledTimes(0);
    expect(mockUpdateInput).toHaveBeenCalledTimes(0);
  });

  it('returns early if value is too long for amortization input', () => {
    const mockSetChangesMade = jest.fn();
    const mockUpdateInput = jest.fn();

    const mockProps = {
      ...baseProps,
      inputId: INPUT_ID_AMORTIZATION_PERIOD,
      setChangesMade: mockSetChangesMade,
      updateInput: mockUpdateInput
    };

    const wrapper = shallow(<CalculatorInput {...mockProps} />);
    const mockEvent = {
      target: {
        value: '1234'
      }
    };
    wrapper.instance().handleChange(mockEvent);

    expect(mockSetChangesMade).toHaveBeenCalledTimes(0);
    expect(mockUpdateInput).toHaveBeenCalledTimes(0);
  });
});