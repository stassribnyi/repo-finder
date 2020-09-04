import styled, { css } from 'styled-components';
import { LinearProgress } from '@material-ui/core';

const Progress = styled(LinearProgress)`
  position: absolute;

  ${({ theme }) => css`
    top: ${theme.spacing(1)}px;
    left: ${theme.spacing(1)}px;
    width: calc(100% - ${theme.spacing(2)}px);
  `}
`;

const Container = styled.div`
  width: 100%;
  position: relative;

  padding: ${({ theme }) => theme.spacing(1)}px 0;
`;

export const Styled = { Container, Progress };
