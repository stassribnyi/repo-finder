import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { FinderThemeProvider } from '../../../theme';

import { RepositoryItemProps } from '../repository-item.types';
import { RepositoryItem } from '../repository-item';

afterEach(cleanup);

const repositoryMock: RepositoryItemProps = {
  uniqueName: 'unique repository name',
  url: 'http://repository.com/name',
  description: 'Test description',
  forks: 123,
  stars: 234567,
  watchers: 45579,
  topics: ['topic1', 'topic2', 'topic3'],
};

describe('RepositoryItem', () => {
  it('should contain unique name', async () => {
    // Arrange
    const { getByText } = render(
      <FinderThemeProvider>
        <RepositoryItem {...repositoryMock} />
      </FinderThemeProvider>
    );

    // Act
    const linkElement = getByText(new RegExp(repositoryMock.uniqueName, 'i'));

    // Assert
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe(repositoryMock.url);
  });

  it('should contain description', async () => {
    // Arrange
    const { getByText } = render(
      <FinderThemeProvider>
        <RepositoryItem {...repositoryMock} />
      </FinderThemeProvider>
    );

    // Act
    const descElement = getByText(new RegExp(repositoryMock.description, 'i'));

    // Assert
    expect(descElement).toBeInTheDocument();
  });

  it('should contain topics', async () => {
    // Arrange
    const { getByText } = render(
      <FinderThemeProvider>
        <RepositoryItem {...repositoryMock} />
      </FinderThemeProvider>
    );

    repositoryMock.topics.forEach((topic) => {
      // Act
      const topicElement = getByText(new RegExp(topic, 'i'));

      // Assert
      expect(topicElement).toBeInTheDocument();
    });
  });

  it('should contain stats', async () => {
    // Arrange
    const { getByText } = render(
      <FinderThemeProvider>
        <RepositoryItem {...repositoryMock} />
      </FinderThemeProvider>
    );

    // Act
    const forksStatElement = getByText(/123/i);
    const starsStatElement = getByText(/235k/i);
    const watchersStatElement = getByText(/46k/i);

    // Assert
    expect(forksStatElement).toBeInTheDocument();
    expect(starsStatElement).toBeInTheDocument();
    expect(watchersStatElement).toBeInTheDocument();
  });
});
