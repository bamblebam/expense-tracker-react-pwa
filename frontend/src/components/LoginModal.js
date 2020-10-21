import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, NavLink, Alert } from 'reactstrap';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../actions/authAction'
import { clearErrors } from '../actions/errorAction'

class LoginModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: false,
            email: '',
            password: '',
            msg: null
        }
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props
        if (error !== prevProps.error) {
            if (error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg })
            }
            else {
                this.setState({ msg: null })
            }
        }
        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggle()
            }
        }
    }

    toggle = () => {
        this.props.clearErrors()
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
        const { email, password } = this.state
        const user = {
            email,
            password
        }
        this.props.login(user)
    }

    render() {
        return (
            <div>
                {/* <NavLink onClick={this.toggle} href='#'>Register</NavLink> */}
                <Button color='dark' style={{ marginBottom: '2rem', marginTop: '2rem' }} onClick={this.toggle}>Login</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add Expense</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? <Alert color='danger'>{this.state.msg}</Alert> : null}
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Input type='text' name='email' placeholder='email' id='email' onChange={this.handleChange}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type='password' name='password' placeholder='password' id='password' onChange={this.handleChange}></Input>
                            </FormGroup>
                            <Button color='dark' block style={{ marginTop: '2rem' }}>Login</Button>
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

export default connect(mapStateToProps, { login, clearErrors })(LoginModal)