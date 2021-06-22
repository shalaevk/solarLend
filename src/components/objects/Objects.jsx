import React, {useState} from "react"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'



import * as cl  from './Objects.module.css'
import classNames from 'classnames'

import mainImg from "../../images/first-slide.png"
import decor from "../../images/slider-decor.svg"
import obj1 from '../../images/obj1.png'
import obj2 from '../../images/obj2.png'
import obj3 from '../../images/obj3.png'
import obj4 from '../../images/obj1.png'

export const Objects = () => {

    return(
        <section className={cl.objectsWrap}>
            <div className={classNames('titleWrap', cl.titleWrap)}>
                <div className={classNames('title')}>
                    Реалізовані об’єкти
                    <div className={classNames('titleShade', cl.titleShade)}>
                        Реалізовані об’єкти
                    </div>
                </div>
            </div>

            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className={cl.objSlider}
                containerClass="slidercontainer"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={true}
                sliderClass="sliderClass"
                slidesToSlide={1}
                swipeable
            >
                <div className={cl.sliderItemWrap}>
                   <img src={obj1}/>
                   <div className={cl.caption}>
                       <p>СОНЯЧНА СТАНЦІЯ ПІД ЗЕЛЕНИЙ ТАРИФ 30 КВТ В С. РОСЛАВИЧІ, КИЇВСЬКА ОБЛАСТЬ</p>
                       <div className={classNames(cl.sliderBtn, 'pop')}>Детальніше</div>
                   </div>

               </div>
                <div className={cl.sliderItemWrap}>
                    <img src={obj2}/>
                    <div className={cl.caption}>
                        <p>СОНЯЧНА СТАНЦІЯ ПІД ЗЕЛЕНИЙ ТАРИФ 30 КВТ В С. РОСЛАВИЧІ, КИЇВСЬКА ОБЛАСТЬ</p>
                        <div className={classNames(cl.sliderBtn, 'pop')}>Детальніше</div>
                    </div>
                </div>
                <div className={cl.sliderItemWrap}>
                    <img src={obj3}/>
                    <div className={cl.caption}>
                        <p>СОНЯЧНА СТАНЦІЯ ПІД ЗЕЛЕНИЙ ТАРИФ 30 КВТ В С. РОСЛАВИЧІ, КИЇВСЬКА ОБЛАСТЬ</p>
                        <div className={classNames(cl.sliderBtn, 'pop')}>Детальніше</div>
                    </div>
                </div>
                <div className={cl.sliderItemWrap}>
                    <img src={obj4}/>
                    <div className={cl.caption}>
                        <p>СОНЯЧНА СТАНЦІЯ ПІД ЗЕЛЕНИЙ ТАРИФ 30 КВТ В С. РОСЛАВИЧІ, КИЇВСЬКА ОБЛАСТЬ</p>
                        <div onClick={} className={classNames(cl.sliderBtn, 'pop')}>Детальніше</div>
                    </div>
                </div>


            </Carousel>
        </section>
    )
}