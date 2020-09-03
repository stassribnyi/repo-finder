import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { RepositoryContextState } from './repository.types';
import { useRepositories } from '../../hooks';

const ROWS_PER_PAGE_OPTIONS = [5, 10, 25];

export const RepositoryContext = createContext<RepositoryContextState>(
  {} as RepositoryContextState
);

export const useRepositoriesContext = (): RepositoryContextState =>
  useContext(RepositoryContext);

export const withRepositories = (
  Component: React.FC
): React.FC => (): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [pagination, setPagination] = useState<
    RepositoryContextState['pagination']
  >({
    count: 0,
    page: 0,
    rowsPerPage: ROWS_PER_PAGE_OPTIONS[0],
    rowsPerPageOptions: ROWS_PER_PAGE_OPTIONS,
    onChangePage: () => {},
  });

  const {
    isLoading,
    items,
    itemsCount,
    pageInfo,
    searchRepos,
    searchMoreRepos,
  } = useRepositories();

  const handleSearch: RepositoryContextState['searchRepos'] = useCallback(
    (phrase) => {
      setSearchValue(phrase);
      searchRepos({ query: phrase, itemsPerPage: pagination.rowsPerPage });
      setPagination((oldPagination) => ({ ...oldPagination, page: 0 }));
    },
    [pagination.rowsPerPage, searchRepos]
  );

  const handlePageChange: RepositoryContextState['pagination']['onChangePage'] = useCallback(
    (_, newPage) => {
      const cursorPosition =
        pagination.page < newPage
          ? { after: pageInfo.endCursor }
          : { before: pageInfo.startCursor };

      searchMoreRepos({
        query: searchValue,
        itemsPerPage: pagination.rowsPerPage,
        ...cursorPosition,
      });

      setPagination((oldPagination) => ({ ...oldPagination, page: newPage }));
    },
    [
      pageInfo.endCursor,
      pageInfo.startCursor,
      pagination.page,
      pagination.rowsPerPage,
      searchMoreRepos,
      searchValue,
    ]
  );

  const handleRowsPerPageChange: RepositoryContextState['pagination']['onChangeRowsPerPage'] = useCallback(
    ({ target }) => {
      const rowsPerPage = parseInt(target.value, 10);

      searchRepos({ query: searchValue, itemsPerPage: rowsPerPage });
      setPagination((oldPagination) => ({
        ...oldPagination,
        page: 0,
        rowsPerPage,
      }));
    },
    [searchRepos, searchValue]
  );

  useEffect(() => {
    setPagination((oldPagination) => ({
      ...oldPagination,
      onChangePage: handlePageChange,
      onChangeRowsPerPage: handleRowsPerPageChange,
    }));
  }, [handlePageChange, handleRowsPerPageChange]);

  useEffect(() => {
    setPagination((oldPagination) => ({
      ...oldPagination,
      count: itemsCount,
    }));
  }, [itemsCount]);

  const context = useMemo<RepositoryContextState>(
    () => ({
      isLoading,
      items,
      pagination,
      searchValue,
      searchRepos: handleSearch,
    }),
    [isLoading, items, pagination, searchValue, handleSearch]
  );

  return (
    <RepositoryContext.Provider value={context}>
      <Component />
    </RepositoryContext.Provider>
  );
};
