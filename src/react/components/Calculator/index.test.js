import { expect as chaiExpect } from 'chai';

import { mapStateToProps } from '.';

describe('mapStateToProps', () => {
  it('properly maps state to props', () => {
    const mockSidebarVisible = true;

    const mockState = {
      sidebarVisible: mockSidebarVisible
    };

    chaiExpect(mapStateToProps(mockState))
      .to.deep.equal({
        sidebarVisible: mockSidebarVisible
      });
  });
});