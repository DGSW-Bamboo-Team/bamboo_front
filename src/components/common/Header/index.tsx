import { Container, Menu, Menus, Title } from './Header.styles';

const Header = () => {
  return (
    <Container>
      <Title>대소고 대나무숲</Title>
      <Menus>
        <Menu>1</Menu>
        <Menu>2</Menu>
        <Menu>3</Menu>
      </Menus>
    </Container>
  );
};

export default Header;
