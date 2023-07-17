//modules and libray or framework maybe
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux"
import App from './App';
import reportWebVitals from './reportWebVitals';
// other imports
import store from "./store"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Provider store={store}>
  <App />
  </Provider>
  </React.StrictMode>
);
reportWebVitals();
