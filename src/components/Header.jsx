import React from "react";
import { Link } from "gatsby";
import { Navbar, Nav, Button } from 'react-bootstrap';




export const Header = (props) => {
    console.log(props.menu)
    return <Navbar expand="lg">
        {/*<Navbar.Brand as={Link} to="/"><img src={logo} alt="Logo" /></Navbar.Brand>*/}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto nav-wrapper">
                {props.menu}
            </Nav>

            <div className="btnWrap row">

                <div className="lang">
                    <Link activeClassName="active" to="/"> UA </Link>
                    <Link activeClassName="active" to="/ru"> RU </Link>

                </div>
            </div>
        </Navbar.Collapse>
    </Navbar>
}

