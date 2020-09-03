import React, { useCallback } from 'react';

import { useRepositoriesContext, withRepositories } from '../../contexts';

import { RepositoryItem, SearchField } from '../../components';
import { List } from '@material-ui/core';
import { BaseLayout } from '../../layouts';

import { Styled } from './home.styles';

export const HomePage = withRepositories(() => {
  const { isLoading, repositories, search } = useRepositoriesContext();

  const handleSearch = useCallback((phrase) => search(phrase), [search]);

  return (
    <BaseLayout>
      <Styled.Title>Repo finder</Styled.Title>
      <SearchField
        value='react'
        searchText='Search'
        placeholder='ex: react'
        disabled={isLoading}
        onSearch={handleSearch}
      />
      <List>
        {repositories.map((repository) => (
          <RepositoryItem {...repository} />
        ))}
      </List>
    </BaseLayout>
  );
});
