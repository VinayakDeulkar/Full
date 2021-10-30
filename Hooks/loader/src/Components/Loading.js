import React from 'react'
import image from '../Gif/loading-buffering.gif'
import { useDispatch, useSelector } from 'react-redux'

export default function Loading() {
    const loading=useSelector((state)=>state.loader)
    if(!loading) return null;
    return (
        <div className="loader-container">
            <div className="loader">
            <img src={image} />
            </div>
                
        </div>
    )
}
