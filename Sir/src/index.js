import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware} from 'redux';//import store
import createSagaMiddleware from '@redux-saga/core';
import sagaFunction from './middleware/sagaFunction';
import {Provider} from 'react-redux'
const sagaMiddleware=createSagaMiddleware();
// import thunk from 'redux-thunk';
// import postData from './middleware/thunk';

const initialState={count:0,postdata:[]}

//create reducer
function reducer(state=initialState,actions){
  console.log(state);
    switch(actions.type){
      case 'INC' : return {count:state.count+actions.payload}
      case 'GET_POSTS' : return {...state}
      case 'DEC' : return {count:state.count-actions.payload}
      case 'RESET' : return {count:0}
      case 'POSTS_RECEIVED' : return {...state,postdata:actions.payload}
      default : return state;
    }
}
const store=createStore(reducer,applyMiddleware(sagaMiddleware));//create store
sagaMiddleware.run(sagaFunction);
store.dispatch({type:'GET_POSTS'})
// store.dispatch(postData());
// store.dispatch({type:'INC',payload:2})
// store.dispatch({type:'INC',payload:2})
// store.dispatch({type:'INC',payload:2})
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
