import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavigationBar() {
  return (
    <Navbar className="bg-body-tertiary" expand="lg">
      <Container>
        <Navbar.Brand href="/">
        <img
          src='https://t5b34d.webwave.dev/lib/t5b34d/Logo-lsonldnr.png'
          height='50'
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
         />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/aboutus'>About us</Nav.Link>
            <Nav.Link href='/offer'>Offer</Nav.Link>
            <Nav.Link href='/prices'>Prices</Nav.Link>
            <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;