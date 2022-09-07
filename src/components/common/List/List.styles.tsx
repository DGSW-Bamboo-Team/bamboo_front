import styled from '@emotion/styled';

const Wrapper = styled.ul`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export { Wrapper };
