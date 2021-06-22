import React, {useState} from "react"
import Carousel from 'react-bootstrap/Carousel'
import decor from '../../images/slider-decor.svg'
import mainImg from '../../images/first-slide.png'
import * as cl  from './Slider.module.css';

const Slider = () => {
    const [index, setIndex] = useState(1);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        console.log(selectedIndex + 1)
    };

    return(
        <div className={cl.carouselWrap}>
        <Carousel className="topSlider" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>

                <img
                    className="d-block w-100"
                    src={mainImg}
                    alt="First slide"
                />
                <Carousel.Caption className={cl.caption}>
                    <div className={cl.decor}>
                        <img src={decor}/>
                        <p className={cl.decortext}>Обирай майбутнє</p>
                    </div>

                    <p className={cl.text}>Сонячні електростанції мережеві для дому</p>
                    <div className='pop'>Отримати консультацію</div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>

                <img
                    className="d-block w-100"
                    src={mainImg}
                    alt="First slide"
                />
                <Carousel.Caption className={cl.caption}>
                    <div className={cl.decor}>
                        <img src={decor}/>
                        <p className={cl.decortext}>Обирай майбутнє</p>
                    </div>

                    <p className={cl.text}>Сонячні електростанції мережеві для дому</p>
                    <div className='pop'>Отримати консультацію</div>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
            <div className={cl.index}>{index + 1}/{2}</div>
            </div>
    )
}

export default Slider