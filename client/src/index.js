import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>, 
document.getElementById('root'));
registerServiceWorker();

console.log('Stripe Key is: ', process.env.REACT_APP_STRIPE_KEY);
console.log('ENV', process.env.NODE_ENV);


