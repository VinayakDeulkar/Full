export default function proData(){
    return(dispatch)=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            dispatch({type:'pdata',payload:data})
        })
    }
}
