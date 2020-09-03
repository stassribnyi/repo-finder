import { Pagination, Repository } from '../../types';

export type RepositoryContextState = {
  isLoading: boolean;
  items: Array<Repository>;
  searchRepos: (phrase: string) => void;
  pagination: Pagination;
  searchValue: string;
};
