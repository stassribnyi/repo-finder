import React from 'react';

import { Grid, GridProps } from '@material-ui/core';

const Container: React.FC<GridProps> = (props) => (
  <Grid container direction='column' alignItems='center' {...props} />
);
const Content: React.FC = (props) => (
  <Grid item md={6} sm={8} xs={12} {...props} />
);

export const Styled = {
  Container,
  Content,
};
