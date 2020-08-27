import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'

export default class ExpenseItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [
                { id: uuid(), name: 'Milk', price: 45 }
            ]
        }
    }

    render() {
        const { items } = this.state
        return (
            <Container>
                <Button color="dark" style={{ marginBottom: '2rem', marginTop: '2rem' }} onClick={() => {
                    const name = prompt('Enter Item')
                    const price = Number(prompt('Enter Price'))
                    if (name && price) {
                        this.setState(state => ({
                            items: [...this.state.items, { id: uuid(), name, price }]
                        }))
                    }
                }}>Add Item</Button>
            </Container>
        )
    }
}
