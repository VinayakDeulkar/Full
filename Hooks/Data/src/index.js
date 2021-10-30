import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';//import store
import {Provider} from 'react-redux'
const initialState={count:0}
//create reducer
function reducer(state=initialState,actions){
  console.log(state);
    switch(actions.type){
      case 'INC' : return {count:state.count+actions.payload}
      case 'DEC' : return {count:state.count-actions.payload}
      case 'RESET' : return {count:0}
      default : return state;
    }
}
const store=createStore(reducer);//create store
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
