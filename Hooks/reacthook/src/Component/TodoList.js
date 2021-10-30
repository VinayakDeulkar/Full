import React,{useState,useRef} from 'react'

export default function TodoList() {
    const [Toggle, setToggle] = useState(true)
    const [userid, setuserid] = useState('')
    const userTitle = useRef('')
    const userBody = useRef('')
    const [Todo, setTodo] = useState( [{"id":1,"title":"A","body":"------"},
    {"id":2,"title":"B","body":"******"}])
    const addTask=()=>{
        if(userTitle!=='' && userBody!==''){
            
            if(Toggle===false){
                const UpdateList=Todo.find(item=>item.id===userid);
                UpdateList.title=userTitle.current.value;
                UpdateList.body=userBody.current.value;
                setToggle(true)
            }
            else{
            const userInput={
                id:Math.random(),
                title:userTitle.current.value,
                body:userBody.current.value
            }
            setTodo([...Todo,userInput])
        }
            
            userTitle.current.value='';
            userBody.current.value=''
        }
        else{
            alert("Enter Data");
        }
    }
    
    const editItem=(key)=>{
        const updatedList=Todo.find(item=>item.id===key)
        setuserid(updatedList.id)
        userBody.current.value=updatedList.body
        userTitle.current.value=updatedList.title
        setToggle(false)
    }
    const deleteItem=(key)=>{
        console.log(key);
        const updateList = Todo.filter(item => item.id !== key); 
        setTodo(updateList)
    }
    return (
        <div>
            <div >
               
               <p className="h1 text-center">Todo List</p>
               <p className="h3 text-center">Add To Do</p>
               <div className="text-center row text-center ">
                   <div className="col-lg-2"></div>
                   <input type="text" id="title" className="form-control col-lg-3 ml-2"  placeholder="Title"  ref={userTitle}   />
                   <input type="text" id="body" className="form-control col-lg-3 ml-2"  placeholder="Body" ref={userBody}  />
                   {
                       Toggle ? <button type="submit" onClick={addTask} className="btn btn-info col-lg-1 ml-2"><span className="fa fa-plus-circle"></span></button> 
                       : <button type="submit" onClick={addTask} className="btn btn-success col-lg-1 ml-2"><span className="fas fa-edit"></span></button>
                   }
                   
               </div>
               <div className="text-center mt-4 row  text-center">
                   <div className="col-lg-2"></div>
                   <div className="col-lg-6 border">
                       <table>
                           <thead>
                           <tr>
                               <td width="200px">S.no</td>
                               <td width="300px">Title</td>
                               <td width="400px">Body</td> 
                                <td width="400px"></td> 
                           </tr></thead>
                           <tbody>
                           {Todo.map((item)=>
                           <tr key={item.id}>
                               <td >{item.id}</td>
                               <td>{item.title}</td>
                               <td >{item.body}</td> 
                               <td><button className="btn btn-success mr-2" onClick={()=>editItem(item.id)}><span className="fas fa-edit"></span></button>  
                               <button className="btn btn-danger" onClick={()=>deleteItem(item.id) }> <span className="fas fa-trash"></span></button></td>   
                           </tr>
                           )}</tbody>
                       </table>
                   </div>
               </div>
           </div>
        </div>
    )
}
