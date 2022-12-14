import styled from '@emotion/styled';

const Container = styled.header`
  position: fixed;
  z-index: 100;
  width: 100%;
  min-width: 768px;
  height: 64px;
  border-bottom: 1px solid #d0d0d0;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-weight: normal;
  font-size: 28px;
  margin: 0;
`;

const Menus = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Menu = styled.li``;

export { Container, Title, Menus, Menu };
