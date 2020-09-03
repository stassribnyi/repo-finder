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
  <>
    {isLoading ? (
      <>
        <Styled.Progress />
        {showContent && children}
      </>
    ) : (
      children
    )}
  </>
);
