import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Fonts — served locally via @fontsource (no Google Fonts CDN needed)
import '@fontsource/fredoka/400.css';
import '@fontsource/fredoka/600.css';
import '@fontsource/quicksand/500.css';
import '@fontsource/quicksand/700.css';

import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
