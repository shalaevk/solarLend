import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Nav } from 'react-bootstrap';
import { Link } from "gatsby";
import { Header } from "../Header"
import { Footer } from "../Footer"
import Head from "../Head"


const PrimaryLayout = (props) => {
    console.log('PrLay', props)

    let headerMenu = props.menu.edges.filter((edge) => edge.node.slug === 'main-menu-ua' || edge.node.slug === 'main-menu-ru')
    let footerMenu = props.menu.edges.filter((edge) => edge.node.slug === 'main-menu-ua' || edge.node.slug === 'main-menu-ru')


    const menu = headerMenu[0].node.menuItems.nodes.map((menuItem, index) => {
        return <Nav.Link key={index} as={Link} to={menuItem.path}>{menuItem.label}</Nav.Link>
    })
    const footerMenuArr = footerMenu[0].node.menuItems.nodes.map((menuItem, index) => {
        return <Nav.Link key={index} as={Link} to={menuItem.path}>{menuItem.label}</Nav.Link>
    })


    return <>
        <Head />
        <Header
            adress={props.adress}
            kiyvstar={props.kiyvstar}
            mail={props.mail}
            vodafone={props.vodafone}
            life={props.life}
            menu={menu}
        />
        {props.children}
        <Footer menu={footerMenuArr} />
    </>
}

export default PrimaryLayout;


