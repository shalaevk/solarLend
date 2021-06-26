import React, { useState } from "react"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import left from '../../images/leftCarousel.svg'


import * as cl from './Objects.module.css'
import classNames from 'classnames'



export const Objects = (props) => {

    let callAllFunctions = (content) => {
        props.showModal()
        props.setModalData(content)
    }


    let obj = props.objects.edges.map((item, index) => {
        // console.log(item.node)
        return <div className={cl.sliderItemWrap} key={index}>
            <img src={item.node.featuredImage.node.sourceUrl} />
            <div className={cl.caption}>
                <p>{item.node.title}</p>
                <a href="#contactForm" onClick={() => { callAllFunctions(item.node) }} className={classNames(cl.sliderBtn, 'pop')}>Детальніше</a>
            </div>
        </div>
    })


    return (
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
                            min: 1024,
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 770,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 770
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

                {obj}


            </Carousel>
        </section>
    )
}