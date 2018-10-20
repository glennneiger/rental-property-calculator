import { expect } from 'chai';

import { mapStateToProps } from '.';

describe('mapStateToProps', () => {
  it('properly maps state to props', () => {
    const mockSidebarVisible = true;
    const mockScreenWidth = 500;
    const mockState = {
      sidebarVisible: mockSidebarVisible,
      ui: {
        screenWidth: mockScreenWidth
      }
    };

    expect(mapStateToProps(mockState)).to.deep.equal({
      screenWidth: mockScreenWidth,
      sidebarVisible: mockSidebarVisible
    });
  });
});