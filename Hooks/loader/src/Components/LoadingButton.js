import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function LoadingButton() {
    const dispatch=useDispatch()
    return (
        <div>
            <Button  variant="outlined" onClick={()=>dispatch({type:'GET_POSTS'})}>Load Data</Button>
        </div>
    )
}
