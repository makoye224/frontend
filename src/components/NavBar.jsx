import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaSignInAlt, FaSignOutAlt, FaUser, FaPowerOff, FaEnvelope, FaShoppingBasket, FaCartArrowDown, FaCartPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
      </Navbar.Brand>
      <Navbar.Brand as={Link} to="/" style={{ fontFamily: 'boldblaster' }}>
        <h1 style={{color: "#FFFFFF"}}>DIGITAL LAB</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"style={{backgroundColor: "#520B4D"}} />
      <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="me-aut"style={{color: "#FFFFFF"}} >
          <Nav.Link as={Link} to="/" style={{color: "#A6A7A8"}} >Home</Nav.Link>
          <Nav.Link as={Link} to="/about" style={{color: "#A6A7A8"}}>About</Nav.Link>
          <Nav.Link as={Link} to="/projects" style={{color: "#A6A7A8"}}>Projects</Nav.Link>
          <Nav.Link as={Link} to="/contacts" style={{color: "#A6A7A8"}}>Contacts</Nav.Link>
          <Nav.Link as={Link} to="/socialmedia" style={{color: "#A6A7A8"}}>Social Media</Nav.Link>
          {/*<NavDropdown title="More" id="collasible-nav-dropdown" style={{color: "#A6A7A8"}}>
            <NavDropdown.Item as={Link} to="/socialmedia">Social Media</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>*/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
