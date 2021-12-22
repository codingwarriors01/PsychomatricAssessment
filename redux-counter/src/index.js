import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import {createStore} from 'redux';
// import rootReducer from './Service/Reducers/rootReducer';
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import store from './Component/store'

// import SignInReducer from './Service/Reducers/signinReducer'

// // const store=createStore(rootReducer)
// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

ReactDOM.render(
<Provider store = {store}>
  <App />

</Provider>,
  document.getElementById('root')
);

// reportWebVitals();
