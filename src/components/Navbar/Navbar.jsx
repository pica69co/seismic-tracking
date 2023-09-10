import React, { useState } from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap'

import DropdownList from './Dropdownlist/DropdownList'
import NavbarForm from './NavbarForm/NavbarForm'


const NavBar = () => {
 const [isOpen, setIsOpen] = useState(false)
 const toggleNavbar = () => setIsOpen(!isOpen)

    return (
    
        <Navbar color='dark' dark expand='md' >

            <NavbarBrand color='#ffffff'>World Seismic Activity Tracker</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                    <DropdownList />
                    <NavbarForm />
                </Nav>
            </Collapse>
        </Navbar>
    
  )
}

export default NavBar