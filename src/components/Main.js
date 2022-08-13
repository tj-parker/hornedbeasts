import React, { Component } from 'react';
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
                {this.state.thisBeast.map(value => (
                    <div id="beast">
                        <button onClick={this.props.handleClick}>Open</button>
                        <HornedBeast 
                      title={value.title}
                      image_url={value.image_url}
                      description={value.description}
                       />
                       
                    </div>
                    )
                )}
            </div>
        )

    }
}

export default Main;