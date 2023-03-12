import "./App.css";
import { ContextProvider } from "./Context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Paginas/Publicas/Home";
//import Registrar from "./Paginas/Publicas/Registrarse";
import { SobreNostros } from "./Paginas/Publicas/sobreNostros";
import Productos from "./Paginas/Publicas/Productos";
import Perfil from "./Paginas/Privadas/Perfil";
import Compras from "./Paginas/Privadas/Compras";
import Productosquetegustan from "./Paginas/Privadas/likes-productos";
import Seguimientos from "./Paginas/Privadas/Seguimientos";
import Publicaciones from "./Paginas/Privadas/Publicaciones";
import Navar from "./layouts/Navbar";
//import Login from "./Paginas/Publicas/Inicio de seccion";
import RegistrationForm from "./layouts/RegistrationForm";
import LoginForm from "./layouts/loginForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <ContextProvider>
            <Navar />
            <Routes>
              --rutas-- -- Publicas--
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<SobreNostros />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/registrar" element={<RegistrationForm />} />
              <Route path="/login" element={<LoginForm />} />
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
  );
}

export default App;
