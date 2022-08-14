import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class Filter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="select">
                <Form.Select value={this.props.horns} onChange={this.props.filterHorns}>
                    <option value="">All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="100">100</option>
                </Form.Select>
            </div>

        )
    }

}

export default Filter;