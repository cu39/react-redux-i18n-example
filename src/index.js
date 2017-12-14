import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import reducers from './reducers'
import configStore from './configStore'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={configStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
