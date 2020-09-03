import React, { useEffect } from 'react';

import { useRepositoriesContext, withRepositories } from '../../contexts';

import { ProgressWrapper, RepositoryItem } from '../../components';
import { List, TablePagination } from '@material-ui/core';
import { BaseLayout } from '../../layouts';

import { Styled } from './home.styles';

const HomePage: React.FC = () => {
  const {
    isLoading,
    items,
    pagination,
    searchValue,
    searchRepos,
  } = useRepositoriesContext();

  const hasRepositories = !!items.length;

  useEffect(() => {
    searchRepos('vue');
  }, [searchRepos]);

  return (
    <BaseLayout>
      <Styled.Title>Repo finder</Styled.Title>
      <Styled.SearchField
        value={searchValue}
        searchText='Search'
        placeholder='ex: react'
        disabled={isLoading}
        onSearch={searchRepos}
      />
      <ProgressWrapper isLoading={isLoading} showContent={hasRepositories}>
        <List>
          {items.map((repository, idx) => (
            <RepositoryItem
              key={idx}
              showDivider={idx !== items.length - 1}
              {...repository}
            />
          ))}
        </List>
        {hasRepositories && <TablePagination component='div' {...pagination} />}
      </ProgressWrapper>
    </BaseLayout>
  );
};

export default withRepositories(HomePage);
