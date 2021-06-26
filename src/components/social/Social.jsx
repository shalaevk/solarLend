import React from "react";
import { Link } from "gatsby";
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import classNames from "classnames";

import * as cl from './Social.module.css'


import decor from '../../images/decorFooter.png'
import faceBook from '../../images/facebookblack.svg'
import youTube from '../../images/youtube.svg'
import insta from '../../images/instagram.svg'


export const Social = () => {

   return (
      <div className={classNames(cl.socialWrap)}>

         <div className={cl.text}>
            Приєднуйся
         </div>
         <div className={cl.decorLine}></div>
         <div className={cl.social}>
            <a href="#"> <img src={faceBook} alt="faceBook" /> </a>
            <a href="#"> <img className={cl.you} src={youTube} alt="youtube" /> </a>
            <a href="#"> <img src={insta} alt="instagarm" /> </a>
         </div>

      </div>
   )
}