import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaSignInAlt, FaSignOutAlt, FaUser, FaPowerOff, FaEnvelope, FaShoppingBasket, FaCartArrowDown, FaCartPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
      </Navbar.Brand>
      <Navbar.Brand as={Link} to="/" style={{ fontFamily: 'boldblaster' }}>
        <h3>Adam Isack Nzinza</h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
          <NavDropdown title="More" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/socialmedia">Social Media</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
