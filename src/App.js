import "./App.css";
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../src/Navbar';
import React, { useState } from "react";
import { ContextProvider } from "./Context/Context";
import { BrowserRouter } from "react-router-dom";
import Home from "./Paginas/Publicas/Home";
//import Registrar from "./Paginas/Publicas/Registrarse";
import { SobreNostros } from "./Paginas/Publicas/sobreNostros";
import Productos from "./Paginas/Publicas/Productos";
import Perfil from "./Paginas/Privadas/Perfil";
import Compras from "./Paginas/Privadas/Compras";
import Productosquetegustan from "./Paginas/Privadas/likes-productos";
import Seguimientos from "./Paginas/Privadas/Seguimientos";
import Publicaciones from "./Paginas/Privadas/Publicaciones";
//import Navbar from "./layouts/Navbar";
//import Login from "./Paginas/Publicas/Inicio de seccion";
 import RegisterPage from "./layouts/RegisterPage";
import LoginPage from "./layouts/LoginPage";
import dashboardpage from "./layouts/dashboardpage";
//import { RegistroForm } from "./layouts/LoginPage";
//import { Register } from "./layouts/RegisterPage";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
<>
    <div className="App">
      <BrowserRouter>
        <div>
          <ContextProvider>
            <Navbar />
            <Routes>
              --rutas-- -- Publicas--
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<SobreNostros />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/registrar" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage  />} />
              <Route path="/Perfil" element={<dashboardpage />} />
              -- rutas Privadas--
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/compras" element={<Compras />} />
              <Route path="/likes" element={<Productosquetegustan />} />
              <Route path="/seguimientos" element={<Seguimientos />} />
              <Route path="/publicar" element={<Publicaciones />} />
              {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
          </ContextProvider>
        </div>
      </BrowserRouter>
    </div>
    </>
  );

}

export default App;
