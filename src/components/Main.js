import React, { Component } from 'react';
import list from '../data.json';
import HornedBeast from './HornedBeast';

class Main extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <HornedBeast />
                    
                <HornedBeast />
            </div>
        )
    
    }
}

export default Main;