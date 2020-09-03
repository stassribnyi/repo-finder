import React from 'react';
import styled from 'styled-components';

import { Typography } from '@material-ui/core';
import { SearchField as DefaultSearchField } from '../../components';

const Title: React.FC = (props) => (
  <Typography align='center' variant='h4' gutterBottom {...props} />
);

const SearchField = styled(DefaultSearchField)`
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

export const Styled = { SearchField, Title };
