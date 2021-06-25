import React from "react";
import { Link } from "gatsby";
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import logo from '../images/logo.svg'

import location from '../images/Location.svg'
import kiyvstar from '../images/kiyvstar.svg'
import vodaphone from '../images/Vodafone-Logo 1.svg'
import life from '../images/life.svg'
import mail from '../images/Message.svg'




export const Header = (props) => {
    // console.log(props.menu)
    return <Navbar expand="lg">
        <Navbar.Brand as={Link} to="/"><img src={logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-left-auto nav-wrapper">
                {props.menu}
            </Nav>

            <div className="btnWrap row">
                <Dropdown>
                    <div className="dropWrap phones">
                        <Dropdown.Toggle className="phones" id="dropdown-basic">

                        </Dropdown.Toggle>
                        <Dropdown.Item className="firstItm phoneNum" href={props.kiyvstar.url}> {props.kiyvstar.title}</Dropdown.Item>
                    </div>


                    <Dropdown.Menu>

                        <Dropdown.Item className="phoneNum" href={props.vodafone.url}><img src={vodaphone} alt="life" />  {props.vodafone.title}</Dropdown.Item>
                        <Dropdown.Item className="phoneNum" href={props.life.url}> <img src={life} alt="life" /> {props.life.title}</Dropdown.Item>

                        <Dropdown.Item className="mailLink" href={props.mail.url}> <img src={mail} alt="mail" /> {props.mail.title}</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
                <div className="lang">
                    <Link activeClassName="active" to="/"> UA </Link>
                    <Link activeClassName="active" to="/ru"> RU </Link>

                </div>
                <a href='#conatctForm' className={'pop headerPop'}> Залишити заявку </a>

            </div>

        </Navbar.Collapse>
    </Navbar>
}

