import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./banner.scss";

function Banner() {
    const [isOpen, setIsOpen] = useState(false); // Menu fermé par défaut

    const toggleState = () => {
        setIsOpen(prevState => !prevState);
    };

    // Fonction pour fermer le menu quand un lien est cliqué
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header >
            {/* Menu principal (Desktop) */}
            <nav className="banner">
                <div className="links">
                    <a href="#header">Accueil</a>
                </div>
                <div className="links">
                    <a href="#about-me">À propos de moi</a>
                    <a href="#projets">Mes projets</a>
                    <a href="#competences">Compétences acquises</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            <div className="collapse">
                <a href="#header">Accueil</a>

                {/* Bouton du menu mobile */}
                <button className="btn-menu" onClick={toggleState}>
                    <FaBars />
                </button>

                {/* Menu Mobile (affiché quand isOpen est true) */}
                {isOpen && (
                    <nav className="menu-content">
                        <a href="#about-me" onClick={closeMenu}>À propos de moi</a>
                        <a href="#projets" onClick={closeMenu}>Mes projets</a>
                        <a href="#competences" onClick={closeMenu}>Compétences acquises</a>
                        <a href="#contact" onClick={closeMenu}>Contact</a>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Banner;
