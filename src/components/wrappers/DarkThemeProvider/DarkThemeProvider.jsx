import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/theme';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getIsDarkState } from '@/store/reselect';

function DarkThemeProvider({ children }) {
  const isDark = useSelector(getIsDarkState);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}

DarkThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DarkThemeProvider;
