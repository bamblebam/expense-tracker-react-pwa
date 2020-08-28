import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import AddButton from './AddButton.js'
import DeleteButton from './DeleteButton.js'
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

    handleAddClick = () => {
        const name = prompt('Enter Item')
        const price = Number(prompt('Enter Price'))
        if (name && price) {
            this.setState(state => ({
                items: [...state.items, { id: uuid(), name, price }]
            }))
        }
    }

    handleDeleteClick = (id) => {
        this.setState(state => ({
            items: state.items.filter(item => item.id !== id)
        }))
    }

    render() {
        const { items } = this.state
        return (
            <Container>
                <AddButton handleClick={this.handleAddClick}></AddButton>

                <ListGroup>
                    <TransitionGroup className="expenses-list">
                        {items.map(({ id, name, price }) => (
                            < CSSTransition key={id} classNames='fade' timeout={500} >
                                <ListGroupItem className='flex-wrap'>
                                    <DeleteButton handleClick={this.handleDeleteClick} id={id}></DeleteButton>
                                    <p className='mt-3'>{name}</p>
                                    <p className='mt-3'>{price}</p>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>

            </Container >
        )
    }
}
