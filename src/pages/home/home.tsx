import React, { useCallback } from 'react';

import { useRepositoriesContext, withRepositories } from '../../contexts';

import { RepositoryItem } from '../../components';
import { BaseLayout } from '../../layouts';
import { List } from '@material-ui/core';

export const HomePage = withRepositories(() => {
  const { repositories, search } = useRepositoriesContext();

  const handleSearch = useCallback(() => search('react'), [search]);

  return (
    <BaseLayout>
      <a href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        Learn React
      </a>
      <button onClick={handleSearch}>Search react</button>
      <List>
        {repositories.map((x) => (
          <RepositoryItem {...x} />
        ))}
      </List>
    </BaseLayout>
  );
});
