import { TablePaginationProps } from '@material-ui/core';

export type Pagination = Pick<
  TablePaginationProps,
  | 'count'
  | 'page'
  | 'rowsPerPage'
  | 'rowsPerPageOptions'
  | 'onChangePage'
  | 'onChangeRowsPerPage'
>;
