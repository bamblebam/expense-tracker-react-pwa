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
                <Button className='delete-btn' color='danger' size='sm' onclick={() => this.props.handleClick()}></Button>
            </div>
        )
    }
}
