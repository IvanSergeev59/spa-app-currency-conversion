import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from "react-redux";
import { BrowserRouter as Router} from "react-router-dom";
import store from './store';
import CurrencyService from './services';
import { CurrencyServiceProvider } from './components/currency-service-context';
import ErrorBoundry from './error-boundry/error-boundry';

const currencyService = new CurrencyService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <CurrencyServiceProvider value={currencyService}>
        <Router>
          <App />
        </Router>
      </CurrencyServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
