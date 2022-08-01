import React, { Component } from 'react';
import list from '../data.json';
import HornedBeast from './HornedBeast';
import '../App.css';
import Modal from 'react-bootstrap/Modal';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let beasts = [];
        for (let i = 0; i < list.length; i++) {
            beasts.push(
                    <HornedBeast
                        title={list[i].title}
                        imageUrl={list[i].image_url}
                        description={list[i].description} 
                    />
            )
        }   
        return (
           <div>{beasts}</div>
        )
       
    }
}

export default Main;