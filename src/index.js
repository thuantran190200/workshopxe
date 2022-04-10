import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './Context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./stores";
ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
    <Provider store={store}>
    <App />
  </Provider>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);


reportWebVitals();
