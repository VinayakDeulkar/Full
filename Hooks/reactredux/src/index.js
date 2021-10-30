import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals"; 
import createSagaMiddleware from 'redux-saga';
import sagaFunction from "./store/sagaFunction";
import { createStore, combineReducers, applyMiddleware } from "redux"; //import store
// import thunk from "redux-thunk";
import { Provider } from "react-redux";
// import postData from "../src/store/thunk";
const sagaMiddleware=createSagaMiddleware();
const initialState1 = { count1: 0, postdata: [] };
const initialState2 = { count2: 0 };
//create reducer
function reducer1(state = initialState1, actions) {
  console.log(state);
  switch (actions.type) {
    case "INC1":
      return { count1: state.count1 + actions.payload };
    case "DEC1":
      return { count1: state.count1 - actions.payload };
      case "GET_POSTS":
        return { ...state };
        case "POSTS_RECEIVED":
          return {...state, postdata: actions.payload}
    case "RESET1":
      return { count1: 0 };
   
    default:
      return state;
  }
}
function reducer2(state = initialState2, actions) {
  console.log(state);
  switch (actions.type) {
    case "INC2":
      return { count2: state.count2 + actions.payload };
    case "DEC2":
      return { count2: state.count2 - actions.payload };
      case "GET_POSTS":
      return { ...state };
      case "POSTS_RECEIVED":
          return {...state, postdata: actions.payload}
    case "RESET2":
      return { count2: 0 };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  r1: reducer1,
  r2: reducer2,
});
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagaFunction)

// store.dispatch(postData()); //create store
// store.dispatch({type:'INC',payload:2})
// store.dispatch({type:'INC',payload:2})
// store.dispatch({type:'INC',payload:2})
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
