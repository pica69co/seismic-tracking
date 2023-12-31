import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';

import DropdownList from './DropdownList';
import NavBarForm from './NavbarForm';

const brandStyle = { color: '#1a1a1a', fontWeight: 'bold' };

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" dark expand="md">
      <NavbarBrand style={brandStyle}>World Seismic Tracking</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <DropdownList />
          <NavBarForm />
        </Nav>
      </Collapse>
    </Navbar>
  );
}
