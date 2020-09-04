import styled, { css } from 'styled-components';

import { fade, InputBase } from '@material-ui/core';

const Container = styled.div`
  margin: 0;
  width: auto;

  display: flex;
  align-items: center;

  ${({ theme }) => css`
    padding: 0 ${theme.spacing(1)}px;
    border-radius: ${theme.shape.borderRadius}px;

    background-color: ${fade(theme.palette.common.white, 0.15)};
    &:hover {
      background-color: ${fade(theme.palette.common.white, 0.25)};
    }

    transition-property: background-color;
    transition-duration: ${theme.transitions.duration.standard}ms;
    transition-timing-function: ${theme.transitions.easing.easeOut};
  `};
`;

const SearchIcon = styled.div`
  display: flex;
`;

const SearchField = styled(InputBase)`
  color: inherit;
  margin-left: ${({ theme }) => theme.spacing(1)}px;
`;

export const Styled = {
  Container,
  SearchField,
  SearchIcon,
};
