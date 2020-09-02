import React from 'react';

import { Link, ListItemAvatar, ListItemText } from '@material-ui/core';
import {
  BookOutlined,
  RestaurantRounded,
  StarBorderRounded,
  VisibilityOutlined,
} from '@material-ui/icons';

import { Repository } from '../../types';
import { Styled } from './repository-item.styles';

export const RepositoryItem: React.FC<Repository> = ({
  url,
  uniqueName,
  description,
  forks,
  stars,
  watchers,
  topics,
}) => (
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
        <Styled.DetailsContainer>
          <Styled.DetailsItem>
            <Styled.Description>{description}</Styled.Description>
          </Styled.DetailsItem>
          <Styled.DetailsItem>
            {topics.map((topic, idx) => (
              <Styled.TagChip key={idx} label={`#${topic}`} />
            ))}
          </Styled.DetailsItem>
          <Styled.DetailsItem>
            <Styled.ChipWithoutBorder
              icon={<StarBorderRounded />}
              label={stars}
            />
            <Styled.ChipWithoutBorder
              icon={<VisibilityOutlined />}
              label={watchers}
            />
            <Styled.ChipWithoutBorder
              icon={<RestaurantRounded />}
              label={forks}
            />
          </Styled.DetailsItem>
        </Styled.DetailsContainer>
      }
    />
  </Styled.ListItem>
);
