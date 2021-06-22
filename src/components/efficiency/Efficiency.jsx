import React, {useState} from "react"
import * as cl  from './Efficiency.module.css'
import classNames from 'classnames'



import first from '../../images/DJI_0701.png'
import sec from '../../images/DJI_0070.png'
import third from '../../images/2018-5.1.png'


export const Efficiency = () => {


    return(
        <section className={cl.efficiency}>
            <div className='titleWrap'>
                <div className='title'>
                    Збудовані нами станції працюють на <span>10-20%</span> ефективніше
                    <div className='titleShade'>
                        Збудовані нами станції працюють на <span>10-20%</span> ефективніше
                    </div>
                </div>


            </div>
            <div className={cl.imgwrap}>
                <img className='img-fluid' src={first} alt=""/>
                <img className='img-fluid' src={sec} alt=""/>
                <img className='img-fluid' src={third} alt=""/>
            </div>
            <div className={cl.bottomText}>
                <div className={cl.bottomTextOne}>А це означає, що з нами Ви будете заробляти більше.</div>
                <div className={cl.bottomTextTwo}>Розповісти, як ми цього досягли?</div>
                <div className={classNames('pop', cl.popCenter )}>Отримати консультацію</div>
            </div>

        </section>
    )
}

