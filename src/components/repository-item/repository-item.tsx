import React from 'react';

import { Link, ListItemAvatar, ListItemText } from '@material-ui/core';
import {
  BookOutlined,
  RestaurantRounded,
  StarBorderRounded,
  VisibilityOutlined,
} from '@material-ui/icons';

import { RepositoryItemProps } from './repository-item.types';
import { abbreviateNumber } from '../../utils';

import { Styled } from './repository-item.styles';

export const RepositoryItem: React.FC<RepositoryItemProps> = ({
  url,
  uniqueName,
  description,
  forks,
  stars,
  topics,
  watchers,
  showDivider = false,
}) => (
  <>
    <Styled.ListItem>
      <ListItemAvatar>
        <Styled.RepositoryAvatar>
          <BookOutlined />
        </Styled.RepositoryAvatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Link href={url} target='_blank' rel='noopener noreferrer'>
            {uniqueName}
          </Link>
        }
        secondary={
          <>
            <Styled.InfoRow>
              <Styled.Description>{description}</Styled.Description>
            </Styled.InfoRow>
            <Styled.InfoRow>
              {topics.map((topic, idx) => (
                <Styled.TagChip key={idx} label={`#${topic}`} />
              ))}
            </Styled.InfoRow>
            <Styled.InfoRow>
              <Styled.ChipWithoutBorder
                icon={<StarBorderRounded />}
                label={abbreviateNumber(stars)}
              />
              <Styled.ChipWithoutBorder
                icon={<VisibilityOutlined />}
                label={abbreviateNumber(watchers)}
              />
              <Styled.ChipWithoutBorder
                icon={<RestaurantRounded />}
                label={abbreviateNumber(forks)}
              />
            </Styled.InfoRow>
          </>
        }
      />
    </Styled.ListItem>
    {showDivider && <Styled.Divider />}
  </>
);
