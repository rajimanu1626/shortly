import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {ReactComponent as Logo} from '../../assets/images/logo.svg';


import './navigation.style.scss';


const NavBar=()=>{
    return(
        <Navbar className="nav-bar" expand="lg">
        <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Features</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#link">Resources</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#link" className="sign-up">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      
    )
}

export default NavBar;