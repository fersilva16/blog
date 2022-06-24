import styled from '@emotion/styled';
import type { ReactNode } from 'react';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  width: 100%;
`;

export const SideContainer = styled.div`
  flex: 1;
`;

export type ContentContainerProps = {
  children: ReactNode;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
};

export const ContentContainer = ({
  children,
  leftContent,
  rightContent,
}: ContentContainerProps) => {
  return (
    <Container>
      <SideContainer>{leftContent}</SideContainer>
      <CenterContainer>{children}</CenterContainer>
      <SideContainer>{rightContent}</SideContainer>
    </Container>
  );
};
