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
                <Button className='delete-btn' color='danger' size='sm' onClick={() => this.props.handleClick(this.props.id)}>X</Button>
            </div >
        )
    }
}
