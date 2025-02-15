import { useState, useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";

import "./modal.scss";

function Modal({ title, titleProjet, objectifs, infoProjet, maquettes, URLcode, img }) {
    const [toggle, setToggle] = useState(false);
    const [progress, setProgress] = useState(0); // Pourcentage de progression
    const modalContentRef = useRef(null); // Référence au contenu de la modale

    const closeModal = () => setToggle(false);

    // Gérer le scroll de la page arrière
    useEffect(() => {
        if (toggle) {
            document.body.style.overflow = "hidden"; // Désactiver le scroll
        } else {
            document.body.style.overflow = "auto"; // Réactiver le scroll
        }

        return () => {
            document.body.style.overflow = "auto"; // Réactiver le scroll à la fermeture de la modale
        };
    }, [toggle]);

    // Gestion du défilement de la modale
    const handleScroll = () => {
        const modal = modalContentRef.current;
        if (modal) {
            const scrollTop = modal.scrollTop; // Position actuelle de défilement
            const scrollHeight = modal.scrollHeight; // Hauteur totale du contenu
            const clientHeight = modal.clientHeight; // Hauteur visible de la modale
            const scrollableHeight = scrollHeight - clientHeight; // Hauteur scrollable

            const progress = (scrollTop / scrollableHeight) * 100; // Calculer la progression en %
            setProgress(progress);
        }
    };

    return (
        <div className="projets">
            <div>
                {toggle ? (
                    <div className="modal">
                        <div
                            className="modal-content"
                            ref={modalContentRef}
                            onScroll={handleScroll} // Ajouter l'événement de défilement
                        >
                            <div className="header">
                                <div className="row">
                                    <div className="title-projet">{titleProjet}</div>
                                    <button className="modal-close" aria-label="Fermer la modale" onClick={closeModal}>
                                        <FaTimes />
                                    </button>
                                </div>
                                <div className="progress-container">
                                    <div
                                        className="progress-bar"
                                        style={{ width: `${progress}%` }} // Mettre à jour la largeur
                                    ></div>
                                </div>
                            </div>

                            <div className="maquette-container">
                                {maquettes.length > 1 && (
                                    <p>Aperçu du projet</p>
                                )}
                                {maquettes && (
                                    <div className="maquette">
                                        {maquettes.map((maquette, index) => (
                                            <img key={index} src={maquette} alt={title} className="image" />
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="text-container">
                                <div className="info-projet">
                                    <p>Description du projet :</p>
                                    {infoProjet}
                                </div>

                                {objectifs && objectifs.length > 0 && (
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
                                        <a
                                            href={URLcode}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="url-link"
                                        >
                                            - GitHub -
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
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
