import { expect } from 'chai';
import { shallow } from 'enzyme';

import { mapStateToProps } from '.';

describe('mapStateToProps', () => {
  it('properly maps state to props', () => {
    const mockContent = 'a neighborhood';
    const mockSidebarVisible = true;

    const mockSection = 'General Info';
    const mockInputId = 'neighborhoodInput';

    const mockState = {
      calculator: {
        [mockSection]: {
          [mockInputId]: mockContent
        }
      },
      sidebarVisible: mockSidebarVisible
    };

    const mockOwnProps = {
      inputId: mockInputId,
      section: mockSection
    };

    expect(mapStateToProps(mockState, mockOwnProps)).to.deep.equal({
      content: mockContent,
      sidebarVisible: mockSidebarVisible
    });
  });
});