// import "./../styles/navbar.css";
import { useState } from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";


export default function Header() {
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    // <nav className="navbar">
    //   <h2 className="logo">Murugavelraj.dev</h2>

    //   <ul>
    //     <li><a href="#hero">Home</a></li>
    //     <li><a href="#projects">Projects</a></li>
    //     <li><a href="#skills">Skills</a></li>
    //     <li><a href="#experience">Experience</a></li>
    //     <li><a href="#contact">Contact</a></li>
    //   </ul>
    // </nav>
    <Navbar key={"lg"} expand={"lg"} sticky="top" className="bg-body-tertiary mb-3">
    <Container>
      <Navbar.Brand href="#"><h2 className="logo">Murugavelraj.dev</h2></Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"lg"}`}  onClick={handleShow}/>
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${"lg"}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${"lg"}`}
        placement="end"
         show={show}
          onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"lg"}`}>
            <h2 className="logo">Murugavelraj.dev</h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1">
          <Nav.Link href="#hero" onClick={handleClose}>Home</Nav.Link>
          <Nav.Link href="#projects" onClick={handleClose}>Projects</Nav.Link>
          <Nav.Link href="#skills" onClick={handleClose}>Skills</Nav.Link>
          <Nav.Link href="#experience" onClick={handleClose}>Experience</Nav.Link>
          <Nav.Link href="#contact" onClick={handleClose}>Contact</Nav.Link>
          </Nav>
         
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  );
}
