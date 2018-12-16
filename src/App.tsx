import * as React from 'react';

import LayoutContainer from './layout/index';
import { StyledDiv } from './Styles'

class App extends React.Component {
  render() {
    return (
      <StyledDiv>
        <LayoutContainer />
      </StyledDiv>
    );
  }
}

export default App;
