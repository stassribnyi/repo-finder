import React from 'react';

import { Typography } from '@material-ui/core';

const Title: React.FC = (props) => (
  <Typography align='center' variant='h4' gutterBottom {...props} />
);

export const Styled = { Title };
