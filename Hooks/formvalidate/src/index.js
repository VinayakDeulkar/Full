import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Validate from './middleware/thunk';
import { createStore ,applyMiddleware} from 'redux';
const initialstate={name:'',email:'',password:'',mobileNumber:''}
const regForName=RegExp(/^[A-Za-z ]+$/);
const regForEmail=RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
const regForpassword=RegExp(/[A-Za-z0-9 @#%$&*]+/)
const regForMobileNumber=RegExp(/[0-9]{10}/)
function reducer(state=initialstate,actions){
  console.log(state);
  console.log(actions);
  switch(actions.type){
    case 'Submit': 
      if(regForName.test(actions.payload.Name)!==true){
        state.name='Enter valid name';
        console.log(state.name);
      }
      if(regForEmail.test(actions.payload.Email)!==true){
        state.email='Enter valid email';
      }
      if(regForpassword.test(actions.payload.Password)!==true){
        state.password='Enter valid password';
      }
      if(regForMobileNumber.test(actions.payload.MobileNumber)!==true){
        state.mobileNumber='Enter valid mobileNumber';
      }
      return {sname:state.name,semail:state.email,spassword:state.password,smobilenumber:state.mobileNumber}
    case 'check':return state
    default : return state;
  }

}
const store=createStore(reducer,applyMiddleware(thunk) );
store.dispatch(Validate());
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
