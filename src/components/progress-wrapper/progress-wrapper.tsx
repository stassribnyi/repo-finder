import React from 'react';
import { Styled } from './progress-wrapper.styles';

export type ProgressWrapperProps = Readonly<{
  isLoading: boolean;
  showContent?: boolean;
}>;

export const ProgressWrapper: React.FC<ProgressWrapperProps> = ({
  isLoading,
  children,
  showContent = false,
}) => (
  <Styled.Container>
    {isLoading ? (
      <>
        <Styled.Progress color='secondary' />
        {showContent && children}
      </>
    ) : (
      children
    )}
  </Styled.Container>
);
