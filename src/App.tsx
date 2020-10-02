import React from 'react';
import { Router } from '@/Routes';
import './App.css';
import { Provider } from 'react-redux';
import store from '@/store';
import BgImage from '@/components/blocks/BgImage';
import DarkThemeProvider from '@/components/wrappers/DarkThemeProvider';
import IntlProviderWrap from '@/components/wrappers/IntlProviderWrap';
import ToastProvider from '@/components/wrappers/ToastProvider';

function App() {
  return (
    <Provider store={store}>
      <IntlProviderWrap>
        <DarkThemeProvider>
          <BgImage>
            <ToastProvider>
              <Router />
            </ToastProvider>
          </BgImage>
        </DarkThemeProvider>
      </IntlProviderWrap>
    </Provider>
  );
}

export default App;
