import { useCallback, useMemo } from 'react';

import { Repository } from '../types';
import {
  useSearchRepositoriesLazyQuery,
  SearchRepositoriesQuery,
  SearchRepositoriesQueryVariables,
} from '../generated/graphql';

type UseRepositoriesResult = Readonly<{
  isLoading: boolean;
  items: Array<Repository>;
  itemsCount: number;
  pageInfo: SearchRepositoriesQuery['search']['pageInfo'];
  searchRepos: (params: SearchRepositoriesQueryVariables) => void;
  searchMoreRepos: (params: SearchRepositoriesQueryVariables) => void;
}>;

const mapResponseToRepository = (
  response?: SearchRepositoriesQuery['search']
): Array<Repository> => {
  if (!response?.edges?.length) {
    return [];
  }

  return response.edges.reduce((result, repoEdge) => {
    if (!repoEdge?.node) {
      return result;
    }

    const { node } = repoEdge;

    const description = node.description || '';
    const uniqueName = `${node.owner.login}/${node.name}`;

    const topics =
      node.repositoryTopics?.edges?.reduce(
        (topicResult, topicEdge) => [
          ...topicResult,
          topicEdge?.node?.topic.name || '',
        ],
        [] as Array<string>
      ) || [];

    return [
      ...result,
      {
        topics,
        uniqueName,
        description,
        url: node.url,
        forks: node.forks.totalCount,
        stars: node.stargazers.totalCount,
        watchers: node.watchers.totalCount,
      },
    ];
  }, [] as Array<Repository>);
};

export const useRepositories = (): UseRepositoriesResult => {
  const [
    searchLazyQuery,
    { loading: isLoading, data, fetchMore },
  ] = useSearchRepositoriesLazyQuery({ notifyOnNetworkStatusChange: true });

  const searchRepos: UseRepositoriesResult['searchRepos'] = useCallback(
    (params) => searchLazyQuery({ variables: { ...params } }),
    [searchLazyQuery]
  );

  const searchMoreRepos: UseRepositoriesResult['searchRepos'] = useCallback(
    (params) =>
      fetchMore?.({
        variables: { ...params },
        updateQuery: (prev, { fetchMoreResult }) => fetchMoreResult || prev,
      }),
    [fetchMore]
  );

  const items = useMemo(() => mapResponseToRepository(data?.search), [data]);

  const itemsCount = data?.search.repositoryCount || 0;
  const pageInfo = data?.search.pageInfo || {};

  return {
    isLoading,
    items,
    itemsCount,
    pageInfo,
    searchRepos,
    searchMoreRepos,
  };
};
