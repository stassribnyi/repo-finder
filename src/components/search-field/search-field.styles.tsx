import React from 'react';
import styled from 'styled-components';

import {
  Button,
  ButtonProps,
  Grid,
  GridProps,
  TextField,
} from '@material-ui/core';

const GridContainer: React.FC<GridProps> = (props) => (
  <Grid container {...props} />
);
const SearchButton: React.FC<ButtonProps> = (props) => (
  <Button variant='contained' color='primary' {...props} />
);

const Container = styled(GridContainer)`
  width: auto;
`;

const SearchField = styled(TextField)`
  margin-right: ${({ theme }) => theme.spacing(2)}px;
`;

export const Styled = {
  Container,
  SearchButton,
  SearchField,
};
