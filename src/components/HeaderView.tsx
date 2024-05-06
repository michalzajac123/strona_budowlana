import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";

export const HeaderView = () => {
  return (
    // <Navbar sticky="top" collapseOnSelect expand="lg" className="custom-navbar">
    //   <Container className="d-flex justify-content-between">
    //     <Navbar.Brand href="#home" className="logo">
    //       JHONTRAKTOR
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav"className="d-flex">
    //       <Nav className="me-auto">
    //         <Nav.Link className="nav-items" href="#Home">Home</Nav.Link>
    //         <Nav.Link className="nav-items" eventKey={2} href="#AboutUs">About Us</Nav.Link>
    //         <Nav.Link className="nav-items" eventKey={2} href="#Service">{" "}Service{" "} </Nav.Link>
    //         <Nav.Link className="nav-items" eventKey={2} href="#Project">{" "}Project{" "}</Nav.Link>
    //       </Nav>

    //       <Button className='nav-item-button'>Contact us</Button>{" "}
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <Navbar collapseOnSelect expand="lg" className="custom-navbar fixed-top ">
      <Container className="d-flex justify-content-between">
      <Navbar.Brand href="#home" className="logo">JHONTRAKTOR</Navbar.Brand>
        <Navbar.Toggle className="red" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-items" href="#Home">Home</Nav.Link>
            <Nav.Link className="nav-items" eventKey={2} href="#AboutUs">About Us</Nav.Link>
            <Nav.Link className="nav-items" eventKey={2} href="#Service">{" "}Service{" "} </Nav.Link>
            <Nav.Link className="nav-items" eventKey={2} href="#Project">{" "}Project{" "}</Nav.Link>
            
          </Nav>
          <Button className='nav-item-button'>Contact us</Button>{" "}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderView;
