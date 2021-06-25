import React, { useState } from "react"
import * as cl from './Price.module.css'
import classNames from 'classnames'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export const Price = ({ pr }) => {
    console.log(pr.pricetitle)
    return (
        <section className={cl.priceSection}>
            <div className={classNames('titleWrap', cl.titleWrap)}>
                <div className={classNames('title')}>
                    {pr.pricetitle}
                    <div className={classNames('titleShade', cl.titleShade)}>
                        {pr.pricetitle}
                    </div>
                </div>
            </div>

            <div className={cl.priceWrap}>
                <div className={cl.priceItem}>
                    <p className={cl.vid}>Від</p>
                    <p className={cl.price}>{pr.priceblock.priceone}</p>
                    <p className={cl.za}>за кВт</p>
                    <p className={cl.priceTitle}>{pr.priceblock.pricetitleone}</p>
                    <a href='#conatctForm' className={classNames(cl.priceBtn, 'pop')}>Замовити</a>
                    <div className={cl.decor}></div>
                    <p className={cl.text}>{pr.priceblock.pricetextone}</p>
                </div>
                <div className={cl.priceItem}>
                    <p className={cl.vid}>Від</p>
                    <p className={cl.price}>{pr.priceblock.pricetwo}</p>
                    <p className={cl.za}>за кВт</p>
                    <p className={cl.priceTitle}>{pr.priceblock.pricetitletwo}</p>
                    <a href='#conatctForm' className={classNames(cl.priceBtn, 'pop')}>Замовити</a>
                    <div className={cl.decor}></div>
                    <p className={cl.text}>{pr.priceblock.pricetexttwo}</p>
                </div>
                <div className={cl.priceItem}>
                    <p className={cl.vid}>Від</p>
                    <p className={cl.price}>{pr.priceblock.pricethree}</p>
                    <p className={cl.za}>за кВт</p>
                    <p className={cl.priceTitle}>{pr.priceblock.pricetitlefour}</p>
                    <a href='#conatctForm' className={classNames(cl.priceBtn, 'pop')}>Замовити</a>
                    <div className={cl.decor}></div>
                    <p className={cl.text}>{pr.priceblock.pricetextthree}</p>
                </div>
                <div className={cl.priceItem}>
                    <p className={cl.vid}>Від</p>
                    <p className={cl.price}>{pr.priceblock.pricefour}</p>
                    <p className={cl.za}>за кВт</p>
                    <p className={cl.priceTitle}>Сонячні електростанції гібридні</p>
                    <a href='#conatctForm' className={classNames(cl.priceBtn, 'pop')}>Замовити</a>
                    <div className={cl.decor}></div>
                    <p className={cl.text}>{pr.priceblock.pricetextfour}</p>
                </div>
            </div>
            <div className={classNames(cl.mobPrice, "mobPrice")}>


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

                    <div className={cl.priceItem}>
                        <p className={cl.vid}>Від</p>
                        <p className={cl.price}>{pr.priceblock.priceone}</p>
                        <p className={cl.za}>за кВт</p>
                        <p className={cl.priceTitle}>{pr.priceblock.pricetitleone}</p>
                        <div className={classNames(cl.priceBtn, 'pop')}>Замовити</div>
                        <div className={cl.decor}></div>
                        <p className={cl.text}>{pr.priceblock.pricetextone}</p>
                    </div>
                    <div className={cl.priceItem}>
                        <p className={cl.vid}>Від</p>
                        <p className={cl.price}>{pr.priceblock.pricetwo}</p>
                        <p className={cl.za}>за кВт</p>
                        <p className={cl.priceTitle}>{pr.priceblock.pricetitletwo}</p>
                        <div className={classNames(cl.priceBtn, 'pop')}>Замовити</div>
                        <div className={cl.decor}></div>
                        <p className={cl.text}>{pr.priceblock.pricetexttwo}</p>
                    </div>
                    <div className={cl.priceItem}>
                        <p className={cl.vid}>Від</p>
                        <p className={cl.price}>{pr.priceblock.pricethree}</p>
                        <p className={cl.za}>за кВт</p>
                        <p className={cl.priceTitle}>{pr.priceblock.pricetitlefour}</p>
                        <div className={classNames(cl.priceBtn, 'pop')}>Замовити</div>
                        <div className={cl.decor}></div>
                        <p className={cl.text}>{pr.priceblock.pricetextthree}</p>
                    </div>
                    <div className={cl.priceItem}>
                        <p className={cl.vid}>Від</p>
                        <p className={cl.price}>{pr.priceblock.pricefour}</p>
                        <p className={cl.za}>за кВт</p>
                        <p className={cl.priceTitle}>Сонячні електростанції гібридні</p>
                        <div className={classNames(cl.priceBtn, 'pop')}>Замовити</div>
                        <div className={cl.decor}></div>
                        <p className={cl.text}>{pr.priceblock.pricetextfour}</p>
                    </div>


                </Carousel>
            </div>

        </section>
    )
}