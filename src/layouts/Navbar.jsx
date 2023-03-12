import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Container } from "react-bootstrap";
//import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
//import RegistrationForm from "./RegistrationForm";

export default function Navigation() {
  return (
    <>
      <Navbar bg="danger" expand="lg">
        <Container>
          <Navbar.Brand href="#"> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className='nav-link text-white'>
                  🏠 Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/perfil" className="nav-link text-white">
                  🔑 perfil
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/registrar" className="nav-link text-white">
                  🔑 registrar
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link text-white">
                  🔑 Login
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link to="/LoginOFf" className="nav-link text-white">
                Login Off 🍰
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
