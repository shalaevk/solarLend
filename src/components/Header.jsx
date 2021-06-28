import React, { useState } from "react";
import { Link } from "gatsby";
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import classNames from "classnames";
import logo from '../images/logo.svg'
import { Social } from './social/Social'

import location from '../images/Location.svg'
import kiyvstar from '../images/kiyvstar.svg'
import vodaphone from '../images/vodafonelogo.svg'
import life from '../images/life.svg'
import mail from '../images/Message.svg'
import phonecall from '../images/phonecall.svg'





export const Header = (props) => {



    const [cls, setCls] = useState("");

    let setClass = () => {
        if (cls === "") {
            setCls("active")
        }
        else setCls("")
    }

    return <Navbar expand="lg">
        <Navbar.Brand as={Link} to="/"><img className="img-fluid logoImg" src={logo} alt="Logo" /></Navbar.Brand>

        <div className="mobphone">
            <Dropdown>
                <div className="dropWrap phones">
                    <Dropdown.Toggle className="phones" id="dropdown-basic">

                        <div className="secShadow">
                            <img className="phonecall" src={phonecall} />
                        </div>

                    </Dropdown.Toggle>

                    <Dropdown.Item className="firstItm deckwiev phoneNum" href={props.kiyvstar.url}> {props.kiyvstar.title}</Dropdown.Item>
                </div>


                <Dropdown.Menu>
                    <Dropdown.Item className=" mobview phoneNum" href={props.kiyvstar.url}><img src={kiyvstar} alt="kiyvstar" />  {props.kiyvstar.title}</Dropdown.Item>
                    <Dropdown.Item className="phoneNum" href={props.vodafone.url}><img src={vodaphone} alt="life" />  {props.vodafone.title}</Dropdown.Item>
                    <Dropdown.Item className="phoneNum" href={props.life.url}> <img src={life} alt="life" /> {props.life.title}</Dropdown.Item>

                    <div className="mobaddress dropdown-item" > <img src={location} /> <span>{props.adress}</span> </div>

                    <Dropdown.Item className="mailLink" href={props.mail.url}> <img src={mail} alt="mail" /> {props.mail.title}</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
        </div>


        <Navbar.Toggle onClick={setClass} aria-controls="basic-navbar-nav">

            <div className={classNames("headertopnav", cls)}>
                <div className="headertopnavbtn">
                    Меню
                </div>
            </div>

        </Navbar.Toggle>




        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-left-auto nav-wrapper">

                <div className="lang mobLang">
                    <Link activeClassName="active" to="/"> UA </Link>
                    <Link activeClassName="active" to="/ru"> RU </Link>

                </div>

                {props.menu}

                <div className="mobSocialWrap">
                    <div className="phonesMenuWrap">
                        <Dropdown.Item className="phoneNum" href={props.kiyvstar.url}><img src={kiyvstar} alt="kiyvstar" />  {props.kiyvstar.title}</Dropdown.Item>
                        <Dropdown.Item className="phoneNum" href={props.vodafone.url}><img src={vodaphone} alt="life" />  {props.vodafone.title}</Dropdown.Item>
                        <Dropdown.Item className="phoneNum" href={props.life.url}> <img src={life} alt="life" /> {props.life.title}</Dropdown.Item>
                    </div>


                    <Social lang={props.lang} />
                </div>

            </Nav>

            <div className="btnWrap row">
                <Dropdown className="desckPhone">
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
                <div className="lang descLang">
                    <Link activeClassName="active" to="/"> UA </Link>
                    <Link activeClassName="active" to="/ru"> RU </Link>

                </div>
                <a href='#conatctForm' className={'pop headerPop'}>
                    {props.lang === "uk" ? "Залишити заявку " : "Оставить заявку"}
                </a>

            </div>

        </Navbar.Collapse>
    </Navbar>
}

