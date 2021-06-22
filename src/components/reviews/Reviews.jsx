import React, {useState} from "react"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import * as cl  from './Reviews.module.css'



import classNames from 'classnames'

import mainImg from "../../images/first-slide.png"
import playBtn from "../../images/playBtn.svg"
import obj1 from '../../images/obj1.png'
import obj2 from '../../images/obj2.png'
import obj3 from '../../images/obj3.png'
import obj4 from '../../images/obj1.png'

export const Reviews = () => {

    return(
        <section className={classNames('container', cl.revieWrap)}>
            <div className={classNames('titleWrap', cl.titleWrap)}>
                <div className={classNames('title')}>
                    Відгуки наших клієнтів
                    <div className={classNames('titleShade', cl.titleShade)}>
                        Відгуки наших клієнтів
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
                        <div className={cl.reviewIcon}>
                            <img src={playBtn} alt=""/>
                        </div>
                        <p>СОНЯЧНА ЕЛЕКТРОСТАНЦІЯ 15 КВТ НА АЗС ОККО В М. МУКАЧЕВО, ЗАКАРПАТСЬКА ОБЛАСТЬ</p>
                    </div>

                </div>
                <div className={cl.sliderItemWrap}>
                    <img src={obj1}/>
                    <div className={cl.caption}>
                        <div className={cl.reviewIcon}>
                            <img src={playBtn} alt=""/>
                        </div>
                        <p>СОНЯЧНА ЕЛЕКТРОСТАНЦІЯ 15 КВТ НА АЗС ОККО В М. МУКАЧЕВО, ЗАКАРПАТСЬКА ОБЛАСТЬ</p>
                    </div>

                </div>
                <div className={cl.sliderItemWrap}>
                    <img src={obj1}/>
                    <div className={cl.caption}>
                        <div className={cl.reviewIcon}>
                            <img src={playBtn} alt=""/>
                        </div>
                        <p>СОНЯЧНА ЕЛЕКТРОСТАНЦІЯ 15 КВТ НА АЗС ОККО В М. МУКАЧЕВО, ЗАКАРПАТСЬКА ОБЛАСТЬ</p>
                    </div>

                </div>
                <div className={cl.sliderItemWrap}>
                    <img src={obj1}/>
                    <div className={cl.caption}>
                        <div className={cl.reviewIcon}>
                            <img src={playBtn} alt=""/>
                        </div>
                        <p>СОНЯЧНА ЕЛЕКТРОСТАНЦІЯ 15 КВТ НА АЗС ОККО В М. МУКАЧЕВО, ЗАКАРПАТСЬКА ОБЛАСТЬ</p>
                    </div>

                </div>



            </Carousel>
        </section>
    )
}