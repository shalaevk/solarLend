import React, { useState } from 'react';
import { graphql } from "gatsby"
import PrimaryLayout from "./PrimaryLayout";
import Slider from "../top-slider/Slider";
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import { Efficiency } from "../efficiency/Efficiency";
import { Choose } from "../choose/Choose";
import { Steps } from "../steps/Steps";
import { Objects } from "../objects/Objects";
import { Price } from "../price/Price";
import { Reviews } from "../reviews/Reviews";
import { Map } from "../map/Map";
import { Modal } from "../objects/Modal";
import { ReviewModal } from "../reviews/ReviewModal";
import { Footer } from '../Footer';




const Homepage = ({ data }) => {

    console.log(data)

    const [show, setState] = useState(false)
    const [objData, setObjData] = useState({
        "title": "МЕРЕЖЕВА СОНЯЧНА ЕЛЕКТРОСТАНЦІЯ З ТОНКОПЛІВКОВИМИ ПАНЕЛЯМИ В С. ІВАНКОВИЧІ, КИЇВСЬКА ОБЛАСТЬ",
        "content": "<p>Адреса об’єкту: с. Рославичи, Киевская область<br />\nПеріод монтажу: Ноябрь 2019<br />\nТерміни виконання: 3 рабочих дня<br />\nПотужність по інверторам: 30 кВт<br />\nВстановлення потужність панелей (PV)<br />\nОрієнтація: Юг<br />\nМережевий інвертор: Huawei SUN2000-33KTL-A<br />\nСонячні батареї: 28 шт. JA Solar JAM60S10-340/MR HalfCells Mono<br />\nСистеми кріплення: PRONT</p>\n",
        "featuredImage": {
            "node": {
                "sourceUrl": "https://solarland.s-tet.top/wp-content/uploads/2021/06/obj3-2.png"
            }
        },
        "solarObj": {
            "objimages": [
                {
                    "sourceUrl": "https://solarland.s-tet.top/wp-content/uploads/2021/06/first-slide-2.png"
                },
                {
                    "sourceUrl": "https://solarland.s-tet.top/wp-content/uploads/2021/06/DJI_0701-2.png"
                },
                {
                    "sourceUrl": "https://solarland.s-tet.top/wp-content/uploads/2021/06/obj1-2.png"
                },
                {
                    "sourceUrl": "https://solarland.s-tet.top/wp-content/uploads/2021/06/obj2-2.png"
                },
                {
                    "sourceUrl": "https://solarland.s-tet.top/wp-content/uploads/2021/06/solorp-2.png"
                }
            ]
        }
    })
    const [id, setId] = useState(0)

    const [isOpenRew, setOpenRew] = useState(false)
    const [rewLink, steRewLink] = useState("")


    let setLink = (link) => {
        steRewLink(link)
    }

    let showModalRew = () => {
        setOpenRew(true)
    }
    let hideModalRew = () => {
        setOpenRew(false)
    }




    let setModalData = (data) => {
        setObjData(data)
    }

    let showModal = () => {
        setState(true)
    }
    let hideModal = () => {
        setState(false)
    }



    return (

        <PrimaryLayout
            adress={data.wpPage.acf.adress}
            kiyvstar={data.wpPage.acf.kiyvstar}
            mail={data.wpPage.acf.mail}
            vodafone={data.wpPage.acf.vodafone}
            life={data.wpPage.acf.life}
            menu={data.allWpMenu}
        >
            <div className='container-fluid'>
                <Slider slides={data.wpPage.acf.addslide} />
                <Efficiency eff={data.wpPage.acf} />
                <Choose ch={data.wpPage.acf} />
                <Steps st={data.wpPage.acf} />
                <Objects setModalData={setModalData} showModal={showModal} objects={data.allWpPost} />
                <Modal handleClose={hideModal} objData={objData} show={show} />
                <Price pr={data.wpPage.acf} />
                <Reviews setLink={setLink} showModal={showModalRew} rev={data.wpPage.acf} />
                <ReviewModal handleClose={hideModalRew} rewLink={rewLink} show={isOpenRew} />
                {/* <Map /> */}
            </div>
        </PrimaryLayout>

    )
}

export default Homepage;

export const query = graphql`

    query($lang: String!, $language: String!) {
        allWpMenu(filter: {language: {eq: $lang}}) {
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
        allWpPost(filter: {locale: {locale: {eq: $lang}}}) {
            edges {
                node {
                    title
                    content
                    featuredImage {
                        node {
                            sourceUrl
                        }
                    }
                    solarObj {
                        objimages {
                            sourceUrl
                        }
                    }
                }
            }
        }
        wpPage(slug: {eq: "home"} locale: {locale: {eq: $language}}) {
            slug
            acf {
                adress
                kiyvstar {
                    title
                    url
                }
                life {
                    title
                    url
                }
                mail {
                    title
                    url
                }
                vodafone {
                    title
                    url
                }
                addslide {
                    subtitle
                    title
                    image {
                        sourceUrl
                    }
                }
                choosetitle
                chooseicons {
                    chooseicontextfour
                    chooseicontextone
                    chooseicontextthree
                    chooseicontexttwo
                }
                chooseblocks {
                    choosetextone
                    choosetextthree
                    choosetexttwo
                    choosetitleone
                    choosetitlethree
                    choosetitletwo
                }

                chooseimage {
                    sourceUrl
                }
                effectsubtext
                effecttext
                effecttitle
                effectaccent
                priceblock {
                    pricetwo
                    pricetitletwo
                    pricetitlethree
                    pricetitleone
                    pricetitlefour
                    pricethree
                    pricetexttwo
                    pricetextthree
                    pricetextone
                    pricetextfour
                    priceone
                    pricefour
                }
                pricetitle
                steptitle
                rewtitle
                rewblock {
                    rewslide {
                        rewimgone {
                            sourceUrl
                        }
                        rewtitleone
                        rewvideo
                    }
                }
                stepblock {
                    steptextone
                    steptextthree
                    steptexttwo
                    steptitleone
                    steptitlethree
                    steptitletwo
                }
            }
        }
    }
    `