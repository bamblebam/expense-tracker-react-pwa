import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import { connect } from 'react-redux'
import { addItem } from '../actions/itemActions'

class AddItemModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: false,
            name: '',
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Button color='dark' style={{ marginBottom: '2rem', marginTop: '2rem' }} onClick={this.toggle}>Add Expense</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add Expense</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for='expense'>Expense</Label>
                                <Input type='text' name='name' placeholder='Add Expense' id='expense' onChange={this.handleChange}></Input>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default connect()(AddItemModal)