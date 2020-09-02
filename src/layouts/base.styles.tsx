import React from 'react';

import { Grid, GridProps } from '@material-ui/core';
import styled from 'styled-components';

const GridContainer: React.FC<GridProps> = (props) => (
  <Grid container direction='column' alignItems='center' {...props} />
);
const Content: React.FC = (props) => (
  <GridContainer md={6} sm={8} xs={12} {...props} />
);

const Container = styled(GridContainer)`
  padding-top: ${({ theme }) => theme.spacing(2)}px;
`;

export const Styled = {
  Container,
  Content,
};
