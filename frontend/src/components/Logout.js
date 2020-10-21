import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/authAction'
import PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, NavLink, Alert } from 'reactstrap';

export class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    }
    render() {
        return (
            <Button color='dark' style={{ marginBottom: '2rem', marginTop: '2rem' }} onClick={this.props.logout}>Logout</Button>
        )
    }
}

export default connect(null, { logout })(Logout)
