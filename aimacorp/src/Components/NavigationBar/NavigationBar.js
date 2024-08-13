import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavigationBar.css'

import {ReactComponent as Logo} from '../../Images/logo.svg';

function NavigationBar() {
  return (
    <Navbar className="bg-body-tertiary" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="/">
        <Logo style={{width:'100px', height: 'min-content'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/aboutus'>About us</Nav.Link>
            <Nav.Link href='/offer'>Offer</Nav.Link>
            <Nav.Link href='/projects'>Projects</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;