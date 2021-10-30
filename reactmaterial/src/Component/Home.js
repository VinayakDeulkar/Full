import React, { Component } from 'react'
import Button from '@mui/material/Button';

export class Home extends Component {
    render() {
        return (
            <div>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </div>
        )
    }
}

export default Home
