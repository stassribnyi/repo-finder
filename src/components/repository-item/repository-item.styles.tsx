import React from 'react';
import styled, { css } from 'styled-components';

import {
  Avatar,
  Chip,
  Grid,
  GridProps,
  Typography,
  ListItem as MuiListItem,
} from '@material-ui/core';

const Container: React.FC<GridProps> = (props) => <Grid container {...props} />;
const ItemContainer: React.FC = (props) => <Container item {...props} />;
const DetailsContainer: React.FC = (props) => (
  <Container direction='column' {...props} />
);
const RoundedAvatar: React.FC = (props) => (
  <Avatar variant='rounded' {...props} />
);
const Description: React.FC = (props) => (
  <Typography component='span' variant='body1' color='textPrimary' {...props} />
);
const ListItem: React.FC = (props) => (
  <MuiListItem alignItems='flex-start' {...props} />
);

const RepositoryAvatar = styled(RoundedAvatar)`
  background-color: ${({ theme }) => theme.palette.secondary.light};
`;

const ChipWithoutBorder = styled(Chip)`
  border: none;
  background: transparent;
`;

const DetailsItem = styled(ItemContainer)`
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;

const TagChip = styled(Chip)`
  ${({ theme }) => css`
    background-color: ${theme.palette.info.light};
    color: ${theme.palette.info.contrastText};
    margin-bottom: ${theme.spacing(1)}px;

    &:not(:last-child) {
      margin-right: ${theme.spacing(1)}px;
    }
  `};
`;

export const Styled = {
  ChipWithoutBorder,
  Container,
  Description,
  DetailsContainer,
  DetailsItem,
  ListItem,
  RepositoryAvatar,
  TagChip,
};
