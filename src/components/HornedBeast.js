import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import '../App.css';

class HornedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
        };

    }



    handleClick = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }

    render() {
        return (
            <Container>
                <Card>
                    <Card.Img variant="top"
                        src={this.props.imageUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                        <Button variant="secondary" onClick={this.handleClick}>💙 Favorites: {this.state.clicks}</Button>
                    </Card.Body>

                </Card>
            </Container>

        )
    }
}

export default HornedBeast;