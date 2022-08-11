import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends Component {

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.image_url} alt={this.props.title} />
                </Modal.Body>
            </Modal>
        )
    }
}

export default SelectedBeast;