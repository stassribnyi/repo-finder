import { Repository } from '../../hooks';

export type RepositoryContextState = Readonly<{
  isLoading: boolean;
  repositories: Array<Repository>;
  search: (phrase: string) => Promise<void>;
}>;
