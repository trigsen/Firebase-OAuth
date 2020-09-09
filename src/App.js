import React from 'react';
import { Router } from '@/Routes.jsx';
import './App.css';
import { Provider } from 'react-redux';
import store from '@/store/store';
import BgImage from '@/components/blocks/BgImage/BgImage';
import theme from '@/theme/theme';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';
import enUS from 'antd/es/locale/en_US';

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider locale={enUS}>
        <ThemeProvider theme={theme}>
          <BgImage>
            <Router />
          </BgImage>
        </ThemeProvider>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
