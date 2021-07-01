import React, { useState } from "react";
// import { useStaticQuery, graphql } from "gatsby";
import { Nav } from 'react-bootstrap';
import { Link } from "gatsby";
import { Header } from "../Header"
import { Footer } from "../Footer"
import Head from "../Head"


const PrimaryLayout = (props) => {



    let headerMenu = props.menu.edges.filter((edge) => edge.node.slug === 'main-menu-ua' || edge.node.slug === 'main-menu-ru')
    let footerMenu = props.menu.edges.filter((edge) => edge.node.slug === 'main-menu-ua' || edge.node.slug === 'main-menu-ru')



    const footerMenuArr = footerMenu[0].node.menuItems.nodes.map((menuItem, index) => {
        return <Nav.Link key={index} as={Link} to={menuItem.path}>{menuItem.label}</Nav.Link>
    })


    return <>
        <Head lang={props.lang} />
        <Header
            adress={props.adress}
            kiyvstar={props.kiyvstar}
            mail={props.mail}
            vodafone={props.vodafone}
            life={props.life}
            headerMenu={headerMenu}
            lang={props.lang}
        />
        {props.children}
        <Footer
            lang={props.lang}
            facebook={props.facebook}
            youtube={props.youtube}
            instagram={props.instagram}
            menu={footerMenuArr}
        />
    </>
}

export default PrimaryLayout;


