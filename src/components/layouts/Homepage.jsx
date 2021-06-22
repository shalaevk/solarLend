import React from 'react';
import { graphql } from "gatsby"
import PrimaryLayout from "./PrimaryLayout";
import Slider from "../top-slider/Slider";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import {Efficiency} from "../efficiency/Efficiency";
import {Choose} from "../choose/Choose";
import {Steps} from "../steps/Steps";
import {Objects} from "../objects/Objects";
import {Price} from "../price/Price";
import {Reviews} from "../reviews/Reviews";
import {Map} from "../map/Map";



const Homepage = ({data}) => {
console.log(data)
    return(

        <PrimaryLayout menu={data.allWpMenu}>
            <div className='container-fluid'>
                <Slider/>
                <Efficiency/>
                <Choose/>
                <Steps/>
                <Objects/>
                <Price/>
                <Reviews/>
                <Map/>
            </div>
        </PrimaryLayout>

    )
}

export default Homepage;

export const query = graphql`

    query( $language: String!) {
        allWpMenu(filter: {language: {eq: $language}}) {
            edges {
                node {
                    slug
                    menuItems {
                        nodes {
                            path
                            label
                        }
                    }
                }
            }
        }
    }
    `