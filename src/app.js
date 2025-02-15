import React from "react";
import Header from './component/header/header';
import Banner from './component/banner/banner';
import About from './component/about/about';
import Projets from './component/projets/projets';
import Competences from './component/competences/competences';
import Contact from './component/contact/contact';
import Footer from './component/footer/footer';

import data from './datas/langages.json';
import dataFrameworks from './datas/frameworks.json';
import dataBases from './datas/dataBase.json';
import outils from './datas/outils.json';


function App() {
  return (
    <>
      <Banner />
      <Header />
      <About />
      <Projets />
      <Competences competences={data} frameworks={dataFrameworks} dataBases={dataBases} outils={outils} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
