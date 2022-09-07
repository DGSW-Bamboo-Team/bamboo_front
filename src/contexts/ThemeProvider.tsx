import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { createContext, useContext, useEffect, useState } from 'react';
import ResetStyle from '~/styles/reset';
import { darkTheme, lightTheme } from '~/styles/theme';

export type ThemeType = 'light' | 'dark';
export type ThemeProviderType = [ThemeType, (theme: ThemeType) => void];

const USER_PERFER_DARK_MATCHER = '(prefers-color-scheme: dark)' as const;
const LOCALSTORAGE_THEME_KEY = 'bamboo_theme';

const getInitialTheme = () => {
  const theme = localStorage.getItem(LOCALSTORAGE_THEME_KEY) as ThemeType | null;
  const isInvalidTheme = (theme !== 'light' && theme !== 'dark') || !theme;

  if (isInvalidTheme) {
    const { matches } = window.matchMedia(USER_PERFER_DARK_MATCHER);
    return matches ? 'dark' : 'light';
  }

  return theme;
};

const ThemeContext = createContext<ThemeProviderType | null>(null);

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(getInitialTheme());
  const themeSelector = theme === 'dark' ? darkTheme : lightTheme;

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_THEME_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ResetStyle theme={themeSelector} />
      <EmotionThemeProvider theme={themeSelector}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeValue = useContext(ThemeContext);

  if (!themeValue) throw new Error(`ThemeProvider를 상위 컴포넌트에 감싸주세요.`);

  return themeValue;
};

export default ThemeProvider;
