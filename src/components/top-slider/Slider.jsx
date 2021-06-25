import React, { useState } from "react"
import Carousel from 'react-bootstrap/Carousel'
import decor from '../../images/slider-decor.svg'
import classNames from "classnames";
import * as cl from './Slider.module.css';

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
        console.log(selectedIndex + 1)
    };

    return (
        <div className={cl.carouselWrap}>
            <Carousel className="topSlider" activeIndex={index} onSelect={handleSelect}>

                {mainSliderArray}

            </Carousel>
            <div className={cl.index}>{index + 1}/{2}</div>
        </div>
    )
}

export default Slider