import React, { useEffect } from 'react';

import { useRepositoriesContext, withRepositories } from '../../contexts';

import { AppBar, List, TablePaginationProps, Toolbar } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

import { ProgressWrapper, RepositoryItem } from '../../components';
import { BaseLayout } from '../../layouts';

import { Styled } from './home.styles';
import { abbreviateNumber } from '../../utils';

const formatLabelDisplayedRows: TablePaginationProps['labelDisplayedRows'] = ({
  from,
  to,
  count,
}) => `${from}-${to} of ${abbreviateNumber(count)}`;

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
      <AppBar position='static'>
        <Toolbar>
          <Styled.IconButton>
            <GitHub />
          </Styled.IconButton>
          <Styled.HeaderTitle>Repo finder</Styled.HeaderTitle>
          <Styled.SearchField
            placeholder='Search…'
            value={searchValue}
            disabled={isLoading}
            onSearch={searchRepos}
          />
        </Toolbar>
      </AppBar>

      <ProgressWrapper isLoading={isLoading} showContent={hasRepositories}>
        <Styled.SearchResults>
          <List>
            {items.map((repository, idx) => (
              <RepositoryItem
                key={idx}
                showDivider={idx !== items.length - 1}
                {...repository}
              />
            ))}
          </List>
          {hasRepositories && (
            <Styled.Pagination
              {...pagination}
              labelRowsPerPage={null}
              labelDisplayedRows={formatLabelDisplayedRows}
            />
          )}
        </Styled.SearchResults>

        {!hasRepositories && <Styled.InfoTitle>No Results</Styled.InfoTitle>}
      </ProgressWrapper>
    </BaseLayout>
  );
};

export default withRepositories(HomePage);
