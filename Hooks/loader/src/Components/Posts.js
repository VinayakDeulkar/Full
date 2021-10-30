import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
export default function Posts() {
    const postData=useSelector((state)=>state.postData )
    console.log(postData);
    return (
        <div>
            {postData &&postData.length>0&& 
                postData.map(post=>
                    <>
                    <p>{post.title}</p>
       </>)}
        </div>
    )
}
