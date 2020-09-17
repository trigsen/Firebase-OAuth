import React, { ReactElement } from 'react';
import { Router } from '@/Routes';
import './App.css';
import { Provider } from 'react-redux';
import store from '@/store/store';
import BgImage from '@/components/blocks/BgImage/BgImage';
import DarkThemeProvider from '@/components/wrappers/DarkThemeProvider/DarkThemeProvider';
import IntlProviderWrap from '@/components/wrappers/IntlProviderWrap/IntlProviderWrap';

function App(): ReactElement {
  return (
    <Provider store={store}>
      <IntlProviderWrap>
        <DarkThemeProvider>
          <BgImage>
            <Router />
          </BgImage>
        </DarkThemeProvider>
      </IntlProviderWrap>
    </Provider>
  );
}

export default App;
