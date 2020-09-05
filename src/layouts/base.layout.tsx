import React from 'react';

import { FinderThemeProvider } from '../theme';
import { Styled } from './base.styles';

export const BaseLayout: React.FC = ({ children }) => (
  <FinderThemeProvider>
    <Styled.Container>
      <Styled.Content>{children}</Styled.Content>
    </Styled.Container>
  </FinderThemeProvider>
);
