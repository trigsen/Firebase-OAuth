import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/theme';
import { useSelector } from 'react-redux';
import { getIsDarkState } from '@/store/reselect';

interface Props {
  children: React.ReactNode;
}

const DarkThemeProvider: React.FC<Props> = ({ children }) => {
  const isDark = useSelector(getIsDarkState);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
