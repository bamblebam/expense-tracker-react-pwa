import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class DeleteButton extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Button className='delete-btn mt-2 mr-2' color='danger' onClick={() => this.props.handleClick(this.props.id)}>Delete</Button>
            </div >
        )
    }
}
