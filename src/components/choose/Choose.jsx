import React, {useState} from "react"
import * as cl  from './Choose.module.css'
import classNames from 'classnames'

import solar from '../../images/solorp.png'
import firstim from '../../images/firstIcon.svg'
import secIm from '../../images/secondicon.svg'
import third from '../../images/thirdIcon.svg'
import fourth from '../../images/fourthIcon.svg'


export const Choose = () => {


    return (
            <section className={classNames(cl.choose, '')}>
                <div className={classNames('titleWrap', cl.titleWrap)}>
                    <div className={classNames('title', cl.title)} >
                        Чому обирають Solarland
                        <div className='titleShade'>
                         Чому обирають Solarland
                        </div>
                    </div>
                </div>
                <div className={classNames(cl.itemWrap)}>
                        <div className={cl.item}>
                            <div className={cl.num}>
                                01
                            </div>
                            <div className={cl.infotitle}>
                                Ми гарантуємо заявлену генерацію
                            </div>
                            <div className={cl.info}>
                                Грамотне проектування, якісний монтаж та використання тільки найкращого
                                обладнання дозволяє гарантувати генерацію, яку ми заявляємо в комерційній пропозиції.
                            </div>
                        </div>
                        <div className={cl.item}>
                            <div className={cl.num}>
                                02
                            </div>
                            <div className={cl.infotitle}>
                                Проводимо моніторинг роботи електростанцій
                            </div>
                            <div className={cl.info}>
                                Наш диспетчер стежить за показниками встановлених нами станцій,
                                та в разі виявлення проблем,
                                передає інформацію для подальшого їх вирішення.
                                Це дозволяє нашим клієнтам не витрачати особистий
                                час на пошук можливих причин зниження продуктивності,
                                та бути впевненими у вигідному
                                капіталовкладенні, яке стабільно приносить пасивний дохід.
                            </div>
                        </div>
                        <div className={cl.item}>
                            <div className={cl.num}>
                                03
                            </div>
                            <div className={cl.infotitle}>
                                Маємо підмінний фонд обладнання
                            </div>
                            <div className={cl.info}>
                                У разі виявлення несправностей, компанія гарантує заміну всіх елементів і вузлів електростанції,
                                задля відновлення повної працездатності об’єкта, та підтримки
                                його безперебійної роботи (на час діагностики поломки і до повного її усунення).
                            </div>
                        </div>

                </div>
                <div className={cl.imageWrap}>
                    <img src={solar} alt=""/>
                </div>
                <div className={cl.iconswrap}>
                    <div className={cl.iconItem}>
                        <img src={firstim} alt=""/>
                        <p>Професійний штат співробітників</p>
                    </div>
                    <div className={cl.iconItem}>
                        <img src={secIm} alt=""/>
                        <p>7 років досвіду будівництва СЕС</p>
                    </div>
                    <div className={cl.iconItem}>
                        <img src={third} alt=""/>
                        <p>Власний автомобільний парк</p>
                    </div>
                    <div className={cl.iconItem}>
                        <img src={fourth} alt=""/>
                        <p>Повний документальний супровід усіх угод</p>
                    </div>
                </div>
            </section>
    )
}