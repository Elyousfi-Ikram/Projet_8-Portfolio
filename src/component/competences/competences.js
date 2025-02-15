import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import "./competences.scss";

function Competences({ competences, frameworks, dataBases, outils }) {
  const [openStates, setOpenStates] = useState(
    competences && competences.length > 0 ? Array(competences.length).fill(false) : []
  );

  const toggleState = (index) => {
    setOpenStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div id="competences">
      <h1>
        Compétences acquises
        <hr />
      </h1>

      {/* Section Langages */}
      <div className="title">
        <h2>Langages</h2>
      </div>

      <div className="competences-section">
        {competences && competences.length > 0 ? (
          competences.map((item, index) => (
            <div key={index} className="competences-content">
              <div className="icons">
                {Array.isArray(item.icon) ? (
                  item.icon.map((iconPath, iconIndex) => (
                    <img key={iconIndex} src={iconPath} alt={item.langage} className="icon" />
                  ))
                ) : (
                  <img src={item.icon} alt={`${item.langage} icon`} className="icon" />
                )}
              </div>
              <h3>{item.langage}</h3>
            </div>
          ))
        ) : (
          <p>Aucune compétence disponible.</p>
        )}
      </div>

      {/* Section Frameworks */}
      <div className="title">
        <h2>Frameworks</h2>
      </div>

      <div className="competences-section">
        {frameworks && frameworks.length > 0 ? (
          frameworks.map((item, index) => (
            <div key={index} className="competences-content">
              <div className="icons">
                {Array.isArray(item.icon) ? (
                  item.icon.map((iconPath, iconIndex) => (
                    <img key={iconIndex} src={iconPath} alt={item.framework} className="icon" />
                  ))
                ) : (
                  <img src={item.icon} alt={`${item.framework} icon`} className="icon" />
                )}
              </div>
              <h3>{item.framework}</h3>
            </div>
          ))
        ) : (
          <p>Aucun framework disponible.</p>
        )}
      </div>

      {/* Section dataBase */}

      <div className="title">
        <h2>Base de Données</h2>
      </div>

      <div className="competences-section">
        {dataBases && dataBases.length > 0 ? (
          dataBases.map((item, index) => (
            <div key={index} className="competences-content">
              <div className="icons">
                {Array.isArray(item.icon) ? (
                  item.icon.map((iconPath, iconIndex) => (
                    <img key={iconIndex} src={iconPath} alt={item.dataBase} className="icon" />
                  ))
                ) : (
                  <img src={item.icon} alt={`${item.dataBase} icon`} className="icon" />
                )}
              </div>
              <h3>{item.dataBase}</h3>
            </div>
          ))
        ) : (
          <p>Aucun framework disponible.</p>
        )}
      </div>

      {/* Section outils */}
      <div className="title">
        <h2>Outils utilisés</h2>
      </div>

      <div className="competences-section">
        {outils && outils.length > 0 ? (
          outils.map((item, index) => (
            <div key={index} className="competences-content">
              <div className="icons">
                {Array.isArray(item.icon) ? (
                  item.icon.map((iconPath, iconIndex) => (
                    <img key={iconIndex} src={iconPath} alt={item.dataBase} className="icon" />
                  ))
                ) : (
                  <img src={item.icon} alt={`${item.outils} icon`} className="icon" />
                )}
              </div>
              <h3>{item.outils}</h3>
            </div>
          ))
        ) : (
          <p>Aucun outils disponible.</p>
        )}
      </div>

    </div>
  );
}

export default Competences;
