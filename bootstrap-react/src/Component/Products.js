import React, { Component } from 'react'
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
const client=axios.create({
    baseURL:"http://localhost:3001/product"
})

export class Products extends Component {
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
                {this.state.Prodata.map(pro=>
                    <Card  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`/images/${pro.image}`}/>
                    <Card.Body>
                      <Card.Title> {pro.pname}</Card.Title>
                      <Card.Text>
                        {pro.price}
                      </Card.Text>
                      <Button variant="primary">Buy</Button>
                    </Card.Body>
                  </Card>
                    )}
            </div>
        )
    }
}

export default Products
