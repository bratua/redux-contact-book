import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppRedux } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/Theme/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRedux />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
