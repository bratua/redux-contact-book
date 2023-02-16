import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { App, AppRedux } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/Theme/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
        <AppRedux />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
