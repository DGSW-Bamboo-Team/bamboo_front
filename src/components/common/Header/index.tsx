import { useTheme } from '~/contexts/ThemeProvider';
import Toggle from '../Toggle';
import { Container, Menu, Menus, Title } from './Header.styles';

const Header = () => {
  const [theme, setTheme] = useTheme();

  const setLightMode = () => setTheme('light');
  const setDarkMode = () => setTheme('dark');

  return (
    <Container>
      <Title>대소고 대나무숲</Title>
      <Menus>
        <Menu>
          <Toggle>
            <Toggle.Trigger
              as={
                <button
                  onClick={() => {
                    theme === 'dark' ? setLightMode() : setDarkMode();
                  }}
                >
                  Toggle
                </button>
              }
            />
          </Toggle>
        </Menu>
        <Menu>2</Menu>
        <Menu>3</Menu>
      </Menus>
    </Container>
  );
};

export default Header;
