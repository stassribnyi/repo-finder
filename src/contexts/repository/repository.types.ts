import { Repository } from '../../types';

export type RepositoryContextState = Readonly<{
  isLoading: boolean;
  repositories: Array<Repository>;
  search: (phrase: string) => void;
}>;
