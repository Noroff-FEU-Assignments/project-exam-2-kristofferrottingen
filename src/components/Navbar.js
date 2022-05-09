import React from 'react'
import { Navbar, Nav, Container, Offcanvas, Form, FormControl, Button } from 'react-bootstrap';
import EvonLogo from '../images/logo-liggende.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navs() {
  return (
    <Navbar variant='dark'  expand="lg">
        <Container>
            <Navbar.Brand href="/">
              <img
                src={EvonLogo}
                width="200"
                className="d-inline-block align-top"
                alt=""
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse bg="dark" id="basic-navbar-nav">
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">Meny</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Hjem</Nav.Link>
                  <Nav.Link href="/produkter">Produkter</Nav.Link>
                  <Nav.Link href="/kontakt">Kontakt oss</Nav.Link>
                  <Nav.Link href="/admin">
                    <FontAwesomeIcon className='icons' icon={faCircleUser}/>
                  </Nav.Link>
                  <Nav.Link href='/cart'>
                    <FontAwesomeIcon className='icons' icon={faCartShopping}/>
                  </Nav.Link>
                </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Navbar.Collapse>
            <Nav className="me-auto web-nav">
              <Nav.Link href="/">Hjem</Nav.Link>
              <Nav.Link href="/produkter">Produkter</Nav.Link>
              <Nav.Link href="/kontakt">Kontakt oss</Nav.Link>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Nav.Link href="/admin">
                <FontAwesomeIcon className='icons fa-1' icon={faCircleUser}/>
              </Nav.Link>
              <Nav.Link href='/cart'>
                <FontAwesomeIcon className='icons' icon={faCartShopping}/>
              </Nav.Link>
            </Nav>  
        </Container>
    </Navbar>
  )
}

export default Navs;