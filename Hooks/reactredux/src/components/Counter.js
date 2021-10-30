import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
function Counter(props) {
  const mycounter = useSelector((state) => state.r2.count2);
  const dispatch = useDispatch();
  const postdata = useSelector((state) => state.r1.postdata);
  
  return (
    <div>
    <div className="App">
      <h2> Redux Counter Example(using useDispatch and useSelector method)</h2>
      <p>{mycounter}</p>
      <button onClick={() => dispatch({ type: "INC2", payload: 1 })}>+</button>
      <button onClick={() => dispatch({ type: "DEC2", payload: 1 })}>-</button>
      <button onClick={() => dispatch({ type: "RESET2" })}>Reset</button>
      <button onClick={()=>dispatch({type:"GET_POSTS"})}>GET POSTS</button>
    </div>

    
        { postdata && postdata.length>0 &&

          postdata.map(post => 
       <>
          <p> {post.title} </p>
       </>
          )}
      


    </div>
  );
}
/* const mapStateToProps=(state)=>{
  return {
      mycounter:state.count
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    counter:function(){
      dispatch({type:'INC',payload:1})
    },
    counter1:function(){
      dispatch({type:'DEC',payload:1})
    },
    reset:function(){
      dispatch({type:'RESET'})
    }
  }
} */
// / export default connect(mapStateToProps,mapDispatchToProps)(App); /
export default Counter;
