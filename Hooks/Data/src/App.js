import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
function App(props) {
  return (
    <div className="App">
      <h2> Redux Counter Example</h2>
      <p>{props.mycounter}</p>
      <button onClick={()=>props.counter()}>+</button>
      <button onClick={()=>props.counter1()}>-</button>
      <button onClick={()=>props.reset()}>Reset</button>
    </div>
  );
}
const mapStateToProps=(state)=>{
  return {
      mycounter:state.count
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    counter:function(){
      dispatch({type:'INC',payload:2})
    },
    counter1:function(){
      dispatch({type:'DEC',payload:1})
    },
    reset:function(){
      dispatch({type:'RESET'})
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
