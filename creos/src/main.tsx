import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider>
      <BrowserRouter>
      <Provider store={store}>
         <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
);

