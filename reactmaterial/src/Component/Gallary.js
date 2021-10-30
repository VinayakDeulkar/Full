import React, { Component } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios';
const client=axios.create({
    baseURL:"http://localhost:3001/images"
})
export class Gallary extends Component {
    constructor(props){
        super(props);
        this.state={
            Prodata:[]
        }
    }
    componentDidMount=async()=>{
        try{
            const res=await client.get();
            this.setState({Prodata:res.data})
        }
        catch(err){
            console.log(err);
        }
    }
    render() {
        return (
            <div>
                 <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                 {this.state.Prodata.map(pro=>
                        <ImageListItem key={pro.id}>
                        <img
                            src={`images/${pro.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`images/${pro.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={pro.title}
                            loading="lazy"
                        />
                        </ImageListItem>
                    )}
                    </ImageList>
                
            </div>
        )
    }
}

export default Gallary
