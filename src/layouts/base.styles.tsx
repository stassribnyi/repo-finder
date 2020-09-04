import React from 'react';

import { Grid, GridProps } from '@material-ui/core';
import styled, { css } from 'styled-components';

const GridContainer: React.FC<GridProps> = (props) => (
  <Grid container direction='column' alignItems='center' {...props} />
);
const Content: React.FC = (props) => <GridContainer item {...props} />;

const Container = styled(GridContainer)`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: ${theme.breakpoints.values.laptop}px;
  `};
`;

export const Styled = {
  Container,
  Content,
};
