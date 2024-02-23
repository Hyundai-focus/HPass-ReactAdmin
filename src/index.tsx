import React from 'react';
import ReactDOM from 'react-dom/client';
import 'css/index.css'
import Routing from 'utils/Routing';
import { Provider } from 'react-redux';
import store from './store/store'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>
);