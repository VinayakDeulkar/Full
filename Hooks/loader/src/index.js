import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from 'redux';
import sagaFunction from '../src/middleware/sagafunction'
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
const sagaMiddleware=createSagaMiddleware();
const initialState={postData:[],loader:false}
function reducer(state=initialState,actions){
  
  switch(actions.type){
    case 'GET_POSTS':
      return {...state,loader:true}
    
    case 'POSTS_RECEIVED':return {...state,postData:actions.payload,loader:false}

      default: return{state}
  }
}
const store=createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagaFunction);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
