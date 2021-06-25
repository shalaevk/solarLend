import React from "react";
import { Link } from "gatsby";
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';

import * as cl from './Footer.module.css'


import logo from '../images/logo.svg'
import decor from '../images/decorFooter.png'
import faceBook from '../images/faceBook-black.svg'
import youTube from '../images/youTube.svg'
import insta from '../images/instagram.svg'


export const Footer = (props) => {
   return <footer className={cl.footer}>
      <div className={cl.logo}>
         <img src={logo} />
      </div>
      <div className={cl.footerMiddle}>
         <div className={cl.footerMiddleLeft}>
            {props.menu}
         </div>
         <div className={cl.footerMiddleRight}>
            <img className={cl.decor} src={decor} alt="decor" />
            <div className={cl.footerText}>
               Приєднуйся до соціальних мереж
            </div>
            <div className={cl.decorLine}></div>
            <div className={cl.social}>
               <a href="#"> <img src={faceBook} alt="faceBook" /> </a>
               <a href="#"> <img src={youTube} alt="youtube" /> </a>
               <a href="#"> <img src={insta} alt="instagarm" /> </a>
            </div>
         </div>
      </div>
      <div className={cl.footerCopy}>
         <div className={cl.copyLeft}>
            <span> Разработка сайта: </span><a href="#">ESTET DESIGN GROUP</a>
         </div>
         <div className={cl.copyRight}>
            <p>© 2021 Solarland. Усі права захищенні</p>
            <p>Політика конфіденційності</p>
         </div>
      </div>
   </footer>
}