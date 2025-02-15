import { Route, Routes, Navigate } from "react-router-dom"; 
import Accueil from "./header/header";
import About from './about/about'
import Projets from "./projets/projets";

function Router () {
  return (
    <Routes>
      <Route path="/accueil" element={<Accueil />} />
      <Route path="/about" element={<About />} />
      <Route path="/projets" element={<Projets />} />
    </Routes>
  );
};

export default Router;
