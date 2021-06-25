import React, { useRef, useState } from "react"
import * as cl  from './Reviews.module.css'

// import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';




export const ReviewModal = ({rewLink, handleClose, show, }) => {
    // console.log({ handleClose, show, children })
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    // let videoRef = useRef(null);


    // let pauseVideo = () => {
    //     handleClose()
    //     videoRef.current.pause()
    // }
    if(show){
        return (<div className={showHideClassName}>
            <section className='modal-main rew-modal'>
                <button className="close-btn" >Close</button>
                <iframe width="100%" height="100%"
                        src={rewLink}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </section>
        </div>)
    }
    if(!show){
        return (
            <></>
        );
    }

};

