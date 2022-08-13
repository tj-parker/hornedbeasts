import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container'


class SelectedBeast extends Component {

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.closeModal} size='xl'>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <img class="img-fluid" src={this.props.image_url} alt={this.props.title} />
                </Modal.Body>
            </Modal>
        );
    }
}

export default SelectedBeast;