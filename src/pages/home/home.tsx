import React, { useCallback } from 'react';

import { useRepositoriesContext, withRepositories } from '../../contexts';

import { RepositoryItem, SearchField } from '../../components';
import { List, Typography } from '@material-ui/core';
import { BaseLayout } from '../../layouts';

export const HomePage = withRepositories(() => {
  const { repositories, search } = useRepositoriesContext();

  const handleSearch = useCallback((phrase) => search(phrase), [search]);

  return (
    <BaseLayout>
      <Typography align='center' variant='h4' gutterBottom>
        Repo finder
      </Typography>
      <SearchField
        placeholder='Search  phrase, for ex: react'
        searchText='Search'
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
