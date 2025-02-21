import { useState, useEffect, useRef } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./modal.scss";

function Modal({ title, titleProjet, objectifs, infoProjet, maquettes, URLcode, img }) {
    const [toggle, setToggle] = useState(false); 
    const [progress, setProgress] = useState(0);
    const [carouselOpen, setCarouselOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const modalContentRef = useRef(null);

    useEffect(() => {
        if (toggle || carouselOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [toggle, carouselOpen]);

    const handleScroll = () => {
        const modal = modalContentRef.current;
        if (modal) {
            const scrollTop = modal.scrollTop;
            const scrollHeight = modal.scrollHeight;
            const clientHeight = modal.clientHeight;
            setProgress((scrollTop / (scrollHeight - clientHeight)) * 100);
        }
    };

    const openCarousel = (index) => {
        setCurrentImageIndex(index);
        setCarouselOpen(true);
    };

    const closeModal = () => setToggle(false);
    const closeCarousel = () => setCarouselOpen(false);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % maquettes.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + maquettes.length) % maquettes.length);
    };

    return (
        <div className="projet">
            <div>
                {toggle && (
                    <div className="modal">
                        <div className="modal-content" ref={modalContentRef} onScroll={handleScroll}>
                            <div className="header">
                                <div className="row">
                                    <div className="title-projet">{titleProjet}</div>
                                    <button className="modal-close" onClick={closeModal}>
                                        <FaTimes />
                                    </button>
                                </div>
                                <div className="progress-container">
                                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                                </div>
                            </div>

                            <div id="maquette-container">
                                {maquettes.length > 1 && <p>Aperçu du projet</p>}
                                <div className="maquette">
                                    {maquettes.map((maquette, index) => (
                                        <img 
                                            key={index} 
                                            src={maquette} 
                                            alt={`Maquette ${index + 1}`} 
                                            className="image" 
                                            onClick={() => openCarousel(index)} 
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="text-container">
                                <div className="info-projet">
                                    <p>Description du projet :</p>
                                    {infoProjet}
                                </div>
                                {objectifs?.length > 0 && (
                                    <div className="objectifs">
                                        <p>Objectifs du projet :</p>
                                        <ul>
                                            {objectifs.map((skill, index) => (
                                                <li key={index}>{skill}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="url-code">
                                {URLcode && (
                                    <div className="url-container">
                                        <a href={URLcode} target="_blank" rel="noreferrer" className="url-link">
                                            - GitHub -
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {carouselOpen && (
                    <div className="modal carousel">
                        <div className="modal-content">
                            <button className="modal-close" onClick={closeCarousel}>
                                <FaTimes />
                            </button>
                            {maquettes.length > 1 && (
                                <button className="btn-left" aria-label="Image précédente" onClick={prevImage}>
                                    <FaChevronLeft />
                                </button>
                            )}
                            <img 
                                className="carousel-image" 
                                src={maquettes[currentImageIndex]} 
                                alt={`Maquette ${currentImageIndex + 1}`} 
                            />
                            {maquettes.length > 1 && (
                                <button className="btn-right" aria-label="Image suivante" onClick={nextImage}>
                                    <FaChevronRight />
                                </button>
                            )}
                            {maquettes.length > 1 && (
                                <p className="carousel-index">
                                    {currentImageIndex + 1} / {maquettes.length}
                                </p>
                            )}
                        </div>
                    </div>
                )}

                {!toggle && (
                    <div className="btn">
                        <a className="link" onClick={() => setToggle(true)}>
                            <span>{title}</span>
                        </a>
                        <img src={img} alt="" className="img" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Modal;
