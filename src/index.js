import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import loginReducer from './reducers/loginReducer';
import productReducer from './reducers/productReducer';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';

const rootReducer = combineReducers({
  pr: productReducer,
  lr: loginReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
