import { Card, CardMedia, Grid,Typography,CardContent,CardActions,Button } from '@mui/material'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {connect} from "react-redux"
function Product(props) {
    const [pro, setPro] = useState({userData:[]});
    useEffect(()=>{
        const URL="http://localhost:3001/product"
        axios.get(URL)
        .then(res=>{
            setPro({...pro,userData:res.data})
        })
        let arr=[]
         arr=JSON.parse(localStorage.getItem('mycart'));
    },[])
    return (
        <div>
            
            <Grid container>
                <Grid item lg={1}/>
                <Grid item container lg={10}>
                {pro.userData.map((ele)=>
                    <Grid key={ele.id} item className="pad" lg={3}>
                        
                            <Card >
                            <CardMedia
                                component="img"
                                height="200"
                                width="300"
                                image={`/images/${ele.image}`}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {ele.pname}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Price: {ele.price}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" size="small" onClick={()=>props.addtask(ele.id)} >Add to Cart</Button>
                            </CardActions>
                        </Card>
                        
                        
                    </Grid>
                    )}
                </Grid>
                <Grid item lg={1}/><Grid item lg={2}/>
                    <Grid item lg={10}>
                        <Button variant="contained" size="small" onClick={()=>props.clear()}>Clear</Button>
                    </Grid>
            </Grid>
        </div>
    )
}

const MapDispatchProps=(dispatch)=>{
    return{
        addtask:function(key){
            if(localStorage.getItem('mycart')!=undefined){
                let arr=JSON.parse(localStorage.getItem('mycart'));
                console.log(arr);
                if(arr.includes(key)){
                    alert("product already added")
                }
                else{
                    arr.push(key)
                localStorage.setItem('mycart',JSON.stringify(arr))
                dispatch({type:"defind",payload:key})                }
            }
            else{
                let arr=[]
                arr.push(key)
                localStorage.setItem('mycart',JSON.stringify(arr))
                dispatch({type:"new",payload:key})
            }
        },
        clear:function(){
            localStorage.clear()
            dispatch({type:"clear"})
        }
    }
}

export default connect(null,MapDispatchProps) (Product)