import React, {useState} from "react"
import * as cl  from './Price.module.css'
import classNames from 'classnames'


export const Price = () => {

    return (
        <section className={cl.priceSection}>
            <div className={classNames('titleWrap', cl.titleWrap)}>
                <div className={classNames('title')}>
                    Вартість сонячних станцій
                    <div className={classNames('titleShade', cl.titleShade)}>
                        Вартість сонячних станцій
                    </div>
                </div>
            </div>

            <div className={cl.priceWrap}>
                <div className={cl.priceItem}>
                    <p className={cl.vid}>Від</p>
                    <p className={cl.price}>500$</p>
                    <p className={cl.za}>за кВт</p>
                    <p className={cl.priceTitle}>Сонячні електростанції мережеві для дому</p>
                    <div className={classNames(cl.priceBtn, 'pop')}>Замовити</div>
                    <div className={cl.decor}></div>
                    <p className={cl.text}>Призначена для зменшення споживання електроенергії з мережі,
                        або для вироблення електроенергії в мережу з метою продажу за «Зеленим» тарифом.
                        Данна станція не комплектується акумуляторними батареями і не може використовуватися
                        в якості єдиного джерела енергії. Якщо відсутня генерація – об’єкт буде використовувати
                        електроенергію з мережі. У випадку відключення мережі інвертор буде
                        знаходитись в режимі очікування, оскільки він працює тільки при наявності мережі.
                    </p>
                </div>
                <div className={cl.priceItem}>
                    <p className={cl.vid}>Від</p>
                    <p className={cl.price}>500$</p>
                    <p className={cl.za}>за кВт</p>
                    <p className={cl.priceTitle}>Сонячні електростанції для підприємств</p>
                    <div className={classNames(cl.priceBtn, 'pop')}>Замовити</div>
                    <div className={cl.decor}></div>
                    <p className={cl.text}>Призначена для зменшення споживання електроенергії з мережі,
                        або для вироблення електроенергії в мережу з метою продажу за «Зеленим» тарифом.
                        Данна станція не комплектується акумуляторними батареями і не може використовуватися
                        в якості єдиного джерела енергії. Якщо відсутня генерація – об’єкт буде використовувати
                        електроенергію з мережі. У випадку відключення мережі інвертор буде
                        знаходитись в режимі очікування, оскільки він працює тільки при наявності мережі.
                    </p>
                </div>
                <div className={cl.priceItem}>
                    <p className={cl.vid}>Від</p>
                    <p className={cl.price}>500$</p>
                    <p className={cl.za}>за кВт</p>
                    <p className={cl.priceTitle}>Сонячні електростанції автономні</p>
                    <div className={classNames(cl.priceBtn, 'pop')}>Замовити</div>
                    <div className={cl.decor}></div>
                    <p className={cl.text}>Призначена для зменшення споживання електроенергії з мережі,
                        або для вироблення електроенергії в мережу з метою продажу за «Зеленим» тарифом.
                        Данна станція не комплектується акумуляторними батареями і не може використовуватися
                        в якості єдиного джерела енергії. Якщо відсутня генерація – об’єкт буде використовувати
                        електроенергію з мережі. У випадку відключення мережі інвертор буде
                        знаходитись в режимі очікування, оскільки він працює тільки при наявності мережі.
                    </p>
                </div>
                <div className={cl.priceItem}>
                    <p className={cl.vid}>Від</p>
                    <p className={cl.price}>500$</p>
                    <p className={cl.za}>за кВт</p>
                    <p className={cl.priceTitle}>Сонячні електростанції гібридні</p>
                    <div className={classNames(cl.priceBtn, 'pop')}>Замовити</div>
                    <div className={cl.decor}></div>
                    <p className={cl.text}>Призначена для зменшення споживання електроенергії з мережі,
                        або для вироблення електроенергії в мережу з метою продажу за «Зеленим» тарифом.
                        Данна станція не комплектується акумуляторними батареями і не може використовуватися
                        в якості єдиного джерела енергії. Якщо відсутня генерація – об’єкт буде використовувати
                        електроенергію з мережі. У випадку відключення мережі інвертор буде
                        знаходитись в режимі очікування, оскільки він працює тільки при наявності мережі.
                    </p>
                </div>
            </div>
        </section>
    )
}