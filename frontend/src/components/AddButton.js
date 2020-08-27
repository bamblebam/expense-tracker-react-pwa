import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import uuid from 'uuid'

export default class AddButton extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Button color="dark" style={{ marginBottom: '2rem', marginTop: '2rem' }} onClick={() => this.props.handleClick()}>Add Item</Button>
            </div>
        )
    }
}
