import React from 'react';

import SectionContainer from './styles';

// eslint-disable-next-line react/prop-types
function GridSection({ children }) {
  return (
    <SectionContainer>
      {children}
    </SectionContainer>
  );
}

export default GridSection;
