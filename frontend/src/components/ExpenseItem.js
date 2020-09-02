import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getItems } from '../actions/itemActions.js'
import AddButton from './AddButton.js'
import DeleteButton from './DeleteButton.js'

class ExpenseItem extends Component {
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

    componentDidMount() {
        this.props.getItems()
    }

    render() {
        const { items } = this.props.item
        return (
            <Container>
                <AddButton handleClick={this.handleAddClick}></AddButton>

                <ListGroup>
                    <TransitionGroup className="expenses-list">
                        {items.map(({ id, name, price }) => (
                            < CSSTransition key={id} classNames='fade' timeout={500} >
                                <ListGroupItem className='flex-wrap'>
                                    <div className="left">
                                        <DeleteButton handleClick={this.handleDeleteClick} id={id}></DeleteButton>
                                        <p className='mt-3'>{name}</p>
                                    </div>
                                    <div className="right">
                                        <p className='mt-3'>{price}</p>
                                    </div>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>

            </Container >
        )
    }
}

ExpenseItem.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems })(ExpenseItem)
