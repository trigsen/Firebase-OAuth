import React from 'react';
import { Router } from '@/Routes.jsx';
import './App.css';
import { Provider } from 'react-redux';
import store from '@/store/store';
import BgImage from '@/components/blocks/BgImage/BgImage';
import theme from '@/theme/theme';
import { ThemeProvider } from 'styled-components';
import IntlProviderWrap from '@/components/wrappers/IntlProviderWrap/IntlProviderWrap';

function App() {
  return (
    <Provider store={store}>
      <IntlProviderWrap>
        <ThemeProvider theme={theme}>
          <BgImage>
            <Router />
          </BgImage>
        </ThemeProvider>
      </IntlProviderWrap>
    </Provider>
  );
}

export default App;
