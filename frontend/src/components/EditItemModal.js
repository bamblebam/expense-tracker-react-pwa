import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import { connect } from 'react-redux'
import { updateItem } from '../actions/itemActions'

class EditItemModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: false,
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
        const NewPrice = {
            price: Number(this.state.price)
        }
        const id = this.props.id
        this.props.updateItem(id, NewPrice)
        this.toggle()
    }

    render() {
        return (
            <div>
                <Button color='dark' className="mt-2 ml-2" onClick={this.toggle}>Update Expense</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Update Expense</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Input type='text' name='price' placeholder='Update Price' id='price' onChange={this.handleChange}></Input>
                            </FormGroup>
                            <Button color='dark' block style={{ marginTop: '2rem' }}>Update Expense</Button>
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

export default connect(mapStateToProps, { updateItem })(EditItemModal)