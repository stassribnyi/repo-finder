import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { HomePage } from '../../../pages';

import {
  useRepositories,
  UseRepositoriesResult,
} from '../../../hooks/useRepositories';

jest.mock('../../../hooks/useRepositories');

describe('RepositoryContext', () => {
  let useRepositoriesResult: UseRepositoriesResult;
  const useRepositoriesMock = useRepositories as jest.Mock<
    UseRepositoriesResult
  >;

  afterEach(cleanup);

  beforeEach(() => {
    useRepositoriesResult = {
      isLoading: false,
      items: [],
      itemsCount: 1000,
      pageInfo: {},
      searchRepos: jest.fn((params) => {}),
      searchMoreRepos: jest.fn((params) => {}),
    };
  });

  it('should receive default values', async () => {
    // Arrange
    useRepositoriesMock.mockReturnValue(useRepositoriesResult);
    const { getByText } = render(<HomePage />);

    // Act
    const element = getByText(/No result/i);

    // Assert
    expect(element).toBeInTheDocument();
  });

  it('should find repositories', async () => {
    // Arrange
    useRepositoriesMock.mockReturnValue({
      ...useRepositoriesResult,
      items: [
        {
          uniqueName: 'unique repository name',
          url: '',
          description: '',
          forks: 0,
          stars: 0,
          watchers: 0,
          topics: [],
        },
      ],
    });
    const { getByText } = render(<HomePage />);

    // Act
    const element = getByText(/unique repository name/i);

    // Assert
    expect(useRepositoriesResult.searchRepos).toHaveBeenCalled();
    expect(useRepositoriesMock).toHaveBeenCalled();
    expect(element).toBeInTheDocument();
  });

  it('should find more repositories', async () => {
    // Arrange
    useRepositoriesMock.mockReturnValue({
      ...useRepositoriesResult,
      items: [
        {
          uniqueName: 'unique repository name',
          url: '',
          description: '',
          forks: 0,
          stars: 0,
          watchers: 0,
          topics: [],
        },
      ],
    });
    const { getByTitle } = render(<HomePage />);

    // Act
    const element = getByTitle(/Next page/i);
    element.click();

    // Assert
    expect(useRepositoriesResult.searchMoreRepos).toHaveBeenCalled();
    expect(element).toBeInTheDocument();
  });

  it('should fail', async () => {
    // Arrange
    // useRepositoriesMock.mockReturnValue({
    //   ...useRepositoriesResult,
    //   items: [
    //     {
    //       uniqueName: 'unique repository name',
    //       url: '',
    //       description: '',
    //       forks: 0,
    //       stars: 0,
    //       watchers: 0,
    //       topics: [],
    //     },
    //   ],
    // });
    const { getByTitle } = render(<HomePage />);

    // Act
    const element = getByTitle(/Next page/i);
    element.click();

    // Assert
    expect(useRepositoriesResult.searchMoreRepos).toHaveBeenCalled();
    expect(element).toBeInTheDocument();
  });
});
