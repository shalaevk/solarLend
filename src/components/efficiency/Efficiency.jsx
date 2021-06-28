import React, { useState } from "react"
import * as cl from './Efficiency.module.css'
import classNames from 'classnames'



import first from '../../images/DJI_0701.png'
import sec from '../../images/DJI_0070.png'
import third from '../../images/2018-5.1.png'


export const Efficiency = ({ eff, lang }) => {

    console.log(lang)

    return (
        <section className={cl.efficiency}>
            <div className='titleWrap'>
                <div className='title'>
                    {eff.effecttitle} <span> {eff.effectaccent} </span> {eff.afteraccent}
                    <div className='titleShade'>
                        {eff.effecttitle} <span> {eff.effectaccent} </span> {eff.afteraccent}
                    </div>
                </div>


            </div>
            <div className={cl.imgwrap}>
                <img className='img-fluid' src={first} alt="" />
                <img className='img-fluid' src={sec} alt="" />
                <img className='img-fluid' src={third} alt="" />
            </div>
            <div className={cl.bottomText}>
                <div className={cl.bottomTextOne}>{eff.effecttext}</div>
                <div className={cl.bottomTextTwo}>{eff.effectsubtext}</div>
                <a href='#conatctForm' className={classNames('pop', cl.popCenter)}>
                    {lang === "uk" ? "Отримати консультацію" : "Получить консультацию"}
                </a>
            </div>

        </section>
    )
}

