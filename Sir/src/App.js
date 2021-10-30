import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
function App(props) {
  const mycounter=useSelector((state)=>state.count);//get data from redux
  const postdata=useSelector((state)=>state.postdata )
  console.log(postdata)
  const dispatch=useDispatch();
  return (
    <div className="App">
      <h2> Redux Counter Example</h2>
      <p>{mycounter}</p>
      <button onClick={()=>dispatch({type:'INC',payload:2})}>+</button>
      <button onClick={()=>dispatch({type:'DEC',payload:1})}>-</button>
      <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
      {postdata.length>0&& 
      postdata.map(post=>
        <>
          <p>{post.title}</p>
       </>)}
    </div>
  );
}
// const mapStateToProps=(state)=>{
//   return {
//       mycounter:state.count
//   }
// }
// const mapDispatchToProps=(dispatch)=>{
//   return {
//     counter:function(){
//       dispatch({type:'INC',payload:2})
//     },
//     counter1:function(){
//       dispatch({type:'DEC',payload:1})
//     },
//     reset:function(){
//       dispatch({type:'RESET'})
//     }
//   }
// }
export default (App);
