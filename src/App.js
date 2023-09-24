import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PadelApp from "./PadelApp"; // Importa tu componente principal aquí
import Rules from "./Rules"; // Importa tus componentes de Rules y About aquí
import About from "./About";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<PadelApp />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/about" element={<About />} />
      </Routes>
    
  );
}

export default App;
