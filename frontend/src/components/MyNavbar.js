import React, { Component, Fragment } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Container } from 'reactstrap';
import RegisterModal from './RegisterModal'
import Logout from './Logout'
import LoginModal from './LoginModal'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class MyNavbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        const { isAuthenticated, user } = this.props.auth
        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className='navbar-text mr-3'>
                        <strong>{user ? `${user.username}` : ''}</strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout></Logout>
                </NavItem>
            </Fragment>
        )
        const guestLinks = (
            <Fragment>
                <NavItem>
                    <RegisterModal></RegisterModal>
                </NavItem>
                <NavItem>
                    <LoginModal></LoginModal>
                </NavItem>
            </Fragment>
        )
        return (
            <div>
                <Navbar color='dark' dark expand='sm' className='mb-5'>
                    <Container>
                        <NavbarBrand href='#'>Expense Tracker</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className='ml-auto' navbar>
                                {isAuthenticated ? authLinks : guestLinks}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(MyNavbar)