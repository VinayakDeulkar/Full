import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux';
import { Provider } from 'react-redux';
const initialData={count:JSON.parse(localStorage.getItem('mycart'))!=undefined?JSON.parse(localStorage.getItem('mycart')):[]}
    function reducer(state=initialData,actions){
      console.log(state);
      console.log(actions.payload);
      switch(actions.type){
        case "new":
          return{count:[actions.payload]}
      case "defind":return{count:[...state.count,actions.payload]}
      case "clear":return{count:null}
      default:return state
      }
    }
    const store=createStore(reducer);
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
