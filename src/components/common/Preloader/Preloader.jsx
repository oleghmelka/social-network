import React from 'react';
import s from './Preloader.module.css';
import preloader from '../../../assets/images/spin_preloader.gif';

let Preloader = () => {
    return <div className={s.preloader_wrapper}>
                <img src={preloader} alt="preloader_image"/>
           </div>
}

export default Preloader;