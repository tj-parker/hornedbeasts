import React, { Component } from 'react';

class HornedBeast extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                 <h2>{this.props.title}</h2>
                <img 
                    src={this.props.imageUrl}
                    alt={this.props.description}
                    title={this.props.title} />
                <p>{this.props.description}</p>
            </div>
        )   
    }
}

export default HornedBeast;