import React from 'react';
import styled, { css } from 'styled-components';

import {
  Avatar,
  ChipProps,
  Typography,
  Chip as MuiChip,
  Divider as MuiDivider,
  ListItem as MuiListItem,
} from '@material-ui/core';

const RoundedAvatar: React.FC = (props) => (
  <Avatar variant='rounded' {...props} />
);
const Description: React.FC = (props) => (
  <Typography component='span' variant='body1' color='textPrimary' {...props} />
);
const ListItem: React.FC = (props) => (
  <MuiListItem alignItems='flex-start' {...props} />
);
const Chip: React.FC<ChipProps> = (props) => (
  <MuiChip component='span' {...props} />
);
const Divider: React.FC = (props) => (
  <MuiDivider variant='inset' component='li' />
);

const RepositoryAvatar = styled(RoundedAvatar)`
  background-color: ${({ theme }) => theme.palette.secondary.light};
`;

const ChipWithoutBorder: React.FC<ChipProps> = styled(Chip)`
  border: none;
  background: transparent;
`;

const InfoRow = styled.span`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;

const TagChip: React.FC<ChipProps> = styled(Chip)`
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
  Description,
  Divider,
  InfoRow,
  ListItem,
  RepositoryAvatar,
  TagChip,
};
