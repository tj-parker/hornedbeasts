import { Component } from 'react';

class Main extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <HornedBeast>
                    <h2>UniWhal</h2>
                    <img 
                        src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" 
                        alt="A unicorn and a narwhal nuzzling their horns"
                        title="UniWhal" />
                    <p>A unicorn and a narwhal nuzzling their horns</p>
                </HornedBeast>

                <HornedBeast>
                    <h2>Rhino Family</h2>
                    <img 
                        src="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" 
                        alt="Parent rhino with two babies"
                        title="Rhino Family" />
                    <p>Parent rhino with two babies</p>
                </HornedBeast>
            </div>
        )
    
    }
}

export default Main;