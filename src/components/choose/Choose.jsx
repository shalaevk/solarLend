import React, {useState} from "react"
import * as cl  from './Choose.module.css'
import classNames from 'classnames'

import solar from '../../images/solorp.png'
import firstim from '../../images/firstIcon.svg'
import secIm from '../../images/secondicon.svg'
import third from '../../images/thirdIcon.svg'
import fourth from '../../images/fourthIcon.svg'


export const Choose = (props) => {


    return (
            <section className={classNames(cl.choose, '')}>
                <div className={classNames('titleWrap', cl.titleWrap)}>
                    <div className={classNames('title', cl.title)} >
                        {props.ch.choosetitle}
                        <div className='titleShade'>
                            {props.ch.choosetitle}
                        </div>
                    </div>
                </div>
                <div className={classNames(cl.itemWrap)}>
                        <div className={cl.item}>
                            <div className={cl.num}>
                                01
                            </div>
                            <div className={cl.infotitle}>
                                {props.ch.chooseblocks.choosetitleone}
                            </div>
                            <div className={cl.info}>
                                {props.ch.chooseblocks.choosetextone}
                            </div>
                        </div>
                        <div className={cl.item}>
                            <div className={cl.num}>
                                02
                            </div>
                            <div className={cl.infotitle}>
                                {props.ch.chooseblocks.choosetitletwo}
                            </div>
                            <div className={cl.info}>
                                {props.ch.chooseblocks.choosetexttwo}
                            </div>
                        </div>
                        <div className={cl.item}>
                            <div className={cl.num}>
                                03
                            </div>
                            <div className={cl.infotitle}>
                                {props.ch.chooseblocks.choosetitlethree}
                            </div>
                            <div className={cl.info}>
                                {props.ch.chooseblocks.choosetextthree}
                            </div>
                        </div>

                </div>
                <div className={cl.imageWrap}>
                    <img className="img-fluid" src={props.ch.chooseimage.sourceUrl} alt=""/>
                </div>
                <div className={cl.iconswrap}>
                    <div className={cl.iconItem}>
                        <img src={firstim} alt=""/>
                        <p>{props.ch.chooseicons.chooseicontextone}</p>
                    </div>
                    <div className={cl.iconItem}>
                        <img src={secIm} alt=""/>
                        <p>{props.ch.chooseicons.chooseicontexttwo}</p>
                    </div>
                    <div className={cl.iconItem}>
                        <img src={third} alt=""/>
                        <p>{props.ch.chooseicons.chooseicontextthree}</p>
                    </div>
                    <div className={cl.iconItem}>
                        <img src={fourth} alt=""/>
                        <p>{props.ch.chooseicons.chooseicontextfour}</p>
                    </div>
                </div>
            </section>
    )
}