import React, { useCallback } from 'react';

import { useRepositoriesContext, withRepositories } from '../../contexts';
import { BaseLayout } from '../../layouts';

export const HomePage = withRepositories(() => {
  const { repositories, search } = useRepositoriesContext();

  const handleSearch = useCallback(() => search('react'), [search]);

  return (
    <BaseLayout>
      <a href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        Learn React
      </a>
      <button onClick={handleSearch}>Search react</button>
      {repositories.map((x) => (
        <span>{x.uniqueName}</span>
      ))}
    </BaseLayout>
  );
});
