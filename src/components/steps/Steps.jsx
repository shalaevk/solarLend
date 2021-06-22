import React, {useState} from "react"
import * as cl  from './Steps.module.css'
import classNames from 'classnames'

import step1 from '../../images/step-1.svg'
import step2 from '../../images/step-2.svg'
import step3 from '../../images/step-3.svg'



export const Steps = () => {

    return (
        <section>
            <div className='titleWrap'>
                <div className={classNames('title')}>
                    Етапи робіт
                    <div className={classNames('titleShade', cl.titleShade)}>
                        Етапи робіт
                    </div>
                </div>
            </div>
            <div className={cl.steps}>
                <div className={cl.stepItem}>
                    <div className={cl.stepnum}>
                        01
                    </div>
                    <div className={cl.steptitle}>
                        Виїзд на об’єкт
                    </div>
                    <div className={cl.icon}>
                        <img src={step1} alt=""/>
                    </div>
                    <div className={cl.list}>
                        Аналізуємо особливості конструкції будівлі та (або) ділянки
                        Робимо необхідні заміри даху та (або) ділянки, а також за допомогою дрону
                        Фото та відеофіксація об’єкту за допомогою дрону (3D моделювання)
                    </div>
                </div>
                <div className={cl.stepItem}>
                    <div className={cl.stepnum}>
                        02
                    </div>
                    <div className={cl.steptitle}>
                        Проектні роботи
                    </div>
                    <div className={cl.icon}>
                        <img src={step2} alt=""/>
                    </div>
                    <div className={cl.list}>
                        Розробка та узгодження рішень для Вашого об’єкту (3D модель)
                        Підбір обладнання (з урахуванням особливостей данного об’єкту)
                        Підготовка комерційної пропозиції та техніко-економічного обґрунтування
                        Створення повного пакету технічної документації
                    </div>
                </div>
                <div className={cl.stepItem}>
                    <div className={cl.stepnum}>
                        03
                    </div>
                    <div className={cl.steptitle}>
                        Монтаж станції та оформлення «Зеленого» тарифу
                    </div>
                    <div className={cl.icon}>
                        <img src={step3} alt=""/>
                    </div>
                    <div className={cl.list}>
                        Доставляємо обладнання на об’єкт
                        Інсталюємо та проводимо пуско-налагоджувальні роботи
                        Подаємо пакет документів для ЗТ Постачальнику електроенергії
                        Супроводжуємо процедуру встановлення лічильника та оформлення договору з постачальником електроенергії
                    </div>
                </div>
            </div>
        </section>
    )
}