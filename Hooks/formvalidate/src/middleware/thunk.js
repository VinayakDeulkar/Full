
export default function Validate(){
    return(dispatch,getState)=>{
        
        const  mydata=getState()
        console.log(mydata);
        console.log("hello")
        dispatch({type:'check',payload:'hello'})
    }
}