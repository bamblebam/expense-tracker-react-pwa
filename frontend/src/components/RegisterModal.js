import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, NavLink, Alert } from 'reactstrap';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addItem } from '../actions/itemActions'
import { register } from '../actions/authAction'

class RegisterModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: false,
            username: '',
            email: '',
            password: '',
            msg: null
        }
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props
        if (error !== prevProps.error) {
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg })
            }
            else {
                this.setState({ msg: null })
            }
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
        const { username, email, password } = this.state
        const newUser = {
            username,
            email,
            password
        }
        this.props.register(newUser)
    }

    render() {
        return (
            <div>
                {/* <NavLink onClick={this.toggle} href='#'>Register</NavLink> */}
                <Button color='dark' style={{ marginBottom: '2rem', marginTop: '2rem' }} onClick={this.toggle}>Register</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add Expense</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? <Alert color='danger'>{this.state.msg}</Alert> : null}
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Input type='text' name='username' placeholder='username' id='username' onChange={this.handleChange}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type='text' name='email' placeholder='email' id='email' onChange={this.handleChange}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type='password' name='password' placeholder='password' id='password' onChange={this.handleChange}></Input>
                            </FormGroup>
                            <Button color='dark' block style={{ marginTop: '2rem' }}>Register</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(mapStateToProps, { register })(RegisterModal)