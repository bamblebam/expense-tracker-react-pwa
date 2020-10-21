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
            <NavLink onClick={this.props.logout} href='#'>Logout</NavLink>
        )
    }
}

export default connect(null, { logout })(Logout)
