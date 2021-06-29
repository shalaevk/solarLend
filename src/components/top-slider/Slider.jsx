import React, { useState } from "react"
import Carousel from 'react-bootstrap/Carousel'
import decor from '../../images/slider-decor.svg'
import classNames from "classnames";
import * as cl from './Slider.module.css';
import right from '../../images/right.svg'
import left from '../../images/left.svg'
import { Social } from "../social/Social";
import faceBook from '../../images/facebookblack.svg'
import youTube from '../../images/youtube.svg'
import insta from '../../images/instagram.svg'

const Slider = (props) => {

    const mainSliderArray = props.slides.map((slide) => {
        return <Carousel.Item>


            <img
                className="d-block w-100"
                src={slide.image.sourceUrl}
                alt="First slide"
            />
            <Carousel.Caption className={cl.caption}>
                <div className={cl.decor}>
                    <img src={decor} />
                    <p className={cl.decortext}>{slide.title}</p>
                </div>

                <p className={cl.text}>{slide.subtitle}</p>
                <a href='#conatctForm' className={classNames('pop', cl.mobBtn)}>Отримати консультацію</a>
            </Carousel.Caption>
        </Carousel.Item>
    })


    const [index, setIndex] = useState(1);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className={cl.carouselWrap}>
            <Carousel prevIcon={<img src={left} alt="prev icon" />} nextIcon={<img src={right} alt="next icon" />} className="topSlider" activeIndex={index} onSelect={handleSelect}>

                {mainSliderArray}

            </Carousel>
            <div className={cl.socWrap}>

                <div className={classNames(cl.socialWrap)}>

                    <div className={cl.textLink}>
                        {props.lang === "uk" ? "Приєднуйся" : "Присоединяйся"}
                    </div>
                    <div className={cl.decorLine}></div>
                    <div className={cl.social}>
                        <a href={props.facebook} target="_blank"> <img src={faceBook} alt="faceBook" /> </a>
                        <a href={props.youtube} target="_blank"> <img className={cl.you} src={youTube} alt="youtube" /> </a>
                        <a href={props.instagram} target="_blank"> <img src={insta} alt="instagarm" /> </a>
                    </div>

                </div>

            </div>

            <div className={cl.index}>{index + 1}/{mainSliderArray.length}</div>
        </div>
    )
}

export default Slider