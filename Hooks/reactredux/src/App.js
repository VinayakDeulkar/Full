import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import Counter from './components/Counter';

function App(props) {
  return (
    <div className="App">
      <h2> Redux Counter Example</h2>
      <p>{props.mycounter}</p>
      <button onClick={()=>props.counter()}>+</button>
      <button onClick={()=>props.counter1()}>-</button>
      <button onClick={()=>props.reset()}>Reset</button>
      <button onClick={()=>props.Post()}>GET POSTS</button>
       <Counter />
    </div>
  );
}
const mapStateToProps=(state)=>{
  return {
      mycounter:state.r1.count1
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    counter:function(){
      dispatch({type:'INC1',payload:1})
    },
    counter1:function(){
      dispatch({type:'DEC1',payload:1})
    },
    reset:function(){
      dispatch({type:'RESET1'})
    },
    Post:function(){
      dispatch({type:'GET_POSTS'})
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
