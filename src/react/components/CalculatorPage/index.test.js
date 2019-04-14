import { expect as chaiExpect } from 'chai';

import { mapStateToProps } from '.';

describe('mapStateToProps', () => {
  it('properly maps state to props', () => {
    const mockSidebarVisible = true;
    const mockScreenWidth = 500;
    const mockState = {
      currentCalculation: {
        changesMade: false
      },
      sidebarVisible: mockSidebarVisible,
      ui: {
        screenWidth: mockScreenWidth
      }
    };

    chaiExpect(mapStateToProps(mockState))
      .to.deep.equal({
        changesMade: false,
        screenWidth: mockScreenWidth,
        sidebarVisible: mockSidebarVisible
      });
  });
});