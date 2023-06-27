import '@fontsource/roboto';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme';

import 'swiper/css'
import 'swiper/css/bundle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
