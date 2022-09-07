import styled from '@emotion/styled';

const Background = styled.main`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding-top: 64px;
  min-height: 100vh;
`;

export { Background };
