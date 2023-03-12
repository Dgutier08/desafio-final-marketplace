import { Link } from 'react-router-dom';
import { Navbar, Container } from "react-bootstrap";
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
                <Link to="/Contact" className="nav-link text-white">
                  📙 Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/registrar" className="nav-link text-white">
                  📝 Registrar
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
