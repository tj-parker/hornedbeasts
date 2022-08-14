import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
import '../App.css';
import Filter from './Filter';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thisBeast: this.props.beasts,
            filterBeasts: [],
            horns: ''
        };
    }

    filterHorns = (e) => {
        let numOfHorns = e.target.value;
        if(numOfHorns==='') {
          this.setState({
            horns: numOfHorns,
            filterBeasts: this.props.beasts
            
          })
        } else {
          this.setState({
            horns: numOfHorns,
            filterBeasts: this.props.beasts.filter(val => {
              return val.horns == e.target.value;
            })
          })
        }
      }
    
    render() {
 
        return (
            <div id='main'>
                <Filter filterHorns={this.filterHorns} horns={this.state.horns} />
                {this.state.filterBeasts.map(value => (
                    <div id="beast" onClick={() => this.props.handleClick(value)}>
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