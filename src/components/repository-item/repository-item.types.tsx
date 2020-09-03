import { Repository } from '../../types';

export type RepositoryItemProps = Readonly<
  Repository & {
    showDivider?: boolean;
  }
>;
