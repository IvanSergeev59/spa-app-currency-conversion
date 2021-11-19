import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from "react-redux";

import store from './store';
import CurrencyService from './services';
import { CurrencyServiceProvider } from './components/currency-service-context';
import ErrorBoundry from './error-boundry';

const currencyService = new CurrencyService();
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <CurrencyServiceProvider value={currencyService}>
          <App />
      </CurrencyServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
