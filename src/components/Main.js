import React, { Component } from 'react';
import list from '../data.json';
import HornedBeast from './HornedBeast';
import '../App.css';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thisBeast: this.props.beasts
        };
    }
    render() {
 
        return (
            <div id='main'>
                {this.state.thisBeast.map(value => 
                    <HornedBeast 
                      handleClick={this.props.handleClick}
                      title={value.title}
                      image_url={value.image_url}
                      description={value.description} />
                )}
            </div>
        )

    }
}

export default Main;