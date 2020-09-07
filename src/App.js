import React from 'react';
import { Router } from '@/Routes.jsx';
import './App.css';
import { Provider } from 'react-redux';
import store from '@/store';
import BgImage from '@/components/blocks/BgImage/BgImage.jsx';

function App() {
  return (
    <Provider store={store}>
      <BgImage>
        <Router />
      </BgImage>
    </Provider>
  );
}

export default App;
