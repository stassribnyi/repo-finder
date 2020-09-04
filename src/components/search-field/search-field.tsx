import React, { useCallback, useEffect, useState } from 'react';

import { Search } from '@material-ui/icons';

import { SearchFieldProps } from './search-field.types';
import { Styled } from './search-field.styles';

export const SearchField: React.FC<SearchFieldProps> = ({
  disabled,
  value,
  onSearch,
  className,
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

  const handleEnterPress: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    ({ key }) => {
      if (key !== 'Enter') {
        return;
      }

      onSearch(searchValue || '');
    },
    [onSearch, searchValue]
  );

  return (
    <Styled.Container className={className}>
      <Styled.SearchIcon>
        <Search />
      </Styled.SearchIcon>
      <Styled.SearchField
        {...props}
        value={searchValue || ''}
        inputProps={{ 'aria-label': 'search' }}
        onKeyPress={handleEnterPress}
        onChange={handleSearchChange}
      />
    </Styled.Container>
  );
};
