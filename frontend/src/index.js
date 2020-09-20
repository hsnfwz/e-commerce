import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from './contexts/UserContext';
import BodyContextProvider from './contexts/BodyContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BodyContextProvider>
      <BrowserRouter>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </BrowserRouter>
    </BodyContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
