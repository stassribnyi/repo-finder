import { useCallback, useState } from 'react';

import { MOCK_REPOS } from './mockRepos';

export type Repository = Readonly<{
  description: string;
  name: string;
  stars: number;
  topics: string[];
  uniqueName: string;
  url: string;
  watchers: number;
}>;

type UseRepositoriesResult = Readonly<{
  isLoading: boolean;
  repositories: Array<Repository>;
  searchRepositories: (phrase: string) => Promise<Array<Repository>>;
}>;

export const useRepositories = (): UseRepositoriesResult => {
  const [repositories, setRepositories] = useState<Array<Repository>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchRepositories: UseRepositoriesResult['searchRepositories'] = useCallback(
    (phrase) =>
      new Promise((resolve) => {
        setIsLoading(true);

        setTimeout(() => {
          console.log(phrase);

          setRepositories(MOCK_REPOS);
          setIsLoading(false);
          resolve(MOCK_REPOS);
        }, 2000);
      }),
    []
  );

  return {
    isLoading,
    repositories,
    searchRepositories,
  };
};
