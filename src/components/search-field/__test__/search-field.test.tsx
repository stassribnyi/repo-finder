import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import { SearchField } from '../search-field';
import { FinderThemeProvider } from '../../../theme';

afterEach(cleanup);

describe('SearchField', () => {
  it('should render search field input', async () => {
    // Arrange
    const handleChangeMock = jest.fn((v) => v);
    const { getByPlaceholderText } = render(
      <FinderThemeProvider>
        <SearchField
          value='initial value'
          placeholder='search field'
          onSearch={handleChangeMock}
        />
      </FinderThemeProvider>
    );

    // Act
    const inputElement = getByPlaceholderText(/search field/i);

    // Assert
    expect(inputElement.getAttribute('value')).toBe('initial value');
  });

  it('should trigger onChange', async () => {
    // Arrange
    const handleChangeMock = jest.fn((v) => v);
    const { getByPlaceholderText } = render(
      <FinderThemeProvider>
        <SearchField
          placeholder='search field'
          value='initial value'
          onSearch={handleChangeMock}
        />
      </FinderThemeProvider>
    );

    // Act
    const inputElement = getByPlaceholderText(/search field/i);
    fireEvent.change(inputElement, { target: { value: 'some new value' } });
    fireEvent.keyPress(inputElement, { key: 'Enter', charCode: 13 });

    // Assert
    expect(handleChangeMock).toHaveBeenCalledWith('some new value');
  });
});
