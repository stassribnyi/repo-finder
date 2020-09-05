import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { ProgressWrapper } from '../progress-wrapper';
import { FinderThemeProvider } from '../../../theme';

afterEach(cleanup);

describe('ProgressWrapper', () => {
  it('should show progress bar', async () => {
    // Arrange
    const { asFragment, queryByText } = render(
      <FinderThemeProvider>
        <ProgressWrapper isLoading={true}>
          <p>progress without content</p>
        </ProgressWrapper>
      </FinderThemeProvider>
    );

    // Act
    const contentElement = queryByText(/progress without content/i);

    // Assert
    expect(contentElement).toBeNull();
    expect(asFragment()).toMatchSnapshot('progress without content');
  });

  it('should show progress bar alongside with content', async () => {
    // Arrange
    const { asFragment, queryByText } = render(
      <FinderThemeProvider>
        <ProgressWrapper isLoading={true} showContent={true}>
          <p>progress with content</p>
        </ProgressWrapper>
      </FinderThemeProvider>
    );

    // Act
    const contentElement = queryByText(/progress with content/i);

    // Assert
    expect(contentElement).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot('progress with content');
  });

  it('should show progress bar alongside with content', async () => {
    // Arrange
    const { asFragment, queryByText } = render(
      <FinderThemeProvider>
        <ProgressWrapper isLoading={false}>
          <p>content only</p>
        </ProgressWrapper>
      </FinderThemeProvider>
    );

    // Act
    const contentElement = queryByText(/content only/i);

    // Assert
    expect(contentElement).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot('content only');
  });
});
