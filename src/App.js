import React from 'react';
import { Router } from '@/Routes.jsx';
import './App.css';
import { Provider } from 'react-redux';
import store from '@/store';
import BgImage from '@/components/blocks/BgImage/BgImage';
import theme from '@/theme/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BgImage>
          <Router />
        </BgImage>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
