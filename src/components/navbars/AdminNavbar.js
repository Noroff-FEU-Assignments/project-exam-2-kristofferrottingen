import React, { useContext } from 'react'
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthCon from '../../context/Auth';
import { useNavigate } from 'react-router-dom';
import EvonLogo from '../../images/logo-liggende.png';

function AdminNavbar() {

    const [authState, setAuthState] = useContext(AuthCon);

    const navigate = useNavigate();

    function LogOut() {
        setAuthState(null);
        navigate("/");
    }

    return (
        <Navbar className='admin-nav'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Meny</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav  className="me-auto justify-content-end flex-grow-1 pe-3">
                                <Link className='nav-link' to="/">Hjem</Link>
                                <Link className='nav-link' to="/produkter">Produkter</Link>
                                <Link className='nav-link' to="/kontakt">Kontakt oss</Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar.Collapse>
                <Link className='nav-logo' to="/">
                <img
                    src={EvonLogo}
                    width="200"
                    className="d-inline-block align-top"
                    alt=""
                />
                </Link>
                <Navbar.Collapse className="justify-content-end">
                    {authState ? (
                            <Navbar.Text>
                                Heisann: {authState.user_nicename} | <a onClick={LogOut}>Logg ut</a>
                            </Navbar.Text>
                        ) : (
                            navigate("/")
                        )
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AdminNavbar;