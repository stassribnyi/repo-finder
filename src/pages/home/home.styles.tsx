import React from 'react';
import styled from 'styled-components';

import {
  Typography,
  TablePaginationProps,
  IconButton as MuiIconButton,
  TablePagination as MuiTablePagination,
} from '@material-ui/core';
import { SearchField as DefaultSearchField } from '../../components';

const HeaderTitle: React.FC = (props) => <Typography variant='h6' {...props} />;
const InfoTitle: React.FC = (props) => (
  <Typography variant='h3' align='center' {...props} />
);
const MuiPagination: React.FC<Omit<TablePaginationProps, 'ref'>> = (props) => (
  <MuiTablePagination component='div' {...props} />
);
const IconButton: React.FC = (props) => (
  <MuiIconButton edge='start' color='inherit' {...props} />
);

const SearchField = styled(DefaultSearchField)`
  margin-left: auto;
`;

const SearchResults = styled.section`
  padding: 0 ${({ theme }) => theme.spacing(2)}px;
`;

const Pagination = styled(MuiPagination)`
  display: flex;
  justify-content: center;

  .MuiTablePagination-toolbar {
    padding: 0 ${({ theme }) => theme.spacing(2)}px;
  }

  .MuiTablePagination-spacer {
    display: none;
  }
`;

export const Styled = {
  HeaderTitle,
  IconButton,
  InfoTitle,
  Pagination,
  SearchField,
  SearchResults,
};
