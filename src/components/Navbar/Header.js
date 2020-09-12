import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

import './Header.css';

export default function Header(props){
        
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    <img src="https://cdn.glitch.com/e084a29d-974e-4aae-8ae1-87d2ebc2db5f%2Ffavicon.png?v=1595909292602" />
                </NavbarBrand>
    
                <NavbarToggler onClick={toggle} />
    
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Books</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Log in</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Sign up</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    ); 
    
}

