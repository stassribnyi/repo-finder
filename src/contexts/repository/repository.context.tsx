import React, { createContext, useCallback, useContext, useMemo } from 'react';

import { RepositoryContextState } from './repository.types';
import { useRepositories } from '../../hooks';

export const RepositoryContext = createContext<RepositoryContextState>(
  {} as RepositoryContextState
);

export const useRepositoriesContext = (): RepositoryContextState =>
  useContext(RepositoryContext);

export const withRepositories = (
  Component: React.FC
): React.FC => (): JSX.Element => {
  const { isLoading, repositories, searchRepositories } = useRepositories();

  const search: RepositoryContextState['search'] = useCallback(
    async (phrase) => {
      await searchRepositories(phrase);
    },
    [searchRepositories]
  );

  const context = useMemo<RepositoryContextState>(
    () => ({
      isLoading,
      repositories,
      search,
    }),
    [isLoading, repositories, search]
  );

  return (
    <RepositoryContext.Provider value={context}>
      <Component />
    </RepositoryContext.Provider>
  );
};
