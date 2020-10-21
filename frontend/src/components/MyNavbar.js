import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Container } from 'reactstrap';
import RegisterModal from './RegisterModal'
import Logout from './Logout'
import LoginModal from './LoginModal'

export default class MyNavbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <div>
                <Navbar color='dark' dark expand='sm' className='mb-5'>
                    <Container>
                        <NavbarBrand href='#'>Expense Tracker</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className='ml-auto' navbar>
                                <NavItem>
                                    <NavLink href='#'>bam</NavLink>
                                </NavItem>
                                <NavItem>
                                    <RegisterModal></RegisterModal>
                                </NavItem>
                                <NavItem>
                                    <LoginModal></LoginModal>
                                </NavItem>
                                <NavItem>
                                    <Logout></Logout>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
