import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import classNames from "classnames";
import * as cl from './Forma.module.css'


import location from '../../images/Location.svg'
import kiyvstar from '../../images/kiyvstar.svg'
import vodaphone from '../../images/Vodafone-Logo 1.svg'
import life from '../../images/life.svg'
import mail from '../../images/Message.svg'


const ContactForm = () => {
    const WEBSITE_URL = 'https://kirill.s-tet.top';
    const FORM_ID = '26'; //Form id that provides Contact Form 7

    const [token, setToken] = useState('') // store token
    const [isSuccessMessage, setIsSuccessMessage] = useState(false) // manage is success message state
    const [messageSent, setMessageSent] = useState(false) // manage sent message state

    // this effect function authenticates our subcriber user to get a token
    useEffect(() => {
        axios({
            method: 'post',
            url: `${WEBSITE_URL}/wp-json/jwt-auth/v1/token`,
            data: {
                username: 'TEst', // provide a user credential with subscriber role
                password: '7#il6fA2TGvisQLgInSiNE@l'
            },
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {
            setToken(response.data.token)
        }).catch(error => console.error('Error', error))
    }, [])

    const [classActive, setClass] = useState('')

    let setClassActive = () => {
        console.log(this)
        if (classActive === 'active') {
            setClass('')
        }
        else setClass('active')
    }

    // use useFormik hook using object destructuring assignment to extract helpful methods
    const {
        handleChange,
        isSubmitting,
        values,
        handleSubmit,
    } = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            message: '',
        },
        onSubmit: ({
            fullname,
            email,
            message
        }, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            // here we created a FormData field for each form field
            const bodyFormData = new FormData();
            bodyFormData.set('fullname', fullname);
            bodyFormData.set('email', email);
            bodyFormData.set('message', message);

            // here we sent
            axios({
                method: 'post',
                url: `${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
                data: bodyFormData,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                },
            }).then(response => {
                console.log(response)
                // actions taken when submission goes OK
                resetForm()
                setSubmitting(false)
                setMessageSent(true)
                setIsSuccessMessage(true)
            }).catch(error => {
                // actions taken when submission goes wrong
                setSubmitting(false)
                setMessageSent(true)
                setIsSuccessMessage(false)
            })
        },
    })

    useEffect(() => {
        // set timeout 3 seconds to remove error/success message.
        setTimeout(() => {
            // this will reset messageSent and isSuccessMessage state
            setMessageSent(false)
            setIsSuccessMessage(false)
        }, 3000);
        // this effect function will be dispatched when isSuccessMessage or messageSent changes its state
    }, [isSuccessMessage, messageSent])

    return (
        <div id="conatctForm" className={cl.addressWrap}>
            <div className={cl.addressTop}>
                <div className={cl.addrTitle}>
                    Залишити заявку
                </div>


                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div className={classNames(cl.inputWrap, 'inputWrap')}>
                            <label className={classActive} htmlFor="fullname">Ім’я*</label>
                            <input onClick={setClassActive}
                                id="fullname"
                                name="fullname"
                                type="text"
                                onChange={handleChange}
                                value={values.fullname}
                                required
                            />
                        </div>
                        <div className={classNames(cl.inputWrap, 'inputWrap')}>
                            <label className={classActive} htmlFor="phone">Номер телефону*</label>
                            <input
                                id="phone"
                                name="phone"
                                type="phone"
                                onChange={handleChange}
                                value={values.number}
                                required
                            />
                        </div>
                        <div className={classNames(cl.inputWrap, 'inputWrap')}>
                            <label className={classActive} className='active' htmlFor="email">E-mail*</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={handleChange}
                                value={values.email}
                                required
                            />
                        </div>

                    </fieldset>
                    <div>
                        <button className={classNames('pop', cl.formBtn)}
                            type="submit"
                            value="Send Message"
                            disabled={isSubmitting}
                        >замовити</button>
                    </div>
                    {messageSent && isSuccessMessage && (
                        <div>Message sent successfully!</div>
                    )}
                    {messageSent && !isSuccessMessage && (
                        <div>something went wrong please try again.</div>
                    )}
                </form>

            </div>
            <div className={cl.addressBottom}>
                <p className={cl.addr}><img src={location} alt="" /> м. Київ, вулиця Володимира Сосюри, 6, офіс 219</p>
                <p className={cl.phone}><img src={kiyvstar} alt="" /><a href="tel:+380677839000">+38 (067) 783-90-00</a></p>
                <p className={cl.phone}><img src={vodaphone} alt="" /><a href="tel:+380957839000"> +38 (095) 783-90-00</a></p>
                <p className={cl.phone}><img src={life} alt="" /><a href="tel:+380637839000">  +38 (063) 783-90-00</a></p>
                <p className={cl.mail}><img src={mail} alt="" /><a href="mailto:office@solarland.com.ua">  office@solarland.com.ua</a></p>
                <p className={cl.schedule}>пн. - пт. 9:00 до 18:00</p>
            </div>
        </div>
    )
};

export default ContactForm