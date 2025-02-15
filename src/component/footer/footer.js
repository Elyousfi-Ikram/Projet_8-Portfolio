import React, { useState } from 'react';
import { FaAt, FaMobile, FaLocationArrow, FaFacebook, FaInstagram } from 'react-icons/fa';

import imgBtn from '../../asset/location.png';
import MapComponent from '../apiMaps'

import './footer.scss';


function Footer() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleState = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id='footer'>
            <button className="btn-location" onClick={toggleState}>
                <div className="circle-animation"></div>
                <img src={imgBtn} alt="envoyer" className="img-location" />
            </button>

            <MapComponent className="img-adresse" />

            {isOpen && (
                <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
                    <div className='info-contact'>
                        <span className='mail'><FaAt /> elyousfi.ikram@hotmail.com </span>
                        <span className='phone'><FaMobile /> 07 83 44 00 64 </span>
                    </div>
                    <span className='adresse'><FaLocationArrow className='icon-adresse'/> 18 Rue Calmette et Guérin, 13090 Aix en Provence </span>
                    <div className="links">
                        <span>Copyright © 2025 EL YOUSFI Ikram, Tous droits réservés.</span>
                        <div className='social'>
                            <a href="https://www.facebook.com/profile.php?id=100008643318570" target="_blank" rel="noreferrer"><FaFacebook className='icon-link' /></a>
                            <a href="https://www.instagram.com/ikrm.rifia/" target="_blank" rel="noreferrer"><FaInstagram className='icon-link' /></a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Footer;
