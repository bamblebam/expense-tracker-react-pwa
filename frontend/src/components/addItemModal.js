import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import { connect } from 'react-redux'
import { addItem } from '../actions/itemActions'
import uuid from 'uuid'

class AddItemModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: false,
            name: '',
            price: ''
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

    handleSubmit = (event) => {
        event.preventDefault()
        const newItem = {
            id: uuid(),
            name: this.state.name,
            price: Number(this.state.price)
        }
        this.props.addItem(newItem)
        this.toggle()
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
                                <Input type='text' name='name' placeholder='Add Expense' id='expense' onChange={this.handleChange}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type='text' name='price' placeholder='Add Price' id='price' onChange={this.handleChange}></Input>
                            </FormGroup>
                            <Button color='dark' block style={{ marginTop: '2rem' }}>Add Expense</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { addItem })(AddItemModal)