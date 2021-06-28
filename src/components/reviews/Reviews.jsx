import React, { useState } from "react"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import * as cl from './Reviews.module.css'

import ReactWOW from 'react-wow'

import classNames from 'classnames'

import playBtn from "../../images/playBtn.svg"


export const Reviews = ({ rev, setLink, showModal }) => {

    let callAllFunctions = (link) => {
        showModal()
        setLink(link)
    }

    let revArray = rev.rewblock.rewslide.map((slide) => {
        return <div className={cl.sliderItemWrap}>
            <img src={slide.rewimgone.sourceUrl} />
            <div className={cl.caption}>
                <div className={cl.reviewIcon} onClick={() => { callAllFunctions(slide.rewvideo) }}>
                    <img src={playBtn} alt="" />
                </div>
                <p>{slide.rewtitleone}</p>
            </div>

        </div>
    });

    return (
        <ReactWOW>
            <section className={classNames('container animate__animated animate__fadeInUp', cl.revieWrap)}>
                <div className={classNames('titleWrap', cl.titleWrap)}>
                    <div className={classNames('title')}>
                        {rev.rewtitle}
                        <div className={classNames('titleShade', cl.titleShade)}>
                            {rev.rewtitle}
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
                    {revArray}

                </Carousel>
            </section>
        </ReactWOW>
    )
}