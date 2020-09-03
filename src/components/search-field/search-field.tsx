import React, { useCallback, useEffect, useState } from 'react';

import { InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import { SearchFieldProps } from './search-field.types';
import { Styled } from './search-field.styles';

export const SearchField: React.FC<SearchFieldProps> = ({
  disabled,
  searchText,
  value,
  onSearch,
  ...props
}) => {
  const [searchValue, setSearchValue] = useState<string | undefined>(value);

  useEffect(() => {
    setSearchValue(value);
  }, [value]);

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target }) => setSearchValue(target.value),
    [setSearchValue]
  );

  const handleSearch = useCallback(() => onSearch(searchValue || ''), [
    searchValue,
    onSearch,
  ]);

  const handleEnterPress: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    ({ key }) => {
      if (key !== 'Enter') {
        return;
      }

      handleSearch();
    },
    [handleSearch]
  );

  return (
    <Styled.Container>
      <Styled.SearchField
        value={searchValue || ''}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Search />
            </InputAdornment>
          ),
        }}
        {...props}
        onKeyPress={handleEnterPress}
        onChange={handleSearchChange}
      />
      <Styled.SearchButton disabled={disabled} onClick={handleSearch}>
        Search
      </Styled.SearchButton>
    </Styled.Container>
  );
};
