import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getItems, deleteItem } from '../actions/itemActions.js'
import DeleteButton from './DeleteButton.js'
import AddItemModal from './AddItemModal'
import EditItemModal from './EditItemModal'
import RegisterModal from './RegisterModal'

class ExpenseItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    handleDeleteClick = (id) => {
        this.props.deleteItem(id)
    }

    componentDidMount() {
        this.props.getItems()
    }

    render() {
        const items = this.props.item.items
        return (
            <Container>
                <AddItemModal></AddItemModal>
                <RegisterModal></RegisterModal>
                <ListGroup>
                    <TransitionGroup className="expenses-list">
                        {items.map(({ _id, name, price }) => (
                            < CSSTransition key={_id} classNames='fade' timeout={500} >
                                <ListGroupItem className='flex-wrap'>
                                    <div className="left">
                                        <DeleteButton handleClick={this.handleDeleteClick} id={_id}></DeleteButton>
                                        <p className='mt-3'>{name}</p>
                                    </div>
                                    <div className="right">
                                        <p className='mt-3'>{price}</p>
                                        <EditItemModal id={_id}></EditItemModal>
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

export default connect(mapStateToProps, { getItems, deleteItem })(ExpenseItem)
