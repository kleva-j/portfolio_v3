/* eslint-disable @typescript-eslint/no-non-null-assertion */

import '@/styles/index.css';
import '@/styles/fonts.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/components/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
