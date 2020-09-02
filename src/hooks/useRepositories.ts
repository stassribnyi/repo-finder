import { useCallback, useMemo } from 'react';

import { Repository } from '../types';
import {
  useSearchRepositoriesLazyQuery,
  SearchRepositoriesQuery,
} from '../generated/graphql';

type UseRepositoriesResult = Readonly<{
  isLoading: boolean;
  repositories: Array<Repository>;
  searchRepositories: (phrase: string) => void;
}>;

// TODO: Fix types
const mapResponseToRepository = (
  response?: SearchRepositoriesQuery['search']
): Array<Repository> =>
  (response?.nodes
    ?.map(
      (n) =>
        n && {
          uniqueName: n.owner.login + '/' + n.name,
          name: n.name,
          stars: n.stargazers.totalCount,
          watchers: n.watchers.totalCount,
          forks: n?.forks.totalCount || 0,
          url: n.url,
          description: n.description,
          topics:
            n.repositoryTopics?.edges?.map((e) => e?.node?.topic.name) || [],
        }
    )
    .filter(Boolean) || []) as Array<Repository>;

export const useRepositories = (): UseRepositoriesResult => {
  const [
    searchLazyQuery,
    { loading: isLoading, data },
  ] = useSearchRepositoriesLazyQuery();

  const searchRepositories: UseRepositoriesResult['searchRepositories'] = useCallback(
    (query) => searchLazyQuery({ variables: { query } }),
    [searchLazyQuery]
  );

  const repositories = useMemo(() => mapResponseToRepository(data?.search), [
    data,
  ]);

  return {
    isLoading,
    repositories,
    searchRepositories,
  };
};
